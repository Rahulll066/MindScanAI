// src/pages/Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", formData);

      // Store token if backend returns it
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        window.dispatchEvent(new Event("storage")); // update Navbar
      }

      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error(error);
      alert(t("signup.error")); // use translation
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6">{t("signup.title")}</h2>

        {success ? (
          <div className="flex items-center justify-center text-green-600 font-medium space-x-2">
            <span className="text-2xl">✅</span>
            <span>{t("signup.success")}</span>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder={t("signup.firstName")}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder={t("signup.lastName")}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t("signup.email")}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="password"
                name="password"
                placeholder={t("signup.password")}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
              <Button className="w-full">{t("signup.button")}</Button>
            </form>

            {/* Link for existing users */}
            <p className="mt-4 text-center text-sm text-gray-600">
              {t("signup.already")}{" "}
              <span
                className="text-blue-600 font-semibold cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                {t("signup.signIn")}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;




