import { Theme, Components } from "@mui/material/styles";

export default function Card(theme: Theme): Components {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: "relative",
          boxShadow: "none",
          borderRadius: "12px",
          background: "rgba(32, 40, 62, 0.8)",
          backdropFilter: "blur(40px)",
          padding: "8px",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 0 0 8px",
        },
      },
    },
  };
}
