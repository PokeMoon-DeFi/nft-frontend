import React, { useEffect, lazy } from "react";
import { Redirect } from "react-router";
import { Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEagerConnect } from "hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import { asyncFetchBalance, asyncFetchNfts } from "providers/state/UserState";
import history from "./routerHistory";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import BigNumber from "bignumber.js";
import { ThemeProvider } from "styled-components";
import Wen from "views/Wen";
import useRefresh from "hooks/useRefresh";
import { Page, Content, GlobalStyle, Theme, Particles } from "nft-uikit";
import { Header } from "components/layout";

// Lazy loading
const Landing = lazy(() => import("./views/Landing"));
const BuyPacks = lazy(() => import("./views/BuyPacks"));
const Gallery = lazy(() => import("./views/Gallery"));
const ViewPack = lazy(() => import("./views/ViewPack"));
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
  // If stuff keeps rerendering every 10 sec this is what caused that.
  const { fastRefresh } = useRefresh();

  useEffect(() => {
    if (account) {
      dispatch(asyncFetchBalance({ account }));
      dispatch(asyncFetchNfts({ account }));
    }
  }, [dispatch, account, fastRefresh]);

  return (
    <ThemeProvider theme={Theme}>
      <Router history={history}>
        <GlobalStyle />
        <Particles />
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/wen">
              <Wen />
            </Route>
            <Page>
              <Header />
              <Content>
                <Route path="/" exact>
                  <Landing />
                </Route>
                <Route path="/buy" exact>
                  <BuyPacks />
                </Route>
                <Route path="/gallery" exact>
                  <Gallery />
                </Route>
                <Route path="/pack/:id">
                  <ViewPack />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Content>
            </Page>
          </Switch>
        </SuspenseWithChunkError>
      </Router>
    </ThemeProvider>
  );
};

export default React.memo(App);
