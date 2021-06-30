import { useCallback, useEffect } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { connectorsByName } from "utils/web3React";
import { setupNetwork } from "utils/wallet";
import { ConnectorNames } from "utils/types";
import { connectorLocalStorageKey } from "config/connectors";
import { useDispatch } from "react-redux";
import { connectWallet, disconnectWallet } from "providers/state/UserState";

export const useEagerConnect = () => {
  // const { login } = useLogin();

  // useEffect(() => {
  //   const isConnected = window.localStorage.getItem("isConnected");
  //   if (isConnected === "true") {
  //     login();
  //   }
  // }, [login]);
  const { login } = useAuth();

  useEffect(() => {
    const connectorId = window.localStorage.getItem(
      connectorLocalStorageKey
    ) as ConnectorNames;
    if (connectorId && connectorId !== ConnectorNames.BSC) {
      login(connectorId);
    }
  }, [login]);
};

export const useLogin = () => {
  const dispatch = useDispatch();

  const login = useCallback(() => {
    dispatch(connectWallet());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(disconnectWallet());
  }, [dispatch]);

  return { login, logout };
};

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID];
    if (connector) {
      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          const hasSetup = await setupNetwork();
          if (hasSetup) {
            activate(connector);
          }
        } else {
          console.error(error.name, error.message);
        }
      });
    } else {
      console.error("Can't find connector", "The connector config is wrong");
    }
    window.localStorage.setItem(
      connectorLocalStorageKey,
      ConnectorNames.Injected
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { login, logout: deactivate };
};

export default useAuth;
