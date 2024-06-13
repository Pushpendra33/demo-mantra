import React from "react";

export const Goals = () => {
  return (
    <>
      <section className="section goal">
        <div className="container">
          <h2 className="title1">Set It and Forget It</h2>
          <p>
            Our trading tool <a href="#faq">Dollar Cost Average (DCA)</a>{" "}
            invests into the most popular crypto currencies from our proprietary
            index. This index tracks the most popular coins by trading volume
            every month. Your NFT is the license to access the trading tool.{" "}
          </p>
          <br />
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src="images/returns.png"
                alt=""
                title=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-7">
              <h3 className="title2">Double the Return of Bitcoin</h3>
              <p>
                {" "}
                Historical performance from our trading algorithm model beat
                bitcoin returns by nearly 2x when looking at a four year
                timeline on Binance. The model began during the peak of the last
                great bull run and throughout the following bear market.
                Disclaimer: Historic returns are not a guarantee of future
                returns.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
