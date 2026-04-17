import { useState } from "react";
import API from "../services/api";
import { Package, MoreVertical, XCircle, RotateCcw, Check, Loader2 } from "lucide-react";

const MOCK_ORDERS = [
  { id: 101, cargoName: "Industrial Pumps", weight: "1200kg", status: "Placed", origin: "Seattle", destination: "Portland", cost: "$450" },
  { id: 102, cargoName: "Medical Supplies", weight: "450kg", status: "On The Way", origin: "Boston", destination: "New York", cost: "$820" },
  { id: 103, cargoName: "Consumer Electronics", weight: "3000kg", status: "Delivered", origin: "San Jose", destination: "Austin", cost: "$1200" },
];

export default function Orders() {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [loadingAction, setLoadingAction] = useState(null);

  const handleAction = async (orderId, actionType) => {
    setLoadingAction(orderId);
    try {
      const endpoint = actionType === 'cancel' ? '/customer/cancelorder' : '/customer/returnorder';
      await API.patch(`${endpoint}?orderId=${orderId}`);
      
      setOrders(orders.map(o => {
        if (o.id === orderId) {
          return { ...o, status: actionType === 'cancel' ? 'Cancelled' : 'Returned' };
        }
        return o;
      }));
      
    } catch (err) {
      console.error(err);
      alert(`Failed to ${actionType} order!`);
    }
    setLoadingAction(null);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Placed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'On The Way': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Delivered': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Cancelled': return 'bg-red-100 text-red-700 border-red-200';
      case 'Returned': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const formatLocation = (loc) => {
    if (!loc) return "";
    return loc.split(" [#")[0];
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Order Management</h1>
          <p className="text-slate-500 mt-2">View active shipments, track status, and manage exceptions.</p>
        </div>
        <button className="bg-brand-50 text-brand-600 px-4 py-2 rounded-lg font-medium hover:bg-brand-100 transition border border-brand-200">
          Export Report
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Order ID</th>
                <th className="p-4 font-semibold">Cargo Info</th>
                <th className="p-4 font-semibold">Route</th>
                <th className="p-4 font-semibold">Cost</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4">
                    <span className="font-bold text-slate-800">#{o.id}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-brand-50 text-brand-500 rounded-lg">
                        <Package size={18} />
                      </div>
                      <div>
                        <p className="text-slate-800 font-semibold">{o.cargoName}</p>
                        <p className="text-xs text-slate-500">{o.weight}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">
                    {formatLocation(o.origin)} <span className="text-slate-400 mx-1">→</span> {formatLocation(o.destination)}
                  </td>
                  <td className="p-4">{o.cost}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(o.status)}`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {loadingAction === o.id ? (
                      <div className="inline-flex items-center text-brand-500">
                        <Loader2 className="animate-spin" size={18} />
                      </div>
                    ) : (
                      <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {o.status === "Placed" && (
                          <button 
                            onClick={() => handleAction(o.id, 'cancel')}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition" title="Cancel Order"
                          >
                            <XCircle size={18} />
                          </button>
                        )}
                        {o.status === "Delivered" && (
                          <button 
                            onClick={() => handleAction(o.id, 'return')}
                            className="p-1.5 text-purple-500 hover:bg-purple-50 rounded-lg transition" title="Return Order"
                          >
                            <RotateCcw size={18} />
                          </button>
                        )}
                        <button className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg transition" title="More Options">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              
              {orders.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}
