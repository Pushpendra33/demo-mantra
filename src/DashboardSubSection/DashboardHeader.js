import { useChain } from "@cosmos-kit/react";
import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
    const { connect } = useChain("mantrachaintestnet");

    const handleTradingBot = async () => {
      try {
        await connect();
      } catch (error) {
        console.error("Error connecting Keplr wallet:", error);
      }
    };
  
  return (
    <>
      <header className="dashboard-header">
        <nav>
          <Link to="/dashboard">
            <div className="logo">StableBond</div>
          </Link>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/bond">Bonds</Link>
            </li>
          </ul>
          <div className="connect-wallet">
            <button onClick={() => handleTradingBot()}>Connect Wallet</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DashboardHeader;
