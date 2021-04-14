import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme {
    textSubtle: string;
    input: string;
    rarity: {
      common: string;
      uncommon: string;
      rare: string;
      legendary: {
        primary: string;
        light: string;
        dark: string;
      };
      moonlike: {
        primary: string;
        light: string;
        dark: string;
      };
    };
    types: {
      item: string;
      supporter: string;
      psychic: string;
      lightning: string;
      grass: string;
      fire: string;
      water: string;
    };
  }
}

export const GlobalStyle = createGlobalStyle`
body {
    color: #000000;
    background-color: #ffffff;
    font-family: 'futura-pt';
}
`;

const Theme: DefaultTheme = {
  textSubtle: "#666666",
  input: "#222222",
  rarity: {
    common: "#C8C8C8",
    uncommon: "#61D99D",
    rare: "#05A5EE",
    legendary: {
      primary: "#f1bf19",
      light: "#FFCA1B",
      dark: "#D0951F",
    },
    moonlike: {
      primary: "",
      light: "#3515D5",
      dark: "#7000D2",
    },
  },
  types: {
    item: "",
    supporter: "",
    psychic: "#D166FF",
    lightning: "#FFCA0D",
    grass: "",
    fire: "#EE4D4E",
    water: "",
  },
};

export default Theme;
