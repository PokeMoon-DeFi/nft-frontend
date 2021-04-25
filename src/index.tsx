import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "utils/web3React";
import { Provider } from "react-redux";
import store from "providers";
import {
  createPokemoonTheme,
  GlobalStyle,
  ModalProvider,
  rawMaterialTheme,
  MaterialTheme,
} from "nft-uikit";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import { RefreshContextProvider } from "contexts/RefreshContext";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={MaterialTheme}>
          <ThemeProvider theme={MaterialTheme}>
            <RefreshContextProvider>
              <ModalProvider>
                <GlobalStyle />
                <App />
              </ModalProvider>
            </RefreshContextProvider>
          </ThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById("root")
);
