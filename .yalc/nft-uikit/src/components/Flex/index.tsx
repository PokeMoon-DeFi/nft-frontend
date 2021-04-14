import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface FlexProps {
  width: number;
  height: number;
}

const StyledFlex = styled.div`
  display: flex;
  flex: auto;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
`;

const FlexContainer = ({
  children,
  width,
  height,
  ...props
}: PropsWithChildren<FlexProps>) => {
  return (
    <StyledFlex {...props} style={{ width, height }}>
      {children}
    </StyledFlex>
  );
};

export default FlexContainer;
