import { useState } from "react";
import { Search, MapPin, Truck, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

export default function ShipmentDashboard() {
  const [searchTracking, setSearchTracking] = useState("");
  
  return (
    <div className="max-w-7xl mx-auto py-8">
      
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Shipment Tracking</h1>
          <p className="text-slate-500 mt-2">Monitor live location and status of en-route orders.</p>
        </div>
      </div>

      <div className="glass-card p-8 mb-8 border border-brand-200 bg-gradient-to-br from-brand-950 to-brand-900 text-white shadow-2xl shadow-brand-900/30">
        <h2 className="text-2xl font-bold mb-6">Track Your Freight</h2>
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Enter Tracking ID or Order No..." 
              value={searchTracking}
              onChange={(e) => setSearchTracking(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:bg-white/20 focus:border-white outline-none text-white placeholder:text-slate-300 transition-all text-lg"
            />
          </div>
          <button className="bg-brand-500 hover:bg-brand-400 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand-500/20">
            Track
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tracking Timeline Column */}
        <div className="lg:col-span-2 glass-card p-8">
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-800">Tracking Details: #TRK-8820B</h3>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-bold text-sm">In Transit</span>
          </div>

          <div className="relative border-l-2 border-brand-100 ml-4 space-y-10 py-2">
            
            <div className="relative pl-8">
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/40">
                <CheckCircle2 size={14} className="text-white" />
              </span>
              <h4 className="text-lg font-bold text-slate-800">Order Placed</h4>
              <p className="text-slate-500 mt-1">Order processed and verified by the system.</p>
              <p className="text-xs text-slate-400 mt-1">Oct 24, 08:30 AM</p>
            </div>

            <div className="relative pl-8">
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/40">
                <CheckCircle2 size={14} className="text-white" />
              </span>
              <h4 className="text-lg font-bold text-slate-800">Carrier Assigned</h4>
              <p className="text-slate-500 mt-1">Assigned to FastFreight Logistics (Driver: Mike R.)</p>
              <p className="text-xs text-slate-400 mt-1">Oct 24, 11:15 AM</p>
            </div>

            <div className="relative pl-8">
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center shadow">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              </span>
              <h4 className="text-lg font-bold text-brand-600">On The Way</h4>
              <p className="text-slate-500 mt-1">Cargo loaded and departed from Seattle terminal.</p>
              <p className="text-xs text-slate-400 mt-1">Oct 24, 02:45 PM</p>
            </div>

            <div className="relative pl-8 opacity-50">
              <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center">
              </span>
              <h4 className="text-lg font-bold text-slate-500">Delivered</h4>
              <p className="text-slate-500 mt-1">Pending arrival at Portland destination.</p>
            </div>

          </div>
        </div>

        {/* Info Column */}
        <div className="space-y-6">
          <div className="glass-card p-6 border-t-4 border-t-brand-500">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Shipment Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Truck className="text-brand-500 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-800">Volvo FH16 (TR-5001)</p>
                  <p className="text-sm text-slate-500">FastFreight Logistics</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-emerald-500 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-800">Destination</p>
                  <p className="text-sm text-slate-500">123 Industrial Way, Portland, OR</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-amber-500 mr-3 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-800">Est. Delivery</p>
                  <p className="text-sm text-slate-500">Oct 25, 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 bg-red-50 border border-red-100">
            <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-2 flex items-center">
              <AlertTriangle className="mr-2" size={16} /> Exceptions
            </h4>
            <p className="text-slate-700 text-sm">No exceptions reported for this route. Driver is on schedule.</p>
          </div>
        </div>

      </div>

    </div>
  );
}