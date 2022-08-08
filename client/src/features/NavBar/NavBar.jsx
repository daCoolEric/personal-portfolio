import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";

const pages = [
  { name: "About", changeColorName: "about", link: "/about" },
  { name: "Works", changeColorName: "work", link: "/works" },
  { name: "Blog", changeColorName: "blog", link: "/blog" },
  { name: "Contact", changeColorName: "contact", link: "/contact" },
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

  const navBarStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      fontSize: "17px",
      fontWeight: "600",
      color: isActive ? "#f0860c" : "#454",
    };
  };

  const navBarDesktopStyles = ({ isActive }) => {
    return {
      display: "block",
      fontWeight: "700",
      textDecoration: "none",
      color: isActive ? "#f0860c" : "#454",
      marginRight: "15px",
      marginLeft: "15px",
    };
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
                    height: "40vh",
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
                <div
                  style={{
                    //outline: "2px solid green",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  <NavLink to="/" style={navBarStyles}>
                    Home{" "}
                  </NavLink>{" "}
                </div>
                <div
                  style={{
                    //outline: "2px solid green",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  <NavLink to="/about" style={navBarStyles}>
                    About{" "}
                  </NavLink>{" "}
                </div>
                <div
                  style={{
                    //outline: "2px solid green",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  <NavLink to="/works" style={navBarStyles}>
                    Works{" "}
                  </NavLink>{" "}
                </div>
                <div
                  style={{
                    //outline: "2px solid green",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  <NavLink to="/blog" style={navBarStyles}>
                    Blog{" "}
                  </NavLink>{" "}
                </div>
                <div
                  style={{
                    //outline: "2px solid green",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {" "}
                  <NavLink to="/contact" color="black" style={navBarStyles}>
                    Contact{" "}
                  </NavLink>{" "}
                </div>
              </Menu>
            </Box>
            {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

            {/* Desktop */}
            <div
              style={{
                //outline: "2px solid red",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "30%",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <NavLink to="/" style={navBarDesktopStyles}>
                  {/* <Button
                  sx={{
                    my: 2,
                    display: "block",
                    fontWeight: "700",
                    textDecoration: "none",
                    display: { xs: "none", md: "flex" },
                  }}
                > */}
                  Home
                  {/* </Button> */}
                </NavLink>
              </Box>
            </div>
            <div>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <NavLink to={page.link} style={navBarDesktopStyles}>
                    {/* <Button
                      key={page.name}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        fontWeight: "700",
                      }}
                    > */}
                    {page.name}
                    {/* </Button> */}
                  </NavLink>
                ))}
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
