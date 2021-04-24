import { Content, Page, Particles, WiggleBall } from "nft-uikit";

const Wen = () => {
  window.location.href = "/";
  return (
    <>
      <Particles />
      <Page>
        <Content>
          <WiggleBall src="/images/balls/MAXRBALL.png" />
        </Content>
      </Page>
    </>
  );
};

export default Wen;
