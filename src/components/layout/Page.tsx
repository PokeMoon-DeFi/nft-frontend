import styled from "styled-components";
import Container from "./Container";

const Page = styled(Container)`
  min-height: calc(100vh - 64px);
  max-width: 900px;
  padding-top: 0px;
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    /* padding-top: 24px; */
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    /* padding-top: 32px; */
    padding-bottom: 32px;
  }
`;

export default Page;
