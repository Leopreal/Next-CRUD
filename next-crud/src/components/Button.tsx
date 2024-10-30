

import React from "react";

interface ButtonProps {
  color?: "green" | "blue" | "grey";
  children: React.ReactNode;
}

const Button = ({ color = "blue", children }: ButtonProps) => {
  const colorClasses = {
    green:
      "from-green-400 to-green-600 hover:from-green-500 hover:to-green-700",
    blue: "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700",
    grey: "from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700",
  };

  return (
    <button
      className={`bg-gradient-to-r ${colorClasses[color]} text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}
    >
      {children}
    </button>
  );
};

export default Button;
