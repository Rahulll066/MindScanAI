import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-50 mt-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-blue-900">About MindScanAI</h3>
          <p className="text-gray-700 text-sm">
            MindScanAI uses advanced AI to help detect early signs of dementia through simple at-home cognitive assessments.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-blue-900">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <Link to="/about" className="hover:text-blue-600">About</Link>
            </li>
            <li>
              <Link to="/assessment" className="hover:text-blue-600">Take Assessment</Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-blue-600">Profile</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact / CTA */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-blue-900">Contact Us</h3>
          <p className="text-gray-700 text-sm">
            Call us: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a>
          </p>
          <p className="text-gray-700 text-sm">
            Email: <a href="mailto:info@mindscanai.com" className="text-blue-600 hover:underline">info@mindscanai.com</a>
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center py-4 border-t border-blue-200 text-blue-900 text-sm">
        © {new Date().getFullYear()} MindScanAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
