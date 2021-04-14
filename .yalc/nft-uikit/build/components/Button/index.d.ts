import React from "react";
import "./button.css";
import { ButtonBaseProps } from "@material-ui/core";
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
/**
 * Primary UI component for user interaction
 */
declare const Button: React.FC<ButtonProps>;
export default Button;
