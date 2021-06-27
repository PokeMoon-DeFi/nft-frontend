import { createMuiTheme, ThemeOptions } from "@material-ui/core";

// declare module "@material-ui/core/styles/createPalette" {
//   type Color = React.CSSProperties["color"];
//   type TypeTheme = {
//     bgColor: Color;
//     textColor: Color;
//   };
//   interface Palette {
//     rarity: {
//       [key: string]: TypeTheme;
//       common: TypeTheme;
//       uncommon: TypeTheme;
//       rare: TypeTheme;
//       legendary: TypeTheme;
//       moonlike: TypeTheme;
//     };
//     types: {
//       [key: string]: TypeTheme;
//       item: TypeTheme;
//       supporter: TypeTheme;
//       psychic: TypeTheme;
//       lightning: TypeTheme;
//       grass: TypeTheme;
//       fire: TypeTheme;
//       water: TypeTheme;
//       fighting: TypeTheme;
//       colorless: TypeTheme;
//       darkness: TypeTheme;
//       dragon: TypeTheme;
//       metal: TypeTheme;
//       fairy: TypeTheme;
//     };
//   }
//   interface PaletteOptions {
//     rarity: {
//       [key: string]: TypeTheme;
//       common: TypeTheme;
//       uncommon: TypeTheme;
//       rare: TypeTheme;
//       legendary: TypeTheme;
//       moonlike: TypeTheme;
//     };
//     types: {
//       [key: string]: TypeTheme;
//       item: TypeTheme;
//       supporter: TypeTheme;
//       psychic: TypeTheme;
//       lightning: TypeTheme;
//       grass: TypeTheme;
//       fire: TypeTheme;
//       water: TypeTheme;
//       fighting: TypeTheme;
//       colorless: TypeTheme;
//       darkness: TypeTheme;
//       dragon: TypeTheme;
//       metal: TypeTheme;
//       fairy: TypeTheme;
//     };
//   }
// }

export const rawMaterialTheme: ThemeOptions = {
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "5px",
          height: "5px",
          backgroundColor: "#000000",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
          backgroundColor: "transparent",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#bd0df3",
          outline: "1px solid #197ee4",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Josefin Sans", "Roboto"].join(","),
    allVariants: {
      fontFamily: ["Josefin Sans", "Roboto"].join(","),
    },
  },
  palette: {
    rarity: {
      common: {
        bgColor: "#C8C8C8",
        textColor: "#0f0f0f",
      },
      uncommon: { bgColor: "#61D99D", textColor: "#0f0e0e" },
      rare: { bgColor: "#05A5EE", textColor: "#ffffff" },
      legendary: { bgColor: "#f1bf19", textColor: "#161515" },
      moonlike: { bgColor: "#ef61e3", textColor: "#ffffff" },
    },
    types: {
      item: {
        bgColor: "#a3dffa",
        textColor: "#2a2e30",
      },
      supporter: {
        bgColor: "#C8C8C8",
        textColor: "#29251d",
      },
      psychic: {
        bgColor: "#D166FF",
        textColor: "#ffffff",
      },
      lightning: {
        bgColor: "#FFCA0D",
        textColor: "#1d1919",
      },
      grass: { bgColor: "#40da39", textColor: "#ffffff" },
      fire: { bgColor: "#EE4D4E", textColor: "#ffffff" },
      water: { bgColor: "#4f96f1", textColor: "#ffffff" },
      fighting: { bgColor: "#ffdd91", textColor: "#29251d" },
      colorless: { bgColor: "#C8C8C8", textColor: "#ffffff" },
      darkness: { bgColor: "#482663", textColor: "#ffffff" },
      dragon: { bgColor: "#11af9d", textColor: "#ffffff" },
      metal: { bgColor: "#18151d", textColor: "#ffffff" },
      fairy: { bgColor: "#f752d6", textColor: "#ffffff" },
    },
  },
};

export const MaterialTheme = createMuiTheme(rawMaterialTheme);

export function createPokemoonTheme(options: ThemeOptions) {
  return createMuiTheme({ ...MaterialTheme, ...options });
}
