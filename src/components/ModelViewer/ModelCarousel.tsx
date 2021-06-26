import { FC, useEffect, useState } from "react";
import ModelViewer from "./ModelViewer";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CSS from "csstype";
import { PokemoonNft } from "config/constants/nfts/types";

type DivProps = JSX.IntrinsicElements["div"];

interface ModelCarouselProps extends DivProps {
  nfts: PokemoonNft[];
  modelViewerStyle?: CSS.Properties;
  loadingBall?: string;
}

const StyledButton = styled(IconButton)`
  background: #321133;
  color: white;
  border-radius: 83px;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  border: 1px solid #c139c5;
  border-width: 2px;
  border-style: solid;
  height: 40px;

  &:disabled {
    color: white;
  }

  span {
    text-transform: none;
    white-space: nowrap;
  }

  @media (hover: hover) {
    &:hover {
      background-color: white;
      color: black;
      transition: 0.14s ease;
    }
  }
  @media (hover: none) {
    &:hover {
      background-color: #321133;
      color: white;
      transition: 0.14s ease;
    }
  }
  &:active {
    background: white;
    color: black;
    transition: 0.5s ease;
    transform: scale(1.1, 1.1);
    transition: 0.1s ease;
  }
`;

const ModelCarousel: FC<ModelCarouselProps> = ({
  nfts,
  loadingBall,
  ...props
}) => {
  const { style, modelViewerStyle } = props;
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [activeNft, setActiveNft] = useState(nfts[index]);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onPrevClick = () => {
    if (index <= 0) {
      setIndex(nfts.length - 1);
    } else setIndex((val) => val - 1);
  };

  const onNextClick = () => {
    if (index >= nfts.length - 1) {
      setIndex(0);
    } else setIndex((val) => val + 1);
  };

  useEffect(() => {
    setActiveNft(nfts[index]);
  }, [index, setActiveNft, nfts]);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        ...style,
      }}
    >
      <ModelViewer
        nft={activeNft}
        showUI
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        style={modelViewerStyle}
        loadingBall={loadingBall}
      />
    </div>
  );
};

export default ModelCarousel;
