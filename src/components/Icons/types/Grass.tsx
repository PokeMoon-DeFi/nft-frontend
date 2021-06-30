import React from "react";
import Svg, { SvgProps } from "../../Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 985" {...props}>
      <path d="M453.7 294.3c27.6-22.3 57.2-43.1 88.5-62.7-4.4 5.7-8.9 11.4-13.3 17.1-104.1 134.9-189.6 279.8-236 445.3-14.3 50.8-23.4 103.2-25.3 156-.6 17-.5 34.1.4 51.1.5 9.6.2 19.3 1.8 28.8 1.5 8.6 5.7 18.2 14.8 20.9 8.2 2.4 16.8 4.5 25.4 3.8 14.5-1.1 23.7-11.1 27.2-24.8 1.6-6.2 2.1-12.6 2.2-19 .4-50.7 4.3-101.4 6.6-152.1.5-10.6 4.7-15.7 16.1-17.5 19.3-3 38.4-7.6 57.2-13 65.4-18.8 126.6-45.6 175.5-95.3 52.2-53 68.7-118.9 66.6-190.4-1.5-54.4-6.9-108.7-9.6-163.1-4-84.5 10.2-164.9 56.6-237.4-.6-1.1-1.2-2.1-1.8-3.2-19.3 2.2-39.3 1.6-57.6 7-157.7 46.1-301 118.4-416.1 238-68.5 71.2-108.4 155.5-99.4 257.4 5.4 61.2 29.8 115 67.7 165.9 20.6-101.2 59-189.2 113-265.6 0 0-40.9-45.4-22.3-108.7 0 0 15.8 61.6 45.1 78.3 25.5-32.1 59.3-70.2 90.6-98.2 0 0-24.6-45.2 11.1-82.5-.1 0-4.4 49.2 15 63.9z" />
    </Svg>
  );
};

export default Icon;
