import styled from "styled-components";
import { Button, BalanceCounter } from "nft-uikit";
import { useAppSelector } from "providers";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import BigNumber from "bignumber.js";

const StyledHeader = styled.div`
  flex-basis: 150px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Header: React.FC = () => {
  const account = useAppSelector((state) => state.user.address);
  const pb2114 = new BigNumber(
    useAppSelector((state) => state.user.balance.pb2114)
  );
  const { login, logout } = useAuth();

  return (
    <StyledHeader>
      {account ? (
        <>
          <Button onClick={() => logout()} style={{ pointerEvents: "auto" }}>
            Log Out
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
      <BalanceCounter
        imgUrl={"/images/balls/MAXRBALL.png"}
        balance={pb2114 ? pb2114.toNumber() : 0}
      />
    </StyledHeader>
  );
};

export default Header;
