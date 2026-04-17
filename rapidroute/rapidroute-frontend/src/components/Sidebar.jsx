import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, Truck, Users, MapPin, Menu, Activity, ShieldCheck, Box } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Place Order", path: "/place-order", icon: <Box size={20} /> },
    { name: "Orders", path: "/orders", icon: <Package size={20} /> },
    { name: "Trucks", path: "/trucks", icon: <Truck size={20} /> },
    { name: "Drivers", path: "/drivers", icon: <Users size={20} /> },
    { name: "Carriers", path: "/carriers", icon: <ShieldCheck size={20} /> },
    { name: "Cargo", path: "/cargo", icon: <Box size={20} /> },
    { name: "Addresses", path: "/addresses", icon: <MapPin size={20} /> },
    { name: "Shipments", path: "/shipments", icon: <Activity size={20} /> },
  ];

  return (
    <div className="w-64 bg-brand-950 text-white flex flex-col h-screen shadow-2xl z-20">
      <div className="p-6 flex items-center space-x-3 border-b border-white/10">
        <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg">
          <Truck className="text-white" size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-wider">RapidRoute</h1>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2 no-scrollbar">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className={`${isActive ? "text-white" : "text-slate-400 group-hover:text-brand-400"} transition-colors`}>
                {item.icon}
              </div>
              <span className={`font-medium ${isActive ? "text-white" : ""}`}>{item.name}</span>
            </button>
          );
        })}
      </div>
      
      <div className="p-6 border-t border-white/10">
        <div className="bg-white/5 rounded-xl p-4 text-sm text-slate-400 text-center">
          <p>© 2026 Admin</p>
          <p className="text-xs mt-1">v0.1.0-alpha</p>
        </div>
      </div>
    </div>
  );
}