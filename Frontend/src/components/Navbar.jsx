import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const fetchUser = async (token) => {
    if (!token) return setUser(null);
    try {
      const res = await axios.get("http://localhost:5000/api/user/profile", {
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
            className="flex items-center gap-2 text-2xl font-bold text-primary-600"
          >
            <img
              src="/assets/logo.png"
              alt="NeuroCare Logo"
              className="h-16 w-auto object-contain"
              style={{ width: "auto" }}
            />
            NeuroCare
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="flex-1 flex justify-center gap-8 text-gray-700 font-medium hidden md:flex">
          <Link to="/" className="hover:text-primary-600 transition">Home</Link>

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

        {/* Right: User Buttons */}
        <div className="flex-shrink-0 flex items-center gap-4 hidden md:flex">
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
        <div className="md:hidden flex items-center">
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





