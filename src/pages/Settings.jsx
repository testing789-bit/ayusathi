import React, { useState } from 'react';

const Settings = () => {
  const [form, setForm] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    notifications: true,
    password: '',
    newPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings update (API call or state update)
    alert('Settings updated!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-blue-900 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-lg"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-blue-900 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-lg"
            />
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600"
            />
            <label className="text-lg text-blue-900">Enable Email Notifications</label>
          </div>
          <div>
            <label className="block text-lg font-medium text-blue-900 mb-2">Change Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-lg mb-2"
              placeholder="Current Password"
            />
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-lg"
              placeholder="New Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg text-lg transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;