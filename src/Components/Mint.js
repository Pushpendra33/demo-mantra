/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";

const Mint = () => {
  const [waiting, setWaiting] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [maxValues, setMaxValues] = useState({
    maxMints: 0,
    totalRemaining: 0,
    maxPerMint: 0,
    price: null,
  });
  const quantityRef = useRef();

  useEffect(async () => {
    setWalletConnected(true);

    setMaxValues({
      maxMints: 100,
      totalRemaining: 95,
      maxPerMint: 4,
      price: 0.45,
    });
  }, []);

  useEffect(() => {
    setTotalAmountValues(quantity);
  }, [maxValues.price]);

  const setTotalAmountValues = (quantity) => {
    setTotalAmount(
      (parseFloat(quantity) * parseFloat(maxValues.price)).toFixed(3)
    );
  };

  const manageCounter = (buttonType) => {
    const { min, max, value } = quantityRef.current;
    let newValue = 0; //Do Code here for count
    setQuantity(newValue);
    setTotalAmountValues(newValue);
  };

  const mintNFTPressed = async (event) => {
    event.preventDefault();
    console.log("Button pressed");
  };

  return (
    <>
      <section className="content">
        <div className="container">
          <div className="banner-sec mint-ban">
            <div className="container">
              <h2 className="text-center">
                Project Index <span className="tknreg">Token registration</span>
              </h2>
              <div className="banner-item">
                <div className="item-left">
                  <div className="img-art">
                    <img src="images/first.png" alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="item-right text-start">
                  <h3>Please select the number of NFTs you intend to mint</h3>
                  <p>
                    Each NFT grants you immediate access to an investment
                    automation tool. Historical performance from our investing
                    model beat bitcoin returns by nearly 2x when looking at a
                    four year timeline on Binance. The model began during the
                    end of 2017 and throughout the 2018 great bear market.
                    Disclaimer: Historic returns are not a guarantee of future
                    returns.
                  </p>
                  <form className="min-form">
                    <div className="counter-row">
                      <div className="inner-item">
                        <div className="input-counter mb-3">
                          <button
                            type="button"
                            className="minus-btn"
                            id="minus-btn"
                            onClick={() => manageCounter("minus")}
                          >
                            <i className="bi bi-dash"></i>
                          </button>
                          <span>Qty.</span>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            className="form-control"
                            value={quantity}
                            ref={quantityRef}
                            min={1}
                            max={maxValues.maxPerMint}
                            onChange={() => {
                              console.log("");
                            }}
                          />
                          <button
                            type="button"
                            className="plus-btn"
                            id="plus-btn"
                            onClick={() => manageCounter("plus")}
                          >
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>
                        <div className="input-form mb-3">
                          <span>Price(ETH)</span>
                          <input
                            type="text"
                            className="form-control"
                            readOnly=""
                            value={totalAmount}
                            onChange={() => {
                              console.log("");
                            }}
                          />
                        </div>
                      </div>
                      {walletConnected && waiting ? (
                        <button
                          className={"btn btn-di mt-3 wallet-connect"}
                          type={"button"}
                          disabled
                        >
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          {"Fetching Data! Please Wait..."}
                        </button>
                      ) : (
                        walletConnected && (
                          <button
                            type={"button"}
                            className={"btn btn-di mt-3 wallet-connect"}
                            onClick={mintNFTPressed}
                          >
                            Mint!
                          </button>
                        )
                      )}
                    </div>
                    <p className="mt-4">
                      Once you have minted, set up the investment automation
                      tool through these directions on{" "}
                      <a
                        href="https://www.youtube.com/channel/UCKcyTb4RQWYBcMlRdcG6GBw/featured"
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        YouTube
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mint;
