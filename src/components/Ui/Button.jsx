import React from 'react'

function Button({ title = "Button", className, onClick, isCorrect = true }) {
  return (
    <button
      className={`cursor-pointer text-white rounded-lg text-lg transition ${isCorrect ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700"
        } ${className}`}
      onClick={onClick}
    >
      {title}
    </button>

  )
}

export default Button;