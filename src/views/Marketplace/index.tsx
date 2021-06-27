import React, { useState, useMemo } from "react";
import Container from "@material-ui/core/Container";
import { useAppSelector } from "providers";
import TableGrid from "components/TableGrid/TableGrid";
import Gallery from "components/Gallery/Gallery";
import { FilterDashboard, FilterState } from "components/FilterDashboard";
import { Content } from "components/layout";
import { getFilteredNfts } from "utils";

const MarketPage = () => {
  const listings = useAppSelector((state) => state.market.listings);

  const [filterState, setFilterState] = useState<FilterState>({
    rarities: [],
    types: [],
    packs: [],
    search: "",
  });
  const [viewState, setViewState] = useState("grid");

  const filterNfts = useMemo(() => {
    const nfts = listings.map((listing) => ({
      ...listing.data,
      price: listing.price,
    }));

    return getFilteredNfts(nfts, filterState);
  }, [filterState, listings]);

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

export default MarketPage;
