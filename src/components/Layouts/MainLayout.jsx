import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";

function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <div className="flex min-h-screen">
        <aside className="flex w-28 flex-col justify-between bg-defaultBlack px-4 py-8 text-special-bg2 sm:w-64">
          <div>
            <div className="mb-10">
              <Logo variant="secondary" />
            </div>

            <nav>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
                <div className="mx-auto sm:mx-0">O</div>
                <div className="ms-3 hidden sm:block">Overview</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
                <div className="mx-auto sm:mx-0">B</div>
                <div className="ms-3 hidden sm:block">Balances</div>
              </div>
              <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
                <div className="mx-auto sm:mx-0">T</div>
                <div className="ms-3 hidden sm:block">Transactions</div>
              </div>
            </nav>
          </div>

          <div>
            <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md">
              <div className="mx-auto sm:mx-0">L</div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </div>

            <div className="border my-10 border-b-special-bg"></div>

            <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                Username
                <br />
                View Profile
              </div>
              <div className="hidden sm:block">icon</div>
            </div>
          </div>
        </aside>

        <div className="flex flex-1 flex-col bg-main-bg">
          <header className="flex items-center justify-between border-b border-gray-05 px-6 py-4">
            <div className="flex items-center">
              <div className="me-4 text-xl font-bold text-defaultBlack">
                Username
              </div>
              <div className="text-sm text-gray-03">May 19, 2023</div>
            </div>

            <div className="flex items-center">
              <div className="me-4 text-sm text-gray-02">icon</div>
              <div className="w-52">
                <Input
                  id="search"
                  name="search"
                  backgroundColor="bg-white"
                  border="border-white"
                />
              </div>
            </div>
          </header>

          <main className="flex-1 px-6 py-6">{children}</main>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
