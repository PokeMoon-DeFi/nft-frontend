import React from "react";
import "./button.css";
import { ButtonBase, ButtonBaseProps } from "@material-ui/core";
import { Backpack, Buy } from "../Icons";
import styled from "styled-components";

export interface ButtonProps extends ButtonBaseProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  icon?: string;
}

const StyledButton = styled(ButtonBase)`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 83px;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  padding: 10px 25px;
  flex: auto;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.33s ease;
  }
`;

const getIcon = (name: string | undefined) => {
  switch (name) {
    case "Backpack":
      return Backpack;
    case "Buy":
      return Buy;
    default:
      return null;
  }
};

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  label,
  icon,
  ...props
}) => {
  const ButtonIcon = getIcon(icon);

  return (
    <StyledButton {...props}>
      {label}
      {ButtonIcon ? <ButtonIcon width={40} /> : null}
    </StyledButton>
  );
};

export default Button;
