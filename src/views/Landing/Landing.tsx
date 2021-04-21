import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import { Button } from "nft-uikit";
import { ConnectorNames } from "utils/types";

const Landing: React.FC = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();

  return (
    <>
      {account ? (
        <>
          <Button
            label="Logout"
            icon="Backpack"
            onClick={() => logout()}
            style={{ pointerEvents: "auto" }}
          />
          <Button
            label="Buy"
            icon="Buy"
            onClick={() => (window.location.href = "/buy")}
            style={{ pointerEvents: "auto" }}
          />
        </>
      ) : (
        <>
          <Button
            label="Login"
            icon="Backpack"
            onClick={() => login(ConnectorNames.Injected)}
            style={{ pointerEvents: "auto" }}
          />
        </>
      )}
    </>
  );
};

export default Landing;
