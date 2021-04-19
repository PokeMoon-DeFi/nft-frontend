import React, { useEffect, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEagerConnect } from "hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import { asyncFetchBalance, asyncFetchNfts } from "providers/state/UserState";
import history from "./routerHistory";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import Particles, { ISourceOptions } from "react-tsparticles";
import particleOptions from "./config/particlesOptions.json";
import { GlobalStyle, Theme } from "nft-uikit";
import { Page, Header, Content } from "components/layout";
import BigNumber from "bignumber.js";
import { ThemeProvider } from "styled-components";

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

  // const balance = useAppSelector((state) => state.user?.balance);
  // TODO: Move dispatches out
  const { account } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if (account) {
      dispatch(asyncFetchBalance({ account }));
      dispatch(asyncFetchNfts({ account }));
    }
  }, [dispatch, account]);

  return (
    <ThemeProvider theme={Theme}>
      <Router history={history}>
        <GlobalStyle />
        <Particles options={particleOptions as ISourceOptions} />
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Page>
            <Header />
            <Content>
              <Switch>
                <Route path="/" exact>
                  <Landing />
                </Route>
                <Route path="/buy" exact>
                  <BuyPacks />
                </Route>
                <Route path="/gallery" exact>
                  <Gallery />
                </Route>
              </Switch>
            </Content>
          </Page>
        </SuspenseWithChunkError>
      </Router>
    </ThemeProvider>
  );
};

export default React.memo(App);
