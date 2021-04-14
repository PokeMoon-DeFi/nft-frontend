import { DefaultTheme } from "styled-components";
declare module "styled-components" {
    interface DefaultTheme {
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
export declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, DefaultTheme>;
declare const Theme: DefaultTheme;
export default Theme;
