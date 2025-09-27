import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    avatar: "",
    notes: [],
    reminders: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError(t("profile.notLoggedIn"));
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        setError(err.response?.data?.message || t("profile.fetchError"));
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [t]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewAvatar(e.target.files[0]);
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const formData = new FormData();
    formData.append("age", profile.age || "");
    formData.append("gender", profile.gender || "");
    formData.append("notes", JSON.stringify(profile.notes));
    formData.append("reminders", JSON.stringify(profile.reminders));
    if (newAvatar) formData.append("avatar", newAvatar);

    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/profile",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProfile(res.data.user);
      setNewAvatar(null);
      setIsEditing(false);
    } catch (err) {
      setError(err.response?.data?.message || t("profile.updateError"));
    }
  };

  if (loading) return <p className="text-center mt-10">{t("profile.loading")}</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4 overflow-hidden">
            {profile.avatar && !newAvatar ? (
              <img
                src={`http://localhost:5000/${profile.avatar}`}
                alt={t("profile.avatarAlt")}
                className="w-full h-full object-cover"
              />
            ) : newAvatar ? (
              <img
                src={URL.createObjectURL(newAvatar)}
                alt={t("profile.newAvatarAlt")}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-3xl">
                {profile.firstName?.[0] || "?"}
                {profile.lastName?.[0] || "?"}
              </span>
            )}
          </div>

          <h1 className="text-2xl font-bold mb-2">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="text-gray-500 mb-6">{profile.email}</p>

          <div className="w-full space-y-3">
            <div>
              <span className="font-semibold text-gray-700">{t("profile.age")}: </span>
              {isEditing ? (
                <input
                  type="number"
                  name="age"
                  value={profile.age || ""}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                profile.age || t("profile.notAvailable")
              )}
            </div>

            <div>
              <span className="font-semibold text-gray-700">{t("profile.gender")}: </span>
              {isEditing ? (
                <select
                  name="gender"
                  value={profile.gender || ""}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                >
                  <option value="">{t("profile.select")}</option>
                  <option value="Male">{t("profile.male")}</option>
                  <option value="Female">{t("profile.female")}</option>
                  <option value="Other">{t("profile.other")}</option>
                </select>
              ) : (
                profile.gender || t("profile.notAvailable")
              )}
            </div>

            <div>
              <span className="font-semibold text-gray-700">{t("profile.notes")}: </span>
              {isEditing ? (
                <textarea
                  name="notes"
                  value={profile.notes.join("\n")}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      notes: e.target.value.split("\n"),
                    }))
                  }
                  className="border rounded px-2 py-1 w-full"
                />
              ) : profile.notes.length ? (
                <ul className="list-disc pl-5">
                  {profile.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              ) : (
                t("profile.notAvailable")
              )}
            </div>

            <div>
              <span className="font-semibold text-gray-700">{t("profile.reminders")}: </span>
              {isEditing ? (
                <textarea
                  name="reminders"
                  value={profile.reminders.join("\n")}
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      reminders: e.target.value.split("\n"),
                    }))
                  }
                  className="border rounded px-2 py-1 w-full"
                />
              ) : profile.reminders.length ? (
                <ul className="list-disc pl-5">
                  {profile.reminders.map((rem, i) => (
                    <li key={i}>{rem}</li>
                  ))}
                </ul>
              ) : (
                t("profile.notAvailable")
              )}
            </div>

            {isEditing && (
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
            )}
          </div>

          <button
            className="mt-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          >
            {isEditing ? t("profile.saveButton") : t("profile.editButton")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;



