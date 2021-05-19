import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import AMPED_UP_COLLECTION from "config/constants/nfts/2116";
import { PokemoonNft } from "config/constants/nfts/types";
import { FC, useEffect, useState, useMemo } from "react";
import {
  Gallery,
  Content,
  FilterDashboard,
  TableGrid,
  FilterState,
  getFilteredNfts,
  getFlatCollection,
} from "nft-uikit";
import { useParams } from "react-router-dom";
import { getCollection } from "utils/nftHelpers";
import Container from "@material-ui/core/Container";

const nfts: PokemoonNft[] = getFlatCollection();
const PublicGallery: FC = () => {
  const [viewState, setViewState] = useState("grid");
  const [filterState, setFilterState] = useState<FilterState>({
    rarities: [],
    types: [],
    packs: [],
    search: "",
  });

  const filteredNfts = useMemo(() => {
    return getFilteredNfts(nfts, filterState);
  }, [filterState]);

  return (
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        paddingTop: 20,
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
      <Content maxWidth="lg" style={{ justifyContent: "flex-start" }}>
        {viewState === "grid" ? (
          <Gallery pageSize={8} nfts={filteredNfts} />
        ) : (
          <TableGrid nfts={filteredNfts} hidePackId />
        )}
      </Content>
    </Container>
  );
};

export default PublicGallery;
