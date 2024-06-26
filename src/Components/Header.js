/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { routesList } from "../Common";

const Header = () => {
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
                    <Link
                      className="nav-link btn btn-purple clickable" //onClick={mintNFT}>
                      to={routesList.dashboard}
                    >
                      StableBonds
                    </Link>
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
