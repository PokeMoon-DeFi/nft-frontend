import React, { Suspense, FC, useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import NftInfo from "../NftInfo";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, useAnimations, useDetectGPU } from "@react-three/drei";
import { InspectorDialogProps } from "components/Modal/InspectorModal";
import { ModelViewer } from "components/ModelViewer";

interface CardModelProps {
  glbUrl: string;
}

const CardModel: FC<CardModelProps> = ({ glbUrl }) => {
  const gltf = useGLTF(glbUrl);

  const { ref, mixer, names, actions } = useAnimations(gltf.animations);

  useEffect(() => {
    for (const name of names) {
      actions[name].play();
    }
  }, [ref, mixer, names, actions]);

  return <>{gltf && <primitive object={gltf.scene} ref={ref} />}</>;
};

export const InspectCard: React.FC<InspectorDialogProps> = ({
  nft,
  handleClose,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const bi = `url("/images/types/${nft?.type}${
    matches ? "wide 1" : "tall 1"
  }.png")`;

  const { tier } = useDetectGPU() ?? { tier: undefined };
  const [gpuPending, setGpuPending] = useState(true);
  const renderGPU = useMemo(() => {
    if (gpuPending) return true;
    else {
      return !!tier && tier > 0;
    }
  }, [gpuPending, tier]);

  useEffect(() => {
    if (!!tier) {
      setGpuPending(false);
    }
  }, [tier, setGpuPending]);

  return (
    <Grid
      justify="center"
      spacing={6}
      container
      style={{
        backgroundImage: bi,
        backgroundSize: "cover",
        padding: 40,
        alignItems: "center",
        overflow: "auto",
        flex: 1,
      }}
    >
      <Grid
        item
        style={{
          flex: 1,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          maxWidth: 600,
        }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <ModelViewer nft={nft} style={{ width: "100%" }} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          flex: 1,
          maxWidth: 500,
        }}
      >
        <NftInfo handleClose={handleClose} nft={nft} />
      </Grid>
    </Grid>
  );
};

export default InspectCard;
