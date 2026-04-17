import { useNavigate } from "react-router-dom";
import { Truck, Activity, Package, ShieldCheck, ArrowRight, BarChart3, Globe, DollarSign, Mail } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 px-8 py-6 max-w-7xl mx-auto flex justify-between items-center sticky top-0 bg-slate-50/80 backdrop-blur-md border-b border-transparent">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
            <Truck className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-brand-950 tracking-tight">RapidRoute</h1>
        </div>

        <div className="hidden md:flex space-x-8 text-slate-600 font-medium">
          <span onClick={() => scrollTo('features')} className="cursor-pointer hover:text-brand-500 transition">Features</span>
          <span onClick={() => scrollTo('solutions')} className="cursor-pointer hover:text-brand-500 transition">Solutions</span>
          <span onClick={() => scrollTo('pricing')} className="cursor-pointer hover:text-brand-500 transition">Pricing</span>
          <span onClick={() => scrollTo('contact')} className="cursor-pointer hover:text-brand-500 transition">Contact</span>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="text-slate-600 font-medium hover:text-brand-500 transition px-4 py-2"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-brand-950 text-white font-medium px-6 py-2.5 rounded-xl hover:bg-brand-900 transition shadow-lg shadow-brand-900/20"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COPY */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-brand-50 px-4 py-2 rounded-full border border-brand-100">
            <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
            <span className="text-sm font-semibold text-brand-600 tracking-wide">Next Gen Logistics</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Intelligent routing for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-amber-500">
              modern supply chains
            </span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Take total control of your logistics operations. RapidRoute brings real-time tracking, intelligent fleet management, and automated carrier assignments into one beautiful enterprise platform.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="group flex items-center justify-center space-x-2 bg-brand-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-600 transition shadow-xl shadow-brand-500/20"
            >
              <span>Go to Dashboard</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/place-order")}
              className="flex items-center justify-center bg-white text-slate-700 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 transition border border-slate-200 shadow-sm"
            >
              Place an Order
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative isolate pt-8 lg:pt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-transparent rounded-3xl -rotate-6 scale-105 pointer-events-none -z-10"></div>
          
          <div className="glass-card p-2 shadow-2xl border-white/50 relative object-cover bg-white">
            <img 
              src="/hero-fleet.png" 
              alt="Logistics Fleet" 
              className="rounded-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Floating glass stat - placed outside the overflow-creating boundaries so it doesn't clip */}
          <div className="absolute bottom-4 -left-4 sm:bottom-12 sm:-left-12 glass-card p-4 flex items-center space-x-4 shadow-xl z-20 hover:-translate-y-1 transition-transform duration-500">
            <div className="bg-green-100 p-3 rounded-xl text-green-600">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-500">Live Tracking</p>
              <p className="text-lg font-bold text-slate-800">142 Active Shipments</p>
            </div>
          </div>
        </div>

      </div>

      {/* FEATURES SECTION */}
      <div id="features" className="bg-white border-t border-slate-100 py-24 relative z-10 pt-24 mt-[-40px]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Built for operational excellence</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Everything you need to orchestrate complex shipments across the country with precision and reliability.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Shipment Mastery</h3>
              <p className="text-slate-600 leading-relaxed">
                Log, track, cancel, or return cargo orders effortlessly. Our comprehensive order tracking keeps your data clean.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-brand-500 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-brand-500/30">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fleet Commands</h3>
              <p className="text-slate-600 leading-relaxed">
                Add unassigned trucks, track capacities, assign drivers, and manage carrier details seamlessly.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Carrier Allocation</h3>
              <p className="text-slate-600 leading-relaxed">
                Match orders to appropriate carriers instantly with our automated capacity constraint validation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SOLUTIONS SECTION */}
      <div id="solutions" className="bg-slate-50 py-24 relative z-10 pt-24 mt-[-40px]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                <Globe size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Global reach, local execution</h2>
              <p className="text-lg text-slate-600">
                Our solutions scale from local courier networks to massive cross-country freight lines. Easily register terminals anywhere in the world and connect them dynamically.
              </p>
              <ul className="space-y-3 mt-4 text-slate-700">
                <li className="flex items-center"><CheckCircle className="text-brand-500 mr-2" size={20}/> Enterprise-grade security</li>
                <li className="flex items-center"><CheckCircle className="text-brand-500 mr-2" size={20}/> End-to-end data pipelines</li>
                <li className="flex items-center"><CheckCircle className="text-brand-500 mr-2" size={20}/> Multi-tenant ready</li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="glass-card p-6 bg-white shadow-xl">
                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                  <h3 className="font-bold text-slate-800">Live Infrastructure map</h3>
                  <BarChart3 className="text-brand-500" />
                </div>
                <div className="h-48 w-full bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                  <p>Interactive Map Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING SECTION */}
      <div id="pricing" className="bg-white py-24 relative z-10 pt-24 mt-[-40px] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto">Focus on logistics, not license renewals. We offer a flat rate infrastructure tailored to your operating volume.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            
            <div className="glass-card p-8 text-left border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">Essential</h3>
              <p className="text-slate-500 text-sm mt-2">Perfect for growing dispatchers.</p>
              <div className="text-4xl font-bold mt-6 mb-2">$499<span className="text-lg text-slate-400 font-medium">/mo</span></div>
              <ul className="mt-8 space-y-4 text-slate-600 pb-8">
                <li>Up to 1,000 shipments/mo</li>
                <li>5 Admin Users</li>
                <li>Basic Tracking</li>
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-medium hover:border-brand-500 hover:text-brand-500 transition">Select Plan</button>
            </div>

            <div className="glass-card p-8 text-left border-2 border-brand-500 shadow-xl relative scale-105 z-10">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-500 text-white px-3 py-1 text-sm font-bold rounded-full">Most Popular</div>
              <h3 className="text-xl font-bold text-slate-800">Professional</h3>
              <p className="text-slate-500 text-sm mt-2">For established supply chains.</p>
              <div className="text-4xl font-bold mt-6 mb-2">$999<span className="text-lg text-slate-400 font-medium">/mo</span></div>
              <ul className="mt-8 space-y-4 text-slate-600 pb-8">
                <li>Up to 10,000 shipments/mo</li>
                <li>Unlimited Admins</li>
                <li>Real-time Live Tracking</li>
                <li>Priority Support</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-brand-500 text-white font-medium hover:bg-brand-600 transition shadow-lg shadow-brand-500/20">Select Plan</button>
            </div>

            <div className="glass-card p-8 text-left border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">Enterprise</h3>
              <p className="text-slate-500 text-sm mt-2">For custom integrations and high capacity.</p>
              <div className="text-4xl font-bold mt-6 mb-2 text-brand-950">Custom</div>
              <ul className="mt-8 space-y-4 text-slate-600 pb-8">
                <li>Unlimited Volume</li>
                <li>Custom APIs</li>
                <li>Dedicated Account Manager</li>
                <li>SLA Assurance</li>
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-medium hover:border-brand-500 hover:text-brand-500 transition">Contact Us</button>
            </div>

          </div>
        </div>
      </div>

      {/* CONTACT SECTION & FOOTER */}
      <footer id="contact" className="bg-brand-950 text-slate-300 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight flex items-center">
               <Truck className="mr-2 text-brand-500" /> RapidRoute
            </h2>
            <p className="max-w-sm">Leading the digital transformation of modern logistics routing and tracking. Built for businesses that never stop moving.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('features')} className="hover:text-white transition">Features</button></li>
              <li><button onClick={() => scrollTo('solutions')} className="hover:text-white transition">Solutions</button></li>
              <li><button onClick={() => scrollTo('pricing')} className="hover:text-white transition">Pricing</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex"><Mail size={20} className="mr-3 text-brand-500"/> hello@rapidroute.com</li>
              <li className="flex"><Globe size={20} className="mr-3 text-brand-500"/> rapidroute.com/support</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          © 2026 Admin RapidRoute Logistics. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
// Placeholder for CheckCircle to exist since we imported directly from lucide-react initially but used it later
const CheckCircle = ({className, size}) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;