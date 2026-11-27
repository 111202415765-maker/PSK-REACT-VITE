import React from "react";

const TemplateCenter = ({ children }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-06">
      <div className="w-full max-w-md">{children}</div>
    </main>
  );
};

export default TemplateCenter;
