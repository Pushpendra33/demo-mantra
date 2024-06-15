/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  commonFields,
  labels,
  manageUndefined,
  metamaskErrorMessages,
  notificationSetting,
  notificationType,
  routesList,
  showNotification,
} from "../Common";
import { GlobalForm, GlobalInput as Input, GlobalModal } from "../Global";
import { registerSchema } from "../Validations";

const Header = () => {
  const { connect } = useChain("mantrachaintestnet");
  const { mainWallet } = useWallet("keplr-extension"); // Access Keplr wallet connection functions

  const [walletConnected, setWalletConnected] = useState(false);

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
          {false && (
            <div className="stripmint">
              You need Metamask to interact with this site.{" "}
              <a
                href={"https://metamask.io/download/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                Click here to install.
              </a>
              <a
                className="closeStrip clickable"
                onClick={() => setIsStripClosed(true)}
              >
                <i className="bi bi-x-lg"></i>
              </a>
            </div>
          )}
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
                      <Link
                        to="/dashboard"
                        className="nav-link btn btn-blue clickable"
                      >
                        Dashboard
                      </Link>
                    )}
                  </li>
                  {/* <li className="nav-item">
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
                  </li> */}
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
