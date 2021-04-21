import { Page, WiggleBall } from "nft-uikit";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <WiggleBall src="/images/balls/MAXRBALL.png" />
    </Wrapper>
  );
};

export default PageLoader;
