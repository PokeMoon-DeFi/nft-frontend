import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "utils/web3React";
import { FC } from "react";
import store from "providers";
import { Provider } from "react-redux";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import { RefreshContextProvider } from "contexts/RefreshContext";
import { ThemeProvider } from "styled-components";
import { MaterialTheme } from "components/theme";
import ModalProvider from "providers/ModalContext";

const WrapProvider: FC = ({ children }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={MaterialTheme}>
          <ThemeProvider theme={MaterialTheme}>
            <RefreshContextProvider>
              <ModalProvider>{children}</ModalProvider>
            </RefreshContextProvider>
          </ThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </Provider>
  </Web3ReactProvider>
);

export default WrapProvider;
