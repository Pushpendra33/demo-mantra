import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routesList } from "../Common";
import Account from "../Components/Account";
import Bond from "../Components/Bond";
import Dashboard from "../Components/Dashboard";
import DashboardLayout from "../Components/DashboardLayout";
import HomePage from "../Components/HomePage";
import Mint from "../Components/Mint";
import { CoreLayout } from "../Layout";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path={routesList.homePage} element={<CoreLayout />}>
          <Route exact path={routesList.homePage} element={<HomePage />} />
          <Route exact path={routesList.mint} element={<Mint />} />
        </Route>
        <Route exact path="/dashboard" element={<DashboardLayout />}>
          <Route exact path={"/dashboard"} element={<Dashboard />} />
          <Route exact path={"/dashboard/bond"} element={<Bond />} />
          <Route exact path={"/dashboard/account"} element={<Account />} />
        </Route>
      </Routes>
    </Router>
  );
}
