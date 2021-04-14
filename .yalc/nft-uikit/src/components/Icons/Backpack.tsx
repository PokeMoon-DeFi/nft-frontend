import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../Svg";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      width={45}
      height={50}
      viewBox="0 0 90 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M78.946 63.426V43.157a13.01 13.01 0 005.263-10.473V18.42a7.895 7.895 0 00-7.895-7.895h-18.42V7.895A7.895 7.895 0 0049.999 0H39.473a7.894 7.894 0 00-7.895 7.895v2.631h-18.42a7.895 7.895 0 00-7.895 7.895v14.263a13.01 13.01 0 005.263 10.473v20.269A13.157 13.157 0 000 76.315v15.679a7.894 7.894 0 007.895 7.894h.168l12.6-.268c.985.264 2.001.391 3.02.379h42.105c1.012.014 2.022-.11 3-.368l12.6.268h.19a7.895 7.895 0 007.894-7.895V76.315a13.158 13.158 0 00-10.526-12.89zM36.842 7.895a2.632 2.632 0 012.631-2.632h10.526a2.631 2.631 0 012.632 2.632v2.631H36.84V7.895zM10.526 18.42a2.632 2.632 0 012.632-2.632h63.156a2.631 2.631 0 012.632 2.632v14.263a7.894 7.894 0 01-3.526 6.579l-.79.473-.052.053c-.158 0-.264.105-.421.158a139.828 139.828 0 01-11 4v-2.21a2.632 2.632 0 00-5.263 0v3.736a55.92 55.92 0 01-13.158 1.895 55.922 55.922 0 01-13.158-1.895v-3.737a2.632 2.632 0 00-5.263 0v2.21a139.828 139.828 0 01-11-3.999c-.157-.053-.263-.158-.42-.158l-.053-.053-.79-.473a7.896 7.896 0 01-3.526-6.58V18.422zM7.947 94.625a3.078 3.078 0 01-1.894-.752 2.63 2.63 0 01-.79-1.88V76.316a7.894 7.894 0 015.263-7.41V86.84a13 13 0 002.469 7.674l-5.048.11zm36.79.11H23.683c-.53 0-1.06-.052-1.58-.157l-.141-.047a7.931 7.931 0 01-6.174-7.69V45.79c3.21 1.263 6.79 2.579 10.526 3.684v3.21a2.632 2.632 0 005.263 0v-1.789a56.346 56.346 0 0012.632 1.684c.171.047.349.064.526.053.177.009.355-.01.526-.053a56.345 56.345 0 0012.632-1.684v1.79a2.632 2.632 0 005.263 0v-3.21c3.737-1.106 7.316-2.422 10.526-3.685v41.052a7.931 7.931 0 01-6.147 7.69l-.142.047a8.035 8.035 0 01-1.58.158H44.737zm39.472-2.741a2.632 2.632 0 01-.79 1.879 3.158 3.158 0 01-1.894.752l-5.047-.11a13 13 0 002.468-7.674V68.905a7.895 7.895 0 015.263 7.41v15.679zM63.157 71.052a2.632 2.632 0 01-2.632 2.631H28.947a2.631 2.631 0 110-5.263h31.578a2.631 2.631 0 012.632 2.632z"
        fill="#EDC473"
      />
    </Svg>
  );
};

export default Icon;
