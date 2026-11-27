import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageDashboard from "./latihan/pages/PageDashboard.jsx";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* ganti jadi <App /> untuk kembali ke halaman Finebank (router) */}
    <PageDashboard />
  </StrictMode>,
);
