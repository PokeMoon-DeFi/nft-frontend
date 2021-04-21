import { Content, Page, Particles, WiggleBall } from "nft-uikit";

const Wen = () => {
  return (
    <>
      <Particles />
      <Page
        style={{ pointerEvents: "auto" }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <Content>
          <WiggleBall src="/images/balls/MAXRBALL.png" />
        </Content>
      </Page>
    </>
  );
};

export default Wen;
