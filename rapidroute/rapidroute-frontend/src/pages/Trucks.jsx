import { useState } from "react";
import API from "../services/api";
import { Truck as TruckIcon, Plus, Loader2, CheckCircle, Search } from "lucide-react";

const MOCK_TRUCKS = [
  { id: 1, truckname: "Volvo FH16", truckno: 5001, capacity: 44000, status: "Active" },
  { id: 2, truckname: "Scania R500", truckno: 5002, capacity: 40000, status: "Maintenance" },
  { id: 3, truckname: "Mercedes Actros", truckno: 5003, capacity: 38000, status: "Active" },
];

export default function Trucks() {
  const [trucks, setTrucks] = useState(MOCK_TRUCKS);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [formData, setFormData] = useState({ truckname: "", truckno: "", capacity: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // API Call
      await API.post("/admin/savetruck", {
        ...formData,
        status: "Active",
        carrier: []
      });
      
      // Update local mock
      setTrucks([...trucks, { id: Date.now(), ...formData, status: "Active" }]);
      setStatus("success");
      setFormData({ truckname: "", truckno: "", capacity: "" });
      
      setTimeout(() => {
        setStatus("idle");
        setShowAddForm(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert("Failed to save truck");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Fleet Management</h1>
          <p className="text-slate-500 mt-2">Manage all registered trucks and fleet capacity.</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-brand-500 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-brand-600 transition shadow-lg shadow-brand-500/30 flex items-center"
        >
          <Plus size={20} className="mr-2" /> Add New Truck
        </button>
      </div>

      {showAddForm && (
        <div className="glass-card p-6 mb-8 border border-brand-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center">
              <TruckIcon className="mr-2 text-brand-500" /> Register New Vehicle
            </h2>
            {status === "success" && (
              <span className="flex items-center text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-lg">
                <CheckCircle size={18} className="mr-2" /> Saved Successfully
              </span>
            )}
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600">Model Name</label>
              <input required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:border-brand-500 outline-none" name="truckname" value={formData.truckname} onChange={handleChange} placeholder="e.g. Volvo FH16" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600">Truck Number</label>
              <input required type="number" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:border-brand-500 outline-none" name="truckno" value={formData.truckno} onChange={handleChange} placeholder="e.g. 5001" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600">Capacity (KG)</label>
              <input required type="number" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:border-brand-500 outline-none" name="capacity" value={formData.capacity} onChange={handleChange} placeholder="e.g. 40000" />
            </div>
            <div className="md:col-span-3 flex justify-end mt-2">
              <button disabled={status === "loading"} type="submit" className="bg-brand-50 text-brand-600 px-6 py-2.5 rounded-xl font-bold hover:bg-brand-100 transition border border-brand-200 min-w-[200px] flex justify-center items-center">
                {status === "loading" ? <Loader2 className="animate-spin" /> : "Save Truck"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input type="text" placeholder="Search trucks..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-brand-500 w-64" />
          </div>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">Truck ID</th>
              <th className="p-4 font-semibold">Model Name</th>
              <th className="p-4 font-semibold">Truck No</th>
              <th className="p-4 font-semibold">Capacity</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
            {trucks.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-slate-800">#{t.id}</td>
                <td className="p-4">{t.truckname}</td>
                <td className="p-4">{t.truckno}</td>
                <td className="p-4">{t.capacity.toLocaleString()} kg</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${t.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-amber-50 text-amber-600 border-amber-200'}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}