import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

const DashboardLayout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <DashboardHeader />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ textAlign: "center" }}>
        <p>POWERED BY Hawk-Finance</p>
        <p>&copy; Hawk-Finance 2024</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
