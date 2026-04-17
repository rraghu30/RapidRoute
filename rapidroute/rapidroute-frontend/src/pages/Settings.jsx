import React, { useState, useEffect } from 'react';
import { Save, Bell, Shield, Smartphone, Globe, Monitor, Check, Eye, Moon, Sun } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('notifications');
  const [message, setMessage] = useState('');

  // Notifications State
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false
  });

  // Display State
  const [display, setDisplay] = useState(() => {
    const saved = localStorage.getItem('rapidroute_display');
    return saved ? JSON.parse(saved) : { theme: 'light', density: 'comfortable' };
  });

  // Region State
  const [region, setRegion] = useState({
    language: 'English (US)',
    timezone: 'Eastern Time (US & Canada)',
    format: 'MM/DD/YYYY'
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (display.theme === 'dark') {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }

    if (display.density === 'compact') {
      root.classList.add('density-compact');
    } else {
      root.classList.remove('density-compact');
    }
    
    localStorage.setItem('rapidroute_display', JSON.stringify(display));
  }, [display]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleSave = () => {
    showMessage('Settings saved successfully!');
  };

  const toggleNotification = (key) => setNotifications(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto space-y-6 pb-12 relative">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-950 tracking-tight">Account Settings</h1>
          <p className="text-slate-500 mt-1">Manage your system preferences and account configurations.</p>
        </div>
        <button 
          onClick={handleSave}
          className="flex items-center px-4 py-2 bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-500/30 hover:bg-brand-700 transition-all font-semibold"
        >
          <Save size={18} className="mr-2" /> Save Changes
        </button>
      </div>

      {message && (
        <div className="absolute top-0 right-0 bg-emerald-50 text-emerald-600 px-4 py-3 rounded-xl shadow-lg border border-emerald-100 flex items-center animate-in fade-in slide-in-from-top-2 z-50">
            <Check size={18} className="mr-2" />
            <span className="font-semibold">{message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Settings Navigation */}
        <div className="lg:col-span-1 space-y-2">
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center px-4 py-3 rounded-xl font-semibold transition-colors ${activeTab === 'notifications' ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'}`}
          >
            <Bell size={18} className="mr-3" /> Notifications
          </button>
          <button 
            onClick={() => setActiveTab('privacy')}
            className={`w-full flex items-center px-4 py-3 rounded-xl font-semibold transition-colors ${activeTab === 'privacy' ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'}`}
          >
            <Shield size={18} className="mr-3" /> Privacy & Security
          </button>
          <button 
            onClick={() => setActiveTab('display')}
            className={`w-full flex items-center px-4 py-3 rounded-xl font-semibold transition-colors ${activeTab === 'display' ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'}`}
          >
            <Monitor size={18} className="mr-3" /> Display Options
          </button>
          <button 
            onClick={() => setActiveTab('region')}
            className={`w-full flex items-center px-4 py-3 rounded-xl font-semibold transition-colors ${activeTab === 'region' ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600'}`}
          >
            <Globe size={18} className="mr-3" /> Language & Region
          </button>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* NOTIFICATIONS TAB */}
          {activeTab === 'notifications' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                    <div>
                      <p className="font-semibold text-slate-800">Email Notifications</p>
                      <p className="text-sm text-slate-500 mt-0.5">Receive daily summaries and critical alerts via email.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={notifications.email} onChange={() => toggleNotification('email')} />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                    <div>
                      <p className="font-semibold text-slate-800">Push Notifications</p>
                      <p className="text-sm text-slate-500 mt-0.5">Get real-time updates on active shipments.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={notifications.push} onChange={() => toggleNotification('push')} />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                    <div>
                      <p className="font-semibold text-slate-800">SMS Alerts</p>
                      <p className="text-sm text-slate-500 mt-0.5">Receive text messages for emergency operational issues.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={notifications.sms} onChange={() => toggleNotification('sms')} />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-4">Marketing & Updates</h3>
                <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                    <div>
                      <p className="font-semibold text-slate-800">Product Updates</p>
                      <p className="text-sm text-slate-500 mt-0.5">Receive news about the latest features and improvements.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={notifications.marketing} onChange={() => toggleNotification('marketing')} />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500"></div>
                    </label>
                  </div>
              </div>
            </div>
          )}

          {/* PRIVACY & SECURITY TAB */}
          {activeTab === 'privacy' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-4">Data Privacy</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50">
                    <div className="flex items-start">
                      <Eye className="text-brand-500 mt-1 mr-4" size={20} />
                      <div>
                        <p className="font-semibold text-slate-800">Analytics Data Sharing</p>
                        <p className="text-sm text-slate-500">Allow RapidRoute to collect anonymous usage data to improve the product.</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500"></div>
                    </label>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">Download My Data</button>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-4">Connected Devices</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl">
                    <div className="flex items-center">
                      <Monitor className="text-brand-500 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-slate-800">Windows PC</p>
                        <p className="text-xs text-slate-500">Chrome - Active Now</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full">Current Device</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl">
                    <div className="flex items-center">
                      <Smartphone className="text-slate-400 mr-4" size={24} />
                      <div>
                        <p className="font-semibold text-slate-800">iPhone 14 Pro</p>
                        <p className="text-xs text-slate-500">Safari - Last active 2 hours ago</p>
                      </div>
                    </div>
                    <button className="text-sm font-semibold text-rose-500 hover:text-rose-600">Revoke Access</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DISPLAY OPTIONS TAB */}
          {activeTab === 'display' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Appearance</h3>
                
                <div className="mb-6">
                  <p className="font-semibold text-slate-800 mb-3">Theme</p>
                  <div className="grid grid-cols-2 max-w-md gap-4">
                    <div 
                        onClick={() => setDisplay({...display, theme: 'light'})}
                        className={`border-2 rounded-xl p-4 cursor-pointer flex items-center justify-center transition-all ${display.theme === 'light' ? 'border-brand-500 bg-brand-50' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                        <Sun size={24} className={display.theme === 'light' ? 'text-brand-600 mr-3' : 'text-slate-400 mr-3'} />
                        <span className={`font-semibold ${display.theme === 'light' ? 'text-brand-700' : 'text-slate-600'}`}>Light Mode</span>
                    </div>
                    <div 
                        onClick={() => setDisplay({...display, theme: 'dark'})}
                        className={`border-2 rounded-xl p-4 cursor-pointer flex items-center justify-center transition-all ${display.theme === 'dark' ? 'border-brand-500 bg-brand-50' : 'border-slate-200 hover:border-slate-300'}`}
                    >
                        <Moon size={24} className={display.theme === 'dark' ? 'text-brand-600 mr-3' : 'text-slate-400 mr-3'} />
                        <span className={`font-semibold ${display.theme === 'dark' ? 'text-brand-700' : 'text-slate-600'}`}>Dark Mode</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-slate-800 mb-3">Display Density</p>
                  <div className="flex gap-4 max-w-md">
                     <button 
                        onClick={() => setDisplay({...display, density: 'compact'})}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium border ${display.density === 'compact' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                     >
                        Compact
                     </button>
                     <button 
                        onClick={() => setDisplay({...display, density: 'comfortable'})}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium border ${display.density === 'comfortable' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                     >
                        Comfortable
                     </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* LANGUAGE & REGION TAB */}
          {activeTab === 'region' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Localization</h3>
                
                <div className="space-y-5 max-w-lg">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Language</label>
                    <select 
                      value={region.language} 
                      onChange={e => setRegion({...region, language: e.target.value})}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none font-medium text-slate-700"
                    >
                      <option>English (US)</option>
                      <option>English (UK)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Timezone</label>
                    <select 
                      value={region.timezone} 
                      onChange={e => setRegion({...region, timezone: e.target.value})}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none font-medium text-slate-700"
                    >
                      <option>Eastern Time (US & Canada)</option>
                      <option>Central Time (US & Canada)</option>
                      <option>Mountain Time (US & Canada)</option>
                      <option>Pacific Time (US & Canada)</option>
                      <option>GMT</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Date Format</label>
                    <select 
                      value={region.format} 
                      onChange={e => setRegion({...region, format: e.target.value})}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none font-medium text-slate-700"
                    >
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
