import { useDispatch } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "nft-uikit";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector } from "providers";
import { asyncFetchBalance } from "providers/state/UserState";
import { useEffect } from "react";

function App() {
  const { login, logout } = useAuth();
  const { koban } = useAppSelector((state) => state.user?.balance);
  const { account } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if (account) {
      dispatch(asyncFetchBalance({ symbol: "koban", account }));
    }
  }, [dispatch, account]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{account}</p>
        <p>{koban}</p>
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
