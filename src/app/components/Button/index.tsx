import React from "react";
type ButtonType = "default" | "primary" | "ghost";

interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  const baseStyles =
    "px-4 py-2 rounded-[0.5em] focus:outline-none transition duration-300";
  let typeStyles = "";

  switch (type) {
    case "primary":
      typeStyles = "bg-orange hover:bg-[#FFAC6B] text-black";
      break;
    case "ghost":
      typeStyles =
        "bg-transparent text-blue-700 hover:text-white border border-blue-500 hover:border-white/[0.6]";
      break;
    default:
      typeStyles = "bg-[#1C2B3A] hover:bg-[#263B50] text-white";
  }

  return <button className={`${baseStyles} ${typeStyles}`}>{children}</button>;
};

export default Button;
