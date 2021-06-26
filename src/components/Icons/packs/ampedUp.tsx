import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 162.59 149"
      width="2em"
      height="2em"
      {...props}
    >
      <g data-name="Layer 2">
        <path
          d="M157.59 0c3 .83 2.74.44 4 3 .81 1.18.78 1.68 1 4-3.12 1.87-11.21 3.32-14 6-2.13 2.05-2.58 7.38-5 9s-8.05.89-11 3l-62 63c.81 3.68 1.64 5.72 5 7 3.55 2.19 9.36-.7 15-1l1 3c.76 1.07.61 1 1 3l-6 7c-7 4.53-16.19 3.46-21 10-10.19 13.86 1.74 32.17-25 32-3.07-1.94-7.37-1.45-11-3-11.53-4.93-19.34-14-25-25-2.56-5-7-13.09-3-19 4.41-13.26 25.76-14.34 36-22 10.94-8.18 7.08-27.41 27-29 1.56 1.5 1.84.78 3 3 .18 3.83-4.91 8.69-5 18l3 1c1.18.8 1.69.77 4 1l50-49c2-1.95 5.56-4.81 7-7l2-7 6-1c6.41-2.74 17.5-5.62 23-10z"
          fillRule="evenodd"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
