import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "utils/web3React";
import { Provider } from "react-redux";
import store from "providers";
import { GlobalStyle, ModalProvider, Theme } from "nft-uikit";
import { ThemeProvider } from "styled-components";
import { MaterialTheme } from "nft-uikit";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";
import { RefreshContextProvider } from "contexts/RefreshContext";
import { Modal } from "@material-ui/core";

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <MaterialThemeProvider theme={MaterialTheme}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <RefreshContextProvider>
              <ModalProvider>
                <App />
              </ModalProvider>
            </RefreshContextProvider>
          </ThemeProvider>
        </StylesProvider>
      </MaterialThemeProvider>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById("root")
);
