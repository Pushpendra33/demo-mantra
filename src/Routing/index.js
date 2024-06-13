import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routesList } from "../Common";
import HomePage from "../Components/HomePage";
import Mint from "../Components/Mint";
import { CoreLayout } from "../Layout";

import { wallets } from "@cosmos-kit/keplr-extension";
import { ChainProvider } from "@cosmos-kit/react";
import {mantra} from '../lib/chainConfig'
import { assets, chains } from "chain-registry";

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
        </Routes>
      </ChainProvider>
    </Router>
  );
}
