import Flex from "../Flex";
import styled from "styled-components";
import Button from "../Button";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0px;
`;

const InfoContainer = styled.div`
  background-color: #ffffff;
  flex: 1;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  height: 100%;
  min-width: 240px;
  grid-gap: 15px;
  padding: 15px;
  justify-content: center;
`;

const InfoBox = () => {
  return (
    <Container>
      <InfoContainer>Welcome to the world of Pokemoon!</InfoContainer>
      <ButtonContainer>
        <Button label="CATCH" icon="Backpack" />
        <Button label="BAG" />
        <Button label="LOG OUT" />
        <Button label="BACK" />
      </ButtonContainer>
    </Container>
  );
};

export default InfoBox;
