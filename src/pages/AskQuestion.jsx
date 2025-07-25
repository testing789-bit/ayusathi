import React, { useState } from 'react';

const AskQuestion = () => {
  const [form, setForm] = useState({
    title: '',
    details: '',
    doctor: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call or state update)
    alert('Your question has been submitted!');
    setForm({ title: '', details: '', doctor: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xl w-full">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Ask a Question</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-blue-900 mb-2">Question Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-lg"
              placeholder="e.g. How to manage diabetes?"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-blue-900 mb-2">Details</label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-lg"
              placeholder="Describe your question in detail..."
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-blue-900 mb-2">Ask a Specific Doctor (optional)</label>
            <input
              type="text"
              name="doctor"
              value={form.doctor}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 text-lg"
              placeholder="Doctor's name (optional)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg text-lg transition"
          >
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;