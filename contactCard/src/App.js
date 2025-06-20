import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;
    setContacts([...contacts, form]);
    setForm({ name: '', phone: '', email: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center p-4 relative">
      {/* Main App Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mt-8 mb-2 drop-shadow-lg">Contact Card App</h1>
      {/* Header */}
      <header className="w-full max-w-2xl flex justify-between items-center py-8">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight drop-shadow">Contact List</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 hover:from-pink-500 hover:to-purple-600 transition-all font-semibold text-lg flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          Add Contact
        </button>
      </header>

      {/* Contact List */}
      <div className="w-full max-w-2xl mt-2">
        {contacts.length === 0 ? (
          <div className="bg-white/80 rounded-xl shadow-md p-8 flex flex-col items-center animate-fade-in">
            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.5A2.25 2.25 0 016.75 16.5h10.5a2.25 2.25 0 012.25 2.25v1.5" /></svg>
            <p className="text-gray-500 text-lg">No contacts added yet.</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {contacts.map((contact, idx) => (
              <li key={idx} className="bg-white/90 rounded-xl shadow-lg p-6 flex flex-col gap-1 border-l-4 border-blue-400 hover:border-pink-400 transition-all">
                <span className="font-bold text-xl text-gray-800">{contact.name}</span>
                <span className="text-blue-600 font-mono">{contact.phone}</span>
                <span className="text-gray-500">{contact.email}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal Overlay for Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-slide-up">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Add New Contact</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-lg font-semibold text-lg shadow hover:scale-105 transition-all"
              >
                Add Contact
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.5s; }
        .animate-slide-up { animation: slideUp 0.4s cubic-bezier(.4,2,.6,1) both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}

export default App; 