import styled from "styled-components";
import { Button, BalanceCounter } from "nft-uikit";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector } from "providers";

const StyledHeader = styled.div`
  flex-basis: 200px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Header: React.FC = () => {
  const { account } = useWeb3React();
  const { pb2114 } = useAppSelector((state) => state.user.balance);

  return (
    <StyledHeader>
      {account ? (
        <p style={{ color: "white" }}>{account}</p>
      ) : (
        <Button label="connect" icon="Backpack" />
      )}
      <BalanceCounter
        imgUrl={"images/balls/MAXRBALL.png"}
        balance={pb2114 ? pb2114.toNumber() : 0}
      />
    </StyledHeader>
  );
};

export default Header;
