import { useDispatch } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "nft-uikit";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector } from "providers";
import { asyncFetchBalance } from "providers/state/UserState";

function App() {
  const { login, logout } = useAuth();
  const { kbn } = useAppSelector((state) => state.user?.balance);
  const { account } = useWeb3React();
  const dispatch = useDispatch();

  dispatch(asyncFetchBalance());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{account}</p>
        <p>{kbn}</p>
        <Button
          label="Buy"
          icon="Buy"
          onClick={() => (!account ? login(ConnectorNames.Injected) : logout())}
          style={{ minWidth: 200, maxHeight: 30, backgroundColor: "red" }}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
