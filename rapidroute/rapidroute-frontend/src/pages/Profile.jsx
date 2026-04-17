import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Building, Shield, Edit, Key, X, Check } from 'lucide-react';

export default function Profile() {
  const [profileData, setProfileData] = useState({
    name: 'Admin User',
    role: 'Administrator',
    email: 'admin@rapidroute.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    office: 'HQ Office'
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  
  const [editForm, setEditForm] = useState({ ...profileData });
  const [passwordForm, setPasswordForm] = useState({ current: '', new: '', confirm: '' });
  const [message, setMessage] = useState('');

  const handleProfileSave = (e) => {
    e.preventDefault();
    setProfileData(editForm);
    setIsEditModalOpen(false);
    showMessage('Profile updated successfully!');
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    if (passwordForm.new !== passwordForm.confirm) {
        showMessage('New passwords do not match!', 'error');
        return;
    }
    // Mock save
    setIsPasswordModalOpen(false);
    setPasswordForm({ current: '', new: '', confirm: '' });
    showMessage('Password changed successfully!');
  };

  const showMessage = (msg, type = 'success') => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto space-y-6 relative">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-950 tracking-tight">My Profile</h1>
          <p className="text-slate-500 mt-1">Manage your personal information and preferences.</p>
        </div>
      </div>

      {message && (
        <div className="absolute top-0 right-0 bg-emerald-50 text-emerald-600 px-4 py-3 rounded-xl shadow-lg border border-emerald-100 flex items-center animate-in fade-in slide-in-from-top-2">
            <Check size={18} className="mr-2" />
            <span className="font-semibold">{message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-6 flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-brand-100 to-brand-50 opacity-50"></div>
            <div className="relative mt-8">
              <div className="w-32 h-32 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-4xl shadow-inner border-4 border-white">
                <User size={64} />
              </div>
              <button 
                onClick={() => { setEditForm({ ...profileData }); setIsEditModalOpen(true); }}
                className="absolute bottom-0 right-0 p-2 bg-brand-500 text-white rounded-full hover:bg-brand-600 transition-colors shadow-md transform hover:scale-110 active:scale-95"
              >
                <Edit size={16} />
              </button>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mt-4">{profileData.name}</h2>
            <p className="text-brand-600 font-semibold bg-brand-50 px-3 py-1 rounded-full text-xs mt-2 uppercase tracking-wide">{profileData.role}</p>
            
            <div className="w-full mt-8 space-y-4">
              <div className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-xl">
                <Mail className="mr-3 text-brand-400" size={18} />
                <span className="text-sm font-medium">{profileData.email}</span>
              </div>
              <div className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-xl">
                <Phone className="mr-3 text-brand-400" size={18} />
                <span className="text-sm font-medium">{profileData.phone}</span>
              </div>
              <div className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-xl">
                <MapPin className="mr-3 text-brand-400" size={18} />
                <span className="text-sm font-medium">{profileData.location}</span>
              </div>
              <div className="flex items-center text-slate-600 bg-slate-50 p-3 rounded-xl">
                <Building className="mr-3 text-brand-400" size={18} />
                <span className="text-sm font-medium">{profileData.office}</span>
              </div>
            </div>
            
            <button 
                onClick={() => { setEditForm({ ...profileData }); setIsEditModalOpen(true); }}
                className="w-full mt-6 py-3 bg-brand-50 text-brand-600 border border-brand-100 rounded-xl font-bold hover:bg-brand-500 hover:text-white transition-all shadow-sm hover:shadow-md"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 border-t-4 border-t-brand-500">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
              <Shield className="mr-2 text-brand-500" size={20} />
              Account Security
            </h3>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-100 gap-4">
                <div>
                  <p className="font-semibold text-slate-800">Password</p>
                  <p className="text-sm text-slate-500 mt-1">Ensure your account is using a long, random password to stay secure.</p>
                </div>
                <button 
                    onClick={() => setIsPasswordModalOpen(true)}
                    className="px-4 py-2 border-2 border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800 transition-colors flex items-center shrink-0"
                >
                  <Key size={16} className="mr-2" /> Change Password
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2 gap-4">
                <div>
                  <p className="font-semibold text-slate-800">Two-Factor Authentication</p>
                  <p className="text-sm text-slate-500 mt-1">Add an extra layer of security to your account.</p>
                </div>
                <button className="px-4 py-2 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-900 shadow-md transition-colors shrink-0">
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6">
             <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Activity</h3>
             <div className="space-y-6 relative before:absolute before:inset-0 before:ml-1 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent pl-4 md:pl-0">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-3 h-3 rounded-full bg-brand-500 ring-4 ring-brand-50 absolute -left-1.5 md:left-1/2 md:-translate-x-1/2"></div>
                  <div className="w-full md:w-5/12 bg-white p-4 rounded-xl border border-slate-100 shadow-sm ml-4 md:ml-0 md:mr-8 md:group-odd:ml-8 md:group-odd:mr-0">
                    <p className="text-sm font-bold text-slate-800">Logged in from new device</p>
                    <p className="text-xs text-slate-500 mt-1">Today at 10:45 AM via Chrome on Windows</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-3 h-3 rounded-full bg-slate-300 ring-4 ring-slate-50 absolute -left-1.5 md:left-1/2 md:-translate-x-1/2"></div>
                  <div className="w-full md:w-5/12 bg-white p-4 rounded-xl border border-slate-100 shadow-sm ml-4 md:ml-0 md:mr-8 md:group-odd:ml-8 md:group-odd:mr-0">
                    <p className="text-sm font-bold text-slate-800">Password changed</p>
                    <p className="text-xs text-slate-500 mt-1">Jan 15, 2026</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in zoom-in-95">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800">Edit Profile</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1 bg-white rounded-full shadow-sm">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleProfileSave} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input required type="text" value={editForm.name} onChange={e => setEditForm({...editForm, name: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Role</label>
                  <input required type="text" value={editForm.role} onChange={e => setEditForm({...editForm, role: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input required type="email" value={editForm.email} onChange={e => setEditForm({...editForm, email: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Phone</label>
                  <input required type="text" value={editForm.phone} onChange={e => setEditForm({...editForm, phone: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700">Location</label>
                  <input required type="text" value={editForm.location} onChange={e => setEditForm({...editForm, location: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Office</label>
                <input required type="text" value={editForm.office} onChange={e => setEditForm({...editForm, office: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none" />
              </div>
              
              <div className="pt-4 mt-6 border-t border-slate-100 flex justify-end gap-3">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 text-sm font-bold bg-brand-500 text-white rounded-xl hover:bg-brand-600 shadow-md transition-colors flex items-center">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800">Change Password</h2>
              <button onClick={() => setIsPasswordModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1 bg-white rounded-full shadow-sm">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handlePasswordSave} className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Current Password</label>
                <input required minLength="6" type="password" value={passwordForm.current} onChange={e => setPasswordForm({...passwordForm, current: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">New Password</label>
                <input required minLength="6" type="password" value={passwordForm.new} onChange={e => setPasswordForm({...passwordForm, new: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700">Confirm New Password</label>
                <input required minLength="6" type="password" value={passwordForm.confirm} onChange={e => setPasswordForm({...passwordForm, confirm: e.target.value})} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none" />
              </div>
              
              <div className="pt-4 mt-6 border-t border-slate-100 flex justify-end gap-3">
                <button type="button" onClick={() => setIsPasswordModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 text-sm font-bold bg-brand-500 text-white rounded-xl hover:bg-brand-600 shadow-md transition-colors flex items-center">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
