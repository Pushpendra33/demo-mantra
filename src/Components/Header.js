/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { labels, routesList } from "../Common";
import { useChain, useWallet } from "@cosmos-kit/react";

const Header = () => {
  const { connect } = useChain("mantrachaintestnet");
  const { mainWallet } = useWallet("keplr-extension"); // Access Keplr wallet connection functions

  const [isStripClosed, setIsStripClosed] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    setIsStripClosed(() => {
      return false;
    });
  }, []);

  useEffect(async () => {
    setWalletConnected(true);
  }, []);

  const connectWalletPressed = async () => {
    setWalletConnected(true);
  };

  const handleTradingBot = () => {
    try {
      connect();
    } catch (error) {
      console.error("Error connecting Keplr wallet:", error);
    }
  };

  return (
    <>
      <header>
        <div className="topTeam">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href={routesList.homePage}>
                <img
                  src="images/logo.png"
                  alt=""
                  title=""
                  className="img-fluid"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  {" "}
                  X
                </button>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    {walletConnected && (
                      <a
                        className="nav-link btn btn-blue clickable"
                        onClick={() => handleTradingBot()}
                      >
                        Connect Wallet
                      </a>
                    )}
                  </li>
                  <li className="nav-item">
                    {!walletConnected ? (
                      <button
                        type="button"
                        className="nav-link btn btn-purple"
                        onClick={connectWalletPressed}
                      >
                        {labels.connect_wallet}
                      </button>
                    ) : (
                      <Link
                        className="nav-link btn btn-purple" //onClick={mintNFT}>
                        to={routesList.mint}
                      >
                        {labels.mint}
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
