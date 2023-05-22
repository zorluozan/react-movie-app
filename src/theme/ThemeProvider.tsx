import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";
import GlobalStyles from "./globalStyles";
import componentsOverride from "./overrides";
import typography from "./typography";

type Props = { children: React.ReactNode };

export default function ThemeProvider({ children }: Props) {
  const themeOptions = {
    typography,
    // palette: {
    //   primary: {
    //     main: "#0052cc",
    //   },
    //   secondary: {
    //     main: "#edf2ff",
    //   },
    // },
  };

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MuiThemeProvider>
  );
}
