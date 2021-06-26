import * as React from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgComponent({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      id="prefix__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 1048 400"
      xmlSpace="preserve"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <style>
        {
          ".prefix__st0{fill:#6475d8}.prefix__st1{fill:#fff}.prefix__st21{clip-path:url(#prefix__XMLID_3_)}.prefix__st25{fill:#00b9d8}.prefix__st55{opacity:.58}.prefix__st79{opacity:.56}.prefix__st103{opacity:.53}.prefix__st190{clip-path:url(#prefix__XMLID_165_)}.prefix__st355{clip-path:url(#prefix__XMLID_327_)}"
        }
      </style>
      <g id="prefix__XMLID_12875_">
        <path
          className="prefix__st0"
          d="M255.3 304.7c-42.7 0-77.4-34.7-77.4-77.4s34.7-77.4 77.4-77.4 77.4 34.7 77.4 77.4c.1 42.6-34.6 77.4-77.4 77.4zm0-133.9c-31.1 0-56.4 25.3-56.4 56.4s25.3 56.4 56.4 56.4c31.1 0 56.4-25.3 56.4-56.4s-25.2-56.4-56.4-56.4z"
          id="prefix__XMLID_12908_"
        />
        <path
          className="prefix__st0"
          d="M702 289.4c-42.7 0-77.4-34.7-77.4-77.4s34.7-77.4 77.4-77.4 77.4 34.7 77.4 77.4c.1 42.6-34.7 77.4-77.4 77.4zm0-133.9c-31.1 0-56.4 25.3-56.4 56.4s25.3 56.4 56.4 56.4c31.1 0 56.4-25.3 56.4-56.4s-25.3-56.4-56.4-56.4z"
          id="prefix__XMLID_12907_"
        />
        <path
          className="prefix__st0"
          d="M817 296.6c-4.4 0-8.9-.4-13.5-1.2-42.1-7.4-70.2-47.7-62.8-89.7 7.4-42.1 47.7-70.2 89.7-62.8 42.1 7.4 70.2 47.7 62.8 89.7-6.6 37.5-39.3 64-76.2 64zm0-133.9c-26.9 0-50.7 19.3-55.5 46.6-5.4 30.6 15.1 60 45.8 65.4 3.3.6 6.6.9 9.8.9 26.9 0 50.7-19.3 55.5-46.6 5.4-30.6-15.1-60-45.8-65.4-3.3-.6-6.6-.9-9.8-.9z"
          id="prefix__XMLID_12906_"
        />
        <path
          id="prefix__XMLID_12905_"
          className="prefix__st1"
          d="M98.1 186.7l-22.5 6L60.2 121l9-2.4c45.6-12.9 79.8-19.5 104.2-19.5 12.6 0 22.5 1.8 30.3 5.4 22.2 10.2 36.3 29.7 41.7 57.9v.6c5.4 41.4-17.4 73.5-67.8 95.5l7.8 66.3-49.8 8.7-37.5-146.8zm69 4.8c11.7-6.6 18-13.2 17.4-18.6-1.8-5.4-3.9-6-4.8-6.3-.3 0-.9-.3-2.7-.3-2.7 0-6.9.3-14.4 2.1l4.5 23.1z"
        />
        <path
          id="prefix__XMLID_12904_"
          className="prefix__st0"
          d="M173.4 109c11.1 0 19.8 1.5 26.1 4.5 19.2 9 31.2 25.8 36.3 50.7 5.1 38.4-18 67.8-68.7 87.7l7.5 64.2-31.5 5.4-37.8-147.1-21.9 6L72 128.2c44.4-12.6 78-19.2 101.4-19.2m-13.8 97.2c24.9-11.1 36.3-23.1 34.5-35.4-2.1-7.2-6-11.7-11.4-13.5-1.5-.6-3.3-.6-5.7-.6-6 0-14.4 1.5-25.8 4.8l8.4 44.7m13.8-116.7c-25.2 0-60.3 6.6-106.9 19.8l-17.7 5.1 3.9 18 11.4 52.2 4.5 20.4 20.1-5.4 2.7-.6 32.1 127.6 4.5 17.7 18-3 31.5-5.4 18.3-3.3-2.1-18.6-5.7-49.8c62.1-29.4 70.8-71.4 66.9-102.7v-1.2c-6-31.2-21.9-53.1-47.1-64.8-9.2-4.2-20.3-6-34.4-6"
        />
        <path
          id="prefix__XMLID_12903_"
          className="prefix__st1"
          d="M357.1 238l.3 43.9-44.1 5.1-7.2-132.7-18.6 2.1-1.5-28.5 58.8-10.5.9 38.7 33.6-42.3L422 151l-45.1 51.6 63.1 41.2-4.2 48.3z"
        />
        <path
          id="prefix__XMLID_12902_"
          className="prefix__st0"
          d="M380.5 124.6l30.9 27-45.9 52.5 66.6 43.2-2.7 31.2-79.8-54.6.3 51.6-29.7 3-7.2-132.6-18.6 2.1-.6-14.1 43.5-7.5 1.5 50.1 41.7-51.9zm-2.1-21.3l-9.9 12.3-15.9 19.8-.3-9.3-.6-17.4-17.1 3-43.2 7.5-12.9 2.4.6 13.2.6 14.1.6 15.9 15.9-1.8 3-.3 6.3 116.8.9 15.9 15.9-1.8 29.4-3.6 13.2-1.5v-36.3l56.4 38.4 21.3 14.4 2.1-25.5 2.7-30.9.9-9-7.5-4.8-52.2-33.9 33.9-39.3 9.9-11.4-11.4-9.9-30.9-27-11.7-10z"
        />
        <path
          id="prefix__XMLID_12901_"
          className="prefix__st1"
          d="M318.4 225.4c0 34.8-28.2 63-63 63s-63-28.2-63-63 28.2-63 63-63 63 28.2 63 63"
        />
        <circle
          id="prefix__XMLID_12900_"
          cx={255.4}
          cy={225.4}
          r={63}
          fill="none"
          stroke="#989898"
          strokeWidth={3.002}
          strokeMiterlimit={10}
        />
        <path
          id="prefix__XMLID_12899_"
          className="prefix__st1"
          d="M611.7 306.8l-9-68.2-18.9 54.4-10-42.6-7.2 33.9-47.7-12.6 19.8-145.6 48.4-3.6 3 23.1 7.8-34.5 47.1-6 31.5 209.5z"
        />
        <path
          id="prefix__XMLID_12898_"
          className="prefix__st0"
          d="M637.8 114.7l28.5 190-47.1-5.7-12.6-97-21 60.6-12-51.3-13.2 62.4-31.8-8.4 18-131.2 33-2.7 8.4 62.7 16.8-75.6 33-3.8zm14.4-18.9l-16.5 2.1-32.7 4.2-12 1.5-2.4 10.2-10.2.9-33.3 2.7-13.8 1.2-1.8 13.5-18 131.2-2.1 15 14.7 3.9 31.8 8.4 17.4 4.5 1.2-5.4 8.1 34.2 16.8-48 3.3 25.8 1.8 13.2 13.2 1.5 47.1 5.7 22.2 2.7-3.3-22.2-29.1-190.3-2.4-16.5z"
        />
        <path
          id="prefix__XMLID_12897_"
          className="prefix__st1"
          d="M913.7 317l-6.4-38.7-3.9 22.2-45.9-12.9 24.3-120.7-9-1.8 6.6-36.9 54.1 11.7 9.3 51.6 13.5-54.9 49.2 3L959 333.8z"
        />
        <path
          id="prefix__XMLID_12896_"
          className="prefix__st0"
          d="M886 138.4l39.9 8.7 15.3 84.4 21.6-85.9 32.1 1.8-42 175-31.8-12-13.5-82.9-10.8 62.1-29.1-8.4 24.3-121-9.3-1.8 3.3-20zM872.5 118l-3 17.4-3.6 20.1-2.7 15.9 8.7 2.1-21 104.8-3 15.3 15 4.2 29.1 8.4 11.7 3.3.6 3.9 1.5 9.6 9.3 3.3 31.8 12 18 6.6 4.5-18.6 42-175 4.8-19.5-20.1-1.2-32.4-1.8-14.1-.9-3.3 13.5-2.4 9.9-1.2-7.2-2.1-11.1-11.1-2.4-39.9-8.7-17.1-3.9z"
        />
        <path
          id="prefix__XMLID_12895_"
          className="prefix__st1"
          d="M476.9 260.3c-54.3 0-66-32.7-66.3-60.3.3-37.8 16.2-54.9 35.1-61.5l-10.2-15L473 83.8l26.4 41.1-23.7 9.9c35.1 2.4 47.1 23.7 51 41.4l.9 4.5-14.1 11.4 30 31.2-3.6 5.1c-15 21.1-36.3 31.9-63 31.9zm15.6-51.7c5.7-2.1 10.5-5.7 13.8-10.8l.6-.9-14.4 11.7zM460.1 181c-4.8 4.5-6.3 9-5.1 13.5l20.4-15.9c-1.8-.6-3.6-.9-5.4-.9-3.3 0-6.6 1.2-9.9 3.3"
        />
        <path
          id="prefix__XMLID_12894_"
          className="prefix__st0"
          d="M471.5 96.1l16.5 25.5-35.1 14.7-8.1-11.7 26.7-28.5m-1.2 45.9c27.6.6 43.8 12.3 48.6 35.7l-50.1 40.2c3 .3 6 .6 8.7.6 15.9 0 27.3-5.4 34.8-16.2l21 21.6c-13.2 19.2-32.1 28.8-56.4 28.8-38.7 0-58.5-17.7-58.8-52.8.2-38.7 17.7-57.9 52.2-57.9m-17.7 64.2l36-27.9c-6-5.4-12.3-7.8-18.3-7.8-4.8 0-9.9 1.8-14.7 5.1-10.2 9-11.4 19.5-3 30.6m21-134.5l-13.2 13.8-26.7 28.2-8.4 8.7 6.9 9.9 1.8 2.4c-20.1 11.1-30.9 33-31.2 64.5.6 43.5 26.7 67.8 73.8 67.8 29.4 0 52.8-12 69-35.1l6.9-10.2-8.4-9-20.1-20.6 4.2-3.3 7.2-5.7-1.8-9c-4.5-20.4-15.9-34.5-33.6-42l10.2-4.2-9.9-15-16.5-25.5-10.2-15.7z"
        />
        <path
          className="prefix__st1"
          d="M880 222.4c-2.1 34.8-32.1 61.2-66.9 59.1-34.8-2.1-61.2-32.1-59.1-66.9s32.1-61.2 66.9-59.1c34.8 2.1 61.2 32.1 59.1 66.9"
          id="prefix__XMLID_12893_"
        />
        <path
          d="M817.3 283.1c-35.6 0-64.5-29-64.5-64.5s29-64.5 64.5-64.5 64.5 29 64.5 64.5-28.9 64.5-64.5 64.5zm0-126.1c-33.9 0-61.5 27.6-61.5 61.5s27.6 61.5 61.5 61.5 61.5-27.6 61.5-61.5-27.6-61.5-61.5-61.5z"
          fill="#989898"
          id="prefix__XMLID_12892_"
        />
        <path
          id="prefix__XMLID_12890_"
          className="prefix__st1"
          d="M105 176.5l-22.5 6-15.3-71.4 9-2.4c45.6-13.2 79.8-19.5 104.2-19.5 12.6 0 22.5 1.8 30.3 5.4 22.2 10.2 36.3 29.7 41.7 57.9v.6c5.4 41.4-17.4 73.5-67.8 95.5l7.8 66-49.8 8.7L105 176.5zm69 4.8c11.7-6.6 18-13.2 17.4-18.6-1.8-5.4-3.9-6-4.8-6.3-.3 0-.9-.3-2.7-.3-2.7 0-6.9.3-14.4 2.1l4.5 23.1z"
        />
        <path
          id="prefix__XMLID_12888_"
          className="prefix__st1"
          d="M364 227.8l.3 44.2-44.1 5.1-7.2-132.7-18.6 2.1-1.2-28.8 58.5-10.2 1.2 38.4 33.6-42 42.4 36.9-45.1 51.9 63.1 40.8-3.9 48.4z"
        />
        <path
          id="prefix__XMLID_12886_"
          className="prefix__st1"
          d="M325.6 215.5c0 34.8-28.2 63-63 63s-63-28.2-63-63 28.2-63 63-63 63 28.2 63 63"
        />
        <path
          id="prefix__XMLID_12885_"
          className="prefix__st1"
          d="M618.6 296.6l-8.7-67.9-18.9 54.4-10.3-42.7-7.2 33.7-47.7-12.6 20.1-145.3 48.1-3.9 3.3 23.4 7.5-34.5 47.1-6 31.5 209.5z"
        />
        <path
          id="prefix__XMLID_12883_"
          className="prefix__st1"
          d="M920.6 306.8l-6.3-38.4-4 22.2-45.6-12.9L889 157l-9-2.1 6.3-36.6 54.1 11.7 9.3 51.3 13.8-54.6 48.9 3-46.5 194.2z"
        />
        <path
          id="prefix__XMLID_12877_"
          className="prefix__st1"
          d="M483.8 250.4c-54.3 0-66-32.7-66.3-60.3.3-37.8 16.2-54.9 35.1-61.5l-10.2-15L479.9 74l26.4 41.1-23.7 9.9c35.1 2.4 47.1 23.7 51 41.4l.9 4.2-14.1 11.4 30 31.2-3.6 5.1c-15 21.2-36 31.8-63 32.1zm15.6-51.7c5.7-2.1 10.5-5.7 13.8-10.8l.6-.9-14.4 11.7zM467 171.1c-4.8 4.5-6.3 9-5.1 13.5l20.4-15.9c-1.8-.6-3.6-.9-5.4-.9-3 0-6.3.9-9.9 3.3"
        />
        <radialGradient
          id="prefix__SVGID_1_"
          cx={556.55}
          cy={215.977}
          r={769.857}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#df00c3" />
          <stop offset={0.726} stopColor="#0d006f" />
        </radialGradient>
        <path
          d="M189.9 147.1c-1.8-.6-3.6-.6-6-.6-6 0-14.4 1.5-25.8 4.8l8.7 44.7c24.9-11.1 36.3-23.1 34.5-35.4-2.1-7.2-6-12-11.4-13.5z"
          fill="url(#prefix__SVGID_1_)"
        />
        <radialGradient
          id="prefix__SVGID_2_"
          cx={556.55}
          cy={215.977}
          r={769.857}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#df00c3" />
          <stop offset={0.726} stopColor="#0d006f" />
        </radialGradient>
        <path
          d="M1003.1 120.7l-32.1-1.8-14.1-.9-3.3 13.5-2.4 9.9-1.2-7.2-2.1-11.1-11.1-2.4-39.9-8.7-17.4-3.9-3 17.4-3.6 20.1-.5 3c-10-8-21.8-13.5-34.7-15.8-25.7-4.6-50.7 4.3-68 21.6-14.2-18.2-36.1-29.8-60.7-29.8-15.3 0-29.6 4.5-41.6 12.4l-5.2-34.6-3-16.8-16.5 2.1-32.7 4.2-12 1.5-2.4 10.2-10.2.9-33.3 2.7-13.8 1.2-1.8 13.5-3.1 22.6c-6-10.1-14.7-17.5-26-22.3l10.2-4.2-9.9-15L491 77.4l-10.2-15.6-13.2 13.8-26.7 28.2-8.4 8.7 6.9 9.9 1.8 2.4c-3.7 2-7.1 4.5-10.2 7.2l-2.5-2.1-30.9-27-12.3-9.9-9.9 12.3-15.9 19.8-.3-9.3-.6-17.4-17.1 3L298 109l-12.6 2.4.6 13.2.6 14.1.2 4.8c-7.6-2.5-15.7-3.9-24.2-3.9-1 0-1.9 0-2.9.1-7.4-25.5-22.3-43.8-44.6-54.1-9.3-4.2-20.7-6.3-34.8-6.3-25.2 0-60.3 6.6-106.9 19.8l-17.7 5.1 3.9 18L71 174.4l4.5 20.4 20.1-5.4 2.7-.6L131 316.7l4.5 17.7 18-3L185 326l18.3-3.3-2.1-18.6-5.8-48.4c13.4 23.2 38.4 38.8 67.1 38.8 19.1 0 36.7-7 50.2-18.5l.5 9.5 15.9-1.8 29.4-3.6 13.2-1.5v-36.3l56.4 38.4 21.3 14.4 2.1-25.5 1.4-16.6c8.9 2.8 19.2 4.3 30.7 4.3 12.8 0 24.4-2.3 34.9-6.7l-.3 2.5-2.1 15 14.7 3.9 31.8 8.4 17.4 4.5 1.2-5.4 8.1 34.2 16.8-48 3.3 25.8 1.8 13.2 13.2 1.5 47.1 5.7 22.2 2.7-3.3-22.2-2.1-13.7c6.5 1.8 13.3 2.8 20.4 2.8 21.3 0 40.5-8.7 54.5-22.8 11.4 14.6 27.8 25.2 47.3 28.6 4.5.8 9.1 1.2 13.6 1.2 10.6 0 21.1-2.2 30.8-6.5l-.3 1.7 15 4.2 29.1 8.4 11.7 3.3.6 3.9 1.5 9.6 9.3 3.3 31.8 12 18 6.6 4.5-18.6 42-175 4.8-19.5-19.8-1.2zM478.4 85.9l16.5 25.5-35.1 14.7-8.1-11.7 26.7-28.5zM187.5 236.1c-4.3 2-8.8 4-13.5 5.8l7.5 64.2-31.5 5.4-37.8-147.1-21.9 6-11.4-52.2C123.3 105.3 157.2 99 180.4 99c11.1 0 19.8 1.5 26.1 4.5 16.1 7.6 27.2 20.7 33.3 39.5 0 0 4.4 10.6 3.7 20.9.2 24.5-12.1 45.1-36.7 61.4-.1.1-13.3 8.1-19.3 10.8zm75.1 37.4c-21.1 0-39.6-11.7-49.3-28.9 41.1-25.5 50.6-57.5 49.7-83.9 18.3.1 34.5 9 44.8 22.6l3.4 62.5c-9.9 16.5-28 27.7-48.6 27.7zm42.8-120.9l.7-.1v.5c-.2-.1-.5-.3-.7-.4zm131 115.8l-79.8-54.6.3 51.6-29.4 3.6-.5-8.9c8.3-12.3 13.1-27.1 13.1-43 0-18.9-6.8-36.3-18.1-49.7l-1.7-31-18.6 2.1-.6-14.1 43.5-7.5 1.5 50.1 41.4-52.2 30.9 27-45.9 52.5 44.9 29.1c4.8 9.7 11.8 17.4 21 23l-2 22zm-25.7-67.6l-15.2-9.9 15.6-18c-.8 5.2-1.2 10.6-1.2 16.5.1 4 .4 7.8.8 11.4zm17.9 11.6c-2.3-6.4-3.6-13.9-3.6-22.4.3-38.7 17.7-57.9 52.2-57.9 27.6.6 43.8 12.3 48.6 35.7L475.7 208c3 .3 6 .6 8.7.6 15.9 0 27.3-5.4 34.8-16.2l6.5 6.7 15.8 13.6c-6.4 12.7-20.4 20.1-20.4 20.1-10.5 6.7-23 10-37.3 10-11.5 0-21.2-1.6-29.4-4.7-17.3-6-25.8-25.7-25.8-25.7zm197.5 76.7l-12.6-97.3-21 60.6-12-51.3-13.5 62.4-31.8-8.4 2.2-16.1c5.7-4.7 10.9-10.4 15.5-17l6.9-10.2-8.4-9-7.9-8.2 9.7-70.8 33.3-2.7 8.4 62.7 16.8-75.6 33-3.6 6.8 45.6c-12.5 13.9-20.1 32.4-20.1 52.6 0 28.7 15.3 53.8 38.1 67.5l3.6 24.3-47-5.5zm334.1 23.4l-31.8-12-13.5-83.2-11.1 62.4-29.1-8.4.4-2.2c13.4-11.7 22.3-27.6 25.4-45.5 2.9-16.5.5-33.1-6.6-47.9l5.1-25.4-9.3-2.1 3.6-19.8 39.9 8.7 15.3 84.4 21.6-85.9 32.1 1.8-42 175.1z"
          fill="url(#prefix__SVGID_2_)"
        />
        <radialGradient
          id="prefix__SVGID_3_"
          cx={556.55}
          cy={215.977}
          r={769.857}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#df00c3" />
          <stop offset={0.726} stopColor="#0d006f" />
        </radialGradient>
        <path
          d="M462.5 165.4c-10.2 9.3-11.1 19.5-3 30.6l36-27.9c-6-5.4-12.3-7.8-18.3-7.8-4.8 0-9.9 1.8-14.7 5.1z"
          fill="url(#prefix__SVGID_3_)"
        />
      </g>
      <g id="prefix__XMLID_12860_">
        <defs>
          <path
            id="prefix__SVGID_4_"
            d="M260.1 198.4c-10.2 1-17.6 10.2-16.6 20.1 1 10.2 10.2 17.6 20.1 16.6 10.2-1 17.6-10.2 16.6-20.1-1-9.3-8.7-16.4-18-16.5-.6-.4-1.2-.1-2.1-.1"
          />
        </defs>
        <clipPath id="prefix__SVGID_5_">
          <use xlinkHref="#prefix__SVGID_4_" overflow="visible" />
        </clipPath>
        <g
          id="prefix__XMLID_12861_"
          opacity={0.5}
          clipPath="url(#prefix__SVGID_5_)"
        >
          <g id="prefix__XMLID_12862_">
            <defs>
              <path
                id="prefix__SVGID_6_"
                transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                d="M217 162.7h90.1V260H217z"
              />
            </defs>
            <clipPath id="prefix__SVGID_7_">
              <use xlinkHref="#prefix__SVGID_6_" overflow="visible" />
            </clipPath>
            <path
              id="prefix__XMLID_12874_"
              d="M282.6 234.2c4.6-5.6 13-6.7 18.9-2.1 5.6 4.6 6.7 13 1.8 18.9-4.6 5.6-13 6.7-18.9 2.1-5.6-4.9-6.4-13.3-1.8-18.9"
              clipPath="url(#prefix__SVGID_7_)"
              fill="#fff"
            />
            <defs>
              <path
                id="prefix__SVGID_8_"
                transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                d="M217 162.7h90.1V260H217z"
              />
            </defs>
            <clipPath id="prefix__SVGID_9_">
              <use xlinkHref="#prefix__SVGID_8_" overflow="visible" />
            </clipPath>
            <path
              id="prefix__XMLID_12873_"
              d="M220.9 227.4c4.6-5.6 13-6.7 18.9-2.1 5.6 4.6 6.7 13 1.8 18.9-4.6 5.6-13 6.7-18.9 2.1-5.6-4.8-6.7-13.2-1.8-18.9"
              clipPath="url(#prefix__SVGID_9_)"
              fill="#fff"
            />
            <defs>
              <path
                id="prefix__SVGID_10_"
                transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                d="M217 162.7h90.1V260H217z"
              />
            </defs>
            <clipPath id="prefix__SVGID_11_">
              <use xlinkHref="#prefix__SVGID_10_" overflow="visible" />
            </clipPath>
            <path
              id="prefix__XMLID_12872_"
              d="M257 168.9c2.5-3.3 7.3-3.5 10.2-1s3.5 7.3 1 10.2c-2.5 3.3-7.3 3.5-10.2 1-2.9-2.4-3.7-6.9-1-10.2"
              clipPath="url(#prefix__SVGID_11_)"
              fill="#fff"
            />
            <defs>
              <path
                id="prefix__SVGID_12_"
                transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                d="M217 162.7h90.1V260H217z"
              />
            </defs>
            <clipPath id="prefix__SVGID_13_">
              <use xlinkHref="#prefix__SVGID_12_" overflow="visible" />
            </clipPath>
            <path
              id="prefix__XMLID_12871_"
              d="M240.9 250.9c1.2-1.5 3.3-1.7 4.5-.5 1.5 1.2 1.4 3.3.5 4.5-1.2 1.5-3.3 1.7-4.5.5-1.4-1.2-1.7-3.3-.5-4.5"
              clipPath="url(#prefix__SVGID_13_)"
              fill="#fff"
            />
            <g>
              <defs>
                <path
                  id="prefix__SVGID_14_"
                  transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                  d="M217 162.7h90.1V260H217z"
                />
              </defs>
              <clipPath id="prefix__SVGID_15_">
                <use xlinkHref="#prefix__SVGID_14_" overflow="visible" />
              </clipPath>
              <path
                id="prefix__XMLID_12870_"
                d="M214.1 204.5c1.2-1.5 3.3-1.7 4.5-.5 1.5 1.2 1.4 3.3.5 4.5-1.2 1.5-3.3 1.7-4.5.5-1.5-1.2-1.7-3-.5-4.5"
                clipPath="url(#prefix__SVGID_15_)"
                fill="#fff"
              />
            </g>
            <g>
              <defs>
                <path
                  id="prefix__SVGID_16_"
                  transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                  d="M217 162.7h90.1V260H217z"
                />
              </defs>
              <clipPath id="prefix__SVGID_17_">
                <use xlinkHref="#prefix__SVGID_16_" overflow="visible" />
              </clipPath>
              <path
                id="prefix__XMLID_12869_"
                d="M285.2 191.3c1.2-1.5 3.3-1.7 4.5-.5 1.5 1.2 1.4 3.3.5 4.5-1.2 1.5-3.3 1.7-4.5.5-1.5-.9-1.8-3-.5-4.5"
                clipPath="url(#prefix__SVGID_17_)"
                fill="#fff"
              />
            </g>
            <g>
              <defs>
                <path
                  id="prefix__SVGID_18_"
                  transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                  d="M217 162.7h90.1V260H217z"
                />
              </defs>
              <clipPath id="prefix__SVGID_19_">
                <use xlinkHref="#prefix__SVGID_18_" overflow="visible" />
              </clipPath>
              <path
                id="prefix__XMLID_12868_"
                d="M230.5 174.2c1.2-1.5 3.3-1.7 4.5-.5 1.5 1.2 1.4 3.3.5 4.5-1.2 1.5-3.3 1.7-4.5.5-1.4-.9-1.7-3.1-.5-4.5"
                clipPath="url(#prefix__SVGID_19_)"
                fill="#fff"
              />
            </g>
            <g>
              <defs>
                <path
                  id="prefix__SVGID_20_"
                  transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                  d="M217 162.7h90.1V260H217z"
                />
              </defs>
              <clipPath id="prefix__SVGID_21_">
                <use xlinkHref="#prefix__SVGID_20_" overflow="visible" />
              </clipPath>
              <path
                id="prefix__XMLID_12867_"
                d="M262.4 243.8c.6-.6 1.5-.9 2.1-.3.6.6.6 1.5.3 2.1-.6.6-1.5.9-2.1.3-.7-.6-1-1.5-.3-2.1"
                clipPath="url(#prefix__SVGID_21_)"
                fill="#fff"
              />
            </g>
            <g>
              <defs>
                <path
                  id="prefix__SVGID_22_"
                  transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                  d="M217 162.7h90.1V260H217z"
                />
              </defs>
              <clipPath id="prefix__SVGID_23_">
                <use xlinkHref="#prefix__SVGID_22_" overflow="visible" />
              </clipPath>
              <path
                id="prefix__XMLID_12866_"
                d="M229.4 188.6c.6-.6 1.5-.9 2.1-.3.6.6.6 1.5.3 2.1-.6.6-1.5.9-2.1.3-.6-.6-.9-1.6-.3-2.1"
                clipPath="url(#prefix__SVGID_23_)"
                fill="#fff"
              />
            </g>
            <g>
              <defs>
                <path
                  id="prefix__SVGID_24_"
                  transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                  d="M217 162.7h90.1V260H217z"
                />
              </defs>
              <clipPath id="prefix__SVGID_25_">
                <use xlinkHref="#prefix__SVGID_24_" overflow="visible" />
              </clipPath>
              <path
                id="prefix__XMLID_12865_"
                d="M239.6 168c.6-.6 1.5-.9 2.1-.3.6.6.6 1.5.3 2.1-.6.6-1.5.9-2.1.3-.6-.6-.9-1.2-.3-2.1"
                clipPath="url(#prefix__SVGID_25_)"
                fill="#fff"
              />
            </g>
            <g>
              <defs>
                <path
                  id="prefix__SVGID_26_"
                  transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                  d="M217 162.7h90.1V260H217z"
                />
              </defs>
              <clipPath id="prefix__SVGID_27_">
                <use xlinkHref="#prefix__SVGID_26_" overflow="visible" />
              </clipPath>
              <path
                id="prefix__XMLID_12864_"
                d="M249.2 208.4c1.8-2.4 5.1-2.6 7.2-.8 2.4 1.8 2.6 5.1.8 7.2-1.8 2.4-5.1 2.6-7.2.8-2.4-1.5-2.7-4.8-.8-7.2"
                clipPath="url(#prefix__SVGID_27_)"
                fill="#fff"
              />
            </g>
            <g>
              <defs>
                <path
                  id="prefix__SVGID_28_"
                  transform="matrix(.01707 -.9999 .9999 .01707 46.238 469.698)"
                  d="M217 162.7h90.1V260H217z"
                />
              </defs>
              <clipPath id="prefix__SVGID_29_">
                <use xlinkHref="#prefix__SVGID_28_" overflow="visible" />
              </clipPath>
              <path
                id="prefix__XMLID_12863_"
                d="M299.4 203c2.1-2.7 6.1-3.2 8.7-1.1s3.2 6.1.8 8.7c-2.1 2.7-6.1 3.2-8.7 1.1-2.4-2.2-3-6.1-.8-8.7"
                clipPath="url(#prefix__SVGID_29_)"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </g>
      <g id="prefix__XMLID_12855_">
        <path
          id="prefix__XMLID_12856_"
          className="prefix__st1"
          d="M748.3 162.1c11.4 11.1 17.4 24.6 17.4 40.2 0 15.9-5.7 29.1-17.4 40.2-11.7 11.1-25.5 16.8-41.7 16.8-16.2 0-30.3-5.7-41.7-16.8-11.4-11.1-17.4-24.6-17.4-40.2s5.7-29.1 17.4-40.2c11.7-11.1 25.5-16.8 41.7-16.8 16.1 0 29.9 5.4 41.7 16.8zm-8.8 35.7c-3.6 3.3-7.8 5.1-12.9 5.1s-9.3-1.8-12.9-5.1c-3.6-3.3-5.4-7.5-5.4-12s1.8-8.7 5.4-12 7.8-5.1 12.9-5.1c.9 0 1.8 0 2.7.3-3.9-2.1-8.1-3-12.9-3-7.8 0-14.4 2.7-20.1 8.1-5.7 5.4-8.4 12-8.4 19.5s2.7 14.1 8.4 19.5 12.3 8.1 20.1 8.1c7.8 0 14.4-2.7 20.1-8.1s8.4-11.7 8.4-19.5c0-1.5 0-3-.3-4.5-.9 3.3-2.7 6.3-5.1 8.7z"
        />
      </g>
      <g id="prefix__XMLID_12853_">
        <path
          id="prefix__XMLID_12854_"
          className="prefix__st1"
          d="M866.2 167.5c11.4 11.1 17.4 24.6 17.4 40.2 0 15.9-5.7 29.1-17.4 40.2-11.7 11.1-25.5 16.8-41.7 16.8s-30.3-5.7-41.7-16.8-17.4-24.6-17.4-40.2 5.7-29.1 17.4-40.2c11.4-11.1 25.5-16.8 41.7-16.8s30 5.7 41.7 16.8zm-8.7 36c-3.6 3.3-7.8 5.1-12.9 5.1-5.1 0-9.3-1.8-12.9-5.1-3.6-3.3-5.4-7.5-5.4-12s1.8-8.7 5.4-12c3.6-3.3 7.8-5.1 12.9-5.1.9 0 1.8 0 2.7.3-3.9-2.1-8.1-3-12.9-3-7.8 0-14.4 2.7-20.1 8.1-5.7 5.4-8.4 12-8.4 19.5s2.7 14.1 8.4 19.5 12.3 8.1 20.1 8.1c7.8 0 14.4-2.7 20.1-8.1s8.4-11.7 8.4-19.5c0-1.5 0-3-.3-4.5-.9 3.3-2.7 6.3-5.1 8.7z"
        />
      </g>
      <path
        id="prefix__XMLID_11734_"
        className="prefix__st1"
        d="M325.6 215.2c0 34.8-28.2 63-63 63s-63-28.2-63-63 28.2-63 63-63 63 28.2 63 63"
      />
      <defs>
        <circle id="prefix__XMLID_11350_" cx={263.9} cy={216.5} r={18.7} />
      </defs>
      <clipPath id="prefix__XMLID_2_">
        <use xlinkHref="#prefix__XMLID_11350_" overflow="visible" />
      </clipPath>
      <g clipPath="url(#prefix__XMLID_2_)">
        <defs>
          <path
            id="prefix__XMLID_11351_"
            d="M316.5 174.9c1.7 2.2 3.2 4.5 4.6 6.9 16.5 28.5 9.5 65.5-17.4 85.9-26.9 20.4-64.4 17-87.4-6.6-1.9-1.9-3.7-4-5.4-6.3-22.1-29.2-16.3-70.7 12.9-92.8s70.7-16.3 92.7 12.9z"
          />
        </defs>
        <clipPath id="prefix__XMLID_3_">
          <use xlinkHref="#prefix__XMLID_11351_" overflow="visible" />
        </clipPath>
        <g id="prefix__XMLID_11732_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_4_"
            gradientUnits="userSpaceOnUse"
            x1={253.198}
            y1={5.571}
            x2={251.358}
            y2={13.199}
            gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11733_"
            d="M337.3 109.6c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1c.1.4.5.8.9.8s.7-.4.7-1z"
            fill="url(#prefix__XMLID_4_)"
          />
        </g>
        <g id="prefix__XMLID_11730_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_5_"
            gradientUnits="userSpaceOnUse"
            x1={244.498}
            y1={-13.848}
            x2={242.659}
            y2={-6.219}
            gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11731_"
            d="M331.1 130c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1c.1.4.5.8.9.8s.7-.5.7-1z"
            fill="url(#prefix__XMLID_5_)"
          />
        </g>
        <g id="prefix__XMLID_11728_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_6_"
            gradientUnits="userSpaceOnUse"
            x1={300.504}
            y1={-2.272}
            x2={298.664}
            y2={5.357}
            gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11729_"
            d="M385.2 111.5c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1c.1.4.5.8.9.8s.8-.5.7-1z"
            fill="url(#prefix__XMLID_6_)"
          />
        </g>
        <g id="prefix__XMLID_11726_" className="prefix__st21">
          <path
            id="prefix__XMLID_11727_"
            className="prefix__st25"
            d="M346 92.4c0-.2-.2-.3-.4-.3s-.3.2-.3.4.2.3.4.3.4-.2.3-.4z"
          />
        </g>
        <g id="prefix__XMLID_11724_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_7_"
            gradientUnits="userSpaceOnUse"
            x1={224.962}
            y1={-1.208}
            x2={223.122}
            y2={6.42}
            gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11725_"
            d="M310.1 119.9c-.1-.4-.5-.8-.9-.8-.4.1-.8.5-.7 1 .1.4.5.8.9.8s.8-.4.7-1z"
            fill="url(#prefix__XMLID_7_)"
          />
        </g>
        <g id="prefix__XMLID_11722_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_8_"
            gradientUnits="userSpaceOnUse"
            x1={270.573}
            y1={-7.997}
            x2={269.336}
            y2={-2.867}
            gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11723_"
            d="M356.1 121.3c0-.4-.3-.6-.6-.6s-.5.3-.5.7.3.6.6.6.5-.3.5-.7z"
            fill="url(#prefix__XMLID_8_)"
          />
        </g>
        <g id="prefix__XMLID_11720_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_9_"
            gradientUnits="userSpaceOnUse"
            x1={237.519}
            y1={10.765}
            x2={236.282}
            y2={15.895}
            gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11721_"
            d="M320.9 106.8c0-.4-.3-.6-.6-.6s-.5.3-.5.7.3.6.6.6c.4 0 .6-.3.5-.7z"
            fill="url(#prefix__XMLID_9_)"
          />
        </g>
        <radialGradient
          id="prefix__XMLID_10_"
          cx={563.988}
          cy={526.063}
          r={295.385}
          fx={439.993}
          fy={423.359}
          gradientTransform="rotate(-7.187 -2548.953 2656.439)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.012} stopColor="#1f0098" />
          <stop offset={0.203} stopColor="#df00c3" />
          <stop offset={0.535} stopColor="#0d006f" />
          <stop offset={0.752} stopColor="#00006a" />
        </radialGradient>
        <path
          id="prefix__XMLID_11719_"
          d="M248.2 115.4c87.6-11 164.8 29.4 172.5 90.3S363.6 324.9 276 335.9c-87.6 11-164.8-29.4-172.5-90.3s57.1-119.2 144.7-130.2z"
          clipPath="url(#prefix__XMLID_3_)"
          fill="url(#prefix__XMLID_10_)"
        />
        <g id="prefix__XMLID_11490_" className="prefix__st21">
          <g id="prefix__XMLID_11662_">
            <g id="prefix__XMLID_11717_">
              <linearGradient
                id="prefix__XMLID_11_"
                gradientUnits="userSpaceOnUse"
                x1={681.265}
                y1={530.625}
                x2={679.539}
                y2={537.78}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11718_"
                d="M412.3 141.5c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
                fill="url(#prefix__XMLID_11_)"
              />
            </g>
            <g id="prefix__XMLID_11715_">
              <linearGradient
                id="prefix__XMLID_12_"
                gradientUnits="userSpaceOnUse"
                x1={673.079}
                y1={512.403}
                x2={671.354}
                y2={519.559}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11716_"
                d="M418.2 122.4c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.8.4-.7.9z"
                fill="url(#prefix__XMLID_12_)"
              />
            </g>
            <g id="prefix__XMLID_11713_">
              <linearGradient
                id="prefix__XMLID_13_"
                gradientUnits="userSpaceOnUse"
                x1={725.638}
                y1={523.268}
                x2={723.913}
                y2={530.424}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11714_"
                d="M367.4 139.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.5 0-.8.5-.7.9z"
                fill="url(#prefix__XMLID_13_)"
              />
            </g>
            <g id="prefix__XMLID_11711_">
              <linearGradient
                id="prefix__XMLID_14_"
                gradientUnits="userSpaceOnUse"
                x1={770.001}
                y1={571.292}
                x2={768.276}
                y2={578.448}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11712_"
                d="M329.3 192.9c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.7.5-.7.9z"
                fill="url(#prefix__XMLID_14_)"
              />
            </g>
            <g id="prefix__XMLID_11709_">
              <linearGradient
                id="prefix__XMLID_15_"
                gradientUnits="userSpaceOnUse"
                x1={851.043}
                y1={528.798}
                x2={849.318}
                y2={535.954}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11710_"
                d="M243.6 160.9c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                fill="url(#prefix__XMLID_15_)"
              />
            </g>
            <g id="prefix__XMLID_11707_">
              <linearGradient
                id="prefix__XMLID_16_"
                gradientUnits="userSpaceOnUse"
                x1={837.083}
                y1={550.03}
                x2={836.347}
                y2={553.085}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11708_"
                d="M260.4 179.6c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                fill="url(#prefix__XMLID_16_)"
              />
            </g>
            <g id="prefix__XMLID_11705_">
              <path
                id="prefix__XMLID_11706_"
                className="prefix__st25"
                d="M419.5 168c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
              />
            </g>
            <g id="prefix__XMLID_11703_">
              <linearGradient
                id="prefix__XMLID_17_"
                gradientUnits="userSpaceOnUse"
                x1={851.2}
                y1={562.272}
                x2={850.463}
                y2={565.328}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11704_"
                d="M247.9 193.5c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                fill="url(#prefix__XMLID_17_)"
              />
            </g>
            <g id="prefix__XMLID_11701_">
              <linearGradient
                id="prefix__XMLID_18_"
                gradientUnits="userSpaceOnUse"
                x1={760.494}
                y1={566.578}
                x2={759.757}
                y2={569.633}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11702_"
                d="M338.5 186.4c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.4.2-.3.4z"
                fill="url(#prefix__XMLID_18_)"
              />
            </g>
            <g id="prefix__XMLID_11699_">
              <linearGradient
                id="prefix__XMLID_19_"
                gradientUnits="userSpaceOnUse"
                x1={691.785}
                y1={546.241}
                x2={691.049}
                y2={549.296}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11700_"
                d="M404.1 157.7c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.1-.3.4z"
                fill="url(#prefix__XMLID_19_)"
              />
            </g>
            <g id="prefix__XMLID_11697_">
              <linearGradient
                id="prefix__XMLID_20_"
                gradientUnits="userSpaceOnUse"
                x1={783.595}
                y1={532.961}
                x2={782.859}
                y2={536.016}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11698_"
                d="M311.3 155.9c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.1.1-.3.3-.3.4z"
                fill="url(#prefix__XMLID_20_)"
              />
            </g>
            <g id="prefix__XMLID_11695_">
              <path
                id="prefix__XMLID_11696_"
                className="prefix__st25"
                d="M326.2 213.8c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.3.2-.3.4z"
              />
            </g>
            <g id="prefix__XMLID_11693_">
              <linearGradient
                id="prefix__XMLID_21_"
                gradientUnits="userSpaceOnUse"
                x1={706.473}
                y1={561.168}
                x2={704.748}
                y2={568.324}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11694_"
                d="M391.1 174.9c.1.4.5.7.9.7s.7-.5.7-.9-.5-.7-.9-.7c-.5.1-.7.5-.7.9z"
                fill="url(#prefix__XMLID_21_)"
              />
            </g>
            <g id="prefix__XMLID_11691_">
              <linearGradient
                id="prefix__XMLID_22_"
                gradientUnits="userSpaceOnUse"
                x1={691.678}
                y1={562.92}
                x2={689.952}
                y2={570.075}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11692_"
                d="M406 174.8c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.4.1-.7.5-.7.9z"
                fill="url(#prefix__XMLID_22_)"
              />
            </g>
            <g id="prefix__XMLID_11689_">
              <linearGradient
                id="prefix__XMLID_23_"
                gradientUnits="userSpaceOnUse"
                x1={713.132}
                y1={540.448}
                x2={711.407}
                y2={547.605}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11690_"
                d="M381.9 155.2c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.7.4-.7.9z"
                fill="url(#prefix__XMLID_23_)"
              />
            </g>
            <g id="prefix__XMLID_11687_">
              <linearGradient
                id="prefix__XMLID_24_"
                gradientUnits="userSpaceOnUse"
                x1={705.553}
                y1={576.188}
                x2={703.827}
                y2={583.344}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11688_"
                d="M393.9 189.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.5-.7.9z"
                fill="url(#prefix__XMLID_24_)"
              />
            </g>
            <g id="prefix__XMLID_11685_">
              <linearGradient
                id="prefix__XMLID_25_"
                gradientUnits="userSpaceOnUse"
                x1={654.712}
                y1={524.25}
                x2={652.987}
                y2={531.406}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11686_"
                d="M437.9 131.9c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
                fill="url(#prefix__XMLID_25_)"
              />
            </g>
            <g id="prefix__XMLID_11683_">
              <linearGradient
                id="prefix__XMLID_26_"
                gradientUnits="userSpaceOnUse"
                x1={751.828}
                y1={538.673}
                x2={750.103}
                y2={545.828}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11684_"
                d="M343.3 158.3c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
                fill="url(#prefix__XMLID_26_)"
              />
            </g>
            <g id="prefix__XMLID_11681_">
              <linearGradient
                id="prefix__XMLID_27_"
                gradientUnits="userSpaceOnUse"
                x1={768.657}
                y1={518.126}
                x2={766.932}
                y2={525.282}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11682_"
                d="M324 140c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5.1-.7.5-.7.9z"
                fill="url(#prefix__XMLID_27_)"
              />
            </g>
            <g id="prefix__XMLID_11679_">
              <linearGradient
                id="prefix__XMLID_28_"
                gradientUnits="userSpaceOnUse"
                x1={828.791}
                y1={518.721}
                x2={827.065}
                y2={525.877}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11680_"
                d="M264.4 148.1c.1.4.5.7.9.7s.7-.5.7-.9-.5-.7-.9-.7c-.4.1-.7.5-.7.9z"
                fill="url(#prefix__XMLID_28_)"
              />
            </g>
            <g id="prefix__XMLID_11677_">
              <linearGradient
                id="prefix__XMLID_29_"
                gradientUnits="userSpaceOnUse"
                x1={838.659}
                y1={568.906}
                x2={836.934}
                y2={576.062}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11678_"
                d="M260.9 199.2c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                fill="url(#prefix__XMLID_29_)"
              />
            </g>
            <g id="prefix__XMLID_11675_">
              <linearGradient
                id="prefix__XMLID_30_"
                gradientUnits="userSpaceOnUse"
                x1={816.686}
                y1={575.656}
                x2={815.526}
                y2={580.469}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11676_"
                d="M283.7 202.7c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.3.1-.5.4-.5.6z"
                fill="url(#prefix__XMLID_30_)"
              />
            </g>
            <g id="prefix__XMLID_11673_">
              <linearGradient
                id="prefix__XMLID_31_"
                gradientUnits="userSpaceOnUse"
                x1={777.072}
                y1={552.759}
                x2={775.911}
                y2={557.571}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11674_"
                d="M320.1 175.1c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                fill="url(#prefix__XMLID_31_)"
              />
            </g>
            <g id="prefix__XMLID_11671_">
              <path
                id="prefix__XMLID_11672_"
                className="prefix__st25"
                d="M363.5 157.5c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
              />
            </g>
            <g id="prefix__XMLID_11669_">
              <linearGradient
                id="prefix__XMLID_32_"
                gradientUnits="userSpaceOnUse"
                x1={697.516}
                y1={517.886}
                x2={696.356}
                y2={522.698}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11670_"
                d="M394.7 130.5c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                fill="url(#prefix__XMLID_32_)"
              />
            </g>
            <g id="prefix__XMLID_11667_">
              <linearGradient
                id="prefix__XMLID_33_"
                gradientUnits="userSpaceOnUse"
                x1={666.525}
                y1={535.489}
                x2={665.365}
                y2={540.302}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11668_"
                d="M427.7 144.1c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4.1-.6.3-.5.6z"
                fill="url(#prefix__XMLID_33_)"
              />
            </g>
            <g id="prefix__XMLID_11665_">
              <linearGradient
                id="prefix__XMLID_34_"
                gradientUnits="userSpaceOnUse"
                x1={695.357}
                y1={580.073}
                x2={694.197}
                y2={584.885}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11666_"
                d="M404.6 191.9c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.3.1-.5.3-.5.6z"
                fill="url(#prefix__XMLID_34_)"
              />
            </g>
            <g id="prefix__XMLID_11663_">
              <linearGradient
                id="prefix__XMLID_35_"
                gradientUnits="userSpaceOnUse"
                x1={718.24}
                y1={585.89}
                x2={716.515}
                y2={593.046}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11664_"
                d="M382.5 200.9c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.4.1-.7.5-.7.9z"
                fill="url(#prefix__XMLID_35_)"
              />
            </g>
          </g>
          <g id="prefix__XMLID_11605_" className="prefix__st55">
            <g id="prefix__XMLID_11660_">
              <linearGradient
                id="prefix__XMLID_36_"
                gradientUnits="userSpaceOnUse"
                x1={811.782}
                y1={591.378}
                x2={810.057}
                y2={598.533}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11661_"
                d="M290.4 218.1c.1.4.5.7.9.7s.7-.5.7-.9-.5-.7-.9-.7-.7.4-.7.9z"
                fill="url(#prefix__XMLID_36_)"
              />
            </g>
            <g id="prefix__XMLID_11658_">
              <path
                id="prefix__XMLID_11659_"
                className="prefix__st25"
                d="M296.2 199c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
              />
            </g>
            <g id="prefix__XMLID_11656_">
              <linearGradient
                id="prefix__XMLID_37_"
                gradientUnits="userSpaceOnUse"
                x1={856.156}
                y1={584.021}
                x2={854.43}
                y2={591.177}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11657_"
                d="M245.5 216.4c.1.4.5.7.9.7s.7-.5.7-.9-.5-.7-.9-.7c-.5 0-.8.4-.7.9z"
                fill="url(#prefix__XMLID_37_)"
              />
            </g>
            <g id="prefix__XMLID_11654_">
              <path
                id="prefix__XMLID_11655_"
                className="prefix__st25"
                d="M207.5 269.5c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7-.5.1-.8.5-.7.9z"
              />
            </g>
            <g id="prefix__XMLID_11652_">
              <linearGradient
                id="prefix__XMLID_38_"
                gradientUnits="userSpaceOnUse"
                x1={981.561}
                y1={589.551}
                x2={979.835}
                y2={596.707}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11653_"
                d="M121.7 237.5c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.7.4-.7.9z"
                fill="url(#prefix__XMLID_38_)"
              />
            </g>
            <g id="prefix__XMLID_11650_">
              <linearGradient
                id="prefix__XMLID_39_"
                gradientUnits="userSpaceOnUse"
                x1={967.601}
                y1={610.782}
                x2={966.864}
                y2={613.838}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11651_"
                d="M138.5 256.2c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                fill="url(#prefix__XMLID_39_)"
              />
            </g>
            <g id="prefix__XMLID_11648_">
              <linearGradient
                id="prefix__XMLID_40_"
                gradientUnits="userSpaceOnUse"
                x1={808.315}
                y1={619.192}
                x2={807.579}
                y2={622.248}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11649_"
                d="M297.6 244.6c0 .2.2.4.4.3s.3-.2.3-.4-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                fill="url(#prefix__XMLID_40_)"
              />
            </g>
            <g id="prefix__XMLID_11646_">
              <path
                id="prefix__XMLID_11647_"
                className="prefix__st25"
                d="M126 270.1c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
              />
            </g>
            <g id="prefix__XMLID_11644_">
              <linearGradient
                id="prefix__XMLID_41_"
                gradientUnits="userSpaceOnUse"
                x1={891.011}
                y1={627.331}
                x2={890.274}
                y2={630.386}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11645_"
                d="M216.6 263c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.3.3-.3.4z"
                fill="url(#prefix__XMLID_41_)"
              />
            </g>
            <g id="prefix__XMLID_11642_">
              <linearGradient
                id="prefix__XMLID_42_"
                gradientUnits="userSpaceOnUse"
                x1={822.303}
                y1={606.994}
                x2={821.566}
                y2={610.049}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11643_"
                d="M282.2 234.3c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.1-.3.4z"
                fill="url(#prefix__XMLID_42_)"
              />
            </g>
            <g id="prefix__XMLID_11640_">
              <linearGradient
                id="prefix__XMLID_43_"
                gradientUnits="userSpaceOnUse"
                x1={914.112}
                y1={593.714}
                x2={913.376}
                y2={596.769}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11641_"
                d="M189.4 232.5c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.3.3-.3.4z"
                fill="url(#prefix__XMLID_43_)"
              />
            </g>
            <g id="prefix__XMLID_11638_">
              <linearGradient
                id="prefix__XMLID_44_"
                gradientUnits="userSpaceOnUse"
                x1={906.654}
                y1={653.003}
                x2={905.917}
                y2={656.058}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11639_"
                d="M204.3 290.4c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.3.1-.4.2-.3.4z"
                fill="url(#prefix__XMLID_44_)"
              />
            </g>
            <g id="prefix__XMLID_11636_">
              <linearGradient
                id="prefix__XMLID_45_"
                gradientUnits="userSpaceOnUse"
                x1={837.049}
                y1={621.935}
                x2={835.324}
                y2={629.091}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11637_"
                d="M269.2 251.6c.1.4.5.7.9.7s.7-.5.7-.9-.5-.7-.9-.7c-.5 0-.8.4-.7.9z"
                fill="url(#prefix__XMLID_45_)"
              />
            </g>
            <g id="prefix__XMLID_11634_">
              <linearGradient
                id="prefix__XMLID_46_"
                gradientUnits="userSpaceOnUse"
                x1={822.195}
                y1={623.673}
                x2={820.47}
                y2={630.828}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11635_"
                d="M284.1 251.4c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.5.1-.7.5-.7.9z"
                fill="url(#prefix__XMLID_46_)"
              />
            </g>
            <g id="prefix__XMLID_11632_">
              <linearGradient
                id="prefix__XMLID_47_"
                gradientUnits="userSpaceOnUse"
                x1={843.649}
                y1={601.201}
                x2={841.924}
                y2={608.357}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11633_"
                d="M260 231.8c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.7.5-.7.9z"
                fill="url(#prefix__XMLID_47_)"
              />
            </g>
            <g id="prefix__XMLID_11630_">
              <path
                id="prefix__XMLID_11631_"
                className="prefix__st25"
                d="M272 266.4c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
              />
            </g>
            <g id="prefix__XMLID_11628_">
              <linearGradient
                id="prefix__XMLID_48_"
                gradientUnits="userSpaceOnUse"
                x1={785.288}
                y1={585.017}
                x2={783.563}
                y2={592.172}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11629_"
                d="M315.9 208.5c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
                fill="url(#prefix__XMLID_48_)"
              />
            </g>
            <g id="prefix__XMLID_11626_">
              <linearGradient
                id="prefix__XMLID_49_"
                gradientUnits="userSpaceOnUse"
                x1={882.345}
                y1={599.426}
                x2={880.62}
                y2={606.581}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11627_"
                d="M221.4 234.9c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                fill="url(#prefix__XMLID_49_)"
              />
            </g>
            <g id="prefix__XMLID_11624_">
              <linearGradient
                id="prefix__XMLID_50_"
                gradientUnits="userSpaceOnUse"
                x1={899.233}
                y1={578.893}
                x2={897.508}
                y2={586.049}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11625_"
                d="M202.1 216.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.8.4-.7.9z"
                fill="url(#prefix__XMLID_50_)"
              />
            </g>
            <g id="prefix__XMLID_11622_">
              <linearGradient
                id="prefix__XMLID_51_"
                gradientUnits="userSpaceOnUse"
                x1={959.366}
                y1={579.488}
                x2={957.641}
                y2={586.644}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11623_"
                d="M142.5 224.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.8.5-.7.9z"
                fill="url(#prefix__XMLID_51_)"
              />
            </g>
            <g id="prefix__XMLID_11620_">
              <linearGradient
                id="prefix__XMLID_52_"
                gradientUnits="userSpaceOnUse"
                x1={969.235}
                y1={629.673}
                x2={967.51}
                y2={636.828}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11621_"
                d="M139 275.8c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
                fill="url(#prefix__XMLID_52_)"
              />
            </g>
            <g id="prefix__XMLID_11618_">
              <linearGradient
                id="prefix__XMLID_53_"
                gradientUnits="userSpaceOnUse"
                x1={947.204}
                y1={636.409}
                x2={946.043}
                y2={641.221}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11619_"
                d="M161.8 279.3c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4.1-.5.4-.5.6z"
                fill="url(#prefix__XMLID_53_)"
              />
            </g>
            <g id="prefix__XMLID_11616_">
              <linearGradient
                id="prefix__XMLID_54_"
                gradientUnits="userSpaceOnUse"
                x1={907.589}
                y1={613.511}
                x2={906.429}
                y2={618.323}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11617_"
                d="M198.3 251.7c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.6.3-.5.6z"
                fill="url(#prefix__XMLID_54_)"
              />
            </g>
            <g id="prefix__XMLID_11614_">
              <path
                id="prefix__XMLID_11615_"
                className="prefix__st25"
                d="M241.6 234.1c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4 0-.6.3-.5.6z"
              />
            </g>
            <g id="prefix__XMLID_11612_">
              <linearGradient
                id="prefix__XMLID_55_"
                gradientUnits="userSpaceOnUse"
                x1={828.034}
                y1={578.639}
                x2={826.873}
                y2={583.451}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11613_"
                d="M272.8 207.1c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                fill="url(#prefix__XMLID_55_)"
              />
            </g>
            <g id="prefix__XMLID_11610_">
              <linearGradient
                id="prefix__XMLID_56_"
                gradientUnits="userSpaceOnUse"
                x1={797.101}
                y1={596.256}
                x2={795.941}
                y2={601.068}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11611_"
                d="M305.7 220.7c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.3.1-.5.3-.5.6z"
                fill="url(#prefix__XMLID_56_)"
              />
            </g>
            <g id="prefix__XMLID_11608_">
              <linearGradient
                id="prefix__XMLID_57_"
                gradientUnits="userSpaceOnUse"
                x1={825.933}
                y1={640.84}
                x2={824.772}
                y2={645.652}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11609_"
                d="M282.7 268.6c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4 0-.6.2-.5.6z"
                fill="url(#prefix__XMLID_57_)"
              />
            </g>
            <g id="prefix__XMLID_11606_">
              <linearGradient
                id="prefix__XMLID_58_"
                gradientUnits="userSpaceOnUse"
                x1={848.758}
                y1={646.643}
                x2={847.032}
                y2={653.799}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11607_"
                d="M260.6 277.5c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.4.1-.7.5-.7.9z"
                fill="url(#prefix__XMLID_58_)"
              />
            </g>
          </g>
          <g id="prefix__XMLID_11548_" className="prefix__st79">
            <g id="prefix__XMLID_11603_">
              <linearGradient
                id="prefix__XMLID_59_"
                gradientUnits="userSpaceOnUse"
                x1={867.604}
                y1={525.546}
                x2={866.339}
                y2={530.791}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11604_"
                d="M226.9 159.4c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3.2-.5.4-.5.7z"
                fill="url(#prefix__XMLID_59_)"
              />
            </g>
            <g id="prefix__XMLID_11601_">
              <linearGradient
                id="prefix__XMLID_60_"
                gradientUnits="userSpaceOnUse"
                x1={861.636}
                y1={512.196}
                x2={860.371}
                y2={517.442}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11602_"
                d="M231.2 145.5c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3 0-.6.3-.5.7z"
                fill="url(#prefix__XMLID_60_)"
              />
            </g>
            <g id="prefix__XMLID_11599_">
              <linearGradient
                id="prefix__XMLID_61_"
                gradientUnits="userSpaceOnUse"
                x1={900.147}
                y1={520.156}
                x2={898.882}
                y2={525.402}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11600_"
                d="M194 158.2c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.4 0-.6.3-.5.7z"
                fill="url(#prefix__XMLID_61_)"
              />
            </g>
            <g id="prefix__XMLID_11597_">
              <linearGradient
                id="prefix__XMLID_62_"
                gradientUnits="userSpaceOnUse"
                x1={932.679}
                y1={555.364}
                x2={931.414}
                y2={560.609}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11598_"
                d="M166.1 197.2c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3 0-.5.4-.5.7z"
                fill="url(#prefix__XMLID_62_)"
              />
            </g>
            <g id="prefix__XMLID_11595_">
              <linearGradient
                id="prefix__XMLID_63_"
                gradientUnits="userSpaceOnUse"
                x1={992.09}
                y1={524.213}
                x2={990.825}
                y2={529.459}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11596_"
                d="M103.3 173.7c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.4.1-.6.4-.5.7z"
                fill="url(#prefix__XMLID_63_)"
              />
            </g>
            <g id="prefix__XMLID_11593_">
              <linearGradient
                id="prefix__XMLID_64_"
                gradientUnits="userSpaceOnUse"
                x1={981.812}
                y1={539.767}
                x2={981.272}
                y2={542.007}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <circle
                id="prefix__XMLID_11594_"
                cx={115.8}
                cy={187.4}
                fill="url(#prefix__XMLID_64_)"
                r={0.2}
              />
            </g>
            <g id="prefix__XMLID_11591_">
              <path
                id="prefix__XMLID_11592_"
                className="prefix__st25"
                d="M232.2 178.9c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2s-.2.2-.2.3z"
              />
            </g>
            <g id="prefix__XMLID_11589_">
              <linearGradient
                id="prefix__XMLID_65_"
                gradientUnits="userSpaceOnUse"
                x1={992.17}
                y1={548.744}
                x2={991.63}
                y2={550.984}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11590_"
                d="M106.4 197.6c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.2 0-.2.1-.2.3z"
                fill="url(#prefix__XMLID_65_)"
              />
            </g>
            <g id="prefix__XMLID_11587_">
              <linearGradient
                id="prefix__XMLID_66_"
                gradientUnits="userSpaceOnUse"
                x1={925.676}
                y1={551.9}
                x2={925.136}
                y2={554.14}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11588_"
                d="M172.8 192.4c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.2 0-.3.1-.2.3z"
                fill="url(#prefix__XMLID_66_)"
              />
            </g>
            <g id="prefix__XMLID_11585_">
              <linearGradient
                id="prefix__XMLID_67_"
                gradientUnits="userSpaceOnUse"
                x1={875.27}
                y1={536.982}
                x2={874.73}
                y2={539.222}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11586_"
                d="M220.9 171.3c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.2.1-.2.1-.2.3z"
                fill="url(#prefix__XMLID_67_)"
              />
            </g>
            <g id="prefix__XMLID_11583_">
              <linearGradient
                id="prefix__XMLID_68_"
                gradientUnits="userSpaceOnUse"
                x1={942.62}
                y1={527.259}
                x2={942.08}
                y2={529.498}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11584_"
                d="M152.9 170.1c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3z"
                fill="url(#prefix__XMLID_68_)"
              />
            </g>
            <g id="prefix__XMLID_11581_">
              <linearGradient
                id="prefix__XMLID_69_"
                gradientUnits="userSpaceOnUse"
                x1={937.132}
                y1={570.717}
                x2={936.592}
                y2={572.957}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11582_"
                d="M163.7 212.5c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3z"
                fill="url(#prefix__XMLID_69_)"
              />
            </g>
            <g id="prefix__XMLID_11579_">
              <linearGradient
                id="prefix__XMLID_70_"
                gradientUnits="userSpaceOnUse"
                x1={886.158}
                y1={547.954}
                x2={884.893}
                y2={553.199}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11580_"
                d="M211.3 184c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3.1-.5.3-.5.7z"
                fill="url(#prefix__XMLID_70_)"
              />
            </g>
            <g id="prefix__XMLID_11577_">
              <linearGradient
                id="prefix__XMLID_71_"
                gradientUnits="userSpaceOnUse"
                x1={875.314}
                y1={549.239}
                x2={874.049}
                y2={554.484}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11578_"
                d="M222.3 183.9c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.6.4-.5.7z"
                fill="url(#prefix__XMLID_71_)"
              />
            </g>
            <g id="prefix__XMLID_11575_">
              <path
                id="prefix__XMLID_11576_"
                className="prefix__st25"
                d="M204.6 169.5c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
              />
            </g>
            <g id="prefix__XMLID_11573_">
              <linearGradient
                id="prefix__XMLID_72_"
                gradientUnits="userSpaceOnUse"
                x1={885.412}
                y1={558.947}
                x2={884.147}
                y2={564.193}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11574_"
                d="M213.4 194.8c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                fill="url(#prefix__XMLID_72_)"
              />
            </g>
            <g id="prefix__XMLID_11571_">
              <linearGradient
                id="prefix__XMLID_73_"
                gradientUnits="userSpaceOnUse"
                x1={848.202}
                y1={520.888}
                x2={846.937}
                y2={526.133}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11572_"
                d="M245.6 152.4c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                fill="url(#prefix__XMLID_73_)"
              />
            </g>
            <g id="prefix__XMLID_11569_">
              <linearGradient
                id="prefix__XMLID_74_"
                gradientUnits="userSpaceOnUse"
                x1={919.368}
                y1={531.454}
                x2={918.103}
                y2={536.7}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11570_"
                d="M176.3 171.8c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3 0-.5.4-.5.7z"
                fill="url(#prefix__XMLID_74_)"
              />
            </g>
            <g id="prefix__XMLID_11567_">
              <linearGradient
                id="prefix__XMLID_75_"
                gradientUnits="userSpaceOnUse"
                x1={931.757}
                y1={516.405}
                x2={930.493}
                y2={521.651}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11568_"
                d="M162.1 158.4c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.2.1-.5.3-.5.7z"
                fill="url(#prefix__XMLID_75_)"
              />
            </g>
            <g id="prefix__XMLID_11565_">
              <linearGradient
                id="prefix__XMLID_76_"
                gradientUnits="userSpaceOnUse"
                x1={975.817}
                y1={516.836}
                x2={974.553}
                y2={522.081}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11566_"
                d="M118.5 164.3c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.6.4-.5.7z"
                fill="url(#prefix__XMLID_76_)"
              />
            </g>
            <g id="prefix__XMLID_11563_">
              <circle
                id="prefix__XMLID_11564_"
                transform="rotate(-7.187 116.463 201.652)"
                className="prefix__st25"
                cx={116.5}
                cy={201.7}
                r={0.6}
              />
            </g>
            <g id="prefix__XMLID_11561_">
              <linearGradient
                id="prefix__XMLID_77_"
                gradientUnits="userSpaceOnUse"
                x1={966.942}
                y1={558.572}
                x2={966.091}
                y2={562.1}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11562_"
                d="M132.6 204.4c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4s-.3.2-.3.5z"
                fill="url(#prefix__XMLID_77_)"
              />
            </g>
            <g id="prefix__XMLID_11559_">
              <path
                id="prefix__XMLID_11560_"
                className="prefix__st25"
                d="M159.4 184.1c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.2.1-.4.3-.3.5z"
              />
            </g>
            <g id="prefix__XMLID_11557_">
              <linearGradient
                id="prefix__XMLID_78_"
                gradientUnits="userSpaceOnUse"
                x1={904.769}
                y1={532.981}
                x2={903.918}
                y2={536.509}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11558_"
                d="M191.1 171.2c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.2.1-.3.3-.3.5z"
                fill="url(#prefix__XMLID_78_)"
              />
            </g>
            <g id="prefix__XMLID_11555_">
              <linearGradient
                id="prefix__XMLID_79_"
                gradientUnits="userSpaceOnUse"
                x1={879.566}
                y1={516.219}
                x2={878.715}
                y2={519.747}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11556_"
                d="M214 151.4c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.2.1-.3.3-.3.5z"
                fill="url(#prefix__XMLID_79_)"
              />
            </g>
            <g id="prefix__XMLID_11553_">
              <path
                id="prefix__XMLID_11554_"
                className="prefix__st25"
                d="M238.1 161.4c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.2.1-.3.3-.3.5z"
              />
            </g>
            <g id="prefix__XMLID_11551_">
              <linearGradient
                id="prefix__XMLID_80_"
                gradientUnits="userSpaceOnUse"
                x1={878.026}
                y1={561.817}
                x2={877.176}
                y2={565.344}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11552_"
                d="M221.2 196.5c0 .2.2.4.4.4s.3-.2.3-.5-.2-.4-.4-.4c-.1 0-.3.2-.3.5z"
                fill="url(#prefix__XMLID_80_)"
              />
            </g>
            <g id="prefix__XMLID_11549_">
              <linearGradient
                id="prefix__XMLID_81_"
                gradientUnits="userSpaceOnUse"
                x1={894.725}
                y1={566.063}
                x2={893.46}
                y2={571.308}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11550_"
                d="M205.1 203.1c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7z"
                fill="url(#prefix__XMLID_81_)"
              />
            </g>
          </g>
          <g id="prefix__XMLID_11491_" className="prefix__st103">
            <g id="prefix__XMLID_11546_">
              <linearGradient
                id="prefix__XMLID_82_"
                gradientUnits="userSpaceOnUse"
                x1={227.677}
                y1={-152.8}
                x2={226.412}
                y2={-147.554}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11547_"
                d="M331.7 270.3c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.3 0 .5-.3.5-.7z"
                fill="url(#prefix__XMLID_82_)"
              />
            </g>
            <g id="prefix__XMLID_11544_">
              <linearGradient
                id="prefix__XMLID_83_"
                gradientUnits="userSpaceOnUse"
                x1={221.695}
                y1={-166.153}
                x2={220.43}
                y2={-160.907}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11545_"
                d="M327.4 284.3c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5s.5-.4.5-.7z"
                fill="url(#prefix__XMLID_83_)"
              />
            </g>
            <g id="prefix__XMLID_11542_">
              <linearGradient
                id="prefix__XMLID_84_"
                gradientUnits="userSpaceOnUse"
                x1={260.206}
                y1={-158.193}
                x2={258.941}
                y2={-152.947}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11543_"
                d="M364.6 271.6c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.3 0 .6-.4.5-.7z"
                fill="url(#prefix__XMLID_84_)"
              />
            </g>
            <g id="prefix__XMLID_11540_">
              <path
                id="prefix__XMLID_11541_"
                className="prefix__st25"
                d="M392.5 232.6c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3-.1.5-.3.5-.7z"
              />
            </g>
            <g id="prefix__XMLID_11538_">
              <linearGradient
                id="prefix__XMLID_85_"
                gradientUnits="userSpaceOnUse"
                x1={352.149}
                y1={-154.136}
                x2={350.884}
                y2={-148.89}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11539_"
                d="M455.3 256.1c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.4-.1.6-.4.5-.7z"
                fill="url(#prefix__XMLID_85_)"
              />
            </g>
            <g id="prefix__XMLID_11536_">
              <linearGradient
                id="prefix__XMLID_86_"
                gradientUnits="userSpaceOnUse"
                x1={341.871}
                y1={-138.582}
                x2={341.331}
                y2={-136.343}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11537_"
                d="M443 242.4c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.1 0 .3-.1.2-.3z"
                fill="url(#prefix__XMLID_86_)"
              />
            </g>
            <g id="prefix__XMLID_11534_">
              <linearGradient
                id="prefix__XMLID_87_"
                gradientUnits="userSpaceOnUse"
                x1={225.097}
                y1={-132.419}
                x2={224.557}
                y2={-130.18}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11535_"
                d="M326.4 250.9c0-.1-.2-.2-.3-.2s-.2.2-.2.3c0 .1.2.2.3.2.1 0 .2-.1.2-.3z"
                fill="url(#prefix__XMLID_87_)"
              />
            </g>
            <g id="prefix__XMLID_11532_">
              <linearGradient
                id="prefix__XMLID_88_"
                gradientUnits="userSpaceOnUse"
                x1={352.229}
                y1={-129.606}
                x2={351.688}
                y2={-127.366}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11533_"
                d="M452.2 232.2c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.1 0 .2-.2.2-.3z"
                fill="url(#prefix__XMLID_88_)"
              />
            </g>
            <g id="prefix__XMLID_11530_">
              <linearGradient
                id="prefix__XMLID_89_"
                gradientUnits="userSpaceOnUse"
                x1={285.735}
                y1={-126.449}
                x2={285.195}
                y2={-124.209}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11531_"
                d="M385.8 237.4c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.1 0 .2-.2.2-.3z"
                fill="url(#prefix__XMLID_89_)"
              />
            </g>
            <g id="prefix__XMLID_11528_">
              <path
                id="prefix__XMLID_11529_"
                className="prefix__st25"
                d="M337.7 258.5c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.1 0 .2-.2.2-.3z"
              />
            </g>
            <g id="prefix__XMLID_11526_">
              <linearGradient
                id="prefix__XMLID_90_"
                gradientUnits="userSpaceOnUse"
                x1={302.679}
                y1={-151.09}
                x2={302.139}
                y2={-148.851}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11527_"
                d="M405.7 259.7c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.1 0 .2-.1.2-.3z"
                fill="url(#prefix__XMLID_90_)"
              />
            </g>
            <g id="prefix__XMLID_11524_">
              <linearGradient
                id="prefix__XMLID_91_"
                gradientUnits="userSpaceOnUse"
                x1={297.191}
                y1={-107.632}
                x2={296.651}
                y2={-105.392}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11525_"
                d="M394.8 217.3c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.2 0 .3-.1.2-.3z"
                fill="url(#prefix__XMLID_91_)"
              />
            </g>
            <g id="prefix__XMLID_11522_">
              <linearGradient
                id="prefix__XMLID_92_"
                gradientUnits="userSpaceOnUse"
                x1={246.216}
                y1={-130.395}
                x2={244.952}
                y2={-125.15}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11523_"
                d="M347.3 245.8c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5s.5-.4.5-.7z"
                fill="url(#prefix__XMLID_92_)"
              />
            </g>
            <g id="prefix__XMLID_11520_">
              <linearGradient
                id="prefix__XMLID_93_"
                gradientUnits="userSpaceOnUse"
                x1={235.315}
                y1={-129.125}
                x2={234.05}
                y2={-123.879}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11521_"
                d="M336.3 245.9c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
                fill="url(#prefix__XMLID_93_)"
              />
            </g>
            <g id="prefix__XMLID_11518_">
              <linearGradient
                id="prefix__XMLID_94_"
                gradientUnits="userSpaceOnUse"
                x1={251.034}
                y1={-145.599}
                x2={249.769}
                y2={-140.354}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11519_"
                d="M353.9 260.3c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.4-.1.6-.4.5-.7z"
                fill="url(#prefix__XMLID_94_)"
              />
            </g>
            <g id="prefix__XMLID_11516_">
              <linearGradient
                id="prefix__XMLID_95_"
                gradientUnits="userSpaceOnUse"
                x1={245.485}
                y1={-119.398}
                x2={244.22}
                y2={-114.153}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11517_"
                d="M345.1 235c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.4-.1.6-.4.5-.7z"
                fill="url(#prefix__XMLID_95_)"
              />
            </g>
            <g id="prefix__XMLID_11514_">
              <linearGradient
                id="prefix__XMLID_96_"
                gradientUnits="userSpaceOnUse"
                x1={208.258}
                y1={-157.462}
                x2={206.993}
                y2={-152.217}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11515_"
                d="M313 277.4c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .4.3.6.6.5.3-.1.5-.4.5-.7z"
                fill="url(#prefix__XMLID_96_)"
              />
            </g>
            <g id="prefix__XMLID_11512_">
              <linearGradient
                id="prefix__XMLID_97_"
                gradientUnits="userSpaceOnUse"
                x1={279.427}
                y1={-146.895}
                x2={278.162}
                y2={-141.649}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11513_"
                d="M382.3 258c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.2-.1.5-.3.5-.7z"
                fill="url(#prefix__XMLID_97_)"
              />
            </g>
            <g id="prefix__XMLID_11510_">
              <linearGradient
                id="prefix__XMLID_98_"
                gradientUnits="userSpaceOnUse"
                x1={291.758}
                y1={-161.958}
                x2={290.493}
                y2={-156.713}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11511_"
                d="M396.4 271.4c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3 0 .5-.4.5-.7z"
                fill="url(#prefix__XMLID_98_)"
              />
            </g>
            <g id="prefix__XMLID_11508_">
              <path
                id="prefix__XMLID_11509_"
                className="prefix__st25"
                d="M440.1 265.5c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
              />
            </g>
            <g id="prefix__XMLID_11506_">
              <linearGradient
                id="prefix__XMLID_99_"
                gradientUnits="userSpaceOnUse"
                x1={343.087}
                y1={-124.73}
                x2={341.823}
                y2={-119.485}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11507_"
                d="M442.7 228.1c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
                fill="url(#prefix__XMLID_99_)"
              />
            </g>
            <g id="prefix__XMLID_11504_">
              <linearGradient
                id="prefix__XMLID_100_"
                gradientUnits="userSpaceOnUse"
                x1={327.001}
                y1={-119.777}
                x2={326.15}
                y2={-116.249}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11505_"
                d="M426 225.5c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.2-.2.3-.4.3-.5z"
                fill="url(#prefix__XMLID_100_)"
              />
            </g>
            <g id="prefix__XMLID_11502_">
              <linearGradient
                id="prefix__XMLID_101_"
                gradientUnits="userSpaceOnUse"
                x1={297.923}
                y1={-136.571}
                x2={297.072}
                y2={-133.044}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11503_"
                d="M399.2 245.7c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4s.4-.2.3-.5z"
                fill="url(#prefix__XMLID_101_)"
              />
            </g>
            <g id="prefix__XMLID_11500_">
              <linearGradient
                id="prefix__XMLID_102_"
                gradientUnits="userSpaceOnUse"
                x1={264.77}
                y1={-145.382}
                x2={263.919}
                y2={-141.854}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11501_"
                d="M367.4 258.6c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.3 0 .4-.2.3-.5z"
                fill="url(#prefix__XMLID_102_)"
              />
            </g>
            <g id="prefix__XMLID_11498_">
              <linearGradient
                id="prefix__XMLID_103_"
                gradientUnits="userSpaceOnUse"
                x1={239.625}
                y1={-162.13}
                x2={238.774}
                y2={-158.602}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11499_"
                d="M344.6 278.4c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.2-.1.3-.3.3-.5z"
                fill="url(#prefix__XMLID_103_)"
              />
            </g>
            <g id="prefix__XMLID_11496_">
              <linearGradient
                id="prefix__XMLID_104_"
                gradientUnits="userSpaceOnUse"
                x1={216.954}
                y1={-149.214}
                x2={216.103}
                y2={-145.687}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11497_"
                d="M320.5 268.4c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.1-.1.3-.3.3-.5z"
                fill="url(#prefix__XMLID_104_)"
              />
            </g>
            <g id="prefix__XMLID_11494_">
              <linearGradient
                id="prefix__XMLID_105_"
                gradientUnits="userSpaceOnUse"
                x1={238.027}
                y1={-116.547}
                x2={237.176}
                y2={-113.019}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11495_"
                d="M337.3 233.3c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4s.3-.2.3-.5z"
                fill="url(#prefix__XMLID_105_)"
              />
            </g>
            <g id="prefix__XMLID_11492_">
              <linearGradient
                id="prefix__XMLID_106_"
                gradientUnits="userSpaceOnUse"
                x1={254.784}
                y1={-112.287}
                x2={253.519}
                y2={-107.041}
                gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11493_"
                d="M353.5 226.8c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5s.5-.4.5-.7z"
                fill="url(#prefix__XMLID_106_)"
              />
            </g>
          </g>
        </g>
        <radialGradient
          id="prefix__SVGID_30_"
          cx={123.409}
          cy={2663.957}
          r={38.81}
          gradientTransform="matrix(1.1381 -1.1579 .1888 .1706 -355.765 -85.898)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ff40ff" />
          <stop offset={1} stopColor="#ff40ff" stopOpacity={0} />
        </radialGradient>
        <path
          d="M348.5 167c6.7 7-15 38.9-48.6 71.3s-66.2 53.1-72.9 46.2c-6.7-7 15-38.9 48.6-71.3s66.1-53.1 72.9-46.2z"
          clipPath="url(#prefix__XMLID_3_)"
          fill="url(#prefix__SVGID_30_)"
        />
        <g id="prefix__XMLID_11488_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_107_"
            gradientUnits="userSpaceOnUse"
            x1={702.038}
            y1={621.955}
            x2={699.529}
            y2={632.361}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11489_"
            d="M402.9 235.2c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1c-.6.1-1.1.7-1 1.3z"
            fill="url(#prefix__XMLID_107_)"
          />
        </g>
        <g id="prefix__XMLID_11486_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_108_"
            gradientUnits="userSpaceOnUse"
            x1={819.894}
            y1={560.158}
            x2={817.385}
            y2={570.564}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11487_"
            d="M278.3 188.7c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
            fill="url(#prefix__XMLID_108_)"
          />
        </g>
        <g id="prefix__XMLID_11484_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_109_"
            gradientUnits="userSpaceOnUse"
            x1={799.592}
            y1={591.034}
            x2={798.521}
            y2={595.477}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11485_"
            d="M302.7 215.8c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.5.3-.4.6z"
            fill="url(#prefix__XMLID_109_)"
          />
        </g>
        <g id="prefix__XMLID_11482_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_110_"
            gradientUnits="userSpaceOnUse"
            x1={820.206}
            y1={608.858}
            x2={819.134}
            y2={613.301}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11483_"
            d="M284.4 236c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2.1-.4.4-.4.6z"
            fill="url(#prefix__XMLID_110_)"
          />
        </g>
        <g id="prefix__XMLID_11480_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_111_"
            gradientUnits="userSpaceOnUse"
            x1={721.807}
            y1={566.211}
            x2={720.735}
            y2={570.654}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11481_"
            d="M376.7 181.4c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.4.3-.4.6z"
            fill="url(#prefix__XMLID_111_)"
          />
        </g>
        <g id="prefix__XMLID_11478_" className="prefix__st21">
          <path
            id="prefix__XMLID_11479_"
            className="prefix__st25"
            d="M398.3 265.6c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2.1-.5.3-.4.6z"
          />
        </g>
        <g id="prefix__XMLID_11476_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_112_"
            gradientUnits="userSpaceOnUse"
            x1={700.168}
            y1={544.658}
            x2={697.658}
            y2={555.065}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11477_"
            d="M395.1 158.3c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
            fill="url(#prefix__XMLID_112_)"
          />
        </g>
        <g id="prefix__XMLID_11474_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_113_"
            gradientUnits="userSpaceOnUse"
            x1={787.533}
            y1={545.503}
            x2={785.024}
            y2={555.909}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11475_"
            d="M308.5 170c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1c-.7.1-1 .7-1 1.3z"
            fill="url(#prefix__XMLID_113_)"
          />
        </g>
        <g id="prefix__XMLID_11472_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_114_"
            gradientUnits="userSpaceOnUse"
            x1={801.884}
            y1={618.484}
            x2={799.375}
            y2={628.891}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11473_"
            d="M303.5 244.3c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1-1.1.6-1 1.3z"
            fill="url(#prefix__XMLID_114_)"
          />
        </g>
        <g id="prefix__XMLID_11470_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_115_"
            gradientUnits="userSpaceOnUse"
            x1={769.95}
            y1={628.306}
            x2={768.263}
            y2={635.305}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11471_"
            d="M336.5 249.5c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7s-.7.5-.7.9z"
            fill="url(#prefix__XMLID_115_)"
          />
        </g>
        <g id="prefix__XMLID_11468_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_116_"
            gradientUnits="userSpaceOnUse"
            x1={712.32}
            y1={595.002}
            x2={710.632}
            y2={602}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11469_"
            d="M389.5 209.2c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7s-.7.5-.7.9z"
            fill="url(#prefix__XMLID_116_)"
          />
        </g>
        <g
          id="prefix__XMLID_11411_"
          opacity={0.58}
          clipPath="url(#prefix__XMLID_3_)"
        >
          <g id="prefix__XMLID_11466_">
            <linearGradient
              id="prefix__XMLID_117_"
              gradientUnits="userSpaceOnUse"
              x1={762.798}
              y1={651.164}
              x2={760.289}
              y2={661.571}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11467_"
              d="M346.3 271.8c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.7.1-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_117_)"
            />
          </g>
          <g id="prefix__XMLID_11464_">
            <path
              id="prefix__XMLID_11465_"
              className="prefix__st25"
              d="M354.7 244.1c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3c-.1-.6-.7-1.1-1.3-1s-1.1.5-1 1.3z"
            />
          </g>
          <g id="prefix__XMLID_11462_">
            <linearGradient
              id="prefix__XMLID_118_"
              gradientUnits="userSpaceOnUse"
              x1={827.413}
              y1={640.486}
              x2={824.904}
              y2={650.893}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11463_"
              d="M280.9 269.3c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_118_)"
            />
          </g>
          <g id="prefix__XMLID_11460_">
            <path
              id="prefix__XMLID_11461_"
              className="prefix__st25"
              d="M225.6 346.6c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6.1-1.1.7-1 1.3z"
            />
          </g>
          <g id="prefix__XMLID_11458_">
            <linearGradient
              id="prefix__XMLID_119_"
              gradientUnits="userSpaceOnUse"
              x1={1009.785}
              y1={648.528}
              x2={1007.276}
              y2={658.935}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11459_"
              d="M100.9 300.1c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.6 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_119_)"
            />
          </g>
          <g id="prefix__XMLID_11456_">
            <linearGradient
              id="prefix__XMLID_120_"
              gradientUnits="userSpaceOnUse"
              x1={989.483}
              y1={679.404}
              x2={988.412}
              y2={683.848}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11457_"
              d="M125.3 327.2c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5-.4.3-.4.6z"
              fill="url(#prefix__XMLID_120_)"
            />
          </g>
          <g id="prefix__XMLID_11454_">
            <linearGradient
              id="prefix__XMLID_121_"
              gradientUnits="userSpaceOnUse"
              x1={757.756}
              y1={691.614}
              x2={756.685}
              y2={696.057}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11455_"
              d="M356.8 310.4c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5-.5.3-.4.6z"
              fill="url(#prefix__XMLID_121_)"
            />
          </g>
          <g id="prefix__XMLID_11452_">
            <path
              id="prefix__XMLID_11453_"
              className="prefix__st25"
              d="M107.2 347.4c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.5.4-.4.6z"
            />
          </g>
          <g id="prefix__XMLID_11450_">
            <linearGradient
              id="prefix__XMLID_122_"
              gradientUnits="userSpaceOnUse"
              x1={878.017}
              y1={703.45}
              x2={876.946}
              y2={707.893}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11451_"
              d="M238.9 337.1c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.4.4-.4.6z"
              fill="url(#prefix__XMLID_122_)"
            />
          </g>
          <g id="prefix__XMLID_11448_">
            <linearGradient
              id="prefix__XMLID_123_"
              gradientUnits="userSpaceOnUse"
              x1={778.098}
              y1={673.874}
              x2={777.026}
              y2={678.317}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11449_"
              d="M334.4 295.3c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.5.3-.4.6z"
              fill="url(#prefix__XMLID_123_)"
            />
          </g>
          <g id="prefix__XMLID_11446_">
            <linearGradient
              id="prefix__XMLID_124_"
              gradientUnits="userSpaceOnUse"
              x1={911.697}
              y1={654.582}
              x2={910.626}
              y2={659.025}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11447_"
              d="M199.4 292.8c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2.1-.5.4-.4.6z"
              fill="url(#prefix__XMLID_124_)"
            />
          </g>
          <g id="prefix__XMLID_11444_">
            <linearGradient
              id="prefix__XMLID_125_"
              gradientUnits="userSpaceOnUse"
              x1={900.766}
              y1={740.784}
              x2={899.695}
              y2={745.227}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11445_"
              d="M221 377c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.4.3-.4.6z"
              fill="url(#prefix__XMLID_125_)"
            />
          </g>
          <g id="prefix__XMLID_11442_">
            <linearGradient
              id="prefix__XMLID_126_"
              gradientUnits="userSpaceOnUse"
              x1={799.542}
              y1={695.602}
              x2={797.033}
              y2={706.009}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11443_"
              d="M315.4 320.5c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_126_)"
            />
          </g>
          <g id="prefix__XMLID_11440_">
            <linearGradient
              id="prefix__XMLID_127_"
              gradientUnits="userSpaceOnUse"
              x1={778.025}
              y1={698.15}
              x2={775.516}
              y2={708.556}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11441_"
              d="M337.1 320.3c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_127_)"
            />
          </g>
          <g id="prefix__XMLID_11438_">
            <linearGradient
              id="prefix__XMLID_128_"
              gradientUnits="userSpaceOnUse"
              x1={809.141}
              y1={665.451}
              x2={806.632}
              y2={675.857}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11439_"
              d="M302.1 291.8c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.7 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_128_)"
            />
          </g>
          <g id="prefix__XMLID_11436_">
            <path
              id="prefix__XMLID_11437_"
              className="prefix__st25"
              d="M319.6 342c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1c-.8 0-1.1.6-1 1.3z"
            />
          </g>
          <g id="prefix__XMLID_11434_">
            <linearGradient
              id="prefix__XMLID_129_"
              gradientUnits="userSpaceOnUse"
              x1={724.268}
              y1={641.914}
              x2={721.759}
              y2={652.32}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11435_"
              d="M383.4 257.8c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.6.1-1.1.7-1 1.3z"
              fill="url(#prefix__XMLID_129_)"
            />
          </g>
          <g id="prefix__XMLID_11432_">
            <linearGradient
              id="prefix__XMLID_130_"
              gradientUnits="userSpaceOnUse"
              x1={865.415}
              y1={662.868}
              x2={862.906}
              y2={673.275}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11433_"
              d="M246 296.2c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.7.1-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_130_)"
            />
          </g>
          <g id="prefix__XMLID_11430_">
            <linearGradient
              id="prefix__XMLID_131_"
              gradientUnits="userSpaceOnUse"
              x1={889.974}
              y1={633.009}
              x2={887.465}
              y2={643.415}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11431_"
              d="M217.9 269.7c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3c-.1-.6-.7-1.1-1.3-1-.7 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_131_)"
            />
          </g>
          <g id="prefix__XMLID_11428_">
            <linearGradient
              id="prefix__XMLID_132_"
              gradientUnits="userSpaceOnUse"
              x1={977.424}
              y1={633.874}
              x2={974.915}
              y2={644.28}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11429_"
              d="M131.2 281.5c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_132_)"
            />
          </g>
          <g id="prefix__XMLID_11426_">
            <linearGradient
              id="prefix__XMLID_133_"
              gradientUnits="userSpaceOnUse"
              x1={991.775}
              y1={706.855}
              x2={989.266}
              y2={717.261}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11427_"
              d="M126.1 355.7c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3c-.1-.6-.7-1.1-1.3-1-.6 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_133_)"
            />
          </g>
          <g id="prefix__XMLID_11424_">
            <linearGradient
              id="prefix__XMLID_134_"
              gradientUnits="userSpaceOnUse"
              x1={959.841}
              y1={716.677}
              x2={958.154}
              y2={723.676}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11425_"
              d="M159.2 360.9c.1.4.5.8.9.7.4-.1.8-.5.7-.9s-.5-.8-.9-.7c-.5.1-.8.5-.7.9z"
              fill="url(#prefix__XMLID_134_)"
            />
          </g>
          <g id="prefix__XMLID_11422_">
            <linearGradient
              id="prefix__XMLID_135_"
              gradientUnits="userSpaceOnUse"
              x1={902.126}
              y1={683.353}
              x2={900.439}
              y2={690.351}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11423_"
              d="M212.3 320.6c.1.4.5.8.9.7.4-.1.8-.5.7-.9s-.5-.8-.9-.7c-.6.1-.8.5-.7.9z"
              fill="url(#prefix__XMLID_135_)"
            />
          </g>
          <g id="prefix__XMLID_11420_">
            <path
              id="prefix__XMLID_11421_"
              className="prefix__st25"
              d="M275.3 295.1c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5 0-.8.4-.7.9z"
            />
          </g>
          <g id="prefix__XMLID_11418_">
            <linearGradient
              id="prefix__XMLID_136_"
              gradientUnits="userSpaceOnUse"
              x1={786.432}
              y1={632.639}
              x2={784.744}
              y2={639.638}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11419_"
              d="M320.7 255.8c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5.1-.7.5-.7.9z"
              fill="url(#prefix__XMLID_136_)"
            />
          </g>
          <g id="prefix__XMLID_11416_">
            <linearGradient
              id="prefix__XMLID_137_"
              gradientUnits="userSpaceOnUse"
              x1={741.447}
              y1={658.259}
              x2={739.76}
              y2={665.257}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11417_"
              d="M368.6 275.6c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5.1-.8.5-.7.9z"
              fill="url(#prefix__XMLID_137_)"
            />
          </g>
          <g id="prefix__XMLID_11414_">
            <linearGradient
              id="prefix__XMLID_138_"
              gradientUnits="userSpaceOnUse"
              x1={783.376}
              y1={723.095}
              x2={781.689}
              y2={730.093}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11415_"
              d="M335 345.2c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.4 0-.7.4-.7.9z"
              fill="url(#prefix__XMLID_138_)"
            />
          </g>
          <g id="prefix__XMLID_11412_">
            <linearGradient
              id="prefix__XMLID_139_"
              gradientUnits="userSpaceOnUse"
              x1={816.655}
              y1={731.555}
              x2={814.146}
              y2={741.961}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11413_"
              d="M302.9 358.3c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_139_)"
            />
          </g>
        </g>
        <g
          id="prefix__XMLID_11354_"
          opacity={0.56}
          clipPath="url(#prefix__XMLID_3_)"
        >
          <g id="prefix__XMLID_11409_">
            <linearGradient
              id="prefix__XMLID_140_"
              gradientUnits="userSpaceOnUse"
              x1={844.062}
              y1={555.448}
              x2={842.222}
              y2={563.077}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11410_"
              d="M253.9 186.5c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.5.2-.8.6-.7 1z"
              fill="url(#prefix__XMLID_140_)"
            />
          </g>
          <g id="prefix__XMLID_11407_">
            <linearGradient
              id="prefix__XMLID_141_"
              gradientUnits="userSpaceOnUse"
              x1={835.383}
              y1={536.034}
              x2={833.543}
              y2={543.663}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11408_"
              d="M260.1 166.2c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
              fill="url(#prefix__XMLID_141_)"
            />
          </g>
          <g id="prefix__XMLID_11405_">
            <linearGradient
              id="prefix__XMLID_142_"
              gradientUnits="userSpaceOnUse"
              x1={891.388}
              y1={547.611}
              x2={889.549}
              y2={555.239}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11406_"
              d="M206 184.7c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.5 0-.8.4-.7 1z"
              fill="url(#prefix__XMLID_142_)"
            />
          </g>
          <g id="prefix__XMLID_11403_">
            <linearGradient
              id="prefix__XMLID_143_"
              gradientUnits="userSpaceOnUse"
              x1={938.697}
              y1={598.811}
              x2={936.858}
              y2={606.44}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11404_"
              d="M165.4 241.4c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.3 0-.7.5-.7 1z"
              fill="url(#prefix__XMLID_143_)"
            />
          </g>
          <g id="prefix__XMLID_11401_">
            <linearGradient
              id="prefix__XMLID_144_"
              gradientUnits="userSpaceOnUse"
              x1={1025.012}
              y1={553.49}
              x2={1023.173}
              y2={561.119}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11402_"
              d="M74.1 207.3c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8s-.7.4-.7 1z"
              fill="url(#prefix__XMLID_144_)"
            />
          </g>
          <g id="prefix__XMLID_11399_">
            <linearGradient
              id="prefix__XMLID_145_"
              gradientUnits="userSpaceOnUse"
              x1={1010.15}
              y1={576.129}
              x2={1009.365}
              y2={579.387}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <circle
              id="prefix__XMLID_11400_"
              cx={92.3}
              cy={227.1}
              fill="url(#prefix__XMLID_145_)"
              r={0.4}
            />
          </g>
          <g id="prefix__XMLID_11397_">
            <path
              id="prefix__XMLID_11398_"
              className="prefix__st25"
              d="M261.6 214.8c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.3.2-.3.4z"
            />
          </g>
          <g id="prefix__XMLID_11395_">
            <linearGradient
              id="prefix__XMLID_146_"
              gradientUnits="userSpaceOnUse"
              x1={1025.213}
              y1={589.184}
              x2={1024.427}
              y2={592.441}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11396_"
              d="M78.6 242c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3c-.2-.1-.3.1-.3.4z"
              fill="url(#prefix__XMLID_146_)"
            />
          </g>
          <g id="prefix__XMLID_11393_">
            <linearGradient
              id="prefix__XMLID_147_"
              gradientUnits="userSpaceOnUse"
              x1={928.429}
              y1={593.754}
              x2={927.644}
              y2={597.011}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11394_"
              d="M175.2 234.4c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3c-.2.1-.3.2-.3.4z"
              fill="url(#prefix__XMLID_147_)"
            />
          </g>
          <g id="prefix__XMLID_11391_">
            <linearGradient
              id="prefix__XMLID_148_"
              gradientUnits="userSpaceOnUse"
              x1={855.211}
              y1={572.08}
              x2={854.425}
              y2={575.337}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11392_"
              d="M245.1 203.8c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3c-.1 0-.3.2-.3.4z"
              fill="url(#prefix__XMLID_148_)"
            />
          </g>
          <g id="prefix__XMLID_11389_">
            <linearGradient
              id="prefix__XMLID_149_"
              gradientUnits="userSpaceOnUse"
              x1={953.07}
              y1={557.919}
              x2={952.285}
              y2={561.176}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11390_"
              d="M146.3 202c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.3.2-.3.4z"
              fill="url(#prefix__XMLID_149_)"
            />
          </g>
          <g id="prefix__XMLID_11387_">
            <linearGradient
              id="prefix__XMLID_150_"
              gradientUnits="userSpaceOnUse"
              x1={945.09}
              y1={621.118}
              x2={944.304}
              y2={624.375}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11388_"
              d="M162.1 263.6c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3c-.2.1-.3.3-.3.4z"
              fill="url(#prefix__XMLID_150_)"
            />
          </g>
          <g id="prefix__XMLID_11385_">
            <linearGradient
              id="prefix__XMLID_151_"
              gradientUnits="userSpaceOnUse"
              x1={870.959}
              y1={588.015}
              x2={869.12}
              y2={595.643}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11386_"
              d="M231.3 222.2c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
              fill="url(#prefix__XMLID_151_)"
            />
          </g>
          <g id="prefix__XMLID_11383_">
            <linearGradient
              id="prefix__XMLID_152_"
              gradientUnits="userSpaceOnUse"
              x1={855.19}
              y1={589.883}
              x2={853.351}
              y2={597.512}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11384_"
              d="M247.2 222.1c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
              fill="url(#prefix__XMLID_152_)"
            />
          </g>
          <g id="prefix__XMLID_11381_">
            <path
              id="prefix__XMLID_11382_"
              className="prefix__st25"
              d="M221.5 201.1c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.7.6-.7 1z"
            />
          </g>
          <g id="prefix__XMLID_11379_">
            <linearGradient
              id="prefix__XMLID_153_"
              gradientUnits="userSpaceOnUse"
              x1={869.96}
              y1={604.023}
              x2={868.12}
              y2={611.651}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11380_"
              d="M234.3 237.9c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.4.2-.8.6-.7 1z"
              fill="url(#prefix__XMLID_153_)"
            />
          </g>
          <g id="prefix__XMLID_11377_">
            <linearGradient
              id="prefix__XMLID_154_"
              gradientUnits="userSpaceOnUse"
              x1={815.761}
              y1={548.654}
              x2={813.922}
              y2={556.282}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11378_"
              d="M281.1 176.3c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.7.5-.7 1z"
              fill="url(#prefix__XMLID_154_)"
            />
          </g>
          <g id="prefix__XMLID_11375_">
            <linearGradient
              id="prefix__XMLID_155_"
              gradientUnits="userSpaceOnUse"
              x1={919.256}
              y1={564.02}
              x2={917.416}
              y2={571.649}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11376_"
              d="M180.4 204.4c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.5.1-.8.6-.7 1z"
              fill="url(#prefix__XMLID_155_)"
            />
          </g>
          <g id="prefix__XMLID_11373_">
            <linearGradient
              id="prefix__XMLID_156_"
              gradientUnits="userSpaceOnUse"
              x1={937.273}
              y1={542.135}
              x2={935.434}
              y2={549.763}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11374_"
              d="M159.8 185c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.5.1-.8.5-.7 1z"
              fill="url(#prefix__XMLID_156_)"
            />
          </g>
          <g id="prefix__XMLID_11371_">
            <linearGradient
              id="prefix__XMLID_157_"
              gradientUnits="userSpaceOnUse"
              x1={1001.348}
              y1={542.761}
              x2={999.509}
              y2={550.39}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11372_"
              d="M96.3 193.6c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
              fill="url(#prefix__XMLID_157_)"
            />
          </g>
          <g id="prefix__XMLID_11369_">
            <ellipse
              id="prefix__XMLID_11370_"
              transform="rotate(-7.187 93.348 247.889)"
              className="prefix__st25"
              cx={93.4}
              cy={247.9}
              rx={0.8}
              ry={0.9}
            />
          </g>
          <g id="prefix__XMLID_11367_">
            <linearGradient
              id="prefix__XMLID_158_"
              gradientUnits="userSpaceOnUse"
              x1={988.44}
              y1={603.457}
              x2={987.203}
              y2={608.587}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11368_"
              d="M116.8 251.8c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6s-.5.4-.5.7z"
              fill="url(#prefix__XMLID_158_)"
            />
          </g>
          <g id="prefix__XMLID_11365_">
            <path
              id="prefix__XMLID_11366_"
              className="prefix__st25"
              d="M155.6 222.4c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6s-.5.3-.5.7z"
            />
          </g>
          <g id="prefix__XMLID_11363_">
            <linearGradient
              id="prefix__XMLID_159_"
              gradientUnits="userSpaceOnUse"
              x1={898.025}
              y1={566.241}
              x2={896.788}
              y2={571.371}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11364_"
              d="M201.9 203.6c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6-.4.1-.6.4-.5.7z"
              fill="url(#prefix__XMLID_159_)"
            />
          </g>
          <g id="prefix__XMLID_11361_">
            <linearGradient
              id="prefix__XMLID_160_"
              gradientUnits="userSpaceOnUse"
              x1={861.373}
              y1={541.865}
              x2={860.136}
              y2={546.995}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11362_"
              d="M235.2 174.9c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6s-.6.3-.5.7z"
              fill="url(#prefix__XMLID_160_)"
            />
          </g>
          <g id="prefix__XMLID_11359_">
            <path
              id="prefix__XMLID_11360_"
              className="prefix__st25"
              d="M270.2 189.3c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6-.3.1-.5.4-.5.7z"
            />
          </g>
          <g id="prefix__XMLID_11357_">
            <linearGradient
              id="prefix__XMLID_161_"
              gradientUnits="userSpaceOnUse"
              x1={859.134}
              y1={608.175}
              x2={857.897}
              y2={613.305}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11358_"
              d="M245.7 240.4c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6s-.6.3-.5.7z"
              fill="url(#prefix__XMLID_161_)"
            />
          </g>
          <g id="prefix__XMLID_11355_">
            <linearGradient
              id="prefix__XMLID_162_"
              gradientUnits="userSpaceOnUse"
              x1={883.503}
              y1={614.37}
              x2={881.664}
              y2={621.999}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11356_"
              d="M222.1 249.9c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.4.1-.7.5-.7 1z"
              fill="url(#prefix__XMLID_162_)"
            />
          </g>
        </g>
        <g id="prefix__XMLID_11352_" className="prefix__st21">
          <linearGradient
            id="prefix__XMLID_163_"
            gradientUnits="userSpaceOnUse"
            x1={723.745}
            y1={629.147}
            x2={722.674}
            y2={633.59}
            gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
          >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.126} stopColor="#f4f3f3" />
            <stop offset={0.459} stopColor="#dadada" />
            <stop offset={0.761} stopColor="#cbcaca" />
            <stop offset={1} stopColor="#c6c5c5" />
          </linearGradient>
          <path
            id="prefix__XMLID_11353_"
            d="M382.7 244.1c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.5.3-.4.6z"
            fill="url(#prefix__XMLID_163_)"
          />
        </g>
      </g>
      <g>
        <defs>
          <path
            id="prefix__XMLID_10966_"
            d="M259.3 180c17.5-2.2 33.7 8.6 38.7 24.9l29.5-3.7c-2.7-12.8-9.2-24.4-19.2-32.5-27.3-29.2-78.4-22.6-100.2 12.8-6.9 11.2-9.9 23.7-9.6 36l29.4-3.7c.9-17 13.9-31.5 31.4-33.8z"
          />
        </defs>
        <clipPath id="prefix__XMLID_164_">
          <use xlinkHref="#prefix__XMLID_10966_" overflow="visible" />
        </clipPath>
        <g clipPath="url(#prefix__XMLID_164_)">
          <defs>
            <path
              id="prefix__XMLID_10967_"
              d="M316.8 176.6c1.7 2.2 3.2 4.5 4.6 6.9 16.5 28.5 9.5 65.5-17.4 85.9-26.9 20.4-64.4 17-87.4-6.6-1.9-1.9-3.7-4-5.4-6.3-22.1-29.2-16.3-70.7 12.9-92.8s70.6-16.2 92.7 12.9z"
            />
          </defs>
          <clipPath id="prefix__XMLID_165_">
            <use xlinkHref="#prefix__XMLID_10967_" overflow="visible" />
          </clipPath>
          <g id="prefix__XMLID_11348_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_166_"
              gradientUnits="userSpaceOnUse"
              x1={253.198}
              y1={3.839}
              x2={251.358}
              y2={11.468}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11349_"
              d="M337.5 111.3c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1c.1.4.5.8.9.8s.8-.4.7-1z"
              fill="url(#prefix__XMLID_166_)"
            />
          </g>
          <g id="prefix__XMLID_11346_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_167_"
              gradientUnits="userSpaceOnUse"
              x1={244.498}
              y1={-15.579}
              x2={242.659}
              y2={-7.951}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11347_"
              d="M331.3 131.7c-.1-.4-.5-.8-.9-.8-.4.1-.8.5-.7 1 .1.4.5.8.9.8s.8-.5.7-1z"
              fill="url(#prefix__XMLID_167_)"
            />
          </g>
          <g id="prefix__XMLID_11344_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_168_"
              gradientUnits="userSpaceOnUse"
              x1={300.504}
              y1={-4.003}
              x2={298.664}
              y2={3.625}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11345_"
              d="M385.4 113.3c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1c.1.4.5.8.9.8s.8-.6.7-1z"
              fill="url(#prefix__XMLID_168_)"
            />
          </g>
          <g id="prefix__XMLID_11342_" className="prefix__st190">
            <path
              id="prefix__XMLID_11343_"
              className="prefix__st25"
              d="M346.3 94.2c0-.2-.2-.3-.4-.3s-.3.2-.3.4.2.3.4.3c.1-.1.3-.3.3-.4z"
            />
          </g>
          <g id="prefix__XMLID_11340_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_169_"
              gradientUnits="userSpaceOnUse"
              x1={224.962}
              y1={-2.94}
              x2={223.122}
              y2={4.689}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11341_"
              d="M310.3 121.6c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1c.1.4.5.8.9.8s.8-.4.7-1z"
              fill="url(#prefix__XMLID_169_)"
            />
          </g>
          <g id="prefix__XMLID_11338_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_170_"
              gradientUnits="userSpaceOnUse"
              x1={270.573}
              y1={-9.729}
              x2={269.336}
              y2={-4.598}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11339_"
              d="M356.3 123.1c0-.4-.3-.6-.6-.6s-.5.3-.5.7.3.6.6.6c.3-.1.6-.4.5-.7z"
              fill="url(#prefix__XMLID_170_)"
            />
          </g>
          <g id="prefix__XMLID_11336_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_171_"
              gradientUnits="userSpaceOnUse"
              x1={237.519}
              y1={9.034}
              x2={236.282}
              y2={14.164}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11337_"
              d="M321.2 108.5c0-.4-.3-.6-.6-.6s-.5.3-.5.7.3.6.6.6.5-.3.5-.7z"
              fill="url(#prefix__XMLID_171_)"
            />
          </g>
          <radialGradient
            id="prefix__XMLID_172_"
            cx={563.988}
            cy={527.794}
            r={295.385}
            fx={439.993}
            fy={425.091}
            gradientTransform="rotate(-7.187 -2548.953 2656.439)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.012} stopColor="#1f0098" />
            <stop offset={0.203} stopColor="#df00c3" />
            <stop offset={0.535} stopColor="#0d006f" />
            <stop offset={0.752} stopColor="#00006a" />
          </radialGradient>
          <path
            id="prefix__XMLID_11335_"
            d="M248.4 117.1c87.6-11 164.8 29.4 172.5 90.3 7.7 60.9-57.1 119.2-144.7 130.3s-164.8-29.4-172.5-90.3 57.1-119.3 144.7-130.3z"
            clipPath="url(#prefix__XMLID_165_)"
            fill="url(#prefix__XMLID_172_)"
          />
          <g id="prefix__XMLID_11106_" className="prefix__st190">
            <g id="prefix__XMLID_11278_">
              <g id="prefix__XMLID_11333_">
                <linearGradient
                  id="prefix__XMLID_173_"
                  gradientUnits="userSpaceOnUse"
                  x1={681.265}
                  y1={532.356}
                  x2={679.539}
                  y2={539.512}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11334_"
                  d="M412.5 143.2c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_173_)"
                />
              </g>
              <g id="prefix__XMLID_11331_">
                <linearGradient
                  id="prefix__XMLID_174_"
                  gradientUnits="userSpaceOnUse"
                  x1={673.079}
                  y1={514.135}
                  x2={671.354}
                  y2={521.29}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11332_"
                  d="M418.4 124.1c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_174_)"
                />
              </g>
              <g id="prefix__XMLID_11329_">
                <linearGradient
                  id="prefix__XMLID_175_"
                  gradientUnits="userSpaceOnUse"
                  x1={725.638}
                  y1={525}
                  x2={723.913}
                  y2={532.155}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11330_"
                  d="M367.6 141.5c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_175_)"
                />
              </g>
              <g id="prefix__XMLID_11327_">
                <linearGradient
                  id="prefix__XMLID_176_"
                  gradientUnits="userSpaceOnUse"
                  x1={770.001}
                  y1={573.024}
                  x2={768.276}
                  y2={580.179}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11328_"
                  d="M329.6 194.6c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5.1-.8.5-.7.9z"
                  fill="url(#prefix__XMLID_176_)"
                />
              </g>
              <g id="prefix__XMLID_11325_">
                <linearGradient
                  id="prefix__XMLID_177_"
                  gradientUnits="userSpaceOnUse"
                  x1={851.043}
                  y1={530.53}
                  x2={849.318}
                  y2={537.686}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11326_"
                  d="M243.9 162.6c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7-.5 0-.8.5-.7.9z"
                  fill="url(#prefix__XMLID_177_)"
                />
              </g>
              <g id="prefix__XMLID_11323_">
                <linearGradient
                  id="prefix__XMLID_178_"
                  gradientUnits="userSpaceOnUse"
                  x1={837.083}
                  y1={551.761}
                  x2={836.347}
                  y2={554.817}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11324_"
                  d="M260.6 181.3c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.1.1-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_178_)"
                />
              </g>
              <g id="prefix__XMLID_11321_">
                <path
                  id="prefix__XMLID_11322_"
                  className="prefix__st25"
                  d="M419.7 169.7c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.1 0-.3.2-.3.4z"
                />
              </g>
              <g id="prefix__XMLID_11319_">
                <linearGradient
                  id="prefix__XMLID_179_"
                  gradientUnits="userSpaceOnUse"
                  x1={851.2}
                  y1={564.004}
                  x2={850.463}
                  y2={567.059}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11320_"
                  d="M248.1 195.2c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_179_)"
                />
              </g>
              <g id="prefix__XMLID_11317_">
                <linearGradient
                  id="prefix__XMLID_180_"
                  gradientUnits="userSpaceOnUse"
                  x1={760.494}
                  y1={568.31}
                  x2={759.757}
                  y2={571.365}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11318_"
                  d="M338.7 188.1c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_180_)"
                />
              </g>
              <g id="prefix__XMLID_11315_">
                <linearGradient
                  id="prefix__XMLID_181_"
                  gradientUnits="userSpaceOnUse"
                  x1={691.785}
                  y1={547.972}
                  x2={691.049}
                  y2={551.027}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11316_"
                  d="M404.3 159.4c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.1-.3.4z"
                  fill="url(#prefix__XMLID_181_)"
                />
              </g>
              <g id="prefix__XMLID_11313_">
                <linearGradient
                  id="prefix__XMLID_182_"
                  gradientUnits="userSpaceOnUse"
                  x1={783.595}
                  y1={534.692}
                  x2={782.859}
                  y2={537.748}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11314_"
                  d="M311.5 157.7c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.1 0-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_182_)"
                />
              </g>
              <g id="prefix__XMLID_11311_">
                <path
                  id="prefix__XMLID_11312_"
                  className="prefix__st25"
                  d="M326.4 215.5c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.3.2-.3.4z"
                />
              </g>
              <g id="prefix__XMLID_11309_">
                <linearGradient
                  id="prefix__XMLID_183_"
                  gradientUnits="userSpaceOnUse"
                  x1={706.473}
                  y1={562.899}
                  x2={704.748}
                  y2={570.055}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11310_"
                  d="M391.3 176.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.5 0-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_183_)"
                />
              </g>
              <g id="prefix__XMLID_11307_">
                <linearGradient
                  id="prefix__XMLID_184_"
                  gradientUnits="userSpaceOnUse"
                  x1={691.678}
                  y1={564.651}
                  x2={689.952}
                  y2={571.807}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11308_"
                  d="M406.2 176.5c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.4.1-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_184_)"
                />
              </g>
              <g id="prefix__XMLID_11305_">
                <linearGradient
                  id="prefix__XMLID_185_"
                  gradientUnits="userSpaceOnUse"
                  x1={713.132}
                  y1={542.18}
                  x2={711.407}
                  y2={549.336}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11306_"
                  d="M382.1 157c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_185_)"
                />
              </g>
              <g id="prefix__XMLID_11303_">
                <linearGradient
                  id="prefix__XMLID_186_"
                  gradientUnits="userSpaceOnUse"
                  x1={705.553}
                  y1={577.919}
                  x2={703.827}
                  y2={585.075}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11304_"
                  d="M394.1 191.5c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_186_)"
                />
              </g>
              <g id="prefix__XMLID_11301_">
                <linearGradient
                  id="prefix__XMLID_187_"
                  gradientUnits="userSpaceOnUse"
                  x1={654.712}
                  y1={525.981}
                  x2={652.987}
                  y2={533.137}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11302_"
                  d="M438.1 133.6c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_187_)"
                />
              </g>
              <g id="prefix__XMLID_11299_">
                <linearGradient
                  id="prefix__XMLID_188_"
                  gradientUnits="userSpaceOnUse"
                  x1={751.828}
                  y1={540.404}
                  x2={750.103}
                  y2={547.56}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11300_"
                  d="M343.5 160c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_188_)"
                />
              </g>
              <g id="prefix__XMLID_11297_">
                <linearGradient
                  id="prefix__XMLID_189_"
                  gradientUnits="userSpaceOnUse"
                  x1={768.657}
                  y1={519.858}
                  x2={766.932}
                  y2={527.014}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11298_"
                  d="M324.3 141.8c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_189_)"
                />
              </g>
              <g id="prefix__XMLID_11295_">
                <linearGradient
                  id="prefix__XMLID_190_"
                  gradientUnits="userSpaceOnUse"
                  x1={828.791}
                  y1={520.452}
                  x2={827.065}
                  y2={527.608}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11296_"
                  d="M264.7 149.8c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.5.1-.8.5-.7.9z"
                  fill="url(#prefix__XMLID_190_)"
                />
              </g>
              <g id="prefix__XMLID_11293_">
                <linearGradient
                  id="prefix__XMLID_191_"
                  gradientUnits="userSpaceOnUse"
                  x1={838.659}
                  y1={570.637}
                  x2={836.934}
                  y2={577.793}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11294_"
                  d="M261.2 200.9c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5.1-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_191_)"
                />
              </g>
              <g id="prefix__XMLID_11291_">
                <linearGradient
                  id="prefix__XMLID_192_"
                  gradientUnits="userSpaceOnUse"
                  x1={816.686}
                  y1={577.388}
                  x2={815.526}
                  y2={582.2}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11292_"
                  d="M283.9 204.4c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.3.1-.5.4-.5.6z"
                  fill="url(#prefix__XMLID_192_)"
                />
              </g>
              <g id="prefix__XMLID_11289_">
                <linearGradient
                  id="prefix__XMLID_193_"
                  gradientUnits="userSpaceOnUse"
                  x1={777.072}
                  y1={554.49}
                  x2={775.911}
                  y2={559.302}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11290_"
                  d="M320.4 176.8c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4 0-.6.3-.5.6z"
                  fill="url(#prefix__XMLID_193_)"
                />
              </g>
              <g id="prefix__XMLID_11287_">
                <path
                  id="prefix__XMLID_11288_"
                  className="prefix__st25"
                  d="M363.7 159.2c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                />
              </g>
              <g id="prefix__XMLID_11285_">
                <linearGradient
                  id="prefix__XMLID_194_"
                  gradientUnits="userSpaceOnUse"
                  x1={697.516}
                  y1={519.618}
                  x2={696.356}
                  y2={524.43}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11286_"
                  d="M394.9 132.2c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.3.1-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_194_)"
                />
              </g>
              <g id="prefix__XMLID_11283_">
                <linearGradient
                  id="prefix__XMLID_195_"
                  gradientUnits="userSpaceOnUse"
                  x1={666.525}
                  y1={537.221}
                  x2={665.365}
                  y2={542.033}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11284_"
                  d="M427.9 145.8c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4.1-.6.3-.5.6z"
                  fill="url(#prefix__XMLID_195_)"
                />
              </g>
              <g id="prefix__XMLID_11281_">
                <linearGradient
                  id="prefix__XMLID_196_"
                  gradientUnits="userSpaceOnUse"
                  x1={695.357}
                  y1={581.804}
                  x2={694.197}
                  y2={586.617}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11282_"
                  d="M404.8 193.7c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_196_)"
                />
              </g>
              <g id="prefix__XMLID_11279_">
                <linearGradient
                  id="prefix__XMLID_197_"
                  gradientUnits="userSpaceOnUse"
                  x1={718.24}
                  y1={587.621}
                  x2={716.515}
                  y2={594.778}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11280_"
                  d="M382.7 202.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_197_)"
                />
              </g>
            </g>
            <g id="prefix__XMLID_11221_" className="prefix__st55">
              <g id="prefix__XMLID_11276_">
                <linearGradient
                  id="prefix__XMLID_198_"
                  gradientUnits="userSpaceOnUse"
                  x1={811.782}
                  y1={593.109}
                  x2={810.057}
                  y2={600.265}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11277_"
                  d="M290.6 219.8c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.4.1-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_198_)"
                />
              </g>
              <g id="prefix__XMLID_11274_">
                <path
                  id="prefix__XMLID_11275_"
                  className="prefix__st25"
                  d="M296.4 200.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.5-.7.9z"
                />
              </g>
              <g id="prefix__XMLID_11272_">
                <linearGradient
                  id="prefix__XMLID_199_"
                  gradientUnits="userSpaceOnUse"
                  x1={856.156}
                  y1={585.752}
                  x2={854.43}
                  y2={592.908}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11273_"
                  d="M245.7 218.1c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_199_)"
                />
              </g>
              <g id="prefix__XMLID_11270_">
                <path
                  id="prefix__XMLID_11271_"
                  className="prefix__st25"
                  d="M207.7 271.2c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7-.5.1-.8.5-.7.9z"
                />
              </g>
              <g id="prefix__XMLID_11268_">
                <linearGradient
                  id="prefix__XMLID_200_"
                  gradientUnits="userSpaceOnUse"
                  x1={981.561}
                  y1={591.282}
                  x2={979.835}
                  y2={598.438}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11269_"
                  d="M122 239.3c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_200_)"
                />
              </g>
              <g id="prefix__XMLID_11266_">
                <linearGradient
                  id="prefix__XMLID_201_"
                  gradientUnits="userSpaceOnUse"
                  x1={967.601}
                  y1={612.514}
                  x2={966.864}
                  y2={615.57}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11267_"
                  d="M138.7 257.9c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_201_)"
                />
              </g>
              <g id="prefix__XMLID_11264_">
                <linearGradient
                  id="prefix__XMLID_202_"
                  gradientUnits="userSpaceOnUse"
                  x1={808.315}
                  y1={620.924}
                  x2={807.579}
                  y2={623.979}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11265_"
                  d="M297.8 246.3c0 .2.2.4.4.3s.3-.2.3-.4-.2-.4-.4-.3c-.2.1-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_202_)"
                />
              </g>
              <g id="prefix__XMLID_11262_">
                <path
                  id="prefix__XMLID_11263_"
                  className="prefix__st25"
                  d="M126.2 271.8c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                />
              </g>
              <g id="prefix__XMLID_11260_">
                <linearGradient
                  id="prefix__XMLID_203_"
                  gradientUnits="userSpaceOnUse"
                  x1={891.011}
                  y1={629.063}
                  x2={890.274}
                  y2={632.118}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11261_"
                  d="M216.8 264.8c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_203_)"
                />
              </g>
              <g id="prefix__XMLID_11258_">
                <linearGradient
                  id="prefix__XMLID_204_"
                  gradientUnits="userSpaceOnUse"
                  x1={822.303}
                  y1={608.725}
                  x2={821.566}
                  y2={611.78}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11259_"
                  d="M282.4 236c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.1-.3.4z"
                  fill="url(#prefix__XMLID_204_)"
                />
              </g>
              <g id="prefix__XMLID_11256_">
                <linearGradient
                  id="prefix__XMLID_205_"
                  gradientUnits="userSpaceOnUse"
                  x1={914.112}
                  y1={595.445}
                  x2={913.376}
                  y2={598.5}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11257_"
                  d="M189.7 234.3c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.3 0-.4.2-.3.4z"
                  fill="url(#prefix__XMLID_205_)"
                />
              </g>
              <g id="prefix__XMLID_11254_">
                <linearGradient
                  id="prefix__XMLID_206_"
                  gradientUnits="userSpaceOnUse"
                  x1={906.654}
                  y1={654.735}
                  x2={905.917}
                  y2={657.79}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11255_"
                  d="M204.5 292.1c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.4.3-.3.4z"
                  fill="url(#prefix__XMLID_206_)"
                />
              </g>
              <g id="prefix__XMLID_11252_">
                <linearGradient
                  id="prefix__XMLID_207_"
                  gradientUnits="userSpaceOnUse"
                  x1={837.049}
                  y1={623.666}
                  x2={835.324}
                  y2={630.822}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11253_"
                  d="M269.4 253.3c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.8.5-.7.9z"
                  fill="url(#prefix__XMLID_207_)"
                />
              </g>
              <g id="prefix__XMLID_11250_">
                <linearGradient
                  id="prefix__XMLID_208_"
                  gradientUnits="userSpaceOnUse"
                  x1={822.195}
                  y1={625.404}
                  x2={820.47}
                  y2={632.56}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11251_"
                  d="M284.3 253.1c.1.4.5.7.9.7s.7-.5.7-.9-.5-.7-.9-.7c-.5.1-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_208_)"
                />
              </g>
              <g id="prefix__XMLID_11248_">
                <linearGradient
                  id="prefix__XMLID_209_"
                  gradientUnits="userSpaceOnUse"
                  x1={843.649}
                  y1={602.933}
                  x2={841.924}
                  y2={610.088}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11249_"
                  d="M260.2 233.6c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_209_)"
                />
              </g>
              <g id="prefix__XMLID_11246_">
                <path
                  id="prefix__XMLID_11247_"
                  className="prefix__st25"
                  d="M272.2 268.1c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                />
              </g>
              <g id="prefix__XMLID_11244_">
                <linearGradient
                  id="prefix__XMLID_210_"
                  gradientUnits="userSpaceOnUse"
                  x1={785.288}
                  y1={586.748}
                  x2={783.563}
                  y2={593.904}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11245_"
                  d="M316.1 210.2c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_210_)"
                />
              </g>
              <g id="prefix__XMLID_11242_">
                <linearGradient
                  id="prefix__XMLID_211_"
                  gradientUnits="userSpaceOnUse"
                  x1={882.345}
                  y1={601.157}
                  x2={880.62}
                  y2={608.313}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11243_"
                  d="M221.6 236.6c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_211_)"
                />
              </g>
              <g id="prefix__XMLID_11240_">
                <linearGradient
                  id="prefix__XMLID_212_"
                  gradientUnits="userSpaceOnUse"
                  x1={899.233}
                  y1={580.625}
                  x2={897.508}
                  y2={587.78}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11241_"
                  d="M202.3 218.4c.1.4.5.7.9.7s.7-.5.7-.9-.5-.7-.9-.7-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_212_)"
                />
              </g>
              <g id="prefix__XMLID_11238_">
                <linearGradient
                  id="prefix__XMLID_213_"
                  gradientUnits="userSpaceOnUse"
                  x1={959.366}
                  y1={581.219}
                  x2={957.641}
                  y2={588.375}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11239_"
                  d="M142.7 226.5c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_213_)"
                />
              </g>
              <g id="prefix__XMLID_11236_">
                <linearGradient
                  id="prefix__XMLID_214_"
                  gradientUnits="userSpaceOnUse"
                  x1={969.235}
                  y1={631.404}
                  x2={967.51}
                  y2={638.56}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11237_"
                  d="M139.2 277.5c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_214_)"
                />
              </g>
              <g id="prefix__XMLID_11234_">
                <linearGradient
                  id="prefix__XMLID_215_"
                  gradientUnits="userSpaceOnUse"
                  x1={947.204}
                  y1={638.14}
                  x2={946.043}
                  y2={642.953}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11235_"
                  d="M162 281c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4.1-.5.4-.5.6z"
                  fill="url(#prefix__XMLID_215_)"
                />
              </g>
              <g id="prefix__XMLID_11232_">
                <linearGradient
                  id="prefix__XMLID_216_"
                  gradientUnits="userSpaceOnUse"
                  x1={907.589}
                  y1={615.243}
                  x2={906.429}
                  y2={620.055}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11233_"
                  d="M198.5 253.4c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.6.3-.5.6z"
                  fill="url(#prefix__XMLID_216_)"
                />
              </g>
              <g id="prefix__XMLID_11230_">
                <path
                  id="prefix__XMLID_11231_"
                  className="prefix__st25"
                  d="M241.8 235.8c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.6.3-.5.6z"
                />
              </g>
              <g id="prefix__XMLID_11228_">
                <linearGradient
                  id="prefix__XMLID_217_"
                  gradientUnits="userSpaceOnUse"
                  x1={828.034}
                  y1={580.37}
                  x2={826.873}
                  y2={585.183}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11229_"
                  d="M273 208.8c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.3.1-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_217_)"
                />
              </g>
              <g id="prefix__XMLID_11226_">
                <linearGradient
                  id="prefix__XMLID_218_"
                  gradientUnits="userSpaceOnUse"
                  x1={797.101}
                  y1={597.987}
                  x2={795.941}
                  y2={602.8}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11227_"
                  d="M305.9 222.5c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_218_)"
                />
              </g>
              <g id="prefix__XMLID_11224_">
                <linearGradient
                  id="prefix__XMLID_219_"
                  gradientUnits="userSpaceOnUse"
                  x1={825.933}
                  y1={642.571}
                  x2={824.772}
                  y2={647.383}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11225_"
                  d="M282.9 270.3c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_219_)"
                />
              </g>
              <g id="prefix__XMLID_11222_">
                <linearGradient
                  id="prefix__XMLID_220_"
                  gradientUnits="userSpaceOnUse"
                  x1={848.758}
                  y1={648.374}
                  x2={847.032}
                  y2={655.53}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11223_"
                  d="M260.9 279.3c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_220_)"
                />
              </g>
            </g>
            <g id="prefix__XMLID_11164_" className="prefix__st79">
              <g id="prefix__XMLID_11219_">
                <linearGradient
                  id="prefix__XMLID_221_"
                  gradientUnits="userSpaceOnUse"
                  x1={867.604}
                  y1={527.277}
                  x2={866.339}
                  y2={532.523}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11220_"
                  d="M227.1 161.2c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.5.3-.5.7z"
                  fill="url(#prefix__XMLID_221_)"
                />
              </g>
              <g id="prefix__XMLID_11217_">
                <linearGradient
                  id="prefix__XMLID_222_"
                  gradientUnits="userSpaceOnUse"
                  x1={861.636}
                  y1={513.928}
                  x2={860.371}
                  y2={519.173}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11218_"
                  d="M231.4 147.2c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.5.3-.5.7z"
                  fill="url(#prefix__XMLID_222_)"
                />
              </g>
              <g id="prefix__XMLID_11215_">
                <linearGradient
                  id="prefix__XMLID_223_"
                  gradientUnits="userSpaceOnUse"
                  x1={900.147}
                  y1={521.888}
                  x2={898.882}
                  y2={527.133}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11216_"
                  d="M194.2 159.9c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3.1-.6.3-.5.7z"
                  fill="url(#prefix__XMLID_223_)"
                />
              </g>
              <g id="prefix__XMLID_11213_">
                <linearGradient
                  id="prefix__XMLID_224_"
                  gradientUnits="userSpaceOnUse"
                  x1={932.679}
                  y1={557.095}
                  x2={931.414}
                  y2={562.341}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11214_"
                  d="M166.3 198.9c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3 0-.5.4-.5.7z"
                  fill="url(#prefix__XMLID_224_)"
                />
              </g>
              <g id="prefix__XMLID_11211_">
                <linearGradient
                  id="prefix__XMLID_225_"
                  gradientUnits="userSpaceOnUse"
                  x1={992.09}
                  y1={525.945}
                  x2={990.825}
                  y2={531.19}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11212_"
                  d="M103.5 175.4c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.6.4-.5.7z"
                  fill="url(#prefix__XMLID_225_)"
                />
              </g>
              <g id="prefix__XMLID_11209_">
                <linearGradient
                  id="prefix__XMLID_226_"
                  gradientUnits="userSpaceOnUse"
                  x1={981.812}
                  y1={541.498}
                  x2={981.272}
                  y2={543.738}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <circle
                  id="prefix__XMLID_11210_"
                  cx={116}
                  cy={189.1}
                  fill="url(#prefix__XMLID_226_)"
                  r={0.2}
                />
              </g>
              <g id="prefix__XMLID_11207_">
                <path
                  id="prefix__XMLID_11208_"
                  className="prefix__st25"
                  d="M232.4 180.6c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1.1-.2.2-.2.3z"
                />
              </g>
              <g id="prefix__XMLID_11205_">
                <linearGradient
                  id="prefix__XMLID_227_"
                  gradientUnits="userSpaceOnUse"
                  x1={992.17}
                  y1={550.475}
                  x2={991.63}
                  y2={552.715}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11206_"
                  d="M106.6 199.3c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.2 0-.2.1-.2.3z"
                  fill="url(#prefix__XMLID_227_)"
                />
              </g>
              <g id="prefix__XMLID_11203_">
                <linearGradient
                  id="prefix__XMLID_228_"
                  gradientUnits="userSpaceOnUse"
                  x1={925.676}
                  y1={553.631}
                  x2={925.136}
                  y2={555.871}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11204_"
                  d="M173 194.1c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1 0-.2.1-.2.3z"
                  fill="url(#prefix__XMLID_228_)"
                />
              </g>
              <g id="prefix__XMLID_11201_">
                <linearGradient
                  id="prefix__XMLID_229_"
                  gradientUnits="userSpaceOnUse"
                  x1={875.27}
                  y1={538.714}
                  x2={874.73}
                  y2={540.953}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11202_"
                  d="M221.1 173c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1.1-.2.1-.2.3z"
                  fill="url(#prefix__XMLID_229_)"
                />
              </g>
              <g id="prefix__XMLID_11199_">
                <linearGradient
                  id="prefix__XMLID_230_"
                  gradientUnits="userSpaceOnUse"
                  x1={942.62}
                  y1={528.99}
                  x2={942.08}
                  y2={531.23}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11200_"
                  d="M153.1 171.8c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3z"
                  fill="url(#prefix__XMLID_230_)"
                />
              </g>
              <g id="prefix__XMLID_11197_">
                <linearGradient
                  id="prefix__XMLID_231_"
                  gradientUnits="userSpaceOnUse"
                  x1={937.132}
                  y1={572.448}
                  x2={936.592}
                  y2={574.688}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11198_"
                  d="M164 214.2c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1.1-.3.2-.2.3z"
                  fill="url(#prefix__XMLID_231_)"
                />
              </g>
              <g id="prefix__XMLID_11195_">
                <linearGradient
                  id="prefix__XMLID_232_"
                  gradientUnits="userSpaceOnUse"
                  x1={886.158}
                  y1={549.685}
                  x2={884.893}
                  y2={554.931}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11196_"
                  d="M211.5 185.7c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                  fill="url(#prefix__XMLID_232_)"
                />
              </g>
              <g id="prefix__XMLID_11193_">
                <linearGradient
                  id="prefix__XMLID_233_"
                  gradientUnits="userSpaceOnUse"
                  x1={875.314}
                  y1={550.97}
                  x2={874.049}
                  y2={556.216}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11194_"
                  d="M222.5 185.7c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3 0-.6.3-.5.7z"
                  fill="url(#prefix__XMLID_233_)"
                />
              </g>
              <g id="prefix__XMLID_11191_">
                <path
                  id="prefix__XMLID_11192_"
                  className="prefix__st25"
                  d="M204.8 171.2c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                />
              </g>
              <g id="prefix__XMLID_11189_">
                <linearGradient
                  id="prefix__XMLID_234_"
                  gradientUnits="userSpaceOnUse"
                  x1={885.412}
                  y1={560.679}
                  x2={884.147}
                  y2={565.924}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11190_"
                  d="M213.7 196.5c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.4.1-.6.4-.5.7z"
                  fill="url(#prefix__XMLID_234_)"
                />
              </g>
              <g id="prefix__XMLID_11187_">
                <linearGradient
                  id="prefix__XMLID_235_"
                  gradientUnits="userSpaceOnUse"
                  x1={848.202}
                  y1={522.619}
                  x2={846.937}
                  y2={527.865}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11188_"
                  d="M245.8 154.1c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                  fill="url(#prefix__XMLID_235_)"
                />
              </g>
              <g id="prefix__XMLID_11185_">
                <linearGradient
                  id="prefix__XMLID_236_"
                  gradientUnits="userSpaceOnUse"
                  x1={919.368}
                  y1={533.186}
                  x2={918.103}
                  y2={538.432}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11186_"
                  d="M176.5 173.5c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                  fill="url(#prefix__XMLID_236_)"
                />
              </g>
              <g id="prefix__XMLID_11183_">
                <linearGradient
                  id="prefix__XMLID_237_"
                  gradientUnits="userSpaceOnUse"
                  x1={931.757}
                  y1={518.136}
                  x2={930.493}
                  y2={523.382}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11184_"
                  d="M162.4 160.1c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3.1-.6.4-.5.7z"
                  fill="url(#prefix__XMLID_237_)"
                />
              </g>
              <g id="prefix__XMLID_11181_">
                <linearGradient
                  id="prefix__XMLID_238_"
                  gradientUnits="userSpaceOnUse"
                  x1={975.817}
                  y1={518.567}
                  x2={974.553}
                  y2={523.813}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11182_"
                  d="M118.7 166.1c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7z"
                  fill="url(#prefix__XMLID_238_)"
                />
              </g>
              <g id="prefix__XMLID_11179_">
                <circle
                  id="prefix__XMLID_11180_"
                  transform="rotate(-7.187 116.68 203.37)"
                  className="prefix__st25"
                  cx={116.7}
                  cy={203.4}
                  r={0.6}
                />
              </g>
              <g id="prefix__XMLID_11177_">
                <linearGradient
                  id="prefix__XMLID_239_"
                  gradientUnits="userSpaceOnUse"
                  x1={966.942}
                  y1={560.304}
                  x2={966.091}
                  y2={563.832}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11178_"
                  d="M132.8 206.1c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4s-.3.2-.3.5z"
                  fill="url(#prefix__XMLID_239_)"
                />
              </g>
              <g id="prefix__XMLID_11175_">
                <path
                  id="prefix__XMLID_11176_"
                  className="prefix__st25"
                  d="M159.6 185.8c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.2.1-.4.3-.3.5z"
                />
              </g>
              <g id="prefix__XMLID_11173_">
                <linearGradient
                  id="prefix__XMLID_240_"
                  gradientUnits="userSpaceOnUse"
                  x1={904.769}
                  y1={534.713}
                  x2={903.918}
                  y2={538.241}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11174_"
                  d="M191.3 172.9c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.2.1-.3.3-.3.5z"
                  fill="url(#prefix__XMLID_240_)"
                />
              </g>
              <g id="prefix__XMLID_11171_">
                <linearGradient
                  id="prefix__XMLID_241_"
                  gradientUnits="userSpaceOnUse"
                  x1={879.566}
                  y1={517.951}
                  x2={878.715}
                  y2={521.479}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11172_"
                  d="M214.2 153.2c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4s-.3.2-.3.5z"
                  fill="url(#prefix__XMLID_241_)"
                />
              </g>
              <g id="prefix__XMLID_11169_">
                <path
                  id="prefix__XMLID_11170_"
                  className="prefix__st25"
                  d="M238.3 163.1c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.1.1-.3.3-.3.5z"
                />
              </g>
              <g id="prefix__XMLID_11167_">
                <linearGradient
                  id="prefix__XMLID_242_"
                  gradientUnits="userSpaceOnUse"
                  x1={878.026}
                  y1={563.548}
                  x2={877.176}
                  y2={567.076}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11168_"
                  d="M221.4 198.2c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.1.1-.3.3-.3.5z"
                  fill="url(#prefix__XMLID_242_)"
                />
              </g>
              <g id="prefix__XMLID_11165_">
                <linearGradient
                  id="prefix__XMLID_243_"
                  gradientUnits="userSpaceOnUse"
                  x1={894.725}
                  y1={567.794}
                  x2={893.46}
                  y2={573.04}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11166_"
                  d="M205.3 204.8c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7z"
                  fill="url(#prefix__XMLID_243_)"
                />
              </g>
            </g>
            <g id="prefix__XMLID_11107_" className="prefix__st103">
              <g id="prefix__XMLID_11162_">
                <linearGradient
                  id="prefix__XMLID_244_"
                  gradientUnits="userSpaceOnUse"
                  x1={227.677}
                  y1={-154.531}
                  x2={226.412}
                  y2={-149.286}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11163_"
                  d="M331.9 272c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5s.5-.3.5-.7z"
                  fill="url(#prefix__XMLID_244_)"
                />
              </g>
              <g id="prefix__XMLID_11160_">
                <linearGradient
                  id="prefix__XMLID_245_"
                  gradientUnits="userSpaceOnUse"
                  x1={221.695}
                  y1={-167.885}
                  x2={220.43}
                  y2={-162.639}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11161_"
                  d="M327.6 286.1c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3-.1.6-.4.5-.7z"
                  fill="url(#prefix__XMLID_245_)"
                />
              </g>
              <g id="prefix__XMLID_11158_">
                <linearGradient
                  id="prefix__XMLID_246_"
                  gradientUnits="userSpaceOnUse"
                  x1={260.206}
                  y1={-159.924}
                  x2={258.941}
                  y2={-154.679}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11159_"
                  d="M364.8 273.4c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5s.6-.4.5-.7z"
                  fill="url(#prefix__XMLID_246_)"
                />
              </g>
              <g id="prefix__XMLID_11156_">
                <path
                  id="prefix__XMLID_11157_"
                  className="prefix__st25"
                  d="M392.7 234.3c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3 0 .5-.3.5-.7z"
                />
              </g>
              <g id="prefix__XMLID_11154_">
                <linearGradient
                  id="prefix__XMLID_247_"
                  gradientUnits="userSpaceOnUse"
                  x1={352.149}
                  y1={-155.867}
                  x2={350.884}
                  y2={-150.622}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11155_"
                  d="M455.5 257.8c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.4 0 .6-.4.5-.7z"
                  fill="url(#prefix__XMLID_247_)"
                />
              </g>
              <g id="prefix__XMLID_11152_">
                <linearGradient
                  id="prefix__XMLID_248_"
                  gradientUnits="userSpaceOnUse"
                  x1={341.871}
                  y1={-140.314}
                  x2={341.331}
                  y2={-138.074}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11153_"
                  d="M443.3 244.2c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.1-.1.2-.2.2-.3z"
                  fill="url(#prefix__XMLID_248_)"
                />
              </g>
              <g id="prefix__XMLID_11150_">
                <linearGradient
                  id="prefix__XMLID_249_"
                  gradientUnits="userSpaceOnUse"
                  x1={225.097}
                  y1={-134.151}
                  x2={224.557}
                  y2={-131.911}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11151_"
                  d="M326.6 252.6c0-.1-.2-.2-.3-.2s-.2.2-.2.3c0 .1.2.2.3.2.1 0 .2-.1.2-.3z"
                  fill="url(#prefix__XMLID_249_)"
                />
              </g>
              <g id="prefix__XMLID_11148_">
                <linearGradient
                  id="prefix__XMLID_250_"
                  gradientUnits="userSpaceOnUse"
                  x1={352.229}
                  y1={-131.337}
                  x2={351.688}
                  y2={-129.097}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11149_"
                  d="M452.4 233.9c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3s.2.2.3.2c.1 0 .2-.1.2-.3z"
                  fill="url(#prefix__XMLID_250_)"
                />
              </g>
              <g id="prefix__XMLID_11146_">
                <linearGradient
                  id="prefix__XMLID_251_"
                  gradientUnits="userSpaceOnUse"
                  x1={285.735}
                  y1={-128.18}
                  x2={285.195}
                  y2={-125.941}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11147_"
                  d="M386 239.1c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3s.2.2.3.2c.1 0 .3-.1.2-.3z"
                  fill="url(#prefix__XMLID_251_)"
                />
              </g>
              <g id="prefix__XMLID_11144_">
                <path
                  id="prefix__XMLID_11145_"
                  className="prefix__st25"
                  d="M337.9 260.2c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.2 0 .2-.1.2-.3z"
                />
              </g>
              <g id="prefix__XMLID_11142_">
                <linearGradient
                  id="prefix__XMLID_252_"
                  gradientUnits="userSpaceOnUse"
                  x1={302.679}
                  y1={-152.822}
                  x2={302.139}
                  y2={-150.582}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11143_"
                  d="M405.9 261.5c0-.1-.2-.2-.3-.2s-.2.2-.2.3c0 .1.2.2.3.2.1-.1.3-.2.2-.3z"
                  fill="url(#prefix__XMLID_252_)"
                />
              </g>
              <g id="prefix__XMLID_11140_">
                <linearGradient
                  id="prefix__XMLID_253_"
                  gradientUnits="userSpaceOnUse"
                  x1={297.191}
                  y1={-109.364}
                  x2={296.651}
                  y2={-107.124}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11141_"
                  d="M395.1 219.1c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2s.2-.2.2-.3z"
                  fill="url(#prefix__XMLID_253_)"
                />
              </g>
              <g id="prefix__XMLID_11138_">
                <linearGradient
                  id="prefix__XMLID_254_"
                  gradientUnits="userSpaceOnUse"
                  x1={246.216}
                  y1={-132.127}
                  x2={244.952}
                  y2={-126.881}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11139_"
                  d="M347.5 247.5c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.3 0 .5-.4.5-.7z"
                  fill="url(#prefix__XMLID_254_)"
                />
              </g>
              <g id="prefix__XMLID_11136_">
                <linearGradient
                  id="prefix__XMLID_255_"
                  gradientUnits="userSpaceOnUse"
                  x1={235.315}
                  y1={-130.856}
                  x2={234.05}
                  y2={-125.611}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11137_"
                  d="M336.5 247.6c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3 0 .5-.4.5-.7z"
                  fill="url(#prefix__XMLID_255_)"
                />
              </g>
              <g id="prefix__XMLID_11134_">
                <linearGradient
                  id="prefix__XMLID_256_"
                  gradientUnits="userSpaceOnUse"
                  x1={251.034}
                  y1={-147.331}
                  x2={249.769}
                  y2={-142.085}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11135_"
                  d="M354.1 262c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.4-.1.6-.4.5-.7z"
                  fill="url(#prefix__XMLID_256_)"
                />
              </g>
              <g id="prefix__XMLID_11132_">
                <linearGradient
                  id="prefix__XMLID_257_"
                  gradientUnits="userSpaceOnUse"
                  x1={245.485}
                  y1={-121.13}
                  x2={244.22}
                  y2={-115.884}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11133_"
                  d="M345.4 236.7c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_257_)"
                />
              </g>
              <g id="prefix__XMLID_11130_">
                <linearGradient
                  id="prefix__XMLID_258_"
                  gradientUnits="userSpaceOnUse"
                  x1={208.258}
                  y1={-159.194}
                  x2={206.993}
                  y2={-153.948}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11131_"
                  d="M313.2 279.1c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .4.3.6.6.5s.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_258_)"
                />
              </g>
              <g id="prefix__XMLID_11128_">
                <linearGradient
                  id="prefix__XMLID_259_"
                  gradientUnits="userSpaceOnUse"
                  x1={279.427}
                  y1={-148.626}
                  x2={278.162}
                  y2={-143.381}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11129_"
                  d="M382.5 259.8c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_259_)"
                />
              </g>
              <g id="prefix__XMLID_11126_">
                <linearGradient
                  id="prefix__XMLID_260_"
                  gradientUnits="userSpaceOnUse"
                  x1={291.758}
                  y1={-163.69}
                  x2={290.493}
                  y2={-158.444}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11127_"
                  d="M396.6 273.1c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5s.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_260_)"
                />
              </g>
              <g id="prefix__XMLID_11124_">
                <path
                  id="prefix__XMLID_11125_"
                  className="prefix__st25"
                  d="M440.3 267.2c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5s.6-.4.5-.7z"
                />
              </g>
              <g id="prefix__XMLID_11122_">
                <linearGradient
                  id="prefix__XMLID_261_"
                  gradientUnits="userSpaceOnUse"
                  x1={343.087}
                  y1={-126.462}
                  x2={341.823}
                  y2={-121.216}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11123_"
                  d="M442.9 229.8c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_261_)"
                />
              </g>
              <g id="prefix__XMLID_11120_">
                <linearGradient
                  id="prefix__XMLID_262_"
                  gradientUnits="userSpaceOnUse"
                  x1={327.001}
                  y1={-121.508}
                  x2={326.15}
                  y2={-117.981}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11121_"
                  d="M426.2 227.2c0-.2-.2-.4-.4-.4s-.3.2-.3.5.2.4.4.4c.2-.1.3-.3.3-.5z"
                  fill="url(#prefix__XMLID_262_)"
                />
              </g>
              <g id="prefix__XMLID_11118_">
                <linearGradient
                  id="prefix__XMLID_263_"
                  gradientUnits="userSpaceOnUse"
                  x1={297.923}
                  y1={-138.303}
                  x2={297.072}
                  y2={-134.775}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11119_"
                  d="M399.4 247.4c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4s.4-.2.3-.5z"
                  fill="url(#prefix__XMLID_263_)"
                />
              </g>
              <g id="prefix__XMLID_11116_">
                <linearGradient
                  id="prefix__XMLID_264_"
                  gradientUnits="userSpaceOnUse"
                  x1={264.77}
                  y1={-147.113}
                  x2={263.919}
                  y2={-143.585}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11117_"
                  d="M367.7 260.3c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4s.3-.2.3-.5z"
                  fill="url(#prefix__XMLID_264_)"
                />
              </g>
              <g id="prefix__XMLID_11114_">
                <linearGradient
                  id="prefix__XMLID_265_"
                  gradientUnits="userSpaceOnUse"
                  x1={239.625}
                  y1={-163.861}
                  x2={238.774}
                  y2={-160.334}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11115_"
                  d="M344.8 280.1c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.2-.1.3-.3.3-.5z"
                  fill="url(#prefix__XMLID_265_)"
                />
              </g>
              <g id="prefix__XMLID_11112_">
                <linearGradient
                  id="prefix__XMLID_266_"
                  gradientUnits="userSpaceOnUse"
                  x1={216.954}
                  y1={-150.946}
                  x2={216.103}
                  y2={-147.418}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11113_"
                  d="M320.7 270.1c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4s.3-.3.3-.5z"
                  fill="url(#prefix__XMLID_266_)"
                />
              </g>
              <g id="prefix__XMLID_11110_">
                <linearGradient
                  id="prefix__XMLID_267_"
                  gradientUnits="userSpaceOnUse"
                  x1={238.027}
                  y1={-118.278}
                  x2={237.176}
                  y2={-114.75}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11111_"
                  d="M337.5 235.1c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.2-.1.3-.3.3-.5z"
                  fill="url(#prefix__XMLID_267_)"
                />
              </g>
              <g id="prefix__XMLID_11108_">
                <linearGradient
                  id="prefix__XMLID_268_"
                  gradientUnits="userSpaceOnUse"
                  x1={254.784}
                  y1={-114.018}
                  x2={253.519}
                  y2={-108.772}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_11109_"
                  d="M353.7 228.5c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5s.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_268_)"
                />
              </g>
            </g>
          </g>
          <radialGradient
            id="prefix__SVGID_31_"
            cx={122.713}
            cy={2669.301}
            r={38.81}
            gradientTransform="matrix(1.1381 -1.1579 .1888 .1706 -355.765 -85.898)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ffc9ff" />
            <stop offset={1} stopColor="#ff40ff" stopOpacity={0} />
          </radialGradient>
          <path
            d="M348.7 168.7c6.7 7-15 38.9-48.6 71.3s-66.2 53.1-72.9 46.2c-6.7-7 15-38.9 48.6-71.3s66.1-53.1 72.9-46.2z"
            clipPath="url(#prefix__XMLID_165_)"
            fill="url(#prefix__SVGID_31_)"
          />
          <g id="prefix__XMLID_11104_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_269_"
              gradientUnits="userSpaceOnUse"
              x1={702.038}
              y1={623.687}
              x2={699.529}
              y2={634.093}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11105_"
              d="M403.1 236.9c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.6.1-1 .7-1 1.3z"
              fill="url(#prefix__XMLID_269_)"
            />
          </g>
          <g id="prefix__XMLID_11102_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_270_"
              gradientUnits="userSpaceOnUse"
              x1={819.894}
              y1={561.889}
              x2={817.385}
              y2={572.296}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11103_"
              d="M278.5 190.4c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_270_)"
            />
          </g>
          <g id="prefix__XMLID_11100_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_271_"
              gradientUnits="userSpaceOnUse"
              x1={799.592}
              y1={592.765}
              x2={798.521}
              y2={597.208}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11101_"
              d="M302.9 217.5c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.5.3-.4.6z"
              fill="url(#prefix__XMLID_271_)"
            />
          </g>
          <g id="prefix__XMLID_11098_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_272_"
              gradientUnits="userSpaceOnUse"
              x1={820.206}
              y1={610.59}
              x2={819.134}
              y2={615.033}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11099_"
              d="M284.7 237.7c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2.1-.5.4-.4.6z"
              fill="url(#prefix__XMLID_272_)"
            />
          </g>
          <g id="prefix__XMLID_11096_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_273_"
              gradientUnits="userSpaceOnUse"
              x1={721.807}
              y1={567.943}
              x2={720.735}
              y2={572.386}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11097_"
              d="M376.9 183.1c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2.2-.4.4-.4.6z"
              fill="url(#prefix__XMLID_273_)"
            />
          </g>
          <g id="prefix__XMLID_11094_" className="prefix__st190">
            <path
              id="prefix__XMLID_11095_"
              className="prefix__st25"
              d="M398.5 267.3c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2.1-.5.3-.4.6z"
            />
          </g>
          <g id="prefix__XMLID_11092_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_274_"
              gradientUnits="userSpaceOnUse"
              x1={700.168}
              y1={546.39}
              x2={697.658}
              y2={556.796}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11093_"
              d="M395.3 160c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1c-.6 0-1 .6-1 1.3z"
              fill="url(#prefix__XMLID_274_)"
            />
          </g>
          <g id="prefix__XMLID_11090_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_275_"
              gradientUnits="userSpaceOnUse"
              x1={787.533}
              y1={547.234}
              x2={785.024}
              y2={557.641}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11091_"
              d="M308.8 171.8c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.7 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_275_)"
            />
          </g>
          <g id="prefix__XMLID_11088_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_276_"
              gradientUnits="userSpaceOnUse"
              x1={801.884}
              y1={620.216}
              x2={799.375}
              y2={630.622}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11089_"
              d="M303.7 246c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_276_)"
            />
          </g>
          <g id="prefix__XMLID_11086_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_277_"
              gradientUnits="userSpaceOnUse"
              x1={769.95}
              y1={630.038}
              x2={768.263}
              y2={637.036}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11087_"
              d="M336.8 251.2c.1.4.5.8.9.7s.8-.5.7-.9c-.1-.4-.5-.8-.9-.7s-.8.5-.7.9z"
              fill="url(#prefix__XMLID_277_)"
            />
          </g>
          <g id="prefix__XMLID_11084_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_278_"
              gradientUnits="userSpaceOnUse"
              x1={712.32}
              y1={596.734}
              x2={710.632}
              y2={603.732}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_11085_"
              d="M389.8 210.9c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7s-.8.5-.7.9z"
              fill="url(#prefix__XMLID_278_)"
            />
          </g>
          <g
            id="prefix__XMLID_11027_"
            opacity={0.58}
            clipPath="url(#prefix__XMLID_165_)"
          >
            <g id="prefix__XMLID_11082_">
              <linearGradient
                id="prefix__XMLID_279_"
                gradientUnits="userSpaceOnUse"
                x1={762.798}
                y1={652.896}
                x2={760.289}
                y2={663.302}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11083_"
                d="M346.5 273.5c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.7.1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_279_)"
              />
            </g>
            <g id="prefix__XMLID_11080_">
              <path
                id="prefix__XMLID_11081_"
                className="prefix__st25"
                d="M354.9 245.8c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6.1-1 .6-1 1.3z"
              />
            </g>
            <g id="prefix__XMLID_11078_">
              <linearGradient
                id="prefix__XMLID_280_"
                gradientUnits="userSpaceOnUse"
                x1={827.413}
                y1={642.218}
                x2={824.904}
                y2={652.624}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11079_"
                d="M281.1 271c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6.1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_280_)"
              />
            </g>
            <g id="prefix__XMLID_11076_">
              <path
                id="prefix__XMLID_11077_"
                className="prefix__st25"
                d="M225.8 348.3c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3c-.1-.6-.7-1.1-1.3-1-.6.1-1.1.7-1 1.3z"
              />
            </g>
            <g id="prefix__XMLID_11074_">
              <linearGradient
                id="prefix__XMLID_281_"
                gradientUnits="userSpaceOnUse"
                x1={1009.785}
                y1={650.26}
                x2={1007.276}
                y2={660.666}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11075_"
                d="M101.2 301.8c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.7 0-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_281_)"
              />
            </g>
            <g id="prefix__XMLID_11072_">
              <linearGradient
                id="prefix__XMLID_282_"
                gradientUnits="userSpaceOnUse"
                x1={989.483}
                y1={681.136}
                x2={988.412}
                y2={685.58}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11073_"
                d="M125.5 328.9c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5-.4.3-.4.6z"
                fill="url(#prefix__XMLID_282_)"
              />
            </g>
            <g id="prefix__XMLID_11070_">
              <linearGradient
                id="prefix__XMLID_283_"
                gradientUnits="userSpaceOnUse"
                x1={757.756}
                y1={693.346}
                x2={756.685}
                y2={697.789}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11071_"
                d="M357 312.1c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5-.5.3-.4.6z"
                fill="url(#prefix__XMLID_283_)"
              />
            </g>
            <g id="prefix__XMLID_11068_">
              <path
                id="prefix__XMLID_11069_"
                className="prefix__st25"
                d="M107.4 349.2c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5-.4.3-.4.6z"
              />
            </g>
            <g id="prefix__XMLID_11066_">
              <linearGradient
                id="prefix__XMLID_284_"
                gradientUnits="userSpaceOnUse"
                x1={878.017}
                y1={705.182}
                x2={876.946}
                y2={709.625}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11067_"
                d="M239.1 338.9c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2 0-.4.3-.4.6z"
                fill="url(#prefix__XMLID_284_)"
              />
            </g>
            <g id="prefix__XMLID_11064_">
              <linearGradient
                id="prefix__XMLID_285_"
                gradientUnits="userSpaceOnUse"
                x1={778.098}
                y1={675.605}
                x2={777.026}
                y2={680.049}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11065_"
                d="M334.6 297c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.5.4-.4.6z"
                fill="url(#prefix__XMLID_285_)"
              />
            </g>
            <g id="prefix__XMLID_11062_">
              <linearGradient
                id="prefix__XMLID_286_"
                gradientUnits="userSpaceOnUse"
                x1={911.697}
                y1={656.313}
                x2={910.626}
                y2={660.757}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11063_"
                d="M199.6 294.5c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2.2-.4.4-.4.6z"
                fill="url(#prefix__XMLID_286_)"
              />
            </g>
            <g id="prefix__XMLID_11060_">
              <linearGradient
                id="prefix__XMLID_287_"
                gradientUnits="userSpaceOnUse"
                x1={900.766}
                y1={742.516}
                x2={899.695}
                y2={746.959}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11061_"
                d="M221.2 378.7c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.4.3-.4.6z"
                fill="url(#prefix__XMLID_287_)"
              />
            </g>
            <g id="prefix__XMLID_11058_">
              <linearGradient
                id="prefix__XMLID_288_"
                gradientUnits="userSpaceOnUse"
                x1={799.542}
                y1={697.334}
                x2={797.033}
                y2={707.74}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11059_"
                d="M315.6 322.2c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_288_)"
              />
            </g>
            <g id="prefix__XMLID_11056_">
              <linearGradient
                id="prefix__XMLID_289_"
                gradientUnits="userSpaceOnUse"
                x1={778.025}
                y1={699.881}
                x2={775.516}
                y2={710.288}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11057_"
                d="M337.3 322c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3c-.1-.6-.7-1.1-1.3-1-.6.1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_289_)"
              />
            </g>
            <g id="prefix__XMLID_11054_">
              <linearGradient
                id="prefix__XMLID_290_"
                gradientUnits="userSpaceOnUse"
                x1={809.141}
                y1={667.182}
                x2={806.632}
                y2={677.588}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11055_"
                d="M302.3 293.5c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1c-.7 0-1 .6-1 1.3z"
                fill="url(#prefix__XMLID_290_)"
              />
            </g>
            <g id="prefix__XMLID_11052_">
              <path
                id="prefix__XMLID_11053_"
                className="prefix__st25"
                d="M319.8 343.7c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3c-.1-.6-.7-1.1-1.3-1-.7 0-1.1.6-1 1.3z"
              />
            </g>
            <g id="prefix__XMLID_11050_">
              <linearGradient
                id="prefix__XMLID_291_"
                gradientUnits="userSpaceOnUse"
                x1={724.268}
                y1={643.645}
                x2={721.759}
                y2={654.052}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11051_"
                d="M383.6 259.5c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6.1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_291_)"
              />
            </g>
            <g id="prefix__XMLID_11048_">
              <linearGradient
                id="prefix__XMLID_292_"
                gradientUnits="userSpaceOnUse"
                x1={865.415}
                y1={664.6}
                x2={862.906}
                y2={675.006}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11049_"
                d="M246.2 298c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1c-.7.1-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_292_)"
              />
            </g>
            <g id="prefix__XMLID_11046_">
              <linearGradient
                id="prefix__XMLID_293_"
                gradientUnits="userSpaceOnUse"
                x1={889.974}
                y1={634.74}
                x2={887.465}
                y2={645.146}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11047_"
                d="M218.1 271.4c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_293_)"
              />
            </g>
            <g id="prefix__XMLID_11044_">
              <linearGradient
                id="prefix__XMLID_294_"
                gradientUnits="userSpaceOnUse"
                x1={977.424}
                y1={635.605}
                x2={974.915}
                y2={646.011}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11045_"
                d="M131.4 283.2c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3c-.1-.6-.7-1.1-1.3-1-.6 0-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_294_)"
              />
            </g>
            <g id="prefix__XMLID_11042_">
              <linearGradient
                id="prefix__XMLID_295_"
                gradientUnits="userSpaceOnUse"
                x1={991.775}
                y1={708.587}
                x2={989.266}
                y2={718.993}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11043_"
                d="M126.3 357.4c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_295_)"
              />
            </g>
            <g id="prefix__XMLID_11040_">
              <linearGradient
                id="prefix__XMLID_296_"
                gradientUnits="userSpaceOnUse"
                x1={959.841}
                y1={718.408}
                x2={958.154}
                y2={725.407}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11041_"
                d="M159.4 362.6c.1.4.5.8.9.7.4-.1.8-.5.7-.9s-.5-.8-.9-.7c-.4.1-.8.5-.7.9z"
                fill="url(#prefix__XMLID_296_)"
              />
            </g>
            <g id="prefix__XMLID_11038_">
              <linearGradient
                id="prefix__XMLID_297_"
                gradientUnits="userSpaceOnUse"
                x1={902.126}
                y1={685.084}
                x2={900.439}
                y2={692.082}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11039_"
                d="M212.5 322.4c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5 0-.8.4-.7.9z"
                fill="url(#prefix__XMLID_297_)"
              />
            </g>
            <g id="prefix__XMLID_11036_">
              <path
                id="prefix__XMLID_11037_"
                className="prefix__st25"
                d="M275.5 296.8c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5.1-.8.5-.7.9z"
              />
            </g>
            <g id="prefix__XMLID_11034_">
              <linearGradient
                id="prefix__XMLID_298_"
                gradientUnits="userSpaceOnUse"
                x1={786.432}
                y1={634.37}
                x2={784.744}
                y2={641.369}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11035_"
                d="M320.9 257.6c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5 0-.7.4-.7.9z"
                fill="url(#prefix__XMLID_298_)"
              />
            </g>
            <g id="prefix__XMLID_11032_">
              <linearGradient
                id="prefix__XMLID_299_"
                gradientUnits="userSpaceOnUse"
                x1={741.447}
                y1={659.99}
                x2={739.76}
                y2={666.989}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11033_"
                d="M368.8 277.4c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5 0-.8.4-.7.9z"
                fill="url(#prefix__XMLID_299_)"
              />
            </g>
            <g id="prefix__XMLID_11030_">
              <linearGradient
                id="prefix__XMLID_300_"
                gradientUnits="userSpaceOnUse"
                x1={783.376}
                y1={724.827}
                x2={781.689}
                y2={731.825}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11031_"
                d="M335.3 346.9c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5 0-.8.4-.7.9z"
                fill="url(#prefix__XMLID_300_)"
              />
            </g>
            <g id="prefix__XMLID_11028_">
              <linearGradient
                id="prefix__XMLID_301_"
                gradientUnits="userSpaceOnUse"
                x1={816.655}
                y1={733.286}
                x2={814.146}
                y2={743.693}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11029_"
                d="M303.1 360c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1-1 .7-1 1.3z"
                fill="url(#prefix__XMLID_301_)"
              />
            </g>
          </g>
          <g
            id="prefix__XMLID_10970_"
            opacity={0.56}
            clipPath="url(#prefix__XMLID_165_)"
          >
            <g id="prefix__XMLID_11025_">
              <linearGradient
                id="prefix__XMLID_302_"
                gradientUnits="userSpaceOnUse"
                x1={844.062}
                y1={557.18}
                x2={842.222}
                y2={564.808}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11026_"
                d="M254.1 188.2c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8-.4.2-.7.6-.7 1z"
                fill="url(#prefix__XMLID_302_)"
              />
            </g>
            <g id="prefix__XMLID_11023_">
              <linearGradient
                id="prefix__XMLID_303_"
                gradientUnits="userSpaceOnUse"
                x1={835.383}
                y1={537.766}
                x2={833.543}
                y2={545.395}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11024_"
                d="M260.3 167.9c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.4.1-.8.5-.7 1z"
                fill="url(#prefix__XMLID_303_)"
              />
            </g>
            <g id="prefix__XMLID_11021_">
              <linearGradient
                id="prefix__XMLID_304_"
                gradientUnits="userSpaceOnUse"
                x1={891.388}
                y1={549.342}
                x2={889.549}
                y2={556.971}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11022_"
                d="M206.2 186.4c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8-.5.1-.8.5-.7 1z"
                fill="url(#prefix__XMLID_304_)"
              />
            </g>
            <g id="prefix__XMLID_11019_">
              <linearGradient
                id="prefix__XMLID_305_"
                gradientUnits="userSpaceOnUse"
                x1={938.697}
                y1={600.543}
                x2={936.858}
                y2={608.171}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11020_"
                d="M165.6 243.1c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.3 0-.7.5-.7 1z"
                fill="url(#prefix__XMLID_305_)"
              />
            </g>
            <g id="prefix__XMLID_11017_">
              <linearGradient
                id="prefix__XMLID_306_"
                gradientUnits="userSpaceOnUse"
                x1={1025.012}
                y1={555.222}
                x2={1023.173}
                y2={562.85}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11018_"
                d="M74.4 209c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8s-.8.4-.7 1z"
                fill="url(#prefix__XMLID_306_)"
              />
            </g>
            <g id="prefix__XMLID_11015_">
              <linearGradient
                id="prefix__XMLID_307_"
                gradientUnits="userSpaceOnUse"
                x1={1010.15}
                y1={577.861}
                x2={1009.365}
                y2={581.118}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <circle
                id="prefix__XMLID_11016_"
                cx={92.5}
                cy={228.8}
                fill="url(#prefix__XMLID_307_)"
                r={0.4}
              />
            </g>
            <g id="prefix__XMLID_11013_">
              <path
                id="prefix__XMLID_11014_"
                className="prefix__st25"
                d="M261.8 216.5c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3c-.1 0-.3.2-.3.4z"
              />
            </g>
            <g id="prefix__XMLID_11011_">
              <linearGradient
                id="prefix__XMLID_308_"
                gradientUnits="userSpaceOnUse"
                x1={1025.213}
                y1={590.915}
                x2={1024.427}
                y2={594.173}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11012_"
                d="M78.8 243.7c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3c-.1 0-.3.2-.3.4z"
                fill="url(#prefix__XMLID_308_)"
              />
            </g>
            <g id="prefix__XMLID_11009_">
              <linearGradient
                id="prefix__XMLID_309_"
                gradientUnits="userSpaceOnUse"
                x1={928.429}
                y1={595.485}
                x2={927.644}
                y2={598.742}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11010_"
                d="M175.4 236.2c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.3.1-.3.4z"
                fill="url(#prefix__XMLID_309_)"
              />
            </g>
            <g id="prefix__XMLID_11007_">
              <linearGradient
                id="prefix__XMLID_310_"
                gradientUnits="userSpaceOnUse"
                x1={855.211}
                y1={573.811}
                x2={854.425}
                y2={577.068}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11008_"
                d="M245.4 205.5c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.4.2-.3.4z"
                fill="url(#prefix__XMLID_310_)"
              />
            </g>
            <g id="prefix__XMLID_11005_">
              <linearGradient
                id="prefix__XMLID_311_"
                gradientUnits="userSpaceOnUse"
                x1={953.07}
                y1={559.65}
                x2={952.285}
                y2={562.907}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11006_"
                d="M146.5 203.7c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.3.2-.3.4z"
                fill="url(#prefix__XMLID_311_)"
              />
            </g>
            <g id="prefix__XMLID_11003_">
              <linearGradient
                id="prefix__XMLID_312_"
                gradientUnits="userSpaceOnUse"
                x1={945.09}
                y1={622.85}
                x2={944.304}
                y2={626.107}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11004_"
                d="M162.3 265.4c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.3.2-.3.4z"
                fill="url(#prefix__XMLID_312_)"
              />
            </g>
            <g id="prefix__XMLID_11001_">
              <linearGradient
                id="prefix__XMLID_313_"
                gradientUnits="userSpaceOnUse"
                x1={870.959}
                y1={589.746}
                x2={869.12}
                y2={597.375}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11002_"
                d="M231.5 223.9c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.4.1-.7.5-.7 1z"
                fill="url(#prefix__XMLID_313_)"
              />
            </g>
            <g id="prefix__XMLID_10999_">
              <linearGradient
                id="prefix__XMLID_314_"
                gradientUnits="userSpaceOnUse"
                x1={855.19}
                y1={591.615}
                x2={853.351}
                y2={599.243}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_11000_"
                d="M247.4 223.8c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.5.1-.8.5-.7 1z"
                fill="url(#prefix__XMLID_314_)"
              />
            </g>
            <g id="prefix__XMLID_10997_">
              <path
                id="prefix__XMLID_10998_"
                className="prefix__st25"
                d="M221.7 202.9c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8s-.7.5-.7 1z"
              />
            </g>
            <g id="prefix__XMLID_10995_">
              <linearGradient
                id="prefix__XMLID_315_"
                gradientUnits="userSpaceOnUse"
                x1={869.96}
                y1={605.754}
                x2={868.12}
                y2={613.383}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10996_"
                d="M234.5 239.6c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.4.2-.8.6-.7 1z"
                fill="url(#prefix__XMLID_315_)"
              />
            </g>
            <g id="prefix__XMLID_10993_">
              <linearGradient
                id="prefix__XMLID_316_"
                gradientUnits="userSpaceOnUse"
                x1={815.761}
                y1={550.385}
                x2={813.922}
                y2={558.014}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10994_"
                d="M281.4 178c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
                fill="url(#prefix__XMLID_316_)"
              />
            </g>
            <g id="prefix__XMLID_10991_">
              <linearGradient
                id="prefix__XMLID_317_"
                gradientUnits="userSpaceOnUse"
                x1={919.256}
                y1={565.752}
                x2={917.416}
                y2={573.381}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10992_"
                d="M180.6 206.2c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
                fill="url(#prefix__XMLID_317_)"
              />
            </g>
            <g id="prefix__XMLID_10989_">
              <linearGradient
                id="prefix__XMLID_318_"
                gradientUnits="userSpaceOnUse"
                x1={937.273}
                y1={543.866}
                x2={935.434}
                y2={551.495}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10990_"
                d="M160 186.7c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
                fill="url(#prefix__XMLID_318_)"
              />
            </g>
            <g id="prefix__XMLID_10987_">
              <linearGradient
                id="prefix__XMLID_319_"
                gradientUnits="userSpaceOnUse"
                x1={1001.348}
                y1={544.493}
                x2={999.509}
                y2={552.121}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10988_"
                d="M96.5 195.4c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.4-.7 1z"
                fill="url(#prefix__XMLID_319_)"
              />
            </g>
            <g id="prefix__XMLID_10985_">
              <ellipse
                id="prefix__XMLID_10986_"
                transform="rotate(-7.187 93.565 249.606)"
                className="prefix__st25"
                cx={93.6}
                cy={249.6}
                rx={0.8}
                ry={0.9}
              />
            </g>
            <g id="prefix__XMLID_10983_">
              <linearGradient
                id="prefix__XMLID_320_"
                gradientUnits="userSpaceOnUse"
                x1={988.44}
                y1={605.188}
                x2={987.203}
                y2={610.319}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10984_"
                d="M117 253.6c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6s-.5.3-.5.7z"
                fill="url(#prefix__XMLID_320_)"
              />
            </g>
            <g id="prefix__XMLID_10981_">
              <path
                id="prefix__XMLID_10982_"
                className="prefix__st25"
                d="M155.8 224.1c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6s-.5.3-.5.7z"
              />
            </g>
            <g id="prefix__XMLID_10979_">
              <linearGradient
                id="prefix__XMLID_321_"
                gradientUnits="userSpaceOnUse"
                x1={898.025}
                y1={567.973}
                x2={896.788}
                y2={573.103}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10980_"
                d="M202.1 205.3c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6-.3.1-.6.4-.5.7z"
                fill="url(#prefix__XMLID_321_)"
              />
            </g>
            <g id="prefix__XMLID_10977_">
              <linearGradient
                id="prefix__XMLID_322_"
                gradientUnits="userSpaceOnUse"
                x1={861.373}
                y1={543.596}
                x2={860.136}
                y2={548.727}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10978_"
                d="M235.4 176.6c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6s-.6.3-.5.7z"
                fill="url(#prefix__XMLID_322_)"
              />
            </g>
            <g id="prefix__XMLID_10975_">
              <path
                id="prefix__XMLID_10976_"
                className="prefix__st25"
                d="M270.5 191c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6-.3.2-.6.5-.5.7z"
              />
            </g>
            <g id="prefix__XMLID_10973_">
              <linearGradient
                id="prefix__XMLID_323_"
                gradientUnits="userSpaceOnUse"
                x1={859.134}
                y1={609.906}
                x2={857.897}
                y2={615.037}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10974_"
                d="M245.9 242.1c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6s-.5.3-.5.7z"
                fill="url(#prefix__XMLID_323_)"
              />
            </g>
            <g id="prefix__XMLID_10971_">
              <linearGradient
                id="prefix__XMLID_324_"
                gradientUnits="userSpaceOnUse"
                x1={883.503}
                y1={616.102}
                x2={881.664}
                y2={623.73}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10972_"
                d="M222.4 251.7c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.4-.7 1z"
                fill="url(#prefix__XMLID_324_)"
              />
            </g>
          </g>
          <g id="prefix__XMLID_10968_" className="prefix__st190">
            <linearGradient
              id="prefix__XMLID_325_"
              gradientUnits="userSpaceOnUse"
              x1={723.745}
              y1={630.879}
              x2={722.674}
              y2={635.322}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10969_"
              d="M382.9 245.8c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.4.3-.4.6z"
              fill="url(#prefix__XMLID_325_)"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <path
            id="prefix__XMLID_9047_"
            d="M268.5 251.9c-17.4 2.2-33.5-8.5-38.6-24.6l-29.6 3.7c3.7 16.8 13.8 31.9 29.3 40.5 28.2 20.3 71.8 10 90.3-21.3 6.5-11 9.5-23.3 9.3-35.4l-29.4 3.7c-1 16.8-13.9 31.2-31.3 33.4z"
          />
        </defs>
        <clipPath id="prefix__XMLID_326_">
          <use xlinkHref="#prefix__XMLID_9047_" overflow="visible" />
        </clipPath>
        <g clipPath="url(#prefix__XMLID_326_)">
          <defs>
            <path
              id="prefix__XMLID_9440_"
              d="M316.6 175.7c1.7 2.2 3.2 4.5 4.6 6.9 16.5 28.5 9.5 65.5-17.4 85.9s-64.4 17-87.4-6.6c-1.9-1.9-3.7-4-5.4-6.3-22.1-29.2-16.3-70.7 12.9-92.8s70.7-16.3 92.7 12.9z"
            />
          </defs>
          <clipPath id="prefix__XMLID_327_">
            <use xlinkHref="#prefix__XMLID_9440_" overflow="visible" />
          </clipPath>
          <g id="prefix__XMLID_10964_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_328_"
              gradientUnits="userSpaceOnUse"
              x1={253.198}
              y1={4.797}
              x2={251.358}
              y2={12.426}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10965_"
              d="M337.4 110.4c-.1-.4-.5-.8-.9-.8-.4.1-.8.5-.7 1 .1.4.5.8.9.8.4-.1.7-.5.7-1z"
              fill="url(#prefix__XMLID_328_)"
            />
          </g>
          <g id="prefix__XMLID_10962_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_329_"
              gradientUnits="userSpaceOnUse"
              x1={244.498}
              y1={-14.621}
              x2={242.659}
              y2={-6.993}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10963_"
              d="M331.2 130.8c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1c.1.4.5.8.9.8s.7-.6.7-1z"
              fill="url(#prefix__XMLID_329_)"
            />
          </g>
          <g id="prefix__XMLID_10960_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_330_"
              gradientUnits="userSpaceOnUse"
              x1={300.504}
              y1={-3.045}
              x2={298.664}
              y2={4.583}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10961_"
              d="M385.3 112.3c-.1-.4-.5-.8-.9-.8-.4.1-.8.5-.7 1 .1.4.5.8.9.8.5-.1.8-.6.7-1z"
              fill="url(#prefix__XMLID_330_)"
            />
          </g>
          <g id="prefix__XMLID_10958_" className="prefix__st355">
            <path
              id="prefix__XMLID_10959_"
              className="prefix__st25"
              d="M346.1 93.2c0-.2-.2-.3-.4-.3s-.3.2-.3.4.2.3.4.3.4-.2.3-.4z"
            />
          </g>
          <g id="prefix__XMLID_10956_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_331_"
              gradientUnits="userSpaceOnUse"
              x1={224.962}
              y1={-1.982}
              x2={223.122}
              y2={5.646}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10957_"
              d="M310.2 120.7c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1c.1.4.5.8.9.8.4-.1.8-.5.7-1z"
              fill="url(#prefix__XMLID_331_)"
            />
          </g>
          <g id="prefix__XMLID_10954_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_332_"
              gradientUnits="userSpaceOnUse"
              x1={270.573}
              y1={-8.771}
              x2={269.336}
              y2={-3.64}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10955_"
              d="M356.2 122.1c0-.4-.3-.6-.6-.6s-.5.3-.5.7c0 .4.3.6.6.6s.5-.3.5-.7z"
              fill="url(#prefix__XMLID_332_)"
            />
          </g>
          <g id="prefix__XMLID_10952_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_333_"
              gradientUnits="userSpaceOnUse"
              x1={237.519}
              y1={9.992}
              x2={236.282}
              y2={15.122}
              gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10953_"
              d="M321 107.6c0-.4-.3-.6-.6-.6s-.5.3-.5.7c0 .4.3.6.6.6s.6-.4.5-.7z"
              fill="url(#prefix__XMLID_333_)"
            />
          </g>
          <radialGradient
            id="prefix__XMLID_334_"
            cx={563.988}
            cy={526.837}
            r={295.385}
            fx={439.993}
            fy={424.133}
            gradientTransform="rotate(-7.187 -2548.953 2656.439)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0.012} stopColor="#1f0098" />
            <stop offset={0.203} stopColor="#df00c3" />
            <stop offset={0.535} stopColor="#0d006f" />
            <stop offset={0.752} stopColor="#00006a" />
          </radialGradient>
          <path
            id="prefix__XMLID_10951_"
            d="M248.3 116.1c87.6-11 164.8 29.4 172.5 90.3 7.7 60.9-57.1 119.2-144.7 130.3-87.6 11-164.8-29.4-172.5-90.3s57.1-119.2 144.7-130.3z"
            clipPath="url(#prefix__XMLID_327_)"
            fill="url(#prefix__XMLID_334_)"
          />
          <g id="prefix__XMLID_10722_" className="prefix__st355">
            <g id="prefix__XMLID_10894_">
              <g id="prefix__XMLID_10949_">
                <linearGradient
                  id="prefix__XMLID_335_"
                  gradientUnits="userSpaceOnUse"
                  x1={681.265}
                  y1={531.398}
                  x2={679.539}
                  y2={538.554}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10950_"
                  d="M412.4 142.2c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.8.5-.7.9z"
                  fill="url(#prefix__XMLID_335_)"
                />
              </g>
              <g id="prefix__XMLID_10947_">
                <linearGradient
                  id="prefix__XMLID_336_"
                  gradientUnits="userSpaceOnUse"
                  x1={673.079}
                  y1={513.177}
                  x2={671.354}
                  y2={520.333}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10948_"
                  d="M418.3 123.2c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_336_)"
                />
              </g>
              <g id="prefix__XMLID_10945_">
                <linearGradient
                  id="prefix__XMLID_337_"
                  gradientUnits="userSpaceOnUse"
                  x1={725.638}
                  y1={524.042}
                  x2={723.913}
                  y2={531.197}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10946_"
                  d="M367.5 140.5c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_337_)"
                />
              </g>
              <g id="prefix__XMLID_10943_">
                <linearGradient
                  id="prefix__XMLID_338_"
                  gradientUnits="userSpaceOnUse"
                  x1={770.001}
                  y1={572.066}
                  x2={768.276}
                  y2={579.222}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10944_"
                  d="M329.4 193.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_338_)"
                />
              </g>
              <g id="prefix__XMLID_10941_">
                <linearGradient
                  id="prefix__XMLID_339_"
                  gradientUnits="userSpaceOnUse"
                  x1={851.043}
                  y1={529.572}
                  x2={849.318}
                  y2={536.728}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10942_"
                  d="M243.7 161.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_339_)"
                />
              </g>
              <g id="prefix__XMLID_10939_">
                <linearGradient
                  id="prefix__XMLID_340_"
                  gradientUnits="userSpaceOnUse"
                  x1={837.083}
                  y1={550.803}
                  x2={836.347}
                  y2={553.859}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10940_"
                  d="M260.5 180.3c0 .2.2.4.4.3s.3-.2.3-.4-.2-.4-.4-.3c-.2.1-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_340_)"
                />
              </g>
              <g id="prefix__XMLID_10937_">
                <path
                  id="prefix__XMLID_10938_"
                  className="prefix__st25"
                  d="M419.6 168.8c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.1-.3.4z"
                />
              </g>
              <g id="prefix__XMLID_10935_">
                <linearGradient
                  id="prefix__XMLID_341_"
                  gradientUnits="userSpaceOnUse"
                  x1={851.2}
                  y1={563.046}
                  x2={850.463}
                  y2={566.101}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10936_"
                  d="M248 194.3c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_341_)"
                />
              </g>
              <g id="prefix__XMLID_10933_">
                <linearGradient
                  id="prefix__XMLID_342_"
                  gradientUnits="userSpaceOnUse"
                  x1={760.494}
                  y1={567.352}
                  x2={759.757}
                  y2={570.407}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10934_"
                  d="M338.6 187.2c0 .2.2.4.4.3s.3-.2.3-.4-.2-.4-.4-.3c-.2 0-.4.2-.3.4z"
                  fill="url(#prefix__XMLID_342_)"
                />
              </g>
              <g id="prefix__XMLID_10931_">
                <linearGradient
                  id="prefix__XMLID_343_"
                  gradientUnits="userSpaceOnUse"
                  x1={691.785}
                  y1={547.014}
                  x2={691.049}
                  y2={550.069}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10932_"
                  d="M404.2 158.4c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_343_)"
                />
              </g>
              <g id="prefix__XMLID_10929_">
                <linearGradient
                  id="prefix__XMLID_344_"
                  gradientUnits="userSpaceOnUse"
                  x1={783.595}
                  y1={533.734}
                  x2={782.859}
                  y2={536.79}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10930_"
                  d="M311.4 156.7c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.1.1-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_344_)"
                />
              </g>
              <g id="prefix__XMLID_10927_">
                <path
                  id="prefix__XMLID_10928_"
                  className="prefix__st25"
                  d="M326.3 214.6c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.3.2-.3.4z"
                />
              </g>
              <g id="prefix__XMLID_10925_">
                <linearGradient
                  id="prefix__XMLID_345_"
                  gradientUnits="userSpaceOnUse"
                  x1={706.473}
                  y1={561.942}
                  x2={704.748}
                  y2={569.097}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10926_"
                  d="M391.2 175.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5.1-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_345_)"
                />
              </g>
              <g id="prefix__XMLID_10923_">
                <linearGradient
                  id="prefix__XMLID_346_"
                  gradientUnits="userSpaceOnUse"
                  x1={691.678}
                  y1={563.693}
                  x2={689.952}
                  y2={570.849}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10924_"
                  d="M406.1 175.6c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_346_)"
                />
              </g>
              <g id="prefix__XMLID_10921_">
                <linearGradient
                  id="prefix__XMLID_347_"
                  gradientUnits="userSpaceOnUse"
                  x1={713.132}
                  y1={541.222}
                  x2={711.407}
                  y2={548.378}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10922_"
                  d="M382 156c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_347_)"
                />
              </g>
              <g id="prefix__XMLID_10919_">
                <linearGradient
                  id="prefix__XMLID_348_"
                  gradientUnits="userSpaceOnUse"
                  x1={705.553}
                  y1={576.961}
                  x2={703.827}
                  y2={584.117}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10920_"
                  d="M394 190.5c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_348_)"
                />
              </g>
              <g id="prefix__XMLID_10917_">
                <linearGradient
                  id="prefix__XMLID_349_"
                  gradientUnits="userSpaceOnUse"
                  x1={654.712}
                  y1={525.023}
                  x2={652.987}
                  y2={532.179}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10918_"
                  d="M438 132.6c.1.4.5.7.9.7s.7-.5.7-.9c-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_349_)"
                />
              </g>
              <g id="prefix__XMLID_10915_">
                <linearGradient
                  id="prefix__XMLID_350_"
                  gradientUnits="userSpaceOnUse"
                  x1={751.828}
                  y1={539.446}
                  x2={750.103}
                  y2={546.602}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10916_"
                  d="M343.4 159.1c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_350_)"
                />
              </g>
              <g id="prefix__XMLID_10913_">
                <linearGradient
                  id="prefix__XMLID_351_"
                  gradientUnits="userSpaceOnUse"
                  x1={768.657}
                  y1={518.9}
                  x2={766.932}
                  y2={526.056}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10914_"
                  d="M324.1 140.8c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_351_)"
                />
              </g>
              <g id="prefix__XMLID_10911_">
                <linearGradient
                  id="prefix__XMLID_352_"
                  gradientUnits="userSpaceOnUse"
                  x1={828.791}
                  y1={519.494}
                  x2={827.065}
                  y2={526.65}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10912_"
                  d="M264.5 148.9c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_352_)"
                />
              </g>
              <g id="prefix__XMLID_10909_">
                <linearGradient
                  id="prefix__XMLID_353_"
                  gradientUnits="userSpaceOnUse"
                  x1={838.659}
                  y1={569.679}
                  x2={836.934}
                  y2={576.835}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10910_"
                  d="M261 200c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_353_)"
                />
              </g>
              <g id="prefix__XMLID_10907_">
                <linearGradient
                  id="prefix__XMLID_354_"
                  gradientUnits="userSpaceOnUse"
                  x1={816.686}
                  y1={576.43}
                  x2={815.526}
                  y2={581.242}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10908_"
                  d="M283.8 203.5c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.3.1-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_354_)"
                />
              </g>
              <g id="prefix__XMLID_10905_">
                <linearGradient
                  id="prefix__XMLID_355_"
                  gradientUnits="userSpaceOnUse"
                  x1={777.072}
                  y1={553.532}
                  x2={775.911}
                  y2={558.344}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10906_"
                  d="M320.2 175.8c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_355_)"
                />
              </g>
              <g id="prefix__XMLID_10903_">
                <path
                  id="prefix__XMLID_10904_"
                  className="prefix__st25"
                  d="M363.6 158.3c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                />
              </g>
              <g id="prefix__XMLID_10901_">
                <linearGradient
                  id="prefix__XMLID_356_"
                  gradientUnits="userSpaceOnUse"
                  x1={697.516}
                  y1={518.66}
                  x2={696.356}
                  y2={523.472}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10902_"
                  d="M394.8 131.3c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_356_)"
                />
              </g>
              <g id="prefix__XMLID_10899_">
                <linearGradient
                  id="prefix__XMLID_357_"
                  gradientUnits="userSpaceOnUse"
                  x1={666.525}
                  y1={536.263}
                  x2={665.365}
                  y2={541.075}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10900_"
                  d="M427.8 144.9c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4 0-.6.3-.5.6z"
                  fill="url(#prefix__XMLID_357_)"
                />
              </g>
              <g id="prefix__XMLID_10897_">
                <linearGradient
                  id="prefix__XMLID_358_"
                  gradientUnits="userSpaceOnUse"
                  x1={695.357}
                  y1={580.846}
                  x2={694.197}
                  y2={585.659}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10898_"
                  d="M404.7 192.7c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_358_)"
                />
              </g>
              <g id="prefix__XMLID_10895_">
                <linearGradient
                  id="prefix__XMLID_359_"
                  gradientUnits="userSpaceOnUse"
                  x1={718.24}
                  y1={586.663}
                  x2={716.515}
                  y2={593.82}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10896_"
                  d="M382.6 201.7c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_359_)"
                />
              </g>
            </g>
            <g id="prefix__XMLID_10837_" className="prefix__st55">
              <g id="prefix__XMLID_10892_">
                <linearGradient
                  id="prefix__XMLID_360_"
                  gradientUnits="userSpaceOnUse"
                  x1={811.782}
                  y1={592.151}
                  x2={810.057}
                  y2={599.307}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10893_"
                  d="M290.5 218.8c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.4.1-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_360_)"
                />
              </g>
              <g id="prefix__XMLID_10890_">
                <path
                  id="prefix__XMLID_10891_"
                  className="prefix__st25"
                  d="M296.3 199.8c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.8.4-.7.9z"
                />
              </g>
              <g id="prefix__XMLID_10888_">
                <linearGradient
                  id="prefix__XMLID_361_"
                  gradientUnits="userSpaceOnUse"
                  x1={856.156}
                  y1={584.794}
                  x2={854.43}
                  y2={591.95}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10889_"
                  d="M245.6 217.1c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.5.1-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_361_)"
                />
              </g>
              <g id="prefix__XMLID_10886_">
                <path
                  id="prefix__XMLID_10887_"
                  className="prefix__st25"
                  d="M207.6 270.3c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.5.1-.8.5-.7.9z"
                />
              </g>
              <g id="prefix__XMLID_10884_">
                <linearGradient
                  id="prefix__XMLID_362_"
                  gradientUnits="userSpaceOnUse"
                  x1={981.561}
                  y1={590.324}
                  x2={979.835}
                  y2={597.48}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10885_"
                  d="M121.8 238.3c.1.4.5.7.9.7s.7-.5.7-.9-.5-.7-.9-.7c-.5 0-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_362_)"
                />
              </g>
              <g id="prefix__XMLID_10882_">
                <linearGradient
                  id="prefix__XMLID_363_"
                  gradientUnits="userSpaceOnUse"
                  x1={967.601}
                  y1={611.556}
                  x2={966.864}
                  y2={614.612}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10883_"
                  d="M138.6 256.9c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.3.3-.3.4z"
                  fill="url(#prefix__XMLID_363_)"
                />
              </g>
              <g id="prefix__XMLID_10880_">
                <linearGradient
                  id="prefix__XMLID_364_"
                  gradientUnits="userSpaceOnUse"
                  x1={808.315}
                  y1={619.966}
                  x2={807.579}
                  y2={623.021}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10881_"
                  d="M297.7 245.4c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.1-.3.4z"
                  fill="url(#prefix__XMLID_364_)"
                />
              </g>
              <g id="prefix__XMLID_10878_">
                <path
                  id="prefix__XMLID_10879_"
                  className="prefix__st25"
                  d="M126.1 270.9c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2 0-.3.2-.3.4z"
                />
              </g>
              <g id="prefix__XMLID_10876_">
                <linearGradient
                  id="prefix__XMLID_365_"
                  gradientUnits="userSpaceOnUse"
                  x1={891.011}
                  y1={628.105}
                  x2={890.274}
                  y2={631.16}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10877_"
                  d="M216.7 263.8c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.3 0-.4.2-.3.4z"
                  fill="url(#prefix__XMLID_365_)"
                />
              </g>
              <g id="prefix__XMLID_10874_">
                <linearGradient
                  id="prefix__XMLID_366_"
                  gradientUnits="userSpaceOnUse"
                  x1={822.303}
                  y1={607.767}
                  x2={821.566}
                  y2={610.822}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10875_"
                  d="M282.3 235c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_366_)"
                />
              </g>
              <g id="prefix__XMLID_10872_">
                <linearGradient
                  id="prefix__XMLID_367_"
                  gradientUnits="userSpaceOnUse"
                  x1={914.112}
                  y1={594.487}
                  x2={913.376}
                  y2={597.543}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10873_"
                  d="M189.5 233.3c0 .2.2.4.4.3.2 0 .3-.2.3-.4s-.2-.4-.4-.3c-.2.1-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_367_)"
                />
              </g>
              <g id="prefix__XMLID_10870_">
                <linearGradient
                  id="prefix__XMLID_368_"
                  gradientUnits="userSpaceOnUse"
                  x1={906.654}
                  y1={653.777}
                  x2={905.917}
                  y2={656.832}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10871_"
                  d="M204.3 291.2c0 .2.2.4.4.3s.3-.2.3-.4-.2-.4-.4-.3c-.2.1-.3.2-.3.4z"
                  fill="url(#prefix__XMLID_368_)"
                />
              </g>
              <g id="prefix__XMLID_10868_">
                <linearGradient
                  id="prefix__XMLID_369_"
                  gradientUnits="userSpaceOnUse"
                  x1={837.049}
                  y1={622.708}
                  x2={835.324}
                  y2={629.864}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10869_"
                  d="M269.3 252.3c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.5.1-.8.5-.7.9z"
                  fill="url(#prefix__XMLID_369_)"
                />
              </g>
              <g id="prefix__XMLID_10866_">
                <linearGradient
                  id="prefix__XMLID_370_"
                  gradientUnits="userSpaceOnUse"
                  x1={822.195}
                  y1={624.446}
                  x2={820.47}
                  y2={631.602}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10867_"
                  d="M284.2 252.2c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_370_)"
                />
              </g>
              <g id="prefix__XMLID_10864_">
                <linearGradient
                  id="prefix__XMLID_371_"
                  gradientUnits="userSpaceOnUse"
                  x1={843.649}
                  y1={601.975}
                  x2={841.924}
                  y2={609.131}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10865_"
                  d="M260.1 232.6c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7-.7.4-.7.9z"
                  fill="url(#prefix__XMLID_371_)"
                />
              </g>
              <g id="prefix__XMLID_10862_">
                <path
                  id="prefix__XMLID_10863_"
                  className="prefix__st25"
                  d="M272.1 267.1c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.7.4-.7.9z"
                />
              </g>
              <g id="prefix__XMLID_10860_">
                <linearGradient
                  id="prefix__XMLID_372_"
                  gradientUnits="userSpaceOnUse"
                  x1={785.288}
                  y1={585.79}
                  x2={783.563}
                  y2={592.946}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10861_"
                  d="M316 209.2c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.4.1-.8.5-.7.9z"
                  fill="url(#prefix__XMLID_372_)"
                />
              </g>
              <g id="prefix__XMLID_10858_">
                <linearGradient
                  id="prefix__XMLID_373_"
                  gradientUnits="userSpaceOnUse"
                  x1={882.345}
                  y1={600.199}
                  x2={880.62}
                  y2={607.355}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10859_"
                  d="M221.5 235.7c.1.4.5.7.9.7s.7-.5.7-.9-.5-.7-.9-.7-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_373_)"
                />
              </g>
              <g id="prefix__XMLID_10856_">
                <linearGradient
                  id="prefix__XMLID_374_"
                  gradientUnits="userSpaceOnUse"
                  x1={899.233}
                  y1={579.667}
                  x2={897.508}
                  y2={586.822}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10857_"
                  d="M202.2 217.4c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7s-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_374_)"
                />
              </g>
              <g id="prefix__XMLID_10854_">
                <linearGradient
                  id="prefix__XMLID_375_"
                  gradientUnits="userSpaceOnUse"
                  x1={959.366}
                  y1={580.261}
                  x2={957.641}
                  y2={587.417}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10855_"
                  d="M142.6 225.5c.1.4.5.7.9.7.4-.1.7-.5.7-.9s-.5-.7-.9-.7c-.4.1-.8.5-.7.9z"
                  fill="url(#prefix__XMLID_375_)"
                />
              </g>
              <g id="prefix__XMLID_10852_">
                <linearGradient
                  id="prefix__XMLID_376_"
                  gradientUnits="userSpaceOnUse"
                  x1={969.235}
                  y1={630.446}
                  x2={967.51}
                  y2={637.602}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10853_"
                  d="M139.1 276.6c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.5 0-.8.4-.7.9z"
                  fill="url(#prefix__XMLID_376_)"
                />
              </g>
              <g id="prefix__XMLID_10850_">
                <linearGradient
                  id="prefix__XMLID_377_"
                  gradientUnits="userSpaceOnUse"
                  x1={947.204}
                  y1={637.182}
                  x2={946.043}
                  y2={641.995}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10851_"
                  d="M161.9 280.1c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4.1-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_377_)"
                />
              </g>
              <g id="prefix__XMLID_10848_">
                <linearGradient
                  id="prefix__XMLID_378_"
                  gradientUnits="userSpaceOnUse"
                  x1={907.589}
                  y1={614.285}
                  x2={906.429}
                  y2={619.097}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10849_"
                  d="M198.3 252.4c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.3.1-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_378_)"
                />
              </g>
              <g id="prefix__XMLID_10846_">
                <path
                  id="prefix__XMLID_10847_"
                  className="prefix__st25"
                  d="M241.7 234.9c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.6.3-.5.6z"
                />
              </g>
              <g id="prefix__XMLID_10844_">
                <linearGradient
                  id="prefix__XMLID_379_"
                  gradientUnits="userSpaceOnUse"
                  x1={828.034}
                  y1={579.413}
                  x2={826.873}
                  y2={584.225}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10845_"
                  d="M272.9 207.9c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_379_)"
                />
              </g>
              <g id="prefix__XMLID_10842_">
                <linearGradient
                  id="prefix__XMLID_380_"
                  gradientUnits="userSpaceOnUse"
                  x1={797.101}
                  y1={597.029}
                  x2={795.941}
                  y2={601.842}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10843_"
                  d="M305.8 221.5c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5-.5.3-.5.6z"
                  fill="url(#prefix__XMLID_380_)"
                />
              </g>
              <g id="prefix__XMLID_10840_">
                <linearGradient
                  id="prefix__XMLID_381_"
                  gradientUnits="userSpaceOnUse"
                  x1={825.933}
                  y1={641.613}
                  x2={824.772}
                  y2={646.425}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10841_"
                  d="M282.8 269.3c0 .3.3.5.6.5s.5-.3.5-.6-.3-.5-.6-.5c-.4 0-.6.3-.5.6z"
                  fill="url(#prefix__XMLID_381_)"
                />
              </g>
              <g id="prefix__XMLID_10838_">
                <linearGradient
                  id="prefix__XMLID_382_"
                  gradientUnits="userSpaceOnUse"
                  x1={848.758}
                  y1={647.416}
                  x2={847.032}
                  y2={654.572}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10839_"
                  d="M260.7 278.3c.1.4.5.7.9.7.4-.1.7-.5.7-.9-.1-.4-.5-.7-.9-.7-.4.1-.7.5-.7.9z"
                  fill="url(#prefix__XMLID_382_)"
                />
              </g>
            </g>
            <g id="prefix__XMLID_10780_" className="prefix__st79">
              <g id="prefix__XMLID_10835_">
                <linearGradient
                  id="prefix__XMLID_383_"
                  gradientUnits="userSpaceOnUse"
                  x1={867.604}
                  y1={526.319}
                  x2={866.339}
                  y2={531.565}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10836_"
                  d="M227 160.2c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                  fill="url(#prefix__XMLID_383_)"
                />
              </g>
              <g id="prefix__XMLID_10833_">
                <linearGradient
                  id="prefix__XMLID_384_"
                  gradientUnits="userSpaceOnUse"
                  x1={861.636}
                  y1={512.97}
                  x2={860.371}
                  y2={518.216}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10834_"
                  d="M231.3 146.2c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.6.4-.5.7z"
                  fill="url(#prefix__XMLID_384_)"
                />
              </g>
              <g id="prefix__XMLID_10831_">
                <linearGradient
                  id="prefix__XMLID_385_"
                  gradientUnits="userSpaceOnUse"
                  x1={900.147}
                  y1={520.93}
                  x2={898.882}
                  y2={526.176}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10832_"
                  d="M194.1 159c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.4 0-.6.3-.5.7z"
                  fill="url(#prefix__XMLID_385_)"
                />
              </g>
              <g id="prefix__XMLID_10829_">
                <linearGradient
                  id="prefix__XMLID_386_"
                  gradientUnits="userSpaceOnUse"
                  x1={932.679}
                  y1={556.137}
                  x2={931.414}
                  y2={561.383}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10830_"
                  d="M166.2 197.9c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                  fill="url(#prefix__XMLID_386_)"
                />
              </g>
              <g id="prefix__XMLID_10827_">
                <linearGradient
                  id="prefix__XMLID_387_"
                  gradientUnits="userSpaceOnUse"
                  x1={992.09}
                  y1={524.987}
                  x2={990.825}
                  y2={530.232}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10828_"
                  d="M103.4 174.5c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.4 0-.6.3-.5.7z"
                  fill="url(#prefix__XMLID_387_)"
                />
              </g>
              <g id="prefix__XMLID_10825_">
                <linearGradient
                  id="prefix__XMLID_388_"
                  gradientUnits="userSpaceOnUse"
                  x1={981.812}
                  y1={540.54}
                  x2={981.272}
                  y2={542.78}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <circle
                  id="prefix__XMLID_10826_"
                  cx={115.9}
                  cy={188.1}
                  fill="url(#prefix__XMLID_388_)"
                  r={0.2}
                />
              </g>
              <g id="prefix__XMLID_10823_">
                <path
                  id="prefix__XMLID_10824_"
                  className="prefix__st25"
                  d="M232.3 179.7c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1 0-.2.1-.2.3z"
                />
              </g>
              <g id="prefix__XMLID_10821_">
                <linearGradient
                  id="prefix__XMLID_389_"
                  gradientUnits="userSpaceOnUse"
                  x1={992.17}
                  y1={549.517}
                  x2={991.63}
                  y2={551.757}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10822_"
                  d="M106.5 198.4c0 .1.2.2.3.2s.2-.2.2-.3c0-.1-.2-.2-.3-.2-.2 0-.2.1-.2.3z"
                  fill="url(#prefix__XMLID_389_)"
                />
              </g>
              <g id="prefix__XMLID_10819_">
                <linearGradient
                  id="prefix__XMLID_390_"
                  gradientUnits="userSpaceOnUse"
                  x1={925.676}
                  y1={552.674}
                  x2={925.136}
                  y2={554.913}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10820_"
                  d="M172.9 193.2c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.2 0-.3.1-.2.3z"
                  fill="url(#prefix__XMLID_390_)"
                />
              </g>
              <g id="prefix__XMLID_10817_">
                <linearGradient
                  id="prefix__XMLID_391_"
                  gradientUnits="userSpaceOnUse"
                  x1={875.27}
                  y1={537.756}
                  x2={874.73}
                  y2={539.995}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10818_"
                  d="M221 172.1c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.2 0-.2.1-.2.3z"
                  fill="url(#prefix__XMLID_391_)"
                />
              </g>
              <g id="prefix__XMLID_10815_">
                <linearGradient
                  id="prefix__XMLID_392_"
                  gradientUnits="userSpaceOnUse"
                  x1={942.62}
                  y1={528.032}
                  x2={942.08}
                  y2={530.272}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10816_"
                  d="M153 170.8c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1.1-.2.2-.2.3z"
                  fill="url(#prefix__XMLID_392_)"
                />
              </g>
              <g id="prefix__XMLID_10813_">
                <linearGradient
                  id="prefix__XMLID_393_"
                  gradientUnits="userSpaceOnUse"
                  x1={937.132}
                  y1={571.49}
                  x2={936.592}
                  y2={573.73}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10814_"
                  d="M163.8 213.3c0 .1.2.2.3.2.1 0 .2-.2.2-.3 0-.1-.2-.2-.3-.2-.1 0-.2.1-.2.3z"
                  fill="url(#prefix__XMLID_393_)"
                />
              </g>
              <g id="prefix__XMLID_10811_">
                <linearGradient
                  id="prefix__XMLID_394_"
                  gradientUnits="userSpaceOnUse"
                  x1={886.158}
                  y1={548.727}
                  x2={884.893}
                  y2={553.973}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10812_"
                  d="M211.4 184.8c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5s-.5.3-.5.7z"
                  fill="url(#prefix__XMLID_394_)"
                />
              </g>
              <g id="prefix__XMLID_10809_">
                <linearGradient
                  id="prefix__XMLID_395_"
                  gradientUnits="userSpaceOnUse"
                  x1={875.314}
                  y1={550.012}
                  x2={874.049}
                  y2={555.258}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10810_"
                  d="M222.4 184.7c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.6.3-.5.7z"
                  fill="url(#prefix__XMLID_395_)"
                />
              </g>
              <g id="prefix__XMLID_10807_">
                <path
                  id="prefix__XMLID_10808_"
                  className="prefix__st25"
                  d="M204.7 170.3c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3 0-.5.4-.5.7z"
                />
              </g>
              <g id="prefix__XMLID_10805_">
                <linearGradient
                  id="prefix__XMLID_396_"
                  gradientUnits="userSpaceOnUse"
                  x1={885.412}
                  y1={559.721}
                  x2={884.147}
                  y2={564.967}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10806_"
                  d="M213.5 195.6c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                  fill="url(#prefix__XMLID_396_)"
                />
              </g>
              <g id="prefix__XMLID_10803_">
                <linearGradient
                  id="prefix__XMLID_397_"
                  gradientUnits="userSpaceOnUse"
                  x1={848.202}
                  y1={521.661}
                  x2={846.937}
                  y2={526.907}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10804_"
                  d="M245.7 153.2c0 .3.3.6.6.5s.5-.3.5-.7c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7z"
                  fill="url(#prefix__XMLID_397_)"
                />
              </g>
              <g id="prefix__XMLID_10801_">
                <linearGradient
                  id="prefix__XMLID_398_"
                  gradientUnits="userSpaceOnUse"
                  x1={919.368}
                  y1={532.228}
                  x2={918.103}
                  y2={537.474}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10802_"
                  d="M176.4 172.5c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5s-.5.4-.5.7z"
                  fill="url(#prefix__XMLID_398_)"
                />
              </g>
              <g id="prefix__XMLID_10799_">
                <linearGradient
                  id="prefix__XMLID_399_"
                  gradientUnits="userSpaceOnUse"
                  x1={931.757}
                  y1={517.179}
                  x2={930.493}
                  y2={522.424}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10800_"
                  d="M162.2 159.2c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.2 0-.5.3-.5.7z"
                  fill="url(#prefix__XMLID_399_)"
                />
              </g>
              <g id="prefix__XMLID_10797_">
                <linearGradient
                  id="prefix__XMLID_400_"
                  gradientUnits="userSpaceOnUse"
                  x1={975.817}
                  y1={517.609}
                  x2={974.553}
                  y2={522.855}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10798_"
                  d="M118.6 165.1c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.4.1-.6.4-.5.7z"
                  fill="url(#prefix__XMLID_400_)"
                />
              </g>
              <g id="prefix__XMLID_10795_">
                <circle
                  id="prefix__XMLID_10796_"
                  transform="rotate(-7.187 116.56 202.419)"
                  className="prefix__st25"
                  cx={116.6}
                  cy={202.4}
                  r={0.6}
                />
              </g>
              <g id="prefix__XMLID_10793_">
                <linearGradient
                  id="prefix__XMLID_401_"
                  gradientUnits="userSpaceOnUse"
                  x1={966.942}
                  y1={559.346}
                  x2={966.091}
                  y2={562.874}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10794_"
                  d="M132.7 205.1c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4s-.3.3-.3.5z"
                  fill="url(#prefix__XMLID_401_)"
                />
              </g>
              <g id="prefix__XMLID_10791_">
                <path
                  id="prefix__XMLID_10792_"
                  className="prefix__st25"
                  d="M159.5 184.9c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4s-.4.2-.3.5z"
                />
              </g>
              <g id="prefix__XMLID_10789_">
                <linearGradient
                  id="prefix__XMLID_402_"
                  gradientUnits="userSpaceOnUse"
                  x1={904.769}
                  y1={533.755}
                  x2={903.918}
                  y2={537.283}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10790_"
                  d="M191.2 172c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4s-.3.2-.3.5z"
                  fill="url(#prefix__XMLID_402_)"
                />
              </g>
              <g id="prefix__XMLID_10787_">
                <linearGradient
                  id="prefix__XMLID_403_"
                  gradientUnits="userSpaceOnUse"
                  x1={879.566}
                  y1={516.993}
                  x2={878.715}
                  y2={520.521}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10788_"
                  d="M214.1 152.2c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.2.1-.3.3-.3.5z"
                  fill="url(#prefix__XMLID_403_)"
                />
              </g>
              <g id="prefix__XMLID_10785_">
                <path
                  id="prefix__XMLID_10786_"
                  className="prefix__st25"
                  d="M238.2 162.1c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.2.2-.3.4-.3.5z"
                />
              </g>
              <g id="prefix__XMLID_10783_">
                <linearGradient
                  id="prefix__XMLID_404_"
                  gradientUnits="userSpaceOnUse"
                  x1={878.026}
                  y1={562.59}
                  x2={877.176}
                  y2={566.118}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10784_"
                  d="M221.3 197.3c0 .2.2.4.4.4s.3-.2.3-.5c0-.2-.2-.4-.4-.4-.1 0-.3.2-.3.5z"
                  fill="url(#prefix__XMLID_404_)"
                />
              </g>
              <g id="prefix__XMLID_10781_">
                <linearGradient
                  id="prefix__XMLID_405_"
                  gradientUnits="userSpaceOnUse"
                  x1={894.725}
                  y1={566.836}
                  x2={893.46}
                  y2={572.082}
                  gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10782_"
                  d="M205.2 203.8c0 .3.3.6.6.5.3 0 .5-.3.5-.7 0-.3-.3-.6-.6-.5-.3.1-.5.4-.5.7z"
                  fill="url(#prefix__XMLID_405_)"
                />
              </g>
            </g>
            <g id="prefix__XMLID_10723_" className="prefix__st103">
              <g id="prefix__XMLID_10778_">
                <linearGradient
                  id="prefix__XMLID_406_"
                  gradientUnits="userSpaceOnUse"
                  x1={227.677}
                  y1={-153.573}
                  x2={226.412}
                  y2={-148.328}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10779_"
                  d="M331.7 271.1c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.4-.1.6-.3.5-.7z"
                  fill="url(#prefix__XMLID_406_)"
                />
              </g>
              <g id="prefix__XMLID_10776_">
                <linearGradient
                  id="prefix__XMLID_407_"
                  gradientUnits="userSpaceOnUse"
                  x1={221.695}
                  y1={-166.927}
                  x2={220.43}
                  y2={-161.681}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10777_"
                  d="M327.5 285.1c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.3 0 .5-.4.5-.7z"
                  fill="url(#prefix__XMLID_407_)"
                />
              </g>
              <g id="prefix__XMLID_10774_">
                <linearGradient
                  id="prefix__XMLID_408_"
                  gradientUnits="userSpaceOnUse"
                  x1={260.206}
                  y1={-158.966}
                  x2={258.941}
                  y2={-153.721}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10775_"
                  d="M364.7 272.4c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_408_)"
                />
              </g>
              <g id="prefix__XMLID_10772_">
                <path
                  id="prefix__XMLID_10773_"
                  className="prefix__st25"
                  d="M392.6 233.4c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
                />
              </g>
              <g id="prefix__XMLID_10770_">
                <linearGradient
                  id="prefix__XMLID_409_"
                  gradientUnits="userSpaceOnUse"
                  x1={352.149}
                  y1={-154.909}
                  x2={350.884}
                  y2={-149.664}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10771_"
                  d="M455.4 256.9c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.4-.1.6-.4.5-.7z"
                  fill="url(#prefix__XMLID_409_)"
                />
              </g>
              <g id="prefix__XMLID_10768_">
                <linearGradient
                  id="prefix__XMLID_410_"
                  gradientUnits="userSpaceOnUse"
                  x1={341.871}
                  y1={-139.356}
                  x2={341.331}
                  y2={-137.116}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10769_"
                  d="M443.1 243.2c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2s.3-.2.2-.3z"
                  fill="url(#prefix__XMLID_410_)"
                />
              </g>
              <g id="prefix__XMLID_10766_">
                <linearGradient
                  id="prefix__XMLID_411_"
                  gradientUnits="userSpaceOnUse"
                  x1={225.097}
                  y1={-133.193}
                  x2={224.557}
                  y2={-130.953}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10767_"
                  d="M326.5 251.7c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.1 0 .2-.2.2-.3z"
                  fill="url(#prefix__XMLID_411_)"
                />
              </g>
              <g id="prefix__XMLID_10764_">
                <linearGradient
                  id="prefix__XMLID_412_"
                  gradientUnits="userSpaceOnUse"
                  x1={352.229}
                  y1={-130.379}
                  x2={351.688}
                  y2={-128.139}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10765_"
                  d="M452.3 233c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.1-.1.2-.2.2-.3z"
                  fill="url(#prefix__XMLID_412_)"
                />
              </g>
              <g id="prefix__XMLID_10762_">
                <linearGradient
                  id="prefix__XMLID_413_"
                  gradientUnits="userSpaceOnUse"
                  x1={285.735}
                  y1={-127.222}
                  x2={285.195}
                  y2={-124.983}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10763_"
                  d="M385.9 238.2c0-.1-.2-.2-.3-.2s-.2.2-.2.3c0 .1.2.2.3.2.1-.1.2-.2.2-.3z"
                  fill="url(#prefix__XMLID_413_)"
                />
              </g>
              <g id="prefix__XMLID_10760_">
                <path
                  id="prefix__XMLID_10761_"
                  className="prefix__st25"
                  d="M337.8 259.3c0-.1-.2-.2-.3-.2s-.2.2-.2.3.2.2.3.2c.1-.1.2-.2.2-.3z"
                />
              </g>
              <g id="prefix__XMLID_10758_">
                <linearGradient
                  id="prefix__XMLID_414_"
                  gradientUnits="userSpaceOnUse"
                  x1={302.679}
                  y1={-151.864}
                  x2={302.139}
                  y2={-149.624}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10759_"
                  d="M405.8 260.5c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3s.2.2.3.2c.1 0 .2-.2.2-.3z"
                  fill="url(#prefix__XMLID_414_)"
                />
              </g>
              <g id="prefix__XMLID_10756_">
                <linearGradient
                  id="prefix__XMLID_415_"
                  gradientUnits="userSpaceOnUse"
                  x1={297.191}
                  y1={-108.406}
                  x2={296.651}
                  y2={-106.166}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10757_"
                  d="M394.9 218.1c0-.1-.2-.2-.3-.2-.1 0-.2.2-.2.3 0 .1.2.2.3.2.2 0 .3-.2.2-.3z"
                  fill="url(#prefix__XMLID_415_)"
                />
              </g>
              <g id="prefix__XMLID_10754_">
                <linearGradient
                  id="prefix__XMLID_416_"
                  gradientUnits="userSpaceOnUse"
                  x1={246.216}
                  y1={-131.169}
                  x2={244.952}
                  y2={-125.923}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10755_"
                  d="M347.4 246.6c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_416_)"
                />
              </g>
              <g id="prefix__XMLID_10752_">
                <linearGradient
                  id="prefix__XMLID_417_"
                  gradientUnits="userSpaceOnUse"
                  x1={235.315}
                  y1={-129.898}
                  x2={234.05}
                  y2={-124.653}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10753_"
                  d="M336.4 246.7c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3-.1.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_417_)"
                />
              </g>
              <g id="prefix__XMLID_10750_">
                <linearGradient
                  id="prefix__XMLID_418_"
                  gradientUnits="userSpaceOnUse"
                  x1={251.034}
                  y1={-146.373}
                  x2={249.769}
                  y2={-141.127}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10751_"
                  d="M354 261c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.4 0 .6-.3.5-.7z"
                  fill="url(#prefix__XMLID_418_)"
                />
              </g>
              <g id="prefix__XMLID_10748_">
                <linearGradient
                  id="prefix__XMLID_419_"
                  gradientUnits="userSpaceOnUse"
                  x1={245.485}
                  y1={-120.172}
                  x2={244.22}
                  y2={-114.926}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10749_"
                  d="M345.2 235.7c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.4 0 .6-.3.5-.7z"
                  fill="url(#prefix__XMLID_419_)"
                />
              </g>
              <g id="prefix__XMLID_10746_">
                <linearGradient
                  id="prefix__XMLID_420_"
                  gradientUnits="userSpaceOnUse"
                  x1={208.258}
                  y1={-158.236}
                  x2={206.993}
                  y2={-152.99}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10747_"
                  d="M313.1 278.2c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .4.3.6.6.5.3-.1.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_420_)"
                />
              </g>
              <g id="prefix__XMLID_10744_">
                <linearGradient
                  id="prefix__XMLID_421_"
                  gradientUnits="userSpaceOnUse"
                  x1={279.427}
                  y1={-147.668}
                  x2={278.162}
                  y2={-142.423}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10745_"
                  d="M382.4 258.8c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5.2-.1.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_421_)"
                />
              </g>
              <g id="prefix__XMLID_10742_">
                <linearGradient
                  id="prefix__XMLID_422_"
                  gradientUnits="userSpaceOnUse"
                  x1={291.758}
                  y1={-162.732}
                  x2={290.493}
                  y2={-157.486}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10743_"
                  d="M396.5 272.2c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5s.5-.4.5-.7z"
                  fill="url(#prefix__XMLID_422_)"
                />
              </g>
              <g id="prefix__XMLID_10740_">
                <path
                  id="prefix__XMLID_10741_"
                  className="prefix__st25"
                  d="M440.2 266.2c0-.3-.3-.6-.6-.5s-.5.3-.5.7c0 .3.3.6.6.5s.5-.4.5-.7z"
                />
              </g>
              <g id="prefix__XMLID_10738_">
                <linearGradient
                  id="prefix__XMLID_423_"
                  gradientUnits="userSpaceOnUse"
                  x1={343.087}
                  y1={-125.504}
                  x2={341.823}
                  y2={-120.258}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10739_"
                  d="M442.8 228.8c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3 0 .5-.4.5-.7z"
                  fill="url(#prefix__XMLID_423_)"
                />
              </g>
              <g id="prefix__XMLID_10736_">
                <linearGradient
                  id="prefix__XMLID_424_"
                  gradientUnits="userSpaceOnUse"
                  x1={327.001}
                  y1={-120.55}
                  x2={326.15}
                  y2={-117.023}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10737_"
                  d="M426.1 226.2c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.2-.1.3-.3.3-.5z"
                  fill="url(#prefix__XMLID_424_)"
                />
              </g>
              <g id="prefix__XMLID_10734_">
                <linearGradient
                  id="prefix__XMLID_425_"
                  gradientUnits="userSpaceOnUse"
                  x1={297.923}
                  y1={-137.345}
                  x2={297.072}
                  y2={-133.817}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10735_"
                  d="M399.3 246.5c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.2-.1.4-.3.3-.5z"
                  fill="url(#prefix__XMLID_425_)"
                />
              </g>
              <g id="prefix__XMLID_10732_">
                <linearGradient
                  id="prefix__XMLID_426_"
                  gradientUnits="userSpaceOnUse"
                  x1={264.77}
                  y1={-146.155}
                  x2={263.919}
                  y2={-142.627}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10733_"
                  d="M367.5 259.4c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.3-.1.4-.3.3-.5z"
                  fill="url(#prefix__XMLID_426_)"
                />
              </g>
              <g id="prefix__XMLID_10730_">
                <linearGradient
                  id="prefix__XMLID_427_"
                  gradientUnits="userSpaceOnUse"
                  x1={239.625}
                  y1={-162.903}
                  x2={238.774}
                  y2={-159.376}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10731_"
                  d="M344.7 279.2c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.2-.2.3-.3.3-.5z"
                  fill="url(#prefix__XMLID_427_)"
                />
              </g>
              <g id="prefix__XMLID_10728_">
                <linearGradient
                  id="prefix__XMLID_428_"
                  gradientUnits="userSpaceOnUse"
                  x1={216.954}
                  y1={-149.988}
                  x2={216.103}
                  y2={-146.46}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10729_"
                  d="M320.6 269.2c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4.1-.1.3-.3.3-.5z"
                  fill="url(#prefix__XMLID_428_)"
                />
              </g>
              <g id="prefix__XMLID_10726_">
                <linearGradient
                  id="prefix__XMLID_429_"
                  gradientUnits="userSpaceOnUse"
                  x1={238.027}
                  y1={-117.32}
                  x2={237.176}
                  y2={-113.793}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10727_"
                  d="M337.4 234.1c0-.2-.2-.4-.4-.4s-.3.2-.3.5c0 .2.2.4.4.4s.3-.2.3-.5z"
                  fill="url(#prefix__XMLID_429_)"
                />
              </g>
              <g id="prefix__XMLID_10724_">
                <linearGradient
                  id="prefix__XMLID_430_"
                  gradientUnits="userSpaceOnUse"
                  x1={254.784}
                  y1={-113.06}
                  x2={253.519}
                  y2={-107.814}
                  gradientTransform="scale(1 -1) rotate(7.187 1221.893 613.83)"
                >
                  <stop offset={0} stopColor="#fff" />
                  <stop offset={0.126} stopColor="#f4f3f3" />
                  <stop offset={0.459} stopColor="#dadada" />
                  <stop offset={0.761} stopColor="#cbcaca" />
                  <stop offset={1} stopColor="#c6c5c5" />
                </linearGradient>
                <path
                  id="prefix__XMLID_10725_"
                  d="M353.6 227.5c0-.3-.3-.6-.6-.5-.3 0-.5.3-.5.7 0 .3.3.6.6.5.3 0 .5-.4.5-.7z"
                  fill="url(#prefix__XMLID_430_)"
                />
              </g>
            </g>
          </g>
          <radialGradient
            id="prefix__SVGID_32_"
            cx={123.098}
            cy={2666.345}
            r={38.81}
            gradientTransform="matrix(1.1381 -1.1579 .1888 .1706 -355.765 -85.898)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#ff40ff" />
            <stop offset={1} stopColor="#ff40ff" stopOpacity={0} />
          </radialGradient>
          <path
            d="M348.6 167.8c6.7 7-15 38.9-48.6 71.3s-66.2 53.1-72.9 46.2c-6.7-7 15-38.9 48.6-71.3s66.1-53.2 72.9-46.2z"
            clipPath="url(#prefix__XMLID_327_)"
            fill="url(#prefix__SVGID_32_)"
          />
          <g id="prefix__XMLID_10720_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_431_"
              gradientUnits="userSpaceOnUse"
              x1={702.038}
              y1={622.729}
              x2={699.529}
              y2={633.135}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10721_"
              d="M403 236c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.6 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_431_)"
            />
          </g>
          <g id="prefix__XMLID_10718_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_432_"
              gradientUnits="userSpaceOnUse"
              x1={819.894}
              y1={560.931}
              x2={817.385}
              y2={571.338}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10719_"
              d="M278.4 189.4c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_432_)"
            />
          </g>
          <g id="prefix__XMLID_10716_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_433_"
              gradientUnits="userSpaceOnUse"
              x1={799.592}
              y1={591.807}
              x2={798.521}
              y2={596.25}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10717_"
              d="M302.8 216.5c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.2-.5.4-.4.6z"
              fill="url(#prefix__XMLID_433_)"
            />
          </g>
          <g id="prefix__XMLID_10714_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_434_"
              gradientUnits="userSpaceOnUse"
              x1={820.206}
              y1={609.631}
              x2={819.134}
              y2={614.075}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10715_"
              d="M284.5 236.8c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2 0-.4.3-.4.6z"
              fill="url(#prefix__XMLID_434_)"
            />
          </g>
          <g id="prefix__XMLID_10712_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_435_"
              gradientUnits="userSpaceOnUse"
              x1={721.807}
              y1={566.985}
              x2={720.735}
              y2={571.428}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10713_"
              d="M376.8 182.2c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.4.3-.4.6z"
              fill="url(#prefix__XMLID_435_)"
            />
          </g>
          <g id="prefix__XMLID_10710_" className="prefix__st355">
            <path
              id="prefix__XMLID_10711_"
              className="prefix__st25"
              d="M398.4 266.3c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2.2-.5.4-.4.6z"
            />
          </g>
          <g id="prefix__XMLID_10708_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_436_"
              gradientUnits="userSpaceOnUse"
              x1={700.168}
              y1={545.432}
              x2={697.658}
              y2={555.838}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10709_"
              d="M395.2 159.1c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
              fill="url(#prefix__XMLID_436_)"
            />
          </g>
          <g id="prefix__XMLID_10706_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_437_"
              gradientUnits="userSpaceOnUse"
              x1={787.533}
              y1={546.276}
              x2={785.024}
              y2={556.683}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10707_"
              d="M308.6 170.8c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.7.1-1 .7-1 1.3z"
              fill="url(#prefix__XMLID_437_)"
            />
          </g>
          <g id="prefix__XMLID_10704_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_438_"
              gradientUnits="userSpaceOnUse"
              x1={801.884}
              y1={619.258}
              x2={799.375}
              y2={629.665}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10705_"
              d="M303.5 245.1c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1-1 .5-1 1.3z"
              fill="url(#prefix__XMLID_438_)"
            />
          </g>
          <g id="prefix__XMLID_10702_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_439_"
              gradientUnits="userSpaceOnUse"
              x1={769.95}
              y1={629.08}
              x2={768.263}
              y2={636.078}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10703_"
              d="M336.6 250.3c.1.4.5.8.9.7s.8-.5.7-.9c-.1-.4-.5-.8-.9-.7-.4 0-.7.4-.7.9z"
              fill="url(#prefix__XMLID_439_)"
            />
          </g>
          <g id="prefix__XMLID_10700_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_440_"
              gradientUnits="userSpaceOnUse"
              x1={712.32}
              y1={595.776}
              x2={710.632}
              y2={602.774}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_10701_"
              d="M389.6 210c.1.4.5.8.9.7s.8-.5.7-.9c-.1-.4-.5-.8-.9-.7-.4.1-.7.5-.7.9z"
              fill="url(#prefix__XMLID_440_)"
            />
          </g>
          <g
            id="prefix__XMLID_10643_"
            opacity={0.58}
            clipPath="url(#prefix__XMLID_327_)"
          >
            <g id="prefix__XMLID_10698_">
              <linearGradient
                id="prefix__XMLID_441_"
                gradientUnits="userSpaceOnUse"
                x1={762.798}
                y1={651.938}
                x2={760.289}
                y2={662.344}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10699_"
                d="M346.4 272.5c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.7.1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_441_)"
              />
            </g>
            <g id="prefix__XMLID_10696_">
              <path
                id="prefix__XMLID_10697_"
                className="prefix__st25"
                d="M354.8 244.8c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.6.1-1.1.6-1 1.3z"
              />
            </g>
            <g id="prefix__XMLID_10694_">
              <linearGradient
                id="prefix__XMLID_442_"
                gradientUnits="userSpaceOnUse"
                x1={827.413}
                y1={641.26}
                x2={824.904}
                y2={651.666}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10695_"
                d="M281 270c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3c-.1-.6-.7-1.1-1.3-1-.7.1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_442_)"
              />
            </g>
            <g id="prefix__XMLID_10692_">
              <path
                id="prefix__XMLID_10693_"
                className="prefix__st25"
                d="M225.7 347.4c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
              />
            </g>
            <g id="prefix__XMLID_10690_">
              <linearGradient
                id="prefix__XMLID_443_"
                gradientUnits="userSpaceOnUse"
                x1={1009.785}
                y1={649.302}
                x2={1007.276}
                y2={659.708}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10691_"
                d="M101 300.8c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3c-.1-.6-.7-1.1-1.3-1-.6 0-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_443_)"
              />
            </g>
            <g id="prefix__XMLID_10688_">
              <linearGradient
                id="prefix__XMLID_444_"
                gradientUnits="userSpaceOnUse"
                x1={989.483}
                y1={680.178}
                x2={988.412}
                y2={684.622}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10689_"
                d="M125.4 327.9c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5-.4.4-.4.6z"
                fill="url(#prefix__XMLID_444_)"
              />
            </g>
            <g id="prefix__XMLID_10686_">
              <linearGradient
                id="prefix__XMLID_445_"
                gradientUnits="userSpaceOnUse"
                x1={757.756}
                y1={692.388}
                x2={756.685}
                y2={696.831}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10687_"
                d="M356.9 311.1c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5-.5.4-.4.6z"
                fill="url(#prefix__XMLID_445_)"
              />
            </g>
            <g id="prefix__XMLID_10684_">
              <path
                id="prefix__XMLID_10685_"
                className="prefix__st25"
                d="M107.3 348.2c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5-.5.3-.4.6z"
              />
            </g>
            <g id="prefix__XMLID_10682_">
              <linearGradient
                id="prefix__XMLID_446_"
                gradientUnits="userSpaceOnUse"
                x1={878.017}
                y1={704.223}
                x2={876.946}
                y2={708.667}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10683_"
                d="M239 337.9c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.4.4-.4.6z"
                fill="url(#prefix__XMLID_446_)"
              />
            </g>
            <g id="prefix__XMLID_10680_">
              <linearGradient
                id="prefix__XMLID_447_"
                gradientUnits="userSpaceOnUse"
                x1={778.098}
                y1={674.647}
                x2={777.026}
                y2={679.091}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10681_"
                d="M334.5 296.1c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5-.5.3-.4.6z"
                fill="url(#prefix__XMLID_447_)"
              />
            </g>
            <g id="prefix__XMLID_10678_">
              <linearGradient
                id="prefix__XMLID_448_"
                gradientUnits="userSpaceOnUse"
                x1={911.697}
                y1={655.356}
                x2={910.626}
                y2={659.799}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10679_"
                d="M199.5 293.6c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.2.1-.5.3-.4.6z"
                fill="url(#prefix__XMLID_448_)"
              />
            </g>
            <g id="prefix__XMLID_10676_">
              <linearGradient
                id="prefix__XMLID_449_"
                gradientUnits="userSpaceOnUse"
                x1={900.766}
                y1={741.558}
                x2={899.695}
                y2={746.001}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10677_"
                d="M221.1 377.8c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.1-.4.3-.4.6z"
                fill="url(#prefix__XMLID_449_)"
              />
            </g>
            <g id="prefix__XMLID_10674_">
              <linearGradient
                id="prefix__XMLID_450_"
                gradientUnits="userSpaceOnUse"
                x1={799.542}
                y1={696.376}
                x2={797.033}
                y2={706.783}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10675_"
                d="M315.5 321.2c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_450_)"
              />
            </g>
            <g id="prefix__XMLID_10672_">
              <linearGradient
                id="prefix__XMLID_451_"
                gradientUnits="userSpaceOnUse"
                x1={778.025}
                y1={698.923}
                x2={775.516}
                y2={709.33}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10673_"
                d="M337.2 321c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.7.1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_451_)"
              />
            </g>
            <g id="prefix__XMLID_10670_">
              <linearGradient
                id="prefix__XMLID_452_"
                gradientUnits="userSpaceOnUse"
                x1={809.141}
                y1={666.224}
                x2={806.632}
                y2={676.63}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10671_"
                d="M302.2 292.6c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.7 0-1.1.5-1 1.3z"
                fill="url(#prefix__XMLID_452_)"
              />
            </g>
            <g id="prefix__XMLID_10668_">
              <path
                id="prefix__XMLID_10669_"
                className="prefix__st25"
                d="M319.7 342.7c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.8 0-1.1.6-1 1.3z"
              />
            </g>
            <g id="prefix__XMLID_10666_">
              <linearGradient
                id="prefix__XMLID_453_"
                gradientUnits="userSpaceOnUse"
                x1={724.268}
                y1={642.687}
                x2={721.759}
                y2={653.094}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10667_"
                d="M383.5 258.6c.1.6.7 1.1 1.3 1s1.1-.7 1-1.3-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_453_)"
              />
            </g>
            <g id="prefix__XMLID_10664_">
              <linearGradient
                id="prefix__XMLID_454_"
                gradientUnits="userSpaceOnUse"
                x1={865.415}
                y1={663.642}
                x2={862.906}
                y2={674.048}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10665_"
                d="M246.1 297c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.7.1-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_454_)"
              />
            </g>
            <g id="prefix__XMLID_10662_">
              <linearGradient
                id="prefix__XMLID_455_"
                gradientUnits="userSpaceOnUse"
                x1={889.974}
                y1={633.782}
                x2={887.465}
                y2={644.188}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10663_"
                d="M218 270.5c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3-.1-.6-.7-1.1-1.3-1-.7 0-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_455_)"
              />
            </g>
            <g id="prefix__XMLID_10660_">
              <linearGradient
                id="prefix__XMLID_456_"
                gradientUnits="userSpaceOnUse"
                x1={977.424}
                y1={634.647}
                x2={974.915}
                y2={645.053}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10661_"
                d="M131.3 282.2c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_456_)"
              />
            </g>
            <g id="prefix__XMLID_10658_">
              <linearGradient
                id="prefix__XMLID_457_"
                gradientUnits="userSpaceOnUse"
                x1={991.775}
                y1={707.629}
                x2={989.266}
                y2={718.035}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10659_"
                d="M126.2 356.5c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1c-.6 0-1.1.6-1 1.3z"
                fill="url(#prefix__XMLID_457_)"
              />
            </g>
            <g id="prefix__XMLID_10656_">
              <linearGradient
                id="prefix__XMLID_458_"
                gradientUnits="userSpaceOnUse"
                x1={959.841}
                y1={717.451}
                x2={958.154}
                y2={724.449}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10657_"
                d="M159.3 361.7c.1.4.5.8.9.7.4-.1.8-.5.7-.9s-.5-.8-.9-.7c-.5.1-.8.5-.7.9z"
                fill="url(#prefix__XMLID_458_)"
              />
            </g>
            <g id="prefix__XMLID_10654_">
              <linearGradient
                id="prefix__XMLID_459_"
                gradientUnits="userSpaceOnUse"
                x1={902.126}
                y1={684.126}
                x2={900.439}
                y2={691.124}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10655_"
                d="M212.4 321.4c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.6.1-.8.5-.7.9z"
                fill="url(#prefix__XMLID_459_)"
              />
            </g>
            <g id="prefix__XMLID_10652_">
              <path
                id="prefix__XMLID_10653_"
                className="prefix__st25"
                d="M275.4 295.9c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5 0-.8.4-.7.9z"
              />
            </g>
            <g id="prefix__XMLID_10650_">
              <linearGradient
                id="prefix__XMLID_460_"
                gradientUnits="userSpaceOnUse"
                x1={786.432}
                y1={633.413}
                x2={784.744}
                y2={640.411}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10651_"
                d="M320.8 256.6c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5.1-.7.5-.7.9z"
                fill="url(#prefix__XMLID_460_)"
              />
            </g>
            <g id="prefix__XMLID_10648_">
              <linearGradient
                id="prefix__XMLID_461_"
                gradientUnits="userSpaceOnUse"
                x1={741.447}
                y1={659.033}
                x2={739.76}
                y2={666.031}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10649_"
                d="M368.7 276.4c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.5.1-.8.5-.7.9z"
                fill="url(#prefix__XMLID_461_)"
              />
            </g>
            <g id="prefix__XMLID_10646_">
              <linearGradient
                id="prefix__XMLID_462_"
                gradientUnits="userSpaceOnUse"
                x1={783.376}
                y1={723.869}
                x2={781.689}
                y2={730.867}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10647_"
                d="M335.1 345.9c.1.4.5.8.9.7.4-.1.8-.5.7-.9-.1-.4-.5-.8-.9-.7-.4.1-.7.5-.7.9z"
                fill="url(#prefix__XMLID_462_)"
              />
            </g>
            <g id="prefix__XMLID_10644_">
              <linearGradient
                id="prefix__XMLID_463_"
                gradientUnits="userSpaceOnUse"
                x1={816.655}
                y1={732.328}
                x2={814.146}
                y2={742.735}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10645_"
                d="M303 359c.1.6.7 1.1 1.3 1 .6-.1 1.1-.7 1-1.3s-.7-1.1-1.3-1-1.1.7-1 1.3z"
                fill="url(#prefix__XMLID_463_)"
              />
            </g>
          </g>
          <g
            id="prefix__XMLID_9818_"
            opacity={0.56}
            clipPath="url(#prefix__XMLID_327_)"
          >
            <g id="prefix__XMLID_10641_">
              <linearGradient
                id="prefix__XMLID_464_"
                gradientUnits="userSpaceOnUse"
                x1={844.062}
                y1={556.222}
                x2={842.222}
                y2={563.85}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10642_"
                d="M254 187.3c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.5.1-.8.5-.7 1z"
                fill="url(#prefix__XMLID_464_)"
              />
            </g>
            <g id="prefix__XMLID_10639_">
              <linearGradient
                id="prefix__XMLID_465_"
                gradientUnits="userSpaceOnUse"
                x1={835.383}
                y1={536.808}
                x2={833.543}
                y2={544.437}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10640_"
                d="M260.2 167c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.4-.7 1z"
                fill="url(#prefix__XMLID_465_)"
              />
            </g>
            <g id="prefix__XMLID_10637_">
              <linearGradient
                id="prefix__XMLID_466_"
                gradientUnits="userSpaceOnUse"
                x1={891.388}
                y1={548.384}
                x2={889.549}
                y2={556.013}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10638_"
                d="M206.1 185.4c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
                fill="url(#prefix__XMLID_466_)"
              />
            </g>
            <g id="prefix__XMLID_10635_">
              <linearGradient
                id="prefix__XMLID_467_"
                gradientUnits="userSpaceOnUse"
                x1={938.697}
                y1={599.585}
                x2={936.858}
                y2={607.213}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10636_"
                d="M165.5 242.1c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.3.1-.7.6-.7 1z"
                fill="url(#prefix__XMLID_467_)"
              />
            </g>
            <g id="prefix__XMLID_10633_">
              <linearGradient
                id="prefix__XMLID_468_"
                gradientUnits="userSpaceOnUse"
                x1={1025.012}
                y1={554.264}
                x2={1023.173}
                y2={561.892}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10634_"
                d="M74.2 208c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.7.5-.7 1z"
                fill="url(#prefix__XMLID_468_)"
              />
            </g>
            <g id="prefix__XMLID_10631_">
              <linearGradient
                id="prefix__XMLID_469_"
                gradientUnits="userSpaceOnUse"
                x1={1010.15}
                y1={576.903}
                x2={1009.365}
                y2={580.16}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <circle
                id="prefix__XMLID_10632_"
                cx={92.4}
                cy={227.9}
                fill="url(#prefix__XMLID_469_)"
                r={0.4}
              />
            </g>
            <g id="prefix__XMLID_10629_">
              <path
                id="prefix__XMLID_10630_"
                className="prefix__st25"
                d="M261.7 215.6c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.3.2-.3.4z"
              />
            </g>
            <g id="prefix__XMLID_10627_">
              <linearGradient
                id="prefix__XMLID_470_"
                gradientUnits="userSpaceOnUse"
                x1={1025.213}
                y1={589.957}
                x2={1024.427}
                y2={593.215}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10628_"
                d="M78.7 242.8c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3c-.2-.1-.3.1-.3.4z"
                fill="url(#prefix__XMLID_470_)"
              />
            </g>
            <g id="prefix__XMLID_10625_">
              <linearGradient
                id="prefix__XMLID_471_"
                gradientUnits="userSpaceOnUse"
                x1={928.429}
                y1={594.527}
                x2={927.644}
                y2={597.784}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10626_"
                d="M175.3 235.2c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.3.1-.3.4z"
                fill="url(#prefix__XMLID_471_)"
              />
            </g>
            <g id="prefix__XMLID_10623_">
              <linearGradient
                id="prefix__XMLID_472_"
                gradientUnits="userSpaceOnUse"
                x1={855.211}
                y1={572.853}
                x2={854.425}
                y2={576.111}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10624_"
                d="M245.2 204.5c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3c-.1.1-.3.3-.3.4z"
                fill="url(#prefix__XMLID_472_)"
              />
            </g>
            <g id="prefix__XMLID_10621_">
              <linearGradient
                id="prefix__XMLID_473_"
                gradientUnits="userSpaceOnUse"
                x1={953.07}
                y1={558.692}
                x2={952.285}
                y2={561.949}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10622_"
                d="M146.4 202.7c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.3.3-.3.4z"
                fill="url(#prefix__XMLID_473_)"
              />
            </g>
            <g id="prefix__XMLID_10619_">
              <linearGradient
                id="prefix__XMLID_474_"
                gradientUnits="userSpaceOnUse"
                x1={945.09}
                y1={621.892}
                x2={944.304}
                y2={625.149}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10620_"
                d="M162.2 264.4c0 .2.2.3.4.3s.3-.2.3-.4-.2-.3-.4-.3-.3.2-.3.4z"
                fill="url(#prefix__XMLID_474_)"
              />
            </g>
            <g id="prefix__XMLID_10617_">
              <linearGradient
                id="prefix__XMLID_475_"
                gradientUnits="userSpaceOnUse"
                x1={870.959}
                y1={588.788}
                x2={869.12}
                y2={596.417}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10618_"
                d="M231.4 223c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
                fill="url(#prefix__XMLID_475_)"
              />
            </g>
            <g id="prefix__XMLID_10615_">
              <linearGradient
                id="prefix__XMLID_476_"
                gradientUnits="userSpaceOnUse"
                x1={855.19}
                y1={590.657}
                x2={853.351}
                y2={598.285}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10616_"
                d="M247.3 222.9c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8s-.8.5-.7 1z"
                fill="url(#prefix__XMLID_476_)"
              />
            </g>
            <g id="prefix__XMLID_10613_">
              <path
                id="prefix__XMLID_10614_"
                className="prefix__st25"
                d="M221.6 201.9c.1.4.5.8.9.8s.8-.5.7-1c-.1-.4-.5-.8-.9-.8-.5.1-.8.6-.7 1z"
              />
            </g>
            <g id="prefix__XMLID_10611_">
              <linearGradient
                id="prefix__XMLID_477_"
                gradientUnits="userSpaceOnUse"
                x1={869.96}
                y1={604.796}
                x2={868.12}
                y2={612.425}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10612_"
                d="M234.4 238.7c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.4.1-.8.6-.7 1z"
                fill="url(#prefix__XMLID_477_)"
              />
            </g>
            <g id="prefix__XMLID_10609_">
              <linearGradient
                id="prefix__XMLID_478_"
                gradientUnits="userSpaceOnUse"
                x1={815.761}
                y1={549.427}
                x2={813.922}
                y2={557.056}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10610_"
                d="M281.2 177.1c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8s-.7.4-.7 1z"
                fill="url(#prefix__XMLID_478_)"
              />
            </g>
            <g id="prefix__XMLID_10607_">
              <linearGradient
                id="prefix__XMLID_479_"
                gradientUnits="userSpaceOnUse"
                x1={919.256}
                y1={564.794}
                x2={917.416}
                y2={572.423}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10608_"
                d="M180.5 205.2c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.5.1-.8.6-.7 1z"
                fill="url(#prefix__XMLID_479_)"
              />
            </g>
            <g id="prefix__XMLID_10605_">
              <linearGradient
                id="prefix__XMLID_480_"
                gradientUnits="userSpaceOnUse"
                x1={937.273}
                y1={542.908}
                x2={935.434}
                y2={550.537}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10606_"
                d="M159.9 185.8c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.5 0-.8.4-.7 1z"
                fill="url(#prefix__XMLID_480_)"
              />
            </g>
            <g id="prefix__XMLID_10603_">
              <linearGradient
                id="prefix__XMLID_481_"
                gradientUnits="userSpaceOnUse"
                x1={1001.348}
                y1={543.535}
                x2={999.509}
                y2={551.163}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10604_"
                d="M96.4 194.4c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.5.1-.8.5-.7 1z"
                fill="url(#prefix__XMLID_481_)"
              />
            </g>
            <g id="prefix__XMLID_10601_">
              <ellipse
                id="prefix__XMLID_10602_"
                transform="rotate(-7.187 93.444 248.656)"
                className="prefix__st25"
                cx={93.5}
                cy={248.7}
                rx={0.8}
                ry={0.9}
              />
            </g>
            <g id="prefix__XMLID_10599_">
              <linearGradient
                id="prefix__XMLID_482_"
                gradientUnits="userSpaceOnUse"
                x1={988.44}
                y1={604.231}
                x2={987.203}
                y2={609.361}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10600_"
                d="M116.9 252.6c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6s-.5.3-.5.7z"
                fill="url(#prefix__XMLID_482_)"
              />
            </g>
            <g id="prefix__XMLID_10597_">
              <path
                id="prefix__XMLID_10598_"
                className="prefix__st25"
                d="M155.7 223.1c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6-.3.1-.5.4-.5.7z"
              />
            </g>
            <g id="prefix__XMLID_10595_">
              <linearGradient
                id="prefix__XMLID_483_"
                gradientUnits="userSpaceOnUse"
                x1={898.025}
                y1={567.015}
                x2={896.788}
                y2={572.145}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10596_"
                d="M202 204.4c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6-.4 0-.6.3-.5.7z"
                fill="url(#prefix__XMLID_483_)"
              />
            </g>
            <g id="prefix__XMLID_10593_">
              <linearGradient
                id="prefix__XMLID_484_"
                gradientUnits="userSpaceOnUse"
                x1={861.373}
                y1={542.638}
                x2={860.136}
                y2={547.769}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10594_"
                d="M235.3 175.6c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6-.3.1-.6.4-.5.7z"
                fill="url(#prefix__XMLID_484_)"
              />
            </g>
            <g id="prefix__XMLID_10591_">
              <path
                id="prefix__XMLID_10592_"
                className="prefix__st25"
                d="M270.3 190.1c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6-.3.1-.5.4-.5.7z"
              />
            </g>
            <g id="prefix__XMLID_10205_">
              <linearGradient
                id="prefix__XMLID_485_"
                gradientUnits="userSpaceOnUse"
                x1={859.134}
                y1={608.948}
                x2={857.897}
                y2={614.079}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_10206_"
                d="M245.8 241.1c0 .4.3.6.6.6s.5-.3.5-.7c0-.4-.3-.6-.6-.6-.3.1-.6.4-.5.7z"
                fill="url(#prefix__XMLID_485_)"
              />
            </g>
            <g id="prefix__XMLID_9820_">
              <linearGradient
                id="prefix__XMLID_486_"
                gradientUnits="userSpaceOnUse"
                x1={883.503}
                y1={615.144}
                x2={881.664}
                y2={622.772}
                gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
              >
                <stop offset={0} stopColor="#fff" />
                <stop offset={0.126} stopColor="#f4f3f3" />
                <stop offset={0.459} stopColor="#dadada" />
                <stop offset={0.761} stopColor="#cbcaca" />
                <stop offset={1} stopColor="#c6c5c5" />
              </linearGradient>
              <path
                id="prefix__XMLID_9821_"
                d="M222.2 250.7c.1.4.5.8.9.8.4-.1.8-.5.7-1-.1-.4-.5-.8-.9-.8-.4.1-.7.5-.7 1z"
                fill="url(#prefix__XMLID_486_)"
              />
            </g>
          </g>
          <g id="prefix__XMLID_9797_" className="prefix__st355">
            <linearGradient
              id="prefix__XMLID_487_"
              gradientUnits="userSpaceOnUse"
              x1={723.745}
              y1={629.921}
              x2={722.674}
              y2={634.364}
              gradientTransform="scale(-1 1) rotate(7.187 3241.458 -8375.09)"
            >
              <stop offset={0} stopColor="#fff" />
              <stop offset={0.126} stopColor="#f4f3f3" />
              <stop offset={0.459} stopColor="#dadada" />
              <stop offset={0.761} stopColor="#cbcaca" />
              <stop offset={1} stopColor="#c6c5c5" />
            </linearGradient>
            <path
              id="prefix__XMLID_9816_"
              d="M382.8 244.8c0 .3.2.5.5.5s.4-.3.4-.6-.2-.5-.5-.5c-.3.2-.5.4-.4.6z"
              fill="url(#prefix__XMLID_487_)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
