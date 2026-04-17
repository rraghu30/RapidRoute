import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";

ChartJS.register(
  CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler
);

export default function Dashboard() {

  const orderStats = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Orders",
        data: [12, 19, 15, 25, 22, 30, 28],
        backgroundColor: "rgba(249, 115, 22, 0.8)",
        borderRadius: 6,
      }
    ]
  };

  const revenueStats = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue (in $K)",
        data: [33, 53, 85, 41, 44, 65],
        borderColor: "#1e3a8a",
        backgroundColor: "rgba(30, 58, 138, 0.1)",
        fill: true,
        tension: 0.4
      }
    ]
  };

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto space-y-6">

      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-950 tracking-tight">Overview</h1>
          <p className="text-slate-500 mt-1">Here's what's happening today.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 border-l-4 border-l-brand-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Total Orders</p>
              <h2 className="text-3xl font-bold text-slate-800">1,248</h2>
            </div>
            <div className="p-3 bg-brand-50 text-brand-500 rounded-lg">
              <Package size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-semibold flex items-center">↑ 12%</span>
            <span className="text-slate-400 ml-2">since last month</span>
          </div>
        </div>

        <div className="glass-card p-6 border-l-4 border-l-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Active Fleet</p>
              <h2 className="text-3xl font-bold text-slate-800">84</h2>
            </div>
            <div className="p-3 bg-blue-50 text-blue-500 rounded-lg">
              <Truck size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-semibold flex items-center">↑ 4</span>
            <span className="text-slate-400 ml-2">new trucks online</span>
          </div>
        </div>

        <div className="glass-card p-6 border-l-4 border-l-emerald-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Delivered</p>
              <h2 className="text-3xl font-bold text-slate-800">1,092</h2>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-500 rounded-lg">
              <CheckCircle size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-slate-400">
            <span className="text-emerald-500 font-semibold">98.2%</span> on-time delivery
          </div>
        </div>

        <div className="glass-card p-6 border-l-4 border-l-amber-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">In Transit</p>
              <h2 className="text-3xl font-bold text-slate-800">156</h2>
            </div>
            <div className="p-3 bg-amber-50 text-amber-500 rounded-lg">
              <Clock size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-slate-400">
            Across 12 routes today
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Order Volume</h3>
          <div className="h-64">
            <Bar data={orderStats} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Revenue Growth</h3>
          <div className="h-64">
            <Line data={revenueStats} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

    </div>
  );
}