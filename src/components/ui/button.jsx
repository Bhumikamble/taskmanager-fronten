import React from "react";

export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded text-white ${className}`}
    >
      {children}
    </button>
  );
}