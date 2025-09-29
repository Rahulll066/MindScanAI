import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    notes: [],
    reminders: [],
    avatar: "",
  });
  const [newAvatar, setNewAvatar] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("https://neurocareai.onrender.com/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch profile.");
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value.split("\n"),
    }));
  };

  const handleFileChange = (e) => {
    setNewAvatar(e.target.files[0]);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const formData = new FormData();
    formData.append("firstName", profile.firstName || "");
    formData.append("lastName", profile.lastName || "");
    formData.append("age", profile.age || "");
    formData.append("gender", profile.gender || "");
    formData.append("notes", JSON.stringify(profile.notes));
    formData.append("reminders", JSON.stringify(profile.reminders));
    if (newAvatar) formData.append("avatar", newAvatar);

    try {
      await axios.put("https://neurocareai.onrender.com/api/user/profile", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/profile"); // back to profile
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile.");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Profile</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="space-y-4">
          <div>
            <label className="font-semibold block mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              readOnly
              className="border rounded px-2 py-1 w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={profile.age || ""}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Gender</label>
            <select
              name="gender"
              value={profile.gender || ""}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="font-semibold block mb-1">Notes</label>
            <textarea
              name="notes"
              value={profile.notes.join("\n")}
              onChange={handleTextareaChange}
              className="border rounded px-2 py-1 w-full"
              rows={4}
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Reminders</label>
            <textarea
              name="reminders"
              value={profile.reminders.join("\n")}
              onChange={handleTextareaChange}
              className="border rounded px-2 py-1 w-full"
              rows={4}
            />
          </div>

          <div>
            <label className="font-semibold block mb-1">Avatar</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border rounded px-2 py-1 w-full"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/profile")}
            className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

