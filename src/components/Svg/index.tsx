import styled from "styled-components";
import { SVGAttributes } from "react";
export interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {}

const Svg = styled.svg<SvgProps>`
  fill: "black";
  flex-shrink: 0;
`;

Svg.defaultProps = {
  width: "20px",
  xmlns: "http://www.w3.org/2000/svg",
};

export default Svg;
