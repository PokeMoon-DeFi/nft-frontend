import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../providers/state/hooks";
import { asyncFetchIds } from "../../providers/state/CarouselState";
import { useSpring, animated } from "react-spring";
import Card from "../Card";
import styled from "styled-components";

import { useGesture } from "react-use-gesture";

const StyledContainer = styled(animated.div)`
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 50px 10px;
  position: relative;
  -webkit-overflow-scrolling: touch;
`;

const Overlay = styled(animated.div)`
  background-color: red;
  position: fixed;
  background-attachment: fixed;
  top: 0;
  /* bottom: 0; */
  left: 0;
  /* right: 0; */

  width: 100%;
  height: 100%;
  flex: 1;
  z-index: 0;
  opacity: 0.2;
  /* transform: translateZ(1); */
`;

const Carousel: React.FC = () => {
  const nfts = useAppSelector((state) => state.carousel?.nfts);
  const [consumeClick, setConsumeClick] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const dispatch = useDispatch();

  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });

  // useEffect(() => {
  //   dispatch(asyncFetchIds(1));
  // }, [dispatch]);

  const cardRefs = useRef<any[]>([]);
  const cardCallback = useCallback(
    (idx) => {
      console.log({ idx });
      if (consumeClick) {
        setConsumeClick(false);
        return;
      }
      if (idx === activeIndex) {
        cardRefs.current[activeIndex]?.setFocus(false);
        setActiveIndex(-1);
      } else {
        cardRefs.current[idx]?.setFocus(true);
        if (activeIndex !== -1) {
          cardRefs.current[activeIndex]?.setFocus(false);
        }
        setActiveIndex(idx);
      }
    },
    [activeIndex, consumeClick, cardRefs]
  );

  const ref = useRef(null);
  const [{ scrollLeft }, setSpringSroll] = useSpring(() => ({
    scrollLeft: 0,
  }));

  const bind = useGesture(
    {
      onDrag: ({ movement: [x] }) => {
        const res = scrollLeft.get() - x / 2.5;
        setSpringSroll({ scrollLeft: res });
      },
      onDragEnd: ({ event }) => {
        setConsumeClick(true);
      },
      onWheel: ({ event }) => {
        const res = scrollLeft.get() + event.deltaY * 1.5;
        setSpringSroll({ scrollLeft: res });
      },
    },
    {
      drag: { delay: 200 },
      domTarget: ref,
      eventOptions: { passive: false },
    }
  );

  return (
    <StyledContainer
      {...bind()}
      style={{ touchAction: "pan-y" }}
      ref={ref}
      scrollLeft={scrollLeft}
    >
      {/* <Overlay style={spring} /> */}

      {nfts?.map((nft, index) => (
        <Card
          cardId={nft.imageUrl}
          key={index.toString()}
          onClick={() => cardCallback(index)}
          // active={activeIndex === index}
          ref={(r) => (cardRefs.current[index] = r)}
        />
      ))}
    </StyledContainer>
  );
};

export default Carousel;
