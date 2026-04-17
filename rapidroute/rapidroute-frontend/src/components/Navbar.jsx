import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Bell, 
  Search, 
  UserCircle, 
  LogOut,
  Settings,
  User,
  HelpCircle,
  Truck,
  Package,
  AlertCircle
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Very simple breadcrumb parsing
  const path = location.pathname.split("/").filter(Boolean)[0];
  const title = path ? path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ") : "Overview";

  const handleLogout = () => {
    setShowProfileMenu(false);
    navigate("/");
  };

  const notifications = [
    { id: 1, title: "Order #1042 Dispatched", time: "10 min ago", icon: Package, color: "text-brand-500", bg: "bg-brand-50" },
    { id: 2, title: "Truck #5002 Maintenance Due", time: "2 hours ago", icon: AlertCircle, color: "text-amber-500", bg: "bg-amber-50" },
    { id: 3, title: "Route Optimization Completed", time: "5 hours ago", icon: Truck, color: "text-emerald-500", bg: "bg-emerald-50" }
  ];

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10 transition-all duration-300">
      
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-semibold text-slate-800 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative group hidden md:block">
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none w-64 transition-all"
          />
          <Search className="absolute left-3 top-3 text-slate-400 group-focus-within:text-brand-500" size={18} />
        </div>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => { setShowNotifications(!showNotifications); setShowProfileMenu(false); }}
            className={`relative p-2.5 rounded-full transition-colors ${showNotifications ? 'bg-brand-50 text-brand-600' : 'text-slate-400 hover:bg-slate-50 hover:text-brand-500'}`}
          >
            <Bell size={22} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden transform origin-top-right transition-all animate-in fade-in slide-in-from-top-2">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-semibold text-slate-800">Notifications</h3>
                <span className="text-xs font-semibold text-brand-600 cursor-pointer hover:text-brand-700">Mark all read</span>
              </div>
              <div className="max-h-[320px] overflow-y-auto">
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors flex gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notif.bg} ${notif.color}`}>
                      <notif.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{notif.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-slate-100 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                <p className="text-sm font-semibold text-brand-600">View all notifications</p>
              </div>
            </div>
          )}
        </div>

        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        {/* User Profile */}
        <div className="relative" ref={profileRef}>
          <div 
            onClick={() => { setShowProfileMenu(!showProfileMenu); setShowNotifications(false); }}
            className={`flex items-center space-x-3 cursor-pointer group p-1.5 pr-3 rounded-full transition-colors ${showProfileMenu ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
          >
            <div className="w-10 h-10 rounded-full bg-brand-50 border-2 border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-100 transition-colors shadow-sm">
              <UserCircle size={24} />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-bold text-slate-800 leading-tight">Admin User</p>
              <p className="text-xs text-slate-500 font-medium">Administrator</p>
            </div>
          </div>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden transform origin-top-right transition-all animate-in fade-in slide-in-from-top-2 p-2">
              <div className="p-3 mb-2 border-b border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                  <UserCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Admin User</p>
                  <p className="text-xs text-slate-500">admin@rapidroute.com</p>
                </div>
              </div>
              
              <button 
                onClick={() => { navigate('/profile'); setShowProfileMenu(false); }}
                className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors flex items-center"
              >
                <User size={16} className="mr-3" /> My Profile
              </button>
              <button 
                onClick={() => { navigate('/settings'); setShowProfileMenu(false); }}
                className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors flex items-center"
              >
                <Settings size={16} className="mr-3" /> Account Settings
              </button>
              <button 
                onClick={() => { navigate('/help'); setShowProfileMenu(false); }}
                className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors flex items-center"
              >
                <HelpCircle size={16} className="mr-3" /> Help
              </button>
              
              <div className="h-px bg-slate-100 my-2 mx-2"></div>
              
              <button 
                onClick={handleLogout}
                className="w-full text-left px-3 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors flex items-center"
              >
                <LogOut size={16} className="mr-3" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}