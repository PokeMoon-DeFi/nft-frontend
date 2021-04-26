import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "utils/web3React";
import { FC } from "react";
import store from "providers";
import { Provider } from "react-redux";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import { MaterialTheme, ModalProvider } from "nft-uikit";
import { RefreshContextProvider } from "contexts/RefreshContext";

const WrapProvider: FC = ({ children }) => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={MaterialTheme}>
          <RefreshContextProvider>
            <ModalProvider>{children}</ModalProvider>
          </RefreshContextProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </Provider>
  </Web3ReactProvider>
);

export default WrapProvider;
