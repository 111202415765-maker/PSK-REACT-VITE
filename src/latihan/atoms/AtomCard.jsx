import React from "react";

function AtomCard({ children, className = "" }) {
  return (
    <>
      <div
        className={`bg-white border border-gray-05 p-5 rounded-lg shadow-lg ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default AtomCard;
