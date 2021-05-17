import React, { FC } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { Button } from "nft-uikit";

interface InfoBoxProps {
  content: string;
  title: string;
  icon: React.ReactElement;
  href?: string;
  buttonLabel?: string;
}

const StyledPaper = styled(Paper)`
  max-width: 40ch;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-radius: 16px;
  border: 2px black dashed;
  justify-content: space-space-evenly;
`;

const Title = styled(Typography)`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Content = styled(Typography)`
  text-align: center;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const InfoBox: FC<InfoBoxProps> = ({
  icon,
  content,
  title,
  href,
  buttonLabel,
}) => {
  return (
    <StyledPaper elevation={11}>
      {icon ? icon : null}
      <Title>{title}</Title>
      <Content>
        {content}{" "}
        {href && <Button style={{ marginTop: 26 }}>{buttonLabel}</Button>}
      </Content>
    </StyledPaper>
  );
};

export default InfoBox;
