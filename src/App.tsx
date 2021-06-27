import React, { useEffect, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEagerConnect } from "hooks/useAuth";
import {
  asyncFetchBalance,
  asyncFetchNftBalance,
} from "providers/state/UserState";
import SuspenseWithChunkError from "components/SuspenseWithChunkError";
import PageLoader from "components/PageLoader";
import BigNumber from "bignumber.js";
import useRefresh from "hooks/useRefresh";
import Particles from "components/Particles";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import { makeStyles } from "@material-ui/styles";
import HomeIcon from "@material-ui/icons/Home";
import { LinkConfigState } from "components/layout";
import NavHeader from "components/Header";
import { useLogin } from "hooks/useAuth";
import { useAppSelector } from "providers";

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
  {
    target: "/market",
    label: "MarketPlace",
    icon: <AccountBalanceIcon />,
  },
];

const useStyles = makeStyles((theme) => ({
  //@ts-ignore
  offset: theme.mixins.toolbar,
}));

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
  const dispatch = useDispatch();
  // If stuff keeps rerendering every 10 sec this is what caused that.
  const { fastRefresh } = useRefresh();
  const { login, logout } = useLogin();
  const account = useAppSelector((state) => state.user.address);

  useEffect(() => {
    if (account) {
      dispatch(asyncFetchBalance({ account }));
      dispatch(asyncFetchNftBalance({ account }));
      // dispatch(fetchListings());
    }
  }, [dispatch, account, fastRefresh]);
  return (
    <>
      <Particles />
      <Router>
        <NavHeader
          account={account ?? ""}
          onConnect={login}
          onLogout={logout}
          linkConfig={linkConfig}
        />

        <SuspenseWithChunkError fallback={<PageLoader />}>
          {/* <Page> */}

          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/buy">
              <BuyPacks />
            </Route>
            <Route path="/catalog" exact>
              <PublicGallery />
            </Route>
            <Route path="/collection" exact>
              <Gallery />
            </Route>
            {/* <Route path="/market" exact>
              <MarketPlace />
            </Route> */}
            <Route path="/pack/:set/:id">
              <ViewPack />
            </Route>
            {/* <Route path="/token/:set/:id">
              <ViewToken />
            </Route> */}
          </Switch>
        </SuspenseWithChunkError>
      </Router>
    </>
  );
};

export default React.memo(App);
