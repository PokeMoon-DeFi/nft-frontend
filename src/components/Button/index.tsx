import React from "react";
import {
  default as MaterialButton,
  ButtonProps,
} from "@material-ui/core/Button";
import styled from "styled-components";

const StyledButton = styled(MaterialButton)`
  background: #321133;
  color: white;
  border-radius: 83px;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  border: 1px solid #c139c5;
  border-width: 2px;
  border-style: solid;

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
      .MuiButton-startIcon {
        fill: black;
      }
    }
  }
  &:active {
    background-color: white;
    color: black;
    transition: 0.5s ease;
    transform: scale(1.1, 1.1);
    transition: 0.1s ease;
  }
  .MuiButton-startIcon {
    fill: white;
  }
`;

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <StyledButton variant="outlined" {...props} />;
};

export default Button;
