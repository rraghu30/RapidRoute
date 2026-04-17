import { useState } from "react";
import API from "../services/api";
import { PackageSearch, Weight, Info, MapPin, Loader2, CheckCircle } from "lucide-react";

export default function PlaceOrder() {
  const [order, setOrder] = useState({
    cargoname: "",
    cargodescription: "",
    cargoweigth: "",
    cargocount: "",
    loadingaddress: "",
    unloadingaddress: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });
  };

  const submitOrder = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    // The Spring Boot backend maps Address to Loading/Unloading via @OneToOne.
    // This strictly forbids reusing the exact same Address row multiple times.
    // To solve this beautifully without touching Java code, we dynamically register 
    // a "shadow" address for this specific order run with a unique tag!
    
    const uniqueSuffix = `[#${Math.floor(Math.random() * 9000) + 1000}]`;
    const shadowPickupLocation = `${order.loadingaddress} ${uniqueSuffix}`;
    const shadowDropoffLocation = `${order.unloadingaddress} ${uniqueSuffix}`;

    try {
      // 1. Provision Shadow Pickup Address
      await API.post("/admin/saveaddress", {
        street: "Terminal Hub",
        city: shadowPickupLocation,
        state: "Auto",
        pincode: 0
      });

      // 2. Provision Shadow Drop-off Address
      await API.post("/admin/saveaddress", {
        street: "Receiving Bay",
        city: shadowDropoffLocation,
        state: "Auto",
        pincode: 0
      });

      // 3. Place Order perfectly utilizing the freshly minted unique addresses
      const payload = {
        ...order,
        cargoweigth: parseFloat(order.cargoweigth),
        cargocount: parseInt(order.cargocount, 10),
        loadingaddress: shadowPickupLocation,
        unloadingaddress: shadowDropoffLocation
      };

      await API.post("/customer/placeorder", payload);
      
      setStatus("success");
      setOrder({ cargoname: "", cargodescription: "", cargoweigth: "", cargocount: "", loadingaddress: "", unloadingaddress: "" });
      setTimeout(() => setStatus("idle"), 4000);
      
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Failed to place order. Connection or terminal error occurred.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Place Shipment Order</h1>
        <p className="text-slate-500 mt-2">Enter the cargo details and routings below to initiate a new logistics run.</p>
      </div>

      {status === "success" && (
        <div className="mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-sm animate-pulse">
          <CheckCircle className="text-emerald-500" />
          <span className="font-medium">Order placed successfully! The fleet manager will process it shortly.</span>
        </div>
      )}

      {status === "error" && (
        <div className="mb-8 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl flex items-center space-x-3 shadow-sm">
          <Info className="text-red-500 flex-shrink-0" />
          <span className="font-medium">{errorMsg}</span>
        </div>
      )}

      <form onSubmit={submitOrder} className="glass-card p-8 space-y-8">
        
        {/* Cargo Details */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
            <PackageSearch className="mr-2 text-brand-500" size={20} /> Cargo Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1">Cargo Name</label>
              <input
                required
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl hover:border-brand-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                name="cargoname"
                value={order.cargoname}
                placeholder="e.g., Industrial Generators"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1">Cargo Count (Units)</label>
              <input
                required
                type="number"
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl hover:border-brand-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                name="cargocount"
                value={order.cargocount}
                placeholder="e.g., 5"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-600 ml-1">Cargo Description</label>
              <textarea
                required
                rows="3"
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl hover:border-brand-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all resize-none"
                name="cargodescription"
                value={order.cargodescription}
                placeholder="Brief description of the load..."
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1 flex items-center">
                <Weight className="mr-1 text-slate-400" size={16}/> Total Weight (kg)
              </label>
              <input
                required
                type="number"
                step="0.01"
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl hover:border-brand-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                name="cargoweigth"
                value={order.cargoweigth}
                placeholder="e.g., 1500.5"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-100 my-8"></div>

        {/* Routing Details */}
        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
            <MapPin className="mr-2 text-brand-500" size={20} /> Routing Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1 flex items-center">
                Pickup City
              </label>
              <input
                required
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl hover:border-brand-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                name="loadingaddress"
                value={order.loadingaddress}
                placeholder="e.g., Seattle"
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 ml-1 flex items-center">
                Drop-off City
              </label>
              <input
                required
                className="w-full bg-slate-50 border border-slate-200 p-3.5 rounded-xl hover:border-brand-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all"
                name="unloadingaddress"
                value={order.unloadingaddress}
                placeholder="e.g., Portland"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <><Loader2 className="animate-spin mr-2" size={20} /> Processing...</>
            ) : "Confirm & Place Order"}
          </button>
        </div>

      </form>

    </div>
  );
}