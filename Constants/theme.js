import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
      
    // Primary
    primary1: '#000000',
    primary2: '#f2f1ef',
    text: '#3C2A21',
    white: '#FFFFFF',
    black: "#000",
    red:'#5b0001',



     // Grey
     grey: 'rgba(160, 161, 180, 1)',
     grey80: 'rgba(160, 161, 180, 0.8)',
     grey60: 'rgba(160, 161, 180, 0.6)',
     grey20: 'rgba(160, 161, 180, 0.2)',
     grey08: 'rgba(160, 161, 180, 0.08)',
     gray: "#898B9A",
     gray2: "#BBBDC1",
     gray3: '#FAFAFA',
 
     // Light Grey
     lightGrey: 'rgba(247, 247, 247, 1)',
     lightGrey80: 'rgba(247, 247, 247, 0.8)',
     lightGrey60: 'rgba(247, 247, 247, 0.6)',
     lightGrey20: 'rgba(247, 247, 247, 0.2)',
     lightGrey08: 'rgba(247, 247, 247, 0.08)',
 
     // Light
     light: 'rgba(255, 255, 255, 1)',
     light80: 'rgba(255, 255, 255, 0.8)',
     light60: 'rgba(255, 255, 255, 0.6)',
     light20: 'rgba(255, 255, 255, 0.2)',
     light08: 'rgba(255, 255, 255, 0.08)',

}

export const SIZES = {
    // global sizes
    base: 5,
    font: 14,
    radius: 18,
    padding: 50,
    padding_1:24,
    margin: 33,
    base_1: 6,
    font_1: 14,
    radius_1: 12,
    radius2_1:30,
    padding_11: 24,
    padding2_1:40,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 20,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 12,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: {fontSize: SIZES.largeTitle },
    h1: { fontSize: SIZES.h1, lineHeight: 36 },
    h2: {fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;