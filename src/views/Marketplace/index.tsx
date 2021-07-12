import React, { useState, useMemo, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useAppSelector } from "providers";
import TableGrid from "components/TableGrid/TableGrid";
import Gallery from "components/Gallery/Gallery";
import { FilterDashboard, FilterState } from "components/FilterDashboard";
import { Content } from "components/layout";
import { getFilteredNfts } from "utils";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { ButtonGroup } from "@material-ui/core";
import Button from "components/Button";
import styled from "styled-components";
import useMarket from "hooks/useMarket";
import { PokemoonNft } from "config/constants/nfts/types";
import useNftCollection from "hooks/useNftCollection";

const BuySellButton = styled(Button)`
  .MuiButton-label {
    font-size: 16pt;
  }
`;

const MarketPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const listings = useAppSelector((state) => state.market.listings);
  const collection = useNftCollection();
  const { isBuying, setIsBuying } = useMarket();

  const [filterState, setFilterState] = useState<FilterState>({
    rarities: [],
    types: [],
    packs: [],
    search: "",
  });
  const [viewState, setViewState] = useState("grid");

  const filterNfts = useMemo(() => {
    let nfts: PokemoonNft[] = [];

    if (isBuying) {
      nfts = listings.map((listing) => ({
        ...listing.data,
        price: listing.price,
      }));
    } else {
      nfts = collection.filter(
        (nft) =>
          !listings
            .map((listing) => listing.id.toString())
            .includes(nft.tokenId)
      );
    }

    return getFilteredNfts(nfts, filterState);
  }, [filterState, listings, isBuying, collection]);

  //state cleanup
  useEffect(() => setIsBuying(true), [setIsBuying]);

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
      <img
        width="80%"
        src={
          isMobile
            ? "/images/banners/Marketplace_Mobile.png"
            : "/images/banners/Marketplace_PC.png"
        }
        alt="banner"
        style={{ marginTop: 8 }}
      />
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
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <BuySellButton disabled={isBuying} onClick={() => setIsBuying(true)}>
            Buy
          </BuySellButton>
          <div style={{ width: 40 }} />
          <BuySellButton
            disabled={!isBuying}
            onClick={() => setIsBuying(false)}
          >
            Sell
          </BuySellButton>
        </div>

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
