import {
  Gallery,
  PackCard,
  Content,
  WiggleBall,
  FilterDashboard,
  TableGrid,
} from "nft-uikit";
import { useAppSelector } from "providers";
import Grid from "@material-ui/core/Grid";
import { useEffect, useMemo, useState } from "react";
import { getPackInfo } from "utils/callHelpers";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { PokemoonPack, PokemoonNft } from "config/constants/nfts/types";
import Container from "@material-ui/core/Container";

const imageUrl = "/images/packs/Blastoff.png";
const name = "Blastoff";

interface FilterState {
  rarities: string[];
  types: string[];
  packs: string[];
  search: string;
}

const renamePack = (name: string) => {
  switch (name) {
    case "Blast-Off!": {
      return "blastOff";
    }
  }
};

const GalleryView = () => {
  const userNfts = useAppSelector(
    (state) => state.user.nftBalance.blastOff.cards
  );

  const [viewState, setViewState] = useState("table");
  const [filterState, setFilterState] = useState<FilterState>({
    rarities: [],
    types: [],
    packs: [],
    search: "",
  });

  const [filterNfts, setFilterNfts] = useState<PokemoonNft[]>();

  useEffect(() => {
    const { rarities, types, packs, search } = filterState;

    //Match up pack names
    const renamedPacks = packs.map((pack) => renamePack(pack));

    //Check all filters
    const filteredNfts = userNfts.filter((nft) => {
      const { type, rarity, set, name } = nft;

      //search
      if (!!search) {
        if (!name?.match(search)) {
          return false;
        }
      }

      //rarities
      if (rarities && rarities.length > 0) {
        if (!rarity || rarities.includes(rarity)) {
          return false;
        }
      }

      //types
      if (types && types.length > 0) {
        if (!type || !types.includes(type)) {
          return false;
        }
      }

      //pack sets
      if (renamedPacks && renamedPacks.length > 0) {
        //@ts-ignore
        if (!set || !renamedPacks.includes(set)) {
          return false;
        }
      }

      return true;
    });
    setFilterNfts(filteredNfts);
  }, [filterState, userNfts]);

  return (
    <Container
      maxWidth="lg"
      style={{
        paddingTop: 30,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <FilterDashboard
        onViewStateChange={(state) => setViewState(state)}
        onTypeFilterChange={(filter) =>
          setFilterState((state) => ({ ...state, types: filter }))
        }
        onRarityFilterChange={(filter) =>
          setFilterState((state) => ({ ...state, rarities: filter }))
        }
        onPackFilterChange={(filter) =>
          setFilterState((state) => ({ ...state, packs: filter }))
        }
        onSearchFilterChange={(filter) => {
          setFilterState((state) => ({ ...state, search: filter }));
        }}
      />
      <Content maxWidth="md">
        {viewState === "grid" ? (
          <Gallery nfts={filterNfts} />
        ) : (
          <TableGrid nfts={filterNfts ?? []} />
        )}
      </Content>
    </Container>
  );
};

export default GalleryView;
