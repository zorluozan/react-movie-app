export type ColorSchema = "primary";

declare module "@mui/material/styles/createPalette" {
  //   interface TypeBackground {
  //     neutral: string;
  //   }
  interface SimplePaletteColorOptions {
    link: string;
    title: string;
    text: string;
    inputColor: string;
  }
  interface PaletteColor {
    // lighter: string;
    // darker: string;
    link: string;
    title: string;
    text: string;
    inputColor: string;
  }
}

const PRIMARY = {
  main: "#121829",
  link: "#A8AEBF",
  title: "#EBEEF5",
  text: "#8E95A9",
  inputColor: "#475069",
};

export default function palette() {
  return { primary: PRIMARY };
}
