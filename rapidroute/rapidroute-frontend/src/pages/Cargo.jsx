import { useState } from "react";
import API from "../services/api";
import { Box, Plus, Loader2, CheckCircle } from "lucide-react";

export default function Cargo() {
  const [cargoList, setCargoList] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ cname: "", description: "", weight: "", count: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await API.post("/admin/savecargo", formData);
      setCargoList([...cargoList, { id: Date.now(), ...formData }]);
      setStatus("success");
      setFormData({ cname: "", description: "", weight: "", count: "" });
      setTimeout(() => { setStatus("idle"); setShowAddForm(false); }, 2000);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Cargo Inventory</h1>
          <p className="text-slate-500 mt-2">Log raw cargo entities independent of orders.</p>
        </div>
        <button onClick={() => setShowAddForm(!showAddForm)} className="bg-brand-500 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg hover:bg-brand-600 flex items-center">
          <Plus size={20} className="mr-2" /> Log Cargo
        </button>
      </div>

      {showAddForm && (
        <div className="glass-card p-6 mb-8 border border-brand-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center text-slate-800"><Box className="mr-2 text-brand-500" /> New Cargo Item</h2>
            {status === "success" && <span className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg flex items-center font-medium"><CheckCircle size={18} className="mr-2"/> Saved</span>}
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <label className="text-sm font-semibold text-slate-600">Cargo Name</label>
               <input required className="w-full bg-slate-50 border p-3 rounded-xl focus:border-brand-500 outline-none" name="cname" value={formData.cname} onChange={handleChange} />
            </div>
            <div className="space-y-2">
               <label className="text-sm font-semibold text-slate-600">Weight (KG)</label>
               <input required type="number" className="w-full bg-slate-50 border p-3 rounded-xl focus:border-brand-500 outline-none" name="weight" value={formData.weight} onChange={handleChange} />
            </div>
            <div className="space-y-2">
               <label className="text-sm font-semibold text-slate-600">Count</label>
               <input required type="number" className="w-full bg-slate-50 border p-3 rounded-xl focus:border-brand-500 outline-none" name="count" value={formData.count} onChange={handleChange} />
            </div>
            <div className="space-y-2">
               <label className="text-sm font-semibold text-slate-600">Description</label>
               <input required className="w-full bg-slate-50 border p-3 rounded-xl focus:border-brand-500 outline-none" name="description" value={formData.description} onChange={handleChange} />
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button disabled={status==="loading"} type="submit" className="bg-brand-50 text-brand-600 px-6 py-2 border border-brand-200 rounded-xl font-bold flex items-center hover:bg-brand-100">
                {status === "loading" ? <Loader2 className="animate-spin" /> : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}

      {cargoList.length > 0 && (
        <div className="glass-card overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
              <tr>
                <th className="p-4 border-b">ID</th>
                <th className="p-4 border-b">Name</th>
                <th className="p-4 border-b">Description</th>
                <th className="p-4 border-b">Weight</th>
                <th className="p-4 border-b">Count</th>
              </tr>
            </thead>
            <tbody>
              {cargoList.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50 border-b">
                  <td className="p-4 font-bold text-slate-800">#{c.id}</td>
                  <td className="p-4">{c.cname}</td>
                  <td className="p-4">{c.description}</td>
                  <td className="p-4">{c.weight} kg</td>
                  <td className="p-4">{c.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
