import { useState } from "react";
import API from "../services/api";
import { Users, Plus, Loader2, CheckCircle, Search } from "lucide-react";

const MOCK_DRIVERS = [
  { id: 1, name: "Michael Robertson", contactno: 9876543210, status: "On Duty" },
  { id: 2, name: "Sarah Jenkins", contactno: 8765432109, status: "Off Duty" },
  { id: 3, name: "David Chen", contactno: 7654321098, status: "On Duty" },
];

export default function Drivers() {
  const [drivers, setDrivers] = useState(MOCK_DRIVERS);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [formData, setFormData] = useState({ name: "", contactno: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await API.post("/admin/savedriver", {
        name: formData.name,
        contactno: parseInt(formData.contactno)
      });
      
      setDrivers([...drivers, { id: Date.now(), ...formData, status: "Available" }]);
      setStatus("success");
      setFormData({ name: "", contactno: "" });
      
      setTimeout(() => {
        setStatus("idle");
        setShowAddForm(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert("Failed to save driver");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Driver Roster</h1>
          <p className="text-slate-500 mt-2">Manage personnel, contact info, and availability.</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-brand-500 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-brand-600 transition shadow-lg shadow-brand-500/30 flex items-center"
        >
          <Plus size={20} className="mr-2" /> Register Personnel
        </button>
      </div>

      {showAddForm && (
        <div className="glass-card p-6 mb-8 border border-brand-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center">
              <Users className="mr-2 text-brand-500" /> New Driver Form
            </h2>
            {status === "success" && (
              <span className="flex items-center text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-lg">
                <CheckCircle size={18} className="mr-2" /> Registered Successfully
              </span>
            )}
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600">Full Name</label>
              <input required className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:border-brand-500 outline-none" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600">Contact Number</label>
              <input required type="number" className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl focus:border-brand-500 outline-none" name="contactno" value={formData.contactno} onChange={handleChange} placeholder="e.g. 9876543210" />
            </div>
            <div className="md:col-span-2 flex justify-end mt-2">
              <button disabled={status === "loading"} type="submit" className="bg-brand-50 text-brand-600 px-6 py-2.5 rounded-xl font-bold hover:bg-brand-100 transition border border-brand-200 min-w-[200px] flex justify-center items-center">
                {status === "loading" ? <Loader2 className="animate-spin" /> : "Save Profile"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input type="text" placeholder="Search drivers..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg outline-none focus:border-brand-500 w-64" />
          </div>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">Driver ID</th>
              <th className="p-4 font-semibold">Full Name</th>
              <th className="p-4 font-semibold">Contact No</th>
              <th className="p-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
            {drivers.map((d) => (
              <tr key={d.id} className="hover:bg-slate-50/50">
                <td className="p-4 font-bold text-slate-800">#{d.id}</td>
                <td className="p-4 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {d.name.charAt(0)}
                  </div>
                  <span>{d.name}</span>
                </td>
                <td className="p-4">{d.contactno}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${d.status === 'On Duty' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                    {d.status}
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
