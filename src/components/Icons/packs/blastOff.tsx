import * as React from "react";
import Svg, { SvgProps } from "../../Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 127.3 166.7"
      {...props}
    >
      <path d="M20.2 9.9s-3.3-1.3-4.7 2.5-.6 52.3 24.4 91.4L33 120.5s-4.7 6.3 2.2 15.7c6.9 9.4 18.2 21 18.2 21s4.1 4.4 4.1 0-7.8-21.5-.8-29.3l5.6 6.2s2.7 3.1 6.8 1 19.6-9.1 19.6-9.1 2.5-2.1 1.9-4.1-2.7-9.1-2.7-9.1 10.9-2.5 19.1 11.5 7.4 10.3 7 5.6c-.4-4.7-2.9-29.2-13.2-35.6-10.3-6.4-21.9-8.4-21.9-8.4s-27.8-60.2-58.7-76z" />
    </Svg>
  );
};

export default Icon;
