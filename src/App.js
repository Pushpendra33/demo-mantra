import React from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Routing from "./Routing";

function App() {
  return (
    <div className="App">
      <ReactNotifications />
      <Routing />
    </div>
  );
}

export default App;
