import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    medicalPhotos: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPhotos, setNewPhotos] = useState([]); // photos selected for upload

  // Fetch profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You are not logged in.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to fetch profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setNewPhotos(Array.from(e.target.files));
  };

  // Save updated profile
  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const formData = new FormData();
    formData.append("age", profile.age);
    formData.append("gender", profile.gender);
    newPhotos.forEach((photo) => formData.append("medicalPhotos", photo));

    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/profile",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProfile(res.data.user); // update local state with saved profile
      setNewPhotos([]);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to update profile.");
    }
  };

  if (loading)
    return <p className="text-center mt-10">Loading profile...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          {/* Profile Picture Placeholder */}
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-3xl mb-4">
            {profile.firstName?.[0] || "?"}
            {profile.lastName?.[0] || "?"}
          </div>

          <h1 className="text-2xl font-bold mb-2">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="text-gray-500 mb-6">{profile.email}</p>

          <div className="w-full space-y-3">
            <div>
              <span className="font-semibold text-gray-700">Age: </span>
              {isEditing ? (
                <input
                  type="number"
                  name="age"
                  value={profile.age || ""}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                profile.age || "N/A"
              )}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Gender: </span>
              {isEditing ? (
                <select
                  name="gender"
                  value={profile.gender || ""}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                profile.gender || "N/A"
              )}
            </div>

            <div>
              <span className="font-semibold text-gray-700">Medical Photos: </span>
              <div className="flex flex-col space-y-2 mt-1">
                {profile.medicalPhotos?.length > 0 ? (
                  profile.medicalPhotos.map((photo, index) => (
                    <a
                      key={index}
                      href={`http://localhost:5000/${photo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      Photo {index + 1}
                    </a>
                  ))
                ) : (
                  <span>N/A</span>
                )}
                {isEditing && (
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="border rounded px-2 py-1"
                  />
                )}
              </div>
            </div>
          </div>

          <button
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
