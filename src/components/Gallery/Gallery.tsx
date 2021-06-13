import React, { useCallback, useEffect, useRef, useState } from "react";
import { NftCard } from "../Card";
import Grid, { GridProps } from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";
import { PokemoonNft } from "config/constants/nfts/types";

export interface CarouselProps extends GridProps {
  nfts?: Array<PokemoonNft>;
  pageSize?: number;
}

const StyledPagination = styled(Pagination)`
  .MuiPaginationItem-root {
    color: white;
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: #5d3797;
  }
`;

const Gallery: React.FC<CarouselProps> = ({ nfts, pageSize = 8, ...props }) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  //@ts-ignore
  const count = nfts && nfts.length > 0 ? Math.ceil(nfts.length / pageSize) : 0;

  useEffect(() => {
    setPage(1);
  }, [nfts]);

  return (
    <>
      <StyledPagination
        count={count}
        page={page}
        onChange={handleChange}
        style={{ marginBottom: 30, marginTop: 20 }}
        variant={"outlined"}
      />
      <Grid
        container
        spacing={4}
        justify="space-around"
        style={{ height: "100%", alignItems: "center" }}
        {...props}
      >
        {nfts
          ?.filter(
            (nft, index) =>
              index >= (page - 1) * pageSize && index <= page * pageSize - 1
          )
          .map((nft, index) => (
            <Grid
              item
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              xl={"auto"}
              key={index}
            >
              <NftCard
                nft={nft}
                imageUrl={nft.imageUrl}
                key={index.toString()}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Gallery;
