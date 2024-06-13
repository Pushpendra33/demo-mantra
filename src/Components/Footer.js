/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { labels, routesList } from "../Common";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 footer-logo">
              <a className="navbar-brand" href={routesList.homePage}>
                <img
                  src="images/logo.png"
                  alt=""
                  title=""
                  className="img-fluid"
                />
              </a>
            </div>
            <div className="col-lg-5">
            </div>
            <div className="col-lg-4 text-end footer-social">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="btn btn-tw"
              >
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="btn btn-di"
              >
                <i className="bi bi-discord"></i> Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footerbottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-action">
                <a
                  className="clickable me-3"
                  href={routesList.tnc}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  {labels.tnc}
                </a>
                <a href="#" className="me-3">
                  <i className="bi bi-envelope"></i>contact@project.com
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="opensea"
                >
                  <img src="images/opensea.png" alt="" width={20} /> OpenSea
                </a>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
