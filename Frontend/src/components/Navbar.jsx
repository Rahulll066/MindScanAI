import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

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
      {/* Logo + App Name */}
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
        <img
          src="/assets/logo.jpg"  // logo from public/assets
          alt="NeuroCare Logo"
          className="w-12 h-12 object-contain"
        />
        {t("appName")}
      </Link>

      <div className="flex gap-4 items-center">
        {user ? (
          <div className="relative">
            <Button variant="outline" onClick={() => setMenuOpen(!menuOpen)}>
              {user.firstName || t("profile.title")}
            </Button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("profile.title")}
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  {t("logout")}
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login">
              <Button variant="outline">{t("login.button")}</Button>
            </Link>
            <Link to="/signup">
              <Button>{t("signup.button")}</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
