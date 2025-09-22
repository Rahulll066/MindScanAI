import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [menuOpen, setMenuOpen] = useState(false);

  const fetchUser = async (token) => {
    if (!token) return setUser(null);
    try {
      const res = await axios.get("http://localhost:5000/api/user/profile", {
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
    window.dispatchEvent(new Event("storage"));
    setMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white relative">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        MindScanAI
      </Link>
      <div className="flex gap-4 items-center">
        {user ? (
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {user.firstName || "Profile"}
            </Button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
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
