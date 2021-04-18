import React, { useEffect, lazy } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuth, { useEagerConnect } from "hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector } from "providers";
import { asyncFetchBalance } from "providers/state/UserState";
import history from "./routerHistory";
import "./App.css";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import Particles, { ISourceOptions } from "react-tsparticles";
import particleOptions from "./config/particlesOptions.json";
import { GlobalStyle, Theme } from "nft-uikit";
import { ThemeProvider } from "styled-components";
import { Page, Header, Content } from "components/layout";
import { Button } from "nft-uikit";
import { ConnectorNames } from "utils/types";
import BigNumber from "bignumber.js";

// Lazy loading
const Landing = lazy(() => import("./views/Landing"));
const BuyPacks = lazy(() => import("./views/BuyPacks"));
const Gallery = lazy(() => import("./views/Gallery"));
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

const App: React.FC = () => {
  // https://github.com/ChainSafe/web3.js/issues/3898
  useEffect(() => {
    console.warn = () => null;
  }, []);

  useEagerConnect();
  // TODO: Implement below hooks
  // useFetchPublicData();
  // useFetchPriceData();

  // SAVING AS EXAMPLE
  const { login, logout } = useAuth();
  // const balance = useAppSelector((state) => state.user?.balance);
  const { account } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if (account) {
      dispatch(asyncFetchBalance({ account }));
    }
  }, [dispatch, account]);

  return (
    // <ThemeProvider theme={Theme}>
    <Router history={history}>
      {/* <ResetCSS /> */}

      <GlobalStyle />
      {/* <Menu> */}
      <Particles options={particleOptions as ISourceOptions} />

      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Page>
          <Header>
            {/* <Button
              label="Connect"
              onClick={() => login(ConnectorNames.Injected)}
            /> */}
          </Header>
          <Content>
            <Switch>
              <Route path="/" exact>
                <Landing />
              </Route>
              <Route path="/buy" exact>
                <BuyPacks />
              </Route>
            </Switch>
          </Content>
        </Page>
      </SuspenseWithChunkError>

      {/* </Menu> */}
    </Router>
    // </ThemeProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <p>{account}</p>
    //     <p>MNT: {balance.mnt.toNumber()}</p>
    //     <p>KBN: {balance.kbn.toNumber()}</p>
    //     <p>PB2114: {balance.pb2114.toNumber()}</p>
    //     <Button
    //       label="Login / Logout"
    //       icon="Backpack"
    //       onClick={() => (!account ? login(ConnectorNames.Injected) : logout())}
    //       style={{ minWidth: 200, maxHeight: 30, backgroundColor: "red" }}
    //     />
    //   </header>
    // </div>
  );
};

export default React.memo(App);
