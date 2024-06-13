import React from "react";

export const FAQ = () => {
  return (
    <>
      <section className="section faq" id="faq">
        <div className="container">
          <h2 className="title1">FAQs</h2>
          <p>
            Click to expand. We have documented many more common questions on
            our{" "}
            <a
              href="#"
              target="_blank"
              rel={"noreferrer"}
            >
              discord
            </a>
            .
          </p>
          <div className="accordion mt-5" id="mainfaq">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  NFT Mint
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#mainfaq"
              >
                <div className="accordion-body">
                  <div className="accordion" id="subfaq1">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#subcollapseOne"
                        >
                          What does the NFT grant me access to?
                        </button>
                      </h2>
                      <div
                        id="subcollapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#subfaq1"
                      >
                        <div className="accordion-body">
                          The NFT is your key to access a DCA trading tool. As
                          long as you hold the NFT, you will have access to the
                          tool.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="sub1headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#subcollapseTwo"
                        >
                          How many NFTs will be available to mint?
                        </button>
                      </h2>
                      <div
                        id="subcollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="sub1headingTwo"
                        data-bs-parent="#subfaq1"
                      >
                        <div className="accordion-body">
                          There will be 999 NFTs available to Mint. Some of
                          these NFTs will include unique artwork to commemorate
                          the early adopters. You can find a full list of
                          minting perks on our{" "}
                          <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            discord
                          </a>
                          .
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#subcollapseThree"
                        >
                          Why use NFTs for this tool?
                        </button>
                      </h2>
                      <div
                        id="subcollapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#subfaq1"
                      >
                        <div className="accordion-body">
                          {" "}
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  DCA
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#mainfaq"
              >
                <div className="accordion-body">
                  <div className="accordion" id="subfaq2">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sub2collapseOne"
                        >
                          What is Dollar Cost Averaging (DCA)?
                        </button>
                      </h2>
                      <div
                        id="sub2collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#subfaq2"
                      >
                        <div className="accordion-body">
                          Dollar Cost Averaging is a tool an investor can use to
                          build savings and wealth over a long period. It is
                          also a way for an investor to neutralize short-term
                          volatility in the broader coin market. A prime example
                          of dollar-cost averaging is its use in 401(k) plans,
                          in which regular purchases are made regardless of the
                          price of any given equity within the account. Since
                          DCA involves investing at regular intervals, the risk
                          associated with buying at the wrong time is spread out
                          over a very long time.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="sub2headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sub2collapseTwo"
                        >
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old?
                        </button>
                      </h2>
                      <div
                        id="sub2collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="sub2headingTwo"
                        data-bs-parent="#subfaq2"
                      >
                        <div className="accordion-body">
                          We have extensively documented this strategy on{" "}
                          <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            discord
                          </a>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sub2collapseThree"
                        >
                          Can I execute this DCA strategy manually?
                        </button>
                      </h2>
                      <div
                        id="sub2collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#subfaq2"
                      >
                        <div className="accordion-body">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  Legal & Trading
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#mainfaq"
              >
                <div className="accordion-body">
                  <div className="accordion" id="subfaq3">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sub3collapseOne"
                        >
                          Past performance is not an indicator of future
                          success.
                        </button>
                      </h2>
                      <div
                        id="sub3collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#subfaq3"
                      >
                        <div className="accordion-body">
                          Although our models date back to 2017 and show strong
                          performance, we cannot guarantee future success
                          because of the volatile nature of the crypto market.
                          Please visit our{" "}
                          <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            discord
                          </a>{" "}
                          to access all raw data associated with our models.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sub3collapseTwo"
                        >
                          Is this similar to investing in a crypto index fund
                          found on a traditional brokerage?
                        </button>
                      </h2>
                      <div
                        id="sub3collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#subfaq3"
                      >
                        <div className="accordion-body">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sub3collapseThree"
                        >
                          Contrary to popular belief.
                        </button>
                      </h2>
                      <div
                        id="sub3collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#subfaq3"
                      >
                        <div className="accordion-body">
                          It has roots in a piece of classical Latin literature
                          from 45 BC, making it over 2000 years old. Richard
                          McClintock, a Latin professor at Hampden-Sydney
                          College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage,
                          and going through the cites of the word in classical
                          literature, discovered the undoubtable source.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
