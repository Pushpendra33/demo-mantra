import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routesList } from "../Common";
import HomePage from "../Components/HomePage";
import { CoreLayout } from "../Layout";

import { wallets } from "@cosmos-kit/keplr-extension";
import { ChainProvider } from "@cosmos-kit/react";
import { mantra } from "../lib/chainConfig";
import { assets, chains } from "chain-registry";
import DashboardLayout from "../DashboardSubSection/DashboardLayout";
import DashboardView from "../DashboardSubSection";
import Bond from "../DashboardSubSection/Bond";
import Account from "../DashboardSubSection/Account";
import Mint from "../Components/Mint";

export default function Routing() {
  return (
    <Router>
      <ChainProvider
        chains={[...chains, mantra]} // supported chains
        assetLists={assets} // supported asset lists
        wallets={wallets} // supported wallets
      >
        <Routes>
          <Route exact path={routesList.homePage} element={<CoreLayout />}>
            <Route exact path={routesList.homePage} element={<HomePage />} />
            <Route exact path={routesList.mint} element={<Mint />} />
          </Route>

          <Route exact path="/dashboard" element={<DashboardLayout />}>
            <Route exact path={"/dashboard"} element={<DashboardView />} />
            <Route exact path={"/dashboard/bond"} element={<Bond />} />
            <Route exact path={"/dashboard/account"} element={<Account />} />
          </Route>
        </Routes>
      </ChainProvider>
    </Router>
  );
}
