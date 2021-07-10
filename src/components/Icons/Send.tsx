import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M22.9 13.2c2.2.8 4.2 2.2 6.2 3.3 116 65.6 232.1 131.3 348 197.1 3.4 1.9 8.3 6.7 7.8 9-.9 3.5-5.4 7.3-9.2 8.7-29.4 11.1-58.9 21.9-88.5 32.4-5.9 2.1-8.9 5.4-10.8 11.2-11.5 34.5-23.2 69-35.3 103.4-1.3 3.7-4.5 8.8-7.5 9.4-3 .5-7.7-3.3-10.1-6.4-16.9-22.2-33.6-44.6-49.9-67.2-3.9-5.4-7-6.8-13.5-3.9-24.6 11.1-49.5 21.6-74.3 32.3-11 4.7-13.9 3.1-16.1-8.7-15.9-85.3-31.6-170.5-47.4-255.7-3.5-19.1-7-38.1-10.5-57.2-.2-6.7 4.7-10.2 11.1-7.7zm60.7 313.5c40-17.1 78.8-33.7 118.8-50.8-56.1-74.7-112-149-167.8-223.3l-1.5.6C49.9 144.1 66.7 235 83.6 326.7zM76.4 60.6c-.4.3-.7.6-1.1 1 1.3 1.5 2.4 3.2 3.9 4.5 63.5 60.4 127 120.7 190.4 181.1 4 3.8 7.2 4.5 12.3 2.6 23.1-8.7 46.3-17 69.5-25.5 2.4-.9 4.7-2 8-3.5-95-53.8-189-107-283-160.2zm21.1 50.6C137 163.8 176.6 216.3 215.9 269c3.5 4.7 6 10.8 7.1 16.6 4.1 20.4 7.5 41 11.5 63.5 1.6-3.7 2.6-5.5 3.3-7.5 8.3-24.2 16.6-48.3 24.5-72.6.9-2.8.1-7.8-1.9-9.7-56.7-54.2-113.6-108.1-170.5-162.1-.4-.4-1-.6-1.5-.9-.4.3-.8.7-1.3 1 3.5 4.7 6.9 9.3 10.4 13.9zm84.9 189.6c11.9 16 23.3 31.4 34.6 46.7.5-.2 1.1-.4 1.6-.6-3.3-18.6-6.5-37.2-10-56.9-9.1 3.8-17.2 7.1-26.2 10.8z" />
    </svg>
  );
}

export default SvgComponent;
