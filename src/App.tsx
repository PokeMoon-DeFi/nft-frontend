import { useEffect, lazy } from "react";
import { Router, Switch, Route } from "react-router";
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
// Lazy loading
const Landing = lazy(() => import("./views/Landing"));

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
  // const { login, logout } = useAuth();
  // const balance = useAppSelector((state) => state.user?.balance);
  // const { account } = useWeb3React();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (account) {
  //     dispatch(asyncFetchBalance({ account }));
  //   }
  // }, [dispatch, account]);

  return (
    <Router history={history}>
      {/* <ResetCSS /> */}
      {/* <GlobalStyle /> */}
      {/* <Menu> */}
      <Particles options={particleOptions as ISourceOptions} />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
        </Switch>
      </SuspenseWithChunkError>
      {/* </Menu> */}
    </Router>

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

export default App;
