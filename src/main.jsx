import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageRegister from "./latihan/pages/PageRegister.jsx";
// import PageLogin from "./latihan/pages/PageLogin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* ganti jadi <PageLogin /> untuk melihat halaman login */}
    <PageRegister />
  </StrictMode>,
);
