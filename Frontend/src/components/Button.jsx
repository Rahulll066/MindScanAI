import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  const variants = {
  primary: "bg-primary-600 text-white hover:bg-primary-700",
    outline:
  "border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
