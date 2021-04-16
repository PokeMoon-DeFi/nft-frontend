import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import { Button } from "nft-uikit";
import { ConnectorNames } from "utils/types";
import { Content, Page } from "components/layout";

const Landing: React.FC = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();

  return (
    <>
      <Page>
        <Content>
          <p style={{ color: "white" }}>{account}</p>
          <Button
            label="Login / Logout"
            icon="Backpack"
            onClick={() =>
              !account ? login(ConnectorNames.Injected) : logout()
            }
          />

          <a href="/buy">BUY</a>
        </Content>
      </Page>
    </>
  );
};

export default Landing;
