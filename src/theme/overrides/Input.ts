import { Theme } from "@mui/material/styles";

export default function Input(theme: Theme) {
  return {
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: "#475069",
          padding: "10px",
          "&::before": {
            borderBottom: "none",
          },
        },
      },
    },
  };
}
