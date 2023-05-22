import { Theme } from "@mui/material/styles";

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "#A8AEBF",
          fontSize: 16,
          fontWeight: theme.typography.fontWeightRegular,
          letterSpacing: "0.02em",
          marginRight: 20,
        },
      },
    },
  };
}
