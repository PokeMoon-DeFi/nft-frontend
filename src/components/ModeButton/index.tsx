import Button from "@material-ui/core/Button";
import styled from "styled-components";

const ModeButton = styled(Button)`
  .MuiButton-label {
    font-size: 16pt;
    transform: skew(21deg);
  }
  background: transparent;
  color: white;
  border-radius: 4px;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  border: 1px solid #c020c5;
  border-width: 2px;
  border-style: solid;
  transform: skew(-21deg);
  display: inline-block;
  box-shadow: 2px 4px 4px #f4a9f7;

  &:disabled {
    color: white;
    background: #cf2bc2;
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
    transform: skew(-21deg) translateY(10px);
  }
  .MuiButton-startIcon {
    fill: white;
  }
  &:disabled {
    background: #cf2bc2;
  }
`;

export default ModeButton;
