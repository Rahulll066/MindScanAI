import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.error("Profile fetch error:", err); // detailed error in console
        setError(
          err.response?.data?.message || // server message
          err.message ||                  // network or other error
          "Failed to fetch profile."
        );

        // Optional: fallback mock profile so layout still shows
        setProfile({
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading profile...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        {profile && (
          <div className="text-gray-500">
            Showing fallback profile for layout testing.
          </div>
        )}
      </div>
    );

  if (!profile) return null;

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
              <span className="font-semibold text-gray-700">First Name:</span>{" "}
              {profile.firstName}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Last Name:</span>{" "}
              {profile.lastName}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Email:</span>{" "}
              {profile.email}
            </div>
          </div>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
