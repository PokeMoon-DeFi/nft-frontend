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
          <Button onClick={() => logout()} style={{ pointerEvents: "auto" }}>
            Logout
          </Button>
          <Button
            onClick={() => (window.location.href = "/buy")}
            style={{ pointerEvents: "auto" }}
          >
            Buy
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => login(ConnectorNames.Injected)}
            style={{ pointerEvents: "auto" }}
          >
            Login
          </Button>
        </>
      )}
    </>
  );
};

export default Landing;
