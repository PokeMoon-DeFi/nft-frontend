import { PokemoonNft } from "config/constants/nfts/types";
import { FC, useState, useMemo } from "react";
import { FilterState, FilterDashboard } from "components/FilterDashboard";
import { getFlatCollection, getFilteredNfts } from "utils/nftHelpers";
import Container from "@material-ui/core/Container";
import { Content } from "components/layout";
import { Gallery } from "components/Gallery";
import { TableGrid } from "components/TableGrid";

const nfts: PokemoonNft[] = getFlatCollection([
  "blastOff",
  "ampedUp",
  "meanGreens",
]);

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
        marginBottom: 60,
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
      <Content
        maxWidth="lg"
        style={{ justifyContent: "flex-start", marginBottom: 100 }}
      >
        {viewState === "grid" ? (
          <Gallery
            pageSize={8}
            nfts={filteredNfts}
            style={{ marginBottom: 50 }}
          />
        ) : (
          <TableGrid nfts={filteredNfts} hidePackId />
        )}
      </Content>
    </Container>
  );
};

export default PublicGallery;
