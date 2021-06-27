import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 880 985"
      width="1.5em"
      height="1.5em"
      {...props}
      style={{ marginBottom: 3 }}
    >
      <path d="M190.4 864.3c6.6-20.4 12.7-39.5 18.9-58.7 23.7-73.7 47.4-147.4 71.3-221 1-3.1.1-4.4-2.2-6.2-87-64.7-174.1-129.5-261.1-194.2-1.7-1.3-3.4-2.6-5-4.9 6.8 0 13.7.1 20.5 0 24.6-.2 49.2-.5 73.8-.7 52.5-.6 104.9-1.1 157.4-1.7 26.2-.3 52.3-.7 78.5-.9 3.9 0 5.5-1.1 6.8-4.9C380.8 273 412.4 174.9 444 76.8c.1-.2.3-.4.8-1.3 2.7 7.3 5.2 14.1 7.7 21 34.6 94.5 69.3 189 103.8 283.6 1.2 3.2 2.6 4.2 6 4.2 45.7-.3 91.3-.3 137-.5 48.8-.2 97.6-.5 146.3-.8h22.1c-16.2 11-31.5 21.4-46.9 31.8-71.3 48.3-142.5 96.7-213.8 145-3.2 2.2-2.4 4.1-1.5 6.7 28.3 81.9 56.5 163.8 84.8 245.7 6.4 18.6 12.8 37.3 19.2 55.9.3.8.5 1.5 1 3.3-9.1-6.4-17.4-12.3-25.7-18.1-77.3-54.8-154.7-109.6-232-164.5-3.5-2.5-5.7-2.8-9.5-.2C360.8 746 278 803.5 195.2 861c-1.2.8-2.5 1.7-4.8 3.3z" />
    </svg>
  );
}

export default SvgComponent;