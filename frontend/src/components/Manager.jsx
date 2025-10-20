import React, { useState, useEffect } from "react";
import {
  FaCopy,
  FaEdit,
  FaTrash,
  FaSearch,
  FaRandom,
  FaGlobe,
  FaUser,
  FaKey,
  FaPlus,
  FaSave
} from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { RiShieldKeyholeLine } from "react-icons/ri";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedField, setCopiedField] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("passwords");
    if (saved) setPasswordArray(JSON.parse(saved));
  }, []);

  // Save to localStorage
  const saveToLocalStorage = (data) => {
    localStorage.setItem("passwords", JSON.stringify(data));
  };

  // Generate strong password
  const generateStrongPassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setForm({ ...form, password });
  };

  // Save or update password
  const savePassword = () => {
    if (!form.site || !form.username || !form.password)
      return alert("All fields required!");

    let updatedList;

    if (editId !== null) {
      updatedList = passwordArray.map((item, index) =>
        index === editId ? form : item
      );
      setEditId(null);
    } else {
      updatedList = [...passwordArray, form];
    }

    setPasswordArray(updatedList);
    saveToLocalStorage(updatedList);
    setForm({ site: "", username: "", password: "" });
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const copyText = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const editPassword = (index) => {
    setForm(passwordArray[index]);
    setEditId(index);
    // Smooth scroll to form
    document.getElementById('password-form').scrollIntoView({ behavior: 'smooth' });
  };

  const deletePassword = (index) => {
    if (window.confirm("Are you sure you want to delete this password?")) {
      const updated = passwordArray.filter((_, i) => i !== index);
      setPasswordArray(updated);
      saveToLocalStorage(updated);
    }
  };

  // Filtered list
  const filteredPasswords = passwordArray.filter(
    (item) =>
      item.site.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Enhanced Background with gradient animation */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"></div>

      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto my-8 text-white max-w-6xl rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg bg-slate-800/70 border border-slate-700/50">

        {/* Header Section */}
        <div className="relative p-8 bg-gradient-to-r from-slate-900/80 to-purple-900/80 border-b border-slate-700/50">
          <div className="flex items-center justify-center gap-3 mb-2">
            <RiShieldKeyholeLine className="text-4xl text-cyan-400 animate-pulse" />
            <h1 className="text-5xl font-bold text-center cursor-pointer bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              {'<'}PassOP{'/>'}
            </h1>
          </div>
          <p className="text-lg text-center text-cyan-200/80 font-light">
            Your secure local password manager
          </p>

          {/* Search Bar */}
          <div className="flex items-center justify-center mt-8">
            <div className="relative flex items-center bg-slate-700/50 rounded-2xl px-6 py-3 w-full max-w-2xl border border-slate-600/50 backdrop-blur-sm transition-all duration-300 focus-within:border-cyan-400/50 focus-within:shadow-lg focus-within:shadow-cyan-500/20">
              <FaSearch className="text-cyan-400 mr-3 text-lg" />
              <input
                type="text"
                placeholder="Search by site or username..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-lg"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="ml-2 text-slate-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div id="password-form" className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {/* Site Input */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center bg-slate-700/80 rounded-xl px-4 py-3 border border-slate-600/50 backdrop-blur-sm">
                  <FaGlobe className="text-cyan-400 mr-3 text-lg" />
                  <input
                    type="text"
                    name="site"
                    placeholder="Enter website URL..."
                    value={form.site}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-lg"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Username Input */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative flex items-center bg-slate-700/80 rounded-xl px-4 py-3 border border-slate-600/50 backdrop-blur-sm">
                    <FaUser className="text-green-400 mr-3 text-lg" />
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      placeholder="Enter username..."
                      className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-lg"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative flex items-center bg-slate-700/80 rounded-xl px-4 py-3 border border-slate-600/50 backdrop-blur-sm">
                    <FaKey className="text-yellow-400 mr-3 text-lg" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter password..."
                      className="w-full bg-transparent text-white placeholder-slate-400 outline-none text-lg"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="ml-2 p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-600/50"
                    >
                      {showPassword ? <IoEyeOff className="text-xl" /> : <IoEye className="text-xl" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <button
                  onClick={savePassword}
                  className="group relative px-8 py-4 font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    {editId !== null ? <FaSave /> : <FaPlus />}
                    {editId !== null ? "Update Password" : "Add Password"}
                  </span>
                </button>

                <button
                  onClick={generateStrongPassword}
                  className="group relative px-8 py-4 font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    <FaRandom />
                    Generate Password
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Password List Section */}
        <div className="p-8 pt-0">
          <div className="max-w-6xl mx-auto">
            {filteredPasswords.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4 text-slate-500/50">🔒</div>
                <h3 className="text-2xl font-semibold text-slate-300 mb-2">
                  {passwordArray.length === 0 ? "No passwords saved yet" : "No matching passwords found"}
                </h3>
                <p className="text-slate-400">
                  {passwordArray.length === 0
                    ? "Add your first password to get started!"
                    : "Try adjusting your search terms"}
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredPasswords.map((item, index) => (
                  <div
                    key={index}
                    className="group relative bg-slate-700/50 rounded-2xl p-6 border border-slate-600/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div className="grid md:grid-cols-12 gap-4 items-center">
                      {/* Site */}
                      <div className="md:col-span-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                            <FaGlobe className="text-white text-sm" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <a
                              href={item.site.startsWith('http') ? item.site : `https://${item.site}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg hover:underline truncate block"
                            >
                              {item.site}
                            </a>
                            <p className="text-slate-400 text-sm">Website</p>
                          </div>
                          <button
                            onClick={() => copyText(item.site, `site-${index}`)}
                            className="ml-2 p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-600/50 relative"
                          >
                            <FaCopy />
                            {copiedField === `site-${index}` && (
                              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                Copied!
                              </span>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Username */}
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium truncate">{item.username}</p>
                            <p className="text-slate-400 text-sm">Username</p>
                          </div>
                          <button
                            onClick={() => copyText(item.username, `username-${index}`)}
                            className="ml-2 p-2 text-slate-400 hover:text-green-400 transition-colors rounded-lg hover:bg-slate-600/50 relative"
                          >
                            <FaCopy />
                            {copiedField === `username-${index}` && (
                              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                Copied!
                              </span>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Password */}
                      <div className="md:col-span-3">
                        <div className="flex items-center">
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-mono truncate">
                              {showPassword ? item.password : '•'.repeat(12)}
                            </p>
                            <p className="text-slate-400 text-sm">Password</p>
                          </div>
                          <button
                            onClick={() => copyText(item.password, `password-${index}`)}
                            className="ml-2 p-2 text-slate-400 hover:text-yellow-400 transition-colors rounded-lg hover:bg-slate-600/50 relative"
                          >
                            <FaCopy />
                            {copiedField === `password-${index}` && (
                              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                Copied!
                              </span>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="md:col-span-2">
                        <div className="flex justify-end gap-3">
                          <button
                            onClick={() => editPassword(index)}
                            className="p-3 text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:bg-cyan-400/10 rounded-xl"
                            title="Edit"
                          >
                            <FaEdit className="text-xl" />
                          </button>
                          <button
                            onClick={() => deletePassword(index)}
                            className="p-3 text-red-400 hover:text-red-300 transition-all duration-300 hover:scale-110 hover:bg-red-400/10 rounded-xl"
                            title="Delete"
                          >
                            <FaTrash className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Manager;