import React from "react";

export const HowItWorks = () => {
  return (
    <>
      <section className="section how-work">
        <div className="container">
          <h2 className="title1">How it works</h2>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="icon-work">
                <img src="images/step1.png" alt="" title="" className="img-fluid" />
              </div>
              <h3>Step 1</h3>
              <p>
                Mint Your Prohect Index NFT: This is your license to access
                the trading tool.
              </p>
            </div>
            <div className="col-md-4">
              <div className="icon-work">
                <img src="images/step2.png" alt="" title="" className="img-fluid" />
              </div>
              <h3>Step 2</h3>
              <p>
                {" "}
                Pair the tool with your preferred exchange (Binance and Coinbase
                supported at launch) and set the amount of money you want to
                invest every week or month.{" "}
              </p>
            </div>
            <div className="col-md-4">
              <div className="icon-work">
                <img src="images/step3.png" alt="" title="" className="img-fluid" />
              </div>
              <h3>Step 3</h3>
              <p>
                Sit back and relax! The tool will dollar-cost average invest
                into the top 10 coins every week or month. All coins live on
                your exchange account, the tool does not hold custody of them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
