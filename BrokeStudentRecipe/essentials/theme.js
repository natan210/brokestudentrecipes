import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { useFonts } from "expo-font";

export const COLORS = {
    white: "#fff",
    white2: '#F9F9F9',
    green: '#007043',
    black: "#020202",
    blue: "#4096FE",
    gray: "#777777",
    gray2: '#F8F8F8',
    lightGray: "#F5F6FB",
    lightGray2: '#757575',
    yellow: "#E1AD01",
    salmon: "#E2725B"
};

export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    h1: 28,
    h2: 24,
    h3: 16,
    h4: 12,
    body1: 20,
    body2: 18,
    body3: 16,
    body4: 14,
    body5: 12,

    width,
    height
};

export const FONTS = {
    h1: { fontFamily: "Roboto-Regular", fontSize: SIZES.h1},
    h2: { fontFamily: "Roboto-Regular", fontSize: SIZES.h2},
    h3: { fontFamily: "Roboto-Regular", fontSize: SIZES.h3},
    h4: { fontFamily: "Roboto-Regular", fontSize: SIZES.h4},
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1},
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2},
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3},
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4},
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5},
};

const theme = { COLORS, SIZES, FONTS };

export default theme;