import { useDispatch } from "react-redux";
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
  const balance = useAppSelector((state) => state.user?.balance);
  const { account } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    if (account) {
      dispatch(asyncFetchBalance({ account }));
    }
  }, [dispatch, account]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{account}</p>
        <p>MNT: {balance.mnt.toNumber()}</p>
        <p>KBN: {balance.kbn.toNumber()}</p>
        <p>PB2114: {balance.pb2114.toNumber()}</p>
        <Button
          label="Login / Logout"
          icon="Backpack"
          onClick={() => (!account ? login(ConnectorNames.Injected) : logout())}
          style={{ minWidth: 200, maxHeight: 30, backgroundColor: "red" }}
        />
      </header>
    </div>
  );
}

export default App;
