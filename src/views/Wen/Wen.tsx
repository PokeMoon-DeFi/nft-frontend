import { Content, Page, Particles, WiggleBall } from "nft-uikit";

const Wen = () => {
  return (
    <>
      <Particles />
      <Page>
        <Content>
          <WiggleBall
            src="/images/balls/MAXRBALL.png"
            onClick={() => (window.location.href = "/buy")}
          />
        </Content>
      </Page>
    </>
  );
};

export default Wen;
