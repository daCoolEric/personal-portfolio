import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const pages = [
  { name: "About", link: "/about" },
  { name: "Works", link: "/works" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          //outline: "2px solid red",
          boxSizing: "border-box",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              //outline: "2px solid green",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              {/* menu-logic */}

              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 0 }}
                aria-controls={open ? "menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                id="menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    width: "300px",
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              >
                <MenuItem>
                  {" "}
                  <Link
                    href="/"
                    color="black"
                    underline="none"
                    sx={{
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Home{" "}
                  </Link>{" "}
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    href="/about"
                    color="black"
                    underline="none"
                    sx={{
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    About{" "}
                  </Link>{" "}
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    href="/works"
                    color="black"
                    underline="none"
                    sx={{
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Works{" "}
                  </Link>{" "}
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    href="/blog"
                    color="black"
                    underline="none"
                    sx={{
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Blog{" "}
                  </Link>{" "}
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link
                    href="/contact"
                    color="black"
                    underline="none"
                    sx={{
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Contact{" "}
                  </Link>{" "}
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                //outline: "2px solid red",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "30%",
              }}
            >
              <Link href="/" underline="none">
                <Button
                  sx={{
                    my: 2,

                    color: "#FF6464",
                    display: "block",
                    fontWeight: "700",
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  Home
                </Button>
              </Link>
            </Box>
            <Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link href={page.link} underline="none">
                    <Button
                      key={page.name}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        fontWeight: "700",
                      }}
                    >
                      {page.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
