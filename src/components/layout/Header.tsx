import styled from "styled-components";
import { Button, BalanceCounter } from "nft-uikit";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector } from "providers";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";

const StyledHeader = styled.div`
  flex-basis: 150px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Header: React.FC = () => {
  const { account } = useWeb3React();
  const { pb2114 } = useAppSelector((state) => state.user.balance);
  const { login, logout } = useAuth();

  return (
    <StyledHeader>
      {account ? (
        <>
          <Button
            label="Logout"
            icon="Backpack"
            onClick={() => logout()}
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
      <BalanceCounter
        imgUrl={"/images/balls/MAXRBALL.png"}
        balance={pb2114 ? pb2114.toNumber() : 0}
      />
    </StyledHeader>
  );
};

export default Header;
