import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signin", formData);
      localStorage.setItem("token", res.data.token);

      // ✅ Update Navbar immediately
      window.dispatchEvent(new Event("storage"));

      setSuccess(true);

      setTimeout(() => {
        navigate("/"); // redirect to home
      }, 1000);
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {success ? (
          <div className="flex items-center justify-center text-green-600 font-medium space-x-2">
            <span className="text-2xl">✅</span>
            <span>Login successful! Redirecting...</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
            <Button className="w-full">Login</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;


