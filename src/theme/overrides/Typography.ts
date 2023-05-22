import { Theme } from "@mui/material/styles";

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      //   styleOverrides: {
      //     paragraph: {
      //       marginBottom: theme.spacing(2),
      //     },
      //     gutterBottom: {
      //       marginBottom: theme.spacing(1),
      //     },
      //   },
      variants: [
        {
          props: {
            variant: "h1",
          },
          style: {
            fontSize: 64,
            fontWeight: theme.typography.fontWeightBold,
            color: "#EBEEF5",
            marginBottom: 16,
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 16,
            fontWeight: theme.typography.fontWeightRegular,
            color: "#8E95A9",
            lineHeight: "24px",
          },
        },
      ],
    },
  };
}
