import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "utils/web3React";
import { Provider } from "react-redux";
import store from "providers";
import { StylesProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </StylesProvider>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById("root")
);
