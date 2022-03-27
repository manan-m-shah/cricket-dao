import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import { AppProvider } from "./context/AppProvider";
import { BrowserRouter } from "react-router-dom";
import Web3Provider from "./context/Web3Provider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3Provider>
        <AppProvider>
          <App />
        </AppProvider>
      </Web3Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
