import { Gallery, PackCard, Content } from "nft-uikit";
import { useAppSelector } from "providers";
import Grid from "@material-ui/core/Grid";

const pack = { packId: "0", imgUrl: "/images/packs/blastoff.png" };
const packs = new Array(13).fill(pack);

const GalleryView = () => {
  const nfts = useAppSelector((state) => state.user.nfts);
  return (
    <Grid container spacing={2} justify="center">
      {packs.map((pack, index) => (
        <Grid item key={index.toString()}>
          <PackCard
            pack={pack}
            onPackSelected={(id) => {
              window.location.href = `/pack/${id}`;
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryView;
