import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout(props) {
  const { children, title } = props;

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-main-bg px-4 py-10">
      <div className="w-full max-w-sm">
        <Logo />

        <h1 className="mt-8 mb-6 text-center text-xl font-bold text-defaultBlack">
          {title}
        </h1>

        {children}
      </div>
    </main>
  );
}

export default AuthLayout;
