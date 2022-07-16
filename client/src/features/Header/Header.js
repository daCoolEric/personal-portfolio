import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HeaderInfo from "./Header.json";
import profilePic from "../../images/eric-420px.png";
import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          //outline: "2px solid blue",
          display: "flex",
          justifyContent: "center",
          paddingTop: "70px",
          paddingBottom: "10px",
        }}
      >
        {/* Desktop view */}
        <Box
          display={{ xs: "none", md: "flex" }}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={
            {
              //outline: "2px solid red",
            }
          }
        >
          <Box id="infoConatainer">
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: 40,
                  fontWeight: 700,
                  my: 2,
                }}
              >
                {HeaderInfo[0].intro}
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: 40,
                  fontWeight: 700,
                }}
              >
                {HeaderInfo[0].role}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 20,
                  my: 2,
                  letterSpacing: 0.5,
                  //color: "#222",
                }}
              >
                {HeaderInfo[0].body}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "300px",
              }}
            >
              <Button
                sx={{
                  color: "#FFF",
                  backgroundColor: "#FF6464",
                  ":hover": {
                    color: "#FFF",
                    backgroundColor: "#fcacac",
                  },
                }}
              >
                <b>Learn More</b>
              </Button>
              <Button
                sx={{
                  color: "#FFF",
                  backgroundColor: "#02ba5e",
                  ":hover": {
                    color: "#FFF",
                    backgroundColor: "#56f5a5",
                  },
                }}
              >
                <b>Download Resume</b>
              </Button>
            </Box>
          </Box>

          <Box id="imageContiner">
            <Box
              sx={{
                //outline: "2px solid yellow",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                width: "200px",
              }}
            >
              <Box>
                <img src={profilePic} alt="" style={{ width: "200px" }} />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Mobile view */}
        <Box
          display={{ xs: "flex", md: "none" }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            //outline: "2px solid blue",
            height: "100%",
          }}
        >
          <Box id="imageContainer">
            <Box
              sx={{
                // outline: "2px solid yellow",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <img src={profilePic} alt="" style={{ width: "200px" }} />
              </Box>
            </Box>
          </Box>
          <Box
            id="infoContainer"
            sx={{
              //outline: "2px solid yellow",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexGrow: "1",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: 30,
                  fontWeight: 700,
                  my: 2,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {HeaderInfo[0].intro}
              </Typography>
              <Box
                sx={{
                  //outline: "2px solid green",
                  display: "flex",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    //outline: "2px solid red",
                    width: "80%",
                    fontSize: 30,
                    fontWeight: 700,
                    margin: "0 auto",
                    marginBottom: "10px",
                    flexShrink: 2,
                  }}
                >
                  {HeaderInfo[0].role}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                // outline: "2px solid blue",
                display: "flex",
                marginBottom: "10px",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  //outline: "2px solid red",
                  width: "80%",
                  fontSize: 20,
                  my: 2,
                  letterSpacing: 0.5,
                  margin: "0 auto",
                  //color: "#222",
                }}
              >
                {HeaderInfo[0].body}
              </Typography>
            </Box>
            <Box
              sx={{
                // outline: "2px solid red",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  // outline: "2px solid red",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  sx={{
                    color: "#FFF",
                    marginBottom: "10px",
                    backgroundColor: "#FF6464",
                    ":hover": {
                      color: "#FFF",
                      backgroundColor: "#fcacac",
                    },
                  }}
                >
                  <b>Learn More</b>
                </Button>
                <Button
                  sx={{
                    color: "#FFF",
                    marginBottom: "10px",
                    backgroundColor: "#02ba5e",
                    ":hover": {
                      color: "#FFF",
                      backgroundColor: "#56f5a5",
                    },
                  }}
                >
                  <b>Download Resume</b>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Header;
