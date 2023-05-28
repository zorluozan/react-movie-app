import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Toolbar, Link, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const pages = ["Movies", "TV Shows"];

function Header() {
  return (
    <Container disableGutters>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            padding: "20px 0",
          }}
        >
          <Link to="/" component={RouterLink}>
            <img src="../assets/logo.png" alt="Logo" loading="lazy" />
          </Link>
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Link to={page} component={RouterLink} key={page}>
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Container>
  );
}
export default Header;
