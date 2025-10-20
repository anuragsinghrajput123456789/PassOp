import React, { useState, useEffect } from "react";
import { FaCopy, FaEdit, FaTrash, FaSearch, FaRandom } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    setForm({ site: "", username: "", password: "" }); // ✅ auto-clear fields
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const copyText = (text) => navigator.clipboard.writeText(text);

  const editPassword = (index) => {
    setForm(passwordArray[index]);
    setEditId(index);
  };

  const deletePassword = (index) => {
    const updated = passwordArray.filter((_, i) => i !== index);
    setPasswordArray(updated);
    saveToLocalStorage(updated);
  };

  // Filtered list
  const filteredPasswords = passwordArray.filter(
    (item) =>
      item.site.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-[125vh] w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="container mx-auto my-16 text-white bg-slate-800 max-w-5xl rounded-2xl shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center cursor-pointer bg-gradient-to-tl from-rose-400 via-blue-600 to-rose-600 bg-clip-text text-transparent drop-shadow-lg">
          {'<'}PassOP{'/>'}
        </h1>
        <p className="text-lg text-center mt-3 text-green-300">
          Your own password manager (Local)
        </p>

        {/* Search Bar */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <div className="flex items-center bg-white rounded-full px-4 w-full sm:w-1/2">
            <FaSearch className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search by site or username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 bg-transparent text-black outline-none"
            />
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4 mt-8">
          <input
            type="text"
            name="site"
            placeholder="Enter your URL..."
            value={form.site}
            onChange={handleChange}
            className="rounded-full text-black bg-white p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <div className="flex gap-4 flex-col sm:flex-row">
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your username..."
              className="bg-white text-black rounded-full p-3 focus:ring-2 focus:ring-green-400 outline-none w-full sm:w-1/2"
            />
            <div className="flex items-center w-full sm:w-1/2 bg-white rounded-full px-3">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password..."
                className="text-black bg-transparent outline-none w-full p-2"
              />
              <i
                className="text-2xl cursor-pointer text-gray-600 hover:text-black transition"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </i>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-5 mb-7">
            <button
              onClick={savePassword}
              className="px-6 py-3 font-bold text-black bg-green-500 rounded-full hover:bg-green-600 hover:scale-105 transition-transform"
            >
              {editId !== null ? "Update Password" : "Add Password"}
            </button>

            <button
              onClick={generateStrongPassword}
              className="px-6 py-3 font-bold text-black bg-yellow-400 rounded-full hover:bg-yellow-500 hover:scale-105 transition-transform flex items-center gap-2"
            >
              <FaRandom /> Generate Strong Password
            </button>
          </div>
        </div>

        {/* Password Table */}
        {filteredPasswords.length === 0 ? (
          <div className="text-center text-gray-300 mt-8">
            No passwords to show
          </div>
        ) : (
          <table className="table-auto w-full rounded-md overflow-hidden mb-10 shadow-md">
            <thead className="bg-green-800 text-white text-md">
              <tr>
                <th className="py-3 px-4 text-center">Site</th>
                <th className="py-3 px-4 text-center">Username</th>
                <th className="py-3 px-4 text-center">Password</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-green-100 text-black font-semibold">
              {filteredPasswords.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-green-200 hover:bg-green-200 transition"
                >
                  <td className="py-2 px-4 text-center">
                    <a
                      href={item.site}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {item.site}
                    </a>
                    <FaCopy
                      onClick={() => copyText(item.site)}
                      className="ml-2 text-green-600 cursor-pointer hover:text-green-800 transition inline-block"
                    />
                  </td>

                  <td className="py-2 px-4 text-center">
                    {item.username}
                    <FaCopy
                      onClick={() => copyText(item.username)}
                      className="ml-2 text-green-600 cursor-pointer hover:text-green-800 transition inline-block"
                    />
                  </td>

                  <td className="py-2 px-4 text-center">
                    {item.password}
                    <FaCopy
                      onClick={() => copyText(item.password)}
                      className="ml-2 text-green-600 cursor-pointer hover:text-green-800 transition inline-block"
                    />
                  </td>

                  <td className="py-2 px-4 text-center">
                    <div className="flex justify-center gap-4">
                      <FaEdit
                        onClick={() => editPassword(index)}
                        className="text-blue-600 cursor-pointer hover:text-blue-800 transition text-xl"
                      />
                      <FaTrash
                        onClick={() => deletePassword(index)}
                        className="text-red-600 cursor-pointer hover:text-red-800 transition text-xl"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Manager;
