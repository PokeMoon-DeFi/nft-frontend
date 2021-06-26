import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import styled from "styled-components";
import { FC } from "react";

const StyledSvgIcon = styled(SvgIcon)``;

const SvgWrapper: FC<SvgIconProps> = (props) => {
  return <StyledSvgIcon {...props} />;
};

export default SvgWrapper;
