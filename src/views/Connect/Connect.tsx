import { Content, Page, Particles, WiggleBall, ConnectScreen } from "nft-uikit";
import { useState, useEffect } from "react";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import { useAppSelector } from "providers";

const Connect = () => {
  const [open, setOpen] = useState(true);
  const [pending, setPending] = useState(false);
  const { login } = useAuth();
  const account = useAppSelector((state) => state.user.address);

  useEffect(() => {
    if (pending && account) {
      setOpen(false);
    }
  }, [account, pending]);

  return (
    <Content maxWidth="xl" style={{ paddingLeft: 0, paddingRight: 0 }}>
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

export default Connect;
