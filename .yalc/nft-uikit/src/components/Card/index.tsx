import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";

interface StyledCardProps {
  cardId?: string;
  active?: boolean;
  onClick?: () => void;
}

interface CardHandle {
  setFocus: (active: boolean) => void;
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: #17141d;
  border-radius: 10px;

  /*   margin-left: -50px; */
  /* transition: 0.4s ease-out; */
  position: relative;
  left: 0px;
  background: ${({ cardId }) => {
    cardId = cardId ?? "001meownautC.png";
    return "url(cards/" + cardId + ")";
  }};

  background-size: cover;
  width: 200px;
  aspect-ratio: 746/1038;
  flex: 0 0 auto;

  ${({ active }) => {
    if (active) {
      return "box-shadow: 10px 5px 5px red;";
    } else return "box-shadow: -1rem 0 3rem #000;";
  }}

  &:not(::first-child) {
    margin-left: -50px;
  }
  &:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }
  &:hover ~ & {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }
`;

const Card = React.forwardRef<CardHandle, StyledCardProps>((props, ref) => {
  const cardRef = useRef();
  const [active, setActive] = useState(false);
  useImperativeHandle(ref, () => ({
    setFocus: (active) => {
      setActive(active);
    },
  }));
  //@ts-ignore
  return <StyledCard ref={cardRef} {...props} active={active} />;
});

export default Card;
