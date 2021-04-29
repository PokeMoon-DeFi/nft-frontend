import { Content, Page, Particles, WiggleBall, ConnectScreen } from "nft-uikit";
import { useState, useEffect } from "react";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import { useWeb3React } from "@web3-react/core";

const Wen = () => {
  const [open, setOpen] = useState(true);
  const [pending, setPending] = useState(false);
  const { login } = useAuth();
  const { account } = useWeb3React();

  useEffect(() => {
    if (pending && account) {
      setOpen(false);
    }
  }, [account, pending]);

  return (
    <Content
      maxWidth="xl"
      style={{ paddingTop: 32, paddingLeft: 0, paddingRight: 0 }}
    >
      <ConnectScreen
        imgUrl={"/images/balls/MoonLogo.png"}
        open={open}
        onConnect={async () => {
          login(ConnectorNames.Injected);
          setPending(true);
        }}
        onExit={() => {
          window.location.href = "/buy";
        }}
      />
    </Content>
  );
};

export default Wen;
