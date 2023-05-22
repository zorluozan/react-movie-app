import { Theme } from "@mui/material/styles";
import Link from "./Link";
import Input from "./Input";
import Typography from "./Typography";
import Card from "./Card";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Link(theme),
    Input(theme),
    Typography(theme),
    Card(theme)
  );
}
