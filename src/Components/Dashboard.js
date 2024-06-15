import React, { useState } from "react";
import "../style/dashboard.css";

const Dashboard = () => {
  const cetes = {
    name: "Cetes",
    mxnCost: "MX$1,063",
    tokensAvailable: 4500000,
    apy: 9.25,
    startDate: "6/14/2024, 1AM",
    maturityDate: "6/21/2024, 1AM",
  };
  const [cetesAmount, setCetesAmount] = useState("");
  const [usdAmount, setUsdAmount] = useState("");
  const conversionRate = 20;

  const handleCetesChange = (event) => {
    const cetes = event.target.value;
    setCetesAmount(cetes);
    setUsdAmount(cetes * conversionRate);
  };

  const handleUsdChange = (event) => {
    const usd = event.target.value;
    setUsdAmount(usd);
    setCetesAmount(usd / conversionRate);
  };
  return (
    <>
      <main>
        <section className="bond-options">
          <h2>Explore Bond Options</h2>
          <p>Learn more about Bonds.</p>
        </section>
        <section className="bond-details">
          <div className="cetes-details">
            <h3>{cetes.name}</h3>
            <p>Payment MXN Cost: {cetes.mxnCost}</p>
            <p>Tokens Available: {cetes.tokensAvailable.toLocaleString()}</p>
            <p>Estimated APY: {cetes.apy}%</p>
            <p>Start Date: {cetes.startDate}</p>
            <p>Next Maturity Date: {cetes.maturityDate}</p>
          </div>
          <div className="cetes-conversion">
            <div className="conversion-section">
              <label htmlFor="cetes">CETES</label>
              <input
                type="number"
                id="cetes"
                value={cetesAmount}
                onChange={handleCetesChange}
              />
              <label htmlFor="usd">USD</label>
              <input
                type="number"
                id="usd"
                value={usdAmount}
                onChange={handleUsdChange}
              />
            </div>
            <div className="purchase-actions">
              <button className="details-button">Bond Details</button>
              <button className="purchase-button">Purchase</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
