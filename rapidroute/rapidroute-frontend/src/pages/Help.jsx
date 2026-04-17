import React from 'react';
import { Search, BookOpen, MessageCircle, FileText, ExternalLink } from 'lucide-react';

export default function Help() {
  const faqs = [
    {
      question: "How do I add a new truck to the fleet?",
      answer: "Navigate to the Trucks page from the sidebar and click on the 'Add Truck' button. Fill out the necessary details including License Plate, Capacity, and Driver assignment."
    },
    {
      question: "Why is a route optimization failing?",
      answer: "Route optimization requires accurate pickup and delivery addresses. Ensure both locations are correctly formatted and verifiable via standard mapping services."
    },
    {
      question: "Can I manage driver schedules here?",
      answer: "Yes, you can view driver statuses in the Drivers dashboard, but schedule management is handled via the separate scheduling module located under 'Operations'."
    }
  ];

  return (
    <div className="w-full flex-1 max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header & Search */}
      <div className="text-center space-y-4 my-8">
        <h1 className="text-4xl font-bold text-brand-950 tracking-tight">How can we help?</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Search our knowledge base or browse categories below to find answers.</p>
        
        <div className="max-w-xl mx-auto relative mt-6">
          <input 
            type="text" 
            placeholder="Search for articles, guides..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none text-lg transition-all"
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={24} />
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 hover:-translate-y-1 transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
            <BookOpen size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Getting Started</h3>
          <p className="text-slate-500 text-sm mb-4">Learn the basics of RapidRoute and set up your workspace.</p>
          <span className="text-brand-600 font-semibold text-sm flex items-center">Read Guide <ExternalLink size={14} className="ml-1" /></span>
        </div>
        
        <div className="glass-card p-6 hover:-translate-y-1 transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <FileText size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Documentation</h3>
          <p className="text-slate-500 text-sm mb-4">Detailed API references and integration documentation.</p>
          <span className="text-brand-600 font-semibold text-sm flex items-center">View Docs <ExternalLink size={14} className="ml-1" /></span>
        </div>

        <div className="glass-card p-6 hover:-translate-y-1 transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
            <MessageCircle size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Support Ticket</h3>
          <p className="text-slate-500 text-sm mb-4">Need personalized help? Open a ticket with our support team.</p>
          <span className="text-brand-600 font-semibold text-sm flex items-center">Contact Support <ExternalLink size={14} className="ml-1" /></span>
        </div>
      </div>

      {/* FAQs */}
      <div className="glass-card p-8 mt-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
              <h4 className="text-lg font-bold text-slate-800 mb-2">{faq.question}</h4>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
