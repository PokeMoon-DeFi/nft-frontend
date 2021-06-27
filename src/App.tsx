import React, { useEffect, lazy } from "react";
import { Redirect } from "react-router";
import { Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEagerConnect } from "hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import {
  asyncFetchBalance,
  asyncFetchNftBalance,
} from "providers/state/UserState";
import { Container } from "@material-ui/core";
import history from "./routerHistory";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import BigNumber from "bignumber.js";
import useRefresh from "hooks/useRefresh";
import Page from "components/page";
import Particles from "components/Particles";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
import { NavHeader, LinkConfigState } from "components/layout";
import { Fab } from "components/Fab";

// Lazy loading
const Landing = lazy(() => import("./views/Landing"));
const BuyPacks = lazy(() => import("./views/BuyPacks"));
const Gallery = lazy(() => import("./views/Gallery"));
const ViewPack = lazy(() => import("./views/ViewPack"));
const PublicGallery = lazy(() => import("./views/Gallery/PublicGallery"));

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

const linkConfig: LinkConfigState[] = [
  {
    target: "/",
    label: "Home",
    icon: <HomeIcon />,
  },
  // {
  //   target: "/news",
  //   label: "News",
  //   icon: <HomeIcon />,
  // },
  {
    target: "/buy",
    label: "Buy",
    icon: <StoreOutlinedIcon />,
  },
  {
    target: "/catalog",
    label: "Catalog",
    icon: <PhotoSizeSelectActualIcon />,
  },
  {
    target: "/collection",
    label: "My Collection",
    icon: <AccountBalanceIcon />,
  },
];

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
  const { login, logout } = useAuth();

  useEffect(() => {
    if (account) {
      dispatch(asyncFetchBalance({ account }));
      dispatch(asyncFetchNftBalance({ account }));
    }
  }, [dispatch, account, fastRefresh]);
  return (
    <Router history={history}>
      <Particles />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Page>
          <NavHeader
            account={account ?? ""}
            onConnect={() => login(ConnectorNames.Injected)}
            onLogout={() => {
              logout();
              window.location.href = "/";
            }}
            linkConfig={linkConfig}
          />

          <Container
            maxWidth={"xl"}
            style={{ height: "100%", justifyContent: "flex-start", flex: 1 }}
          >
            <Switch>
              <Route path="/" exact>
                {/* <WhitePaperView /> */}
                <Landing />
              </Route>
              {/* <Route path="/news" exact>
                <Landing />
              </Route> */}
              <Route path="/buy" exact>
                <BuyPacks />
              </Route>
              <Route path="/catalog" exact>
                <PublicGallery />
              </Route>
              <Route path="/collection" exact>
                <Gallery />
              </Route>
              {/* <Route path="/white-paper" exact>
                <WhitePaperView />
              </Route> */}
              <Route path="/pack/:set/:id">
                <ViewPack />
              </Route>
              <Route>
                <Redirect to="/buy" />
              </Route>
            </Switch>
          </Container>
          <Fab
            account={account ?? ""}
            onConnect={() => login(ConnectorNames.Injected)}
            onLogout={() => {
              logout();
              window.location.href = "/";
            }}
            linkConfig={linkConfig}
          />
        </Page>
      </SuspenseWithChunkError>
    </Router>
  );
};

export default React.memo(App);
