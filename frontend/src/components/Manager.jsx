import React, { useState, useEffect } from "react";
import { FaCopy, FaEdit, FaTrash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:3000";

  // Fetch all passwords from backend
  const getPasswords = async () => {
    try {
      const res = await fetch(`${API_URL}/`);
      if (!res.ok) throw new Error("Failed to fetch passwords");
      const data = await res.json();
      setPasswordArray(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPasswords();
  }, []);

  // Save or update password
  const savePassword = async () => {
    if (!form.site || !form.username || !form.password) return;

    try {
      if (editId) {
        // Delete old password
        await fetch(`${API_URL}/`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: editId }),
        });
        setEditId(null);
      }

      // Add new password
      const res = await fetch(`${API_URL}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to save password");

      setForm({ site: "", username: "", password: "" });
      getPasswords(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  const editPassword = (item) => {
    setForm({ site: item.site, username: item.username, password: item.password });
    setEditId(item._id);
  };

  const deletePassword = async (id) => {
    try {
      await fetch(`${API_URL}/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id }),
      });
      getPasswords(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-[125vh] w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="container mx-auto my-16 text-white bg-slate-800 max-w-5xl rounded-2xl shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center cursor-pointer bg-gradient-to-tl from-rose-400 via-blue-600 to-rose-600 bg-clip-text text-transparent drop-shadow-lg">
          {'<'}PassOP{'/>'}
        </h1>
        <p className="text-lg text-center mt-3 text-green-300">Your own password manager</p>

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
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password..."
                className="text-black bg-transparent outline-none w-full p-2"
              />
              <i className="text-2xl cursor-pointer text-gray-600 hover:text-black transition">
                <IoEye />
              </i>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={savePassword}
              className="px-6 py-3 mt-5 mb-7 font-bold text-black bg-green-500 rounded-full hover:bg-green-600 hover:scale-105 transition-transform"
            >
              {editId ? "Update Password" : "Add Password"}
            </button>
          </div>
        </div>

        {/* Password Table */}


        {/* Password Table */}
        {passwordArray.length === 0 ? (
          <div className="text-center text-gray-300 mt-8">No passwords to show</div>
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
              {passwordArray.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-green-200 hover:bg-green-200 transition"
                >
                  {/* Site */}
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

                  {/* Username */}
                  <td className="py-2 px-4 text-center">
                    {item.username}
                    <FaCopy
                      onClick={() => copyText(item.username)}
                      className="ml-2 text-green-600 cursor-pointer hover:text-green-800 transition inline-block"
                    />
                  </td>

                  {/* Password */}
                  <td className="py-2 px-4 text-center">
                    {item.password}
                    <FaCopy
                      onClick={() => copyText(item.password)}
                      className="ml-2 text-green-600 cursor-pointer hover:text-green-800 transition inline-block"
                    />
                  </td>

                  {/* Actions */}
                  <td className="py-2 px-4 text-center">
                    <div className="flex justify-center gap-4">
                      <FaEdit
                        onClick={() => editPassword(item)}
                        className="text-blue-600 cursor-pointer hover:text-blue-800 transition text-xl"
                      />
                      <FaTrash
                        onClick={() => deletePassword(item._id)}
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
