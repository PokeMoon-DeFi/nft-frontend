import styled from "styled-components";

const BalanceCounter = styled.div`
  width: 50%;
  max-width: 400px;
  height: 3rem;
  justify-content: space-between;
  position: relative;
  align-items: center;
  flex: 1;
  display: flex;
  padding: 6px 24px;
  background: linear-gradient(
    120deg,
    #111111 0%,
    #111111 33%,
    #ffffff 33.3%,
    #ffffff 100%
  );
`;

const StyledPBall = styled.img`
  aspect-ratio: 1;
  height: 65%;
  text-align: center;
  position: absolute;
  left: 9%;
`;

const StyledLabel = styled.span`
  position: absolute;
  right: 17%;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
`;

interface BalanceCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  imgUrl: string;
  balance: number;
}

const BalanceContainer = (props: BalanceCounterProps) => {
  return (
    <BalanceCounter>
      <StyledPBall src={props.imgUrl} />
      <StyledLabel>{props.balance.toFixed(4)}</StyledLabel>
    </BalanceCounter>
  );
};

export default BalanceContainer;
