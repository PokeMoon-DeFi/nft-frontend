import { FC, useState, useMemo, useEffect, Suspense } from "react";
import { CanvasTextureProps } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  useAnimations,
  useDetectGPU,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { WiggleBall } from "components/Loading";
import styled from "styled-components";
import { PokemoonNft } from "config/constants/nfts/types";

type DivProps = JSX.IntrinsicElements["div"];

export interface ModelViewerProps extends DivProps {
  nft: PokemoonNft;
  showUI?: boolean;
  onPrevClick?: () => void;
  onNextClick?: () => void;
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

interface CardModelProps {
  glbUrl: string;
}

const CardModel: FC<CardModelProps> = ({ glbUrl }) => {
  const gltf = useGLTF(glbUrl);

  const { ref, mixer, names, actions } = useAnimations(gltf.animations);

  const scene = gltf.scene.clone(true);

  useEffect(() => {
    for (const name of names) {
      actions[name].play();
    }
  }, [ref, mixer, names, actions, glbUrl, gltf]);

  return <>{gltf && <primitive object={scene} ref={ref} dispose={null} />}</>;
};

const ModelViewer: FC<ModelViewerProps> = ({ nft, loadingBall, ...props }) => {
  const { glbUrl, imageUrl, name } = nft;
  const { style, onPrevClick, onNextClick, showUI } = props;
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
    <div
      style={{
        backgroundColor: renderGPU ? "black" : "transparent",
        border: renderGPU ? "8px outset #da52de" : "none",
        position: "relative",
        display: "flex",
        height: 500,
        touchAction: "none",
        ...style,
      }}
    >
      {showUI && (
        <>
          <div
            style={{
              position: "absolute",
              zIndex: 1,
              flexBasis: 0.2,
              color: "white",
              fontSize: 24,
              padding: 20,
            }}
          >
            {name}
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              bottom: 0,
              display: "flex",
              justifyContent: "space-around",
              marginBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <StyledButton onClick={onPrevClick}>
              <ArrowBackIosIcon />
            </StyledButton>
            <StyledButton onClick={onNextClick}>
              <ArrowForwardIosIcon />
            </StyledButton>
          </div>
        </>
      )}
      {renderGPU && !!glbUrl ? (
        <Canvas {...props} style={{ backgroundColor: "black", flex: 1 }}>
          <PerspectiveCamera position={[0, 1.3, 3]} makeDefault />
          <OrbitControls target={new THREE.Vector3(0, 1.3, 0)} />
          <directionalLight
            intensity={0.3}
            position={new THREE.Vector3(-1, -1, 3)}
          />
          <directionalLight
            intensity={0.3}
            position={new THREE.Vector3(1, 1, 3)}
          />
          <directionalLight
            intensity={0.3}
            position={new THREE.Vector3(0, 0, -1)}
          />
          <Stars />
          <Suspense
            fallback={
              <Html fullscreen>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <WiggleBall
                    src={loadingBall ?? "/images/balls/MoonLogo.png"}
                  />
                </div>
              </Html>
            }
          >
            {/* @ts-ignore */}
            <CardModel glbUrl={glbUrl} />
          </Suspense>

          <EffectComposer>
            <BrightnessContrast brightness={0.2} contrast={0.4} />
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={1}
              height={80}
              intensity={0.3}
            />
          </EffectComposer>
        </Canvas>
      ) : (
        !gpuPending &&
        !renderGPU && (
          <img width={250} src={`/images/cards/${imageUrl}`} alt={imageUrl} />
        )
      )}
    </div>
  );
};

export default ModelViewer;
