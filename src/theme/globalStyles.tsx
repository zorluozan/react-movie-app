import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
        },
        html: {
          boxSizing: "border-box",
        },
        body: {
          backgroundColor: "#121829",
        },
        ul: {
          margin: 0,
          padding: 0,
          listStyleType: "none",
        },
      }}
    />
  );

  return inputGlobalStyles;
}
