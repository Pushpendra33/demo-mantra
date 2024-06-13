import React from "react";

export const Team = () => {
  return (
    <>
      <section className="section team">
        <div className="container">
          <h2 className="title1">Our Team</h2>
          <p>
            We come from trading, development, and media backgrounds. We’re
            active on{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              discord
            </a>{" "}
            so come say hi.{" "}
          </p>
          <div className="rightway">
            <div className="mt-5 owl-carousel" id="team-carousel">
              <div className="item">
                <img
                  src="images/avatar-lennox.jpg"
                  alt=""
                  title=""
                  className="img-fluid"
                />
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="profile-tw"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <div className="team-profile">
                  <img
                    src="images/Takura.jpg"
                    alt=""
                    title=""
                    className="img-fluid"
                  />
                </div>
                <h3>Lennox Takura</h3>
                <strong>Co-Founder: Technology & Product Strategy</strong>
                <p>
                  Nearly a decade of experience building enterprise software
                  products for fortune 500 companies. He's also an algorithmic
                  trader and runs a boutique hedge fund that deploys
                  quantitative trading strategies in FX and Crypto markets.
                </p>
              </div>

              <div className="item">
                <img
                  src="images/avatar-kevin.jpg"
                  alt=""
                  title=""
                  className="img-fluid"
                />
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="profile-tw"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <div className="team-profile">
                  <img
                    src="images/Kevin.jpg"
                    alt=""
                    title=""
                    className="img-fluid"
                  />
                </div>
                <h3>Kevin Villatoro</h3>
                <strong>Co-Founder: Artwork & Partnerships</strong>
                <p>
                  After graduating with a double major in Finance and
                  Information Systems, Kevin immediately gravitated to the
                  decentralized finance space and started mining litecoin in
                  2014. He's been trading on crypto exchanges ever since.{" "}
                </p>
              </div>

              <div className="item">
                <img
                  src="images/avatar-semi.jpg"
                  alt=""
                  title=""
                  className="img-fluid"
                />
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="profile-tw"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <div className="team-profile">
                  <img src="images/sdi.jpg" alt="" title="" className="img-fluid" />
                </div>
                <h3>SemiDot</h3>
                <strong>Web3 Development Team</strong>
                <p>
                  SemiDot's proven Web3 and NFT development team has 11+ years
                  of extensive experience providing Mobile and Web development
                  solutions.
                </p>
              </div>

              <div className="item">
                <img
                  src="images/avatar-mark.jpg"
                  alt=""
                  title=""
                  className="img-fluid"
                />
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="profile-tw"
                >
                  <i className="bi bi-twitter"></i>
                </a>

                <div className="team-profile">
                  <img
                    src="images/mark.jpeg"
                    alt=""
                    title=""
                    className="img-fluid"
                  />
                </div>
                <h3>Mark Robinson</h3>
                <strong>Community & Social</strong>
                <p>
                  Mark runs a social media marketing agency, hosts a
                  metaverse-focused podcast, and has a background in digital
                  design.
                </p>
              </div>
              <div className="item">
                <img
                  src="images/avatar-wes.jpg"
                  alt=""
                  title=""
                  className="img-fluid"
                />
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="profile-tw"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <div className="team-profile">
                  <img
                    src="images/wes.jpeg"
                    alt=""
                    title=""
                    className="img-fluid"
                  />
                </div>
                <h3>Wes Morton</h3>
                <strong>PR Strategy</strong>
                <p>
                  10 years of strategic and media marketing experience working
                  with major brands like Sour Patch Kids, Swedish Fish, OREO,
                  British Airways, IPG, Electronic Arts, Ubisoft, Scopely, and
                  seed-stage venture capital funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
