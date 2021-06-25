import {
  Gallery,
  Content,
  FilterDashboard,
  TableGrid,
  FilterState,
  getFilteredNfts,
} from "nft-uikit";
import { useAppSelector } from "providers";
import { useEffect, useMemo, useState } from "react";
import Container from "@material-ui/core/Container";

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const GalleryView = () => {
  const blastOffCards = useAppSelector(
    (state) => state.user.nftBalance.blastOff.cards,
    (a, b) => a.length === b.length
  );

  const ampedUpCards = useAppSelector(
    (state) => state.user.nftBalance.ampedUp.cards,
    (a, b) => a.length === b.length
  );

  const meanGreenCards = useAppSelector(
    (state) => state.user.nftBalance.meanGreens.cards,
    (a, b) => a.length === b.length
  );

  const [viewState, setViewState] = useState("grid");
  const [filterState, setFilterState] = useState<FilterState>({
    rarities: [],
    types: [],
    packs: [],
    search: "",
  });

  const filterNfts = useMemo(() => {
    return getFilteredNfts(
      [...ampedUpCards, ...blastOffCards, ...meanGreenCards],
      filterState
    );
  }, [filterState, ampedUpCards, blastOffCards, meanGreenCards]);

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
          <Gallery pageSize={8} nfts={filterNfts} />
        ) : (
          <TableGrid
            nfts={filterNfts}
            getRowId={(row) => parseInt(row.tokenId)}
          />
        )}
      </Content>
    </Container>
  );
};

export default GalleryView;
