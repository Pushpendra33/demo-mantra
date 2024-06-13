import React from "react";

export const RoadMap = () => {
  return (
    <>
      <section className="section roadmap" id="roadmap">
        <div className="container">
          <h2 className="title1">Roadmap</h2>
          <p>
            This NFT provides immediate utility; it's your access pass to use
            the tool.{" "}
          </p>
          <div className="row align-items-center mt-5">
            <div className="col-md-6">
              <div className="mCustomScrollbar">
                <ul>
                  <li>
                    <div className="innermap">
                      <h4>Nov 20, 2021</h4>
                      <p>Development begins: trading algorithm & tool</p>
                    </div>
                  </li>
                  <li>
                    <div className="innermap">
                      <h4>December 10, 2021</h4>
                      <p>Alpha complete with Binance trading support</p>
                    </div>
                  </li>
                  <li>
                    <div className="innermap">
                      <h4>December 15, 2021</h4>
                      <p>NFT artwork reveal</p>
                    </div>
                  </li>
                  <li>
                    <div className="innermap">
                      <h4>January 2021</h4>
                      <p>Coinbase exchange support added</p>
                    </div>
                  </li>

                  <li>
                    <div className="innermap">
                      <h4>February</h4>
                      <p>Unlimited Pass Mint</p>
                      {/* <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Join Whitelist
                      </a> */}
                    </div>
                  </li>
                  <li>
                    <div className="innermap">
                      <h4>March 2022</h4>
                      <p>New feature vote. 3D Printed Project's ship</p>
                    </div>
                  </li>
                  <li>
                    <div className="innermap">
                      <h4>April 2022</h4>
                      <p>New exchange support vote</p>
                    </div>
                  </li>
                  <li>
                    <div className="innermap">
                      <h4>May 2022</h4>
                      <p>New feature vote</p>
                    </div>
                  </li>
                  <li>
                    <div className="innermap">
                      <h4>June 2022</h4>
                      <p>Phase 2 Plans Revealed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 view3D">
              <img src="images/roadmap.png" alt="" title="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
