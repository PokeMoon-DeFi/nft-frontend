import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path
        fill="rgb(238 39 255)"
        d="M0 192l40-5.3C80 181 160 171 240 144c80-27 160-69 240-85.3C560 43 640 53 720 80s160 69 240 85.3c80 15.7 160 5.7 240-10.6 80-15.7 160-37.7 200-48l40-10.7V0H0z"
      />
    </svg>
  );
}

export default SvgComponent;
