import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "utils/web3React";
import { Provider } from "react-redux";
import store from "providers";
import { RefreshContextProvider } from "contexts/RefreshContext";

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <RefreshContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RefreshContextProvider>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById("root")
);
