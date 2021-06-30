import React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 880 985"
      {...props}
    >
      <path d="M298.2 956c6.9-28.4 13.9-56.7 20.8-85.1 19.9-81.7 39.7-163.4 59.5-245.1 8.2-33.7 8.1-33.8-27-33.9-83.5-.1-166.9 0-254 0L559.1 41.6l-79.9 340.3c-6.1 23.9-6.1 24 19.2 23.9 82.2-.3 164.5-.6 246.7-.8L298.2 956z" />
    </SvgIcon>
  );
};

export default Icon;
