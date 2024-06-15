import React from "react";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/dashboard">
            <div className="logo">Stable Bond</div>
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
            <button>Connect Wallet</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DashboardHeader;
