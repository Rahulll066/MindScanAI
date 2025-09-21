import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const fetchUser = async (token) => {
    if (!token) return setUser(null);
    try {
      const res = await axios.get("http://localhost:5000/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser(token);

    const handleStorageChange = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    window.dispatchEvent(new Event("storage")); // update Navbar immediately
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        MindScanAI
      </Link>
      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span className="font-medium">Welcome {user.firstName}!</span>
            <Button onClick={handleLogout} className="bg-red-500 text-white">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Signup</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

