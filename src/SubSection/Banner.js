import React from "react";

export const Banner = () => {
  return (
    <>
      <section className="section banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              {/* <h1><span>The first utility NFT</span>Offering Crypto Investment Automation</h1> */}
              <h1>
                <span>Put Your Crypto</span>
                <span>Investing on Autopilot</span>
              </h1>
              <p><b>Our Crypto tool saves your time by automatically Investing in the best cryptocurrencies on your behalf</b></p>
              {/* <p>
                <b>Diversify your crypto investments</b> instantly through
                trading tools that plug into your favorite exchange.{" "}
              </p> */}
              <a
                href="#"
                target="_blank"
                rel={"noreferrer"}
                className="btn btn-tw"
              >
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a
                href="#"
                target="_blank"
                rel={"noreferrer"}
                className="btn btn-di"
              >
                <i className="bi bi-discord"></i> Discord
              </a>
            </div>
            <div className="col-md-6">
              <div className="owl-carousel" id="banner-img-carousel">
                <div className="item">
                  <img
                    src="images/slider1.png"
                    alt=""
                    title=""
                    className="img-fluid"
                  />
                </div>
                <div className="item">
                  <img
                    src="images/slider2.png"
                    alt=""
                    title=""
                    className="img-fluid"
                  />
                </div>
                <div className="item">
                  <img
                    src="images/slider3.png"
                    alt=""
                    title=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
