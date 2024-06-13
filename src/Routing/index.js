import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routesList } from "../Common";
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
      </Routes>
    </Router>
  );
}
