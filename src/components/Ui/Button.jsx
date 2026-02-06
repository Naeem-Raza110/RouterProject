import React from "react";

function Button({ title = "Button", className, onClick, isCorrect = true }) {
  return (
    <button
      className={`cursor-pointer text-white text-lg rounded-xl font-bold transition ${
        isCorrect
          ? "bg-indigo-600 text-white  hover:bg-indigo-800 transition "
          : "bg-red-600 hover:bg-red-700"
      } ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
