import { useState } from "react";
import API from "../services/api";
import { ShieldCheck, Plus, Loader2, CheckCircle, Search } from "lucide-react";

const MOCK_CARRIERS = [
  { id: 1, cname: "FastFreight Logistics", mail: "contact@fastfreight.com", contactno: 555112233 },
  { id: 2, cname: "Global Transports", mail: "info@globaltrans.com", contactno: 555998877 },
];

export default function Carriers() {
  const [carriers, setCarriers] = useState(MOCK_CARRIERS);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [formData, setFormData] = useState({ cname: "", mail: "", contactno: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await API.post("/admin/savecarrier", formData);
      setCarriers([...carriers, { id: Date.now(), ...formData }]);
      setStatus("success");
      setFormData({ cname: "", mail: "", contactno: "" });
      setTimeout(() => {
        setStatus("idle");
        setShowAddForm(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert("Failed to save carrier");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Carrier Network</h1>
          <p className="text-slate-500 mt-2">Manage partner carriers and logistics companies.</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-brand-500 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-brand-600 transition shadow-lg shadow-brand-500/30 flex items-center"
        >
          <Plus size={20} className="mr-2" /> Add Carrier
        </button>
      </div>

      {showAddForm && (
        <div className="glass-card p-6 mb-8 border border-brand-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center">
              <ShieldCheck className="mr-2 text-brand-500" /> New Partner Carrier
            </h2>
            {status === "success" && (
              <span className="flex items-center text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-lg">
                <CheckCircle size={18} className="mr-2" /> Saved Successfully
              </span>
            )}
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600">Carrier Name</label>
              <input required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:border-brand-500 outline-none" name="cname" value={formData.cname} onChange={handleChange} placeholder="e.g. Acme Corpos" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600">Email Address</label>
              <input required type="email" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:border-brand-500 outline-none" name="mail" value={formData.mail} onChange={handleChange} placeholder="e.g. contact@acme.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600">Contact Number</label>
              <input required type="number" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:border-brand-500 outline-none" name="contactno" value={formData.contactno} onChange={handleChange} placeholder="e.g. 555123456" />
            </div>
            <div className="md:col-span-3 flex justify-end mt-2">
              <button disabled={status === "loading"} type="submit" className="bg-brand-50 text-brand-600 px-6 py-2.5 rounded-xl font-bold hover:bg-brand-100 transition border border-brand-200 min-w-[200px] flex justify-center items-center">
                {status === "loading" ? <Loader2 className="animate-spin" /> : "Save Carrier"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="glass-card overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Carrier Name</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Contact No</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
            {carriers.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-slate-800">#{c.id}</td>
                <td className="p-4">{c.cname}</td>
                <td className="p-4">{c.mail}</td>
                <td className="p-4">{c.contactno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
