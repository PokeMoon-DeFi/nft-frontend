import { PropsWithChildren } from "react";
export interface FlexProps {
    width: number;
    height: number;
}
declare const FlexContainer: ({ children, width, height, ...props }: PropsWithChildren<FlexProps>) => JSX.Element;
export default FlexContainer;
