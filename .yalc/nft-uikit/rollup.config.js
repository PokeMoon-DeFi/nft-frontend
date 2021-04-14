import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";

import pkg from "./package.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  external: ["styled-components", "react/jsx-runtime", "react"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    image(),
    typescript({ useTsconfigDeclarationDir: true }),
    styles(),
  ],
};
