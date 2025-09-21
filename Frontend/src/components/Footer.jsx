import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 mt-12 border-t text-gray-600">
      <p>© {new Date().getFullYear()} MindScanAI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
