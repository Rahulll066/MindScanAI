import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";
import { ChevronDown, Menu, X, PhoneCall } from "lucide-react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const fetchUser = async (token) => {
    if (!token) return setUser(null);
    try {
      const res = await axios.get("https://neurocareai.onrender.com/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch {
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
    <nav className="bg-white shadow-md relative z-50">
      <div className="w-full px-6 flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="flex-shrink-0 h-full flex items-center">
          <Link
            to="/"
            className="flex items-center text-2xl font-bold text-primary-600"
          >
            <img
              src="/assets/logo/logo.png"
              alt="NeuroCare Logo"
              className="h-16 w-auto object-contain -mr-1"
            />
            <span className="-ml-1">NeuroCare</span>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex flex-1 justify-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-primary-600 transition">
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setAboutOpen(!aboutOpen);
                setServicesOpen(false);
              }}
              className="flex items-center gap-1 hover:text-primary-600 transition"
            >
              About <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border z-50">
                <Link
                  to="/about/dementia"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setAboutOpen(false)}
                >
                  What is Dementia?
                </Link>
                <Link
                  to="/about/mission"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setAboutOpen(false)}
                >
                  Learn Our Mission
                </Link>
              </div>
            )}
          </div>

          {/* Medical Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setAboutOpen(false);
              }}
              className="flex items-center gap-1 hover:text-primary-600 transition"
            >
              Medical Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border z-50">
                <Link
                  to="/services/doctors"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setServicesOpen(false)}
                >
                  Doctors in your Location
                </Link>
                <Link
                  to="/services/hospitals"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setServicesOpen(false)}
                >
                  Hospitals in your Location
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right: Helpline + User Buttons */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-4">
          {/* Dementia Helpline */}
          <div className="flex items-center gap-2 bg-primary-50 p-2 rounded-lg">
            <PhoneCall className="text-primary-600 w-6 h-6" />
            <div className="text-left">
              <p className="text-xs text-gray-600">Dementia Helpline</p>
              <p className="text-sm font-semibold text-gray-800">6377 0700</p>
            </div>
          </div>

          {user ? (
            <div className="relative">
              <Button variant="outline" onClick={() => setMenuOpen(!menuOpen)}>
                {user.firstName || "Profile"}
              </Button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
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
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-200 space-y-2">
          <Link
            to="/"
            className="block px-2 py-2 hover:bg-gray-100 rounded"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* About Mobile */}
          <div>
            <button
              onClick={() => {
                setAboutOpen(!aboutOpen);
                setServicesOpen(false);
              }}
              className="flex justify-between w-full px-2 py-2 hover:bg-gray-100 rounded"
            >
              About <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  to="/about/dementia"
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  What is Dementia?
                </Link>
                <Link
                  to="/about/mission"
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  Learn Our Mission
                </Link>
              </div>
            )}
          </div>

          {/* Services Mobile */}
          <div>
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setAboutOpen(false);
              }}
              className="flex justify-between w-full px-2 py-2 hover:bg-gray-100 rounded"
            >
              Medical Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  to="/services/doctors"
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  Doctors in your Location
                </Link>
                <Link
                  to="/services/hospitals"
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  Hospitals in your Location
                </Link>
              </div>
            )}
          </div>

          {/* User buttons mobile */}
          {user ? (
            <div className="space-y-1">
              <Link
                to="/profile"
                className="block px-2 py-2 hover:bg-gray-100 rounded"
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-2 py-2 hover:bg-gray-100 text-red-500 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-2">
              <Link to="/login">
                <Button variant="outline" fullWidth>
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button fullWidth>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
