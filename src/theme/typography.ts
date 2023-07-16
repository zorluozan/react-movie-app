export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
  xl,
}: {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:768px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:992px)": {
      fontSize: pxToRem(lg),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(xl),
    },
  };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = "Poppins, sans-serif";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700,
  //   h1: {
  //     fontWeight: 800,
  //     lineHeight: 80 / 64,
  //     fontSize: pxToRem(40),
  //     ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  //   },
  //   subtitle1: {
  //     fontWeight: 600,
  //     lineHeight: 1.5,
  //     fontSize: pxToRem(16),
  //   },
  //   subtitle2: {
  //     fontWeight: 600,
  //     lineHeight: 22 / 14,
  //     fontSize: pxToRem(14),
  //   },
  body1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
  //   body2: {
  //     lineHeight: 22 / 14,
  //     fontSize: pxToRem(14),
  //   },
} as const;

export default typography;
