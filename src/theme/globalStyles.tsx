import { GlobalStyles as MUIGlobalStyles } from "@mui/material";
import palette from "./palette";

export default function GlobalStyles() {
  const themeColor = palette();

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
          backgroundColor: themeColor.primary["main"],
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
