import React from "react";
import Header from "../../features/Header/Header";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AboutInfo from "./About.json";
import profilePic from "../../images/eric-420px.png";
import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";

function AboutMUI() {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          //outline: "2px solid blue",
          display: "flex",
          justifyContent: "center",
          paddingTop: "80px",
          paddingBottom: "10px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        {/* Desktop view */}
        <Box
          display={{ xs: "none", md: "flex" }}
          flexDirection="row"
          justifyContent="space-between"
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
                {AboutInfo[0].intro}
              </Typography>
            </Box>
            <Box sx={{ color: "#555" }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 20,
                  my: 2,
                  letterSpacing: 0.5,
                  //color: "#222",
                }}
              >
                {AboutInfo[0].body.paragraph1}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 20,
                  my: 2,
                  letterSpacing: 0.5,
                  //color: "#222",
                }}
              >
                {AboutInfo[0].body.paragraph2}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 20,
                  my: 2,
                  letterSpacing: 0.5,
                  //color: "#222",
                }}
              >
                {AboutInfo[0].body.paragraph3}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 20,
                  my: 2,
                  letterSpacing: 0.5,
                  //color: "#222",
                }}
              >
                {AboutInfo[0].body.paragraph4}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 20,
                  my: 2,
                  letterSpacing: 0.5,
                  //color: "#222",
                }}
              >
                {AboutInfo[0].body.paragraph5}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: 20,
                  my: 2,
                  letterSpacing: 0.5,
                  //color: "#222",
                }}
              >
                {AboutInfo[0].body.paragraph6}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "400px",
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
                <Link href="/works" color="#fff" underline="none">
                  <b>Check them out</b>
                </Link>
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
                height: "100%",
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
            width: "100%",
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
              width: "95vw",
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
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: 40,
                    fontWeight: 700,
                    my: 2,
                  }}
                >
                  {AboutInfo[0].intro}
                </Typography>
              </Box>
              <Box sx={{ color: "#555" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 20,
                    my: 2,
                    letterSpacing: 0.5,
                    //color: "#222",
                  }}
                >
                  {AboutInfo[0].body.paragraph1}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 20,
                    my: 2,
                    letterSpacing: 0.5,
                    //color: "#222",
                  }}
                >
                  {AboutInfo[0].body.paragraph2}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 20,
                    my: 2,
                    letterSpacing: 0.5,
                    //color: "#222",
                  }}
                >
                  {AboutInfo[0].body.paragraph3}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 20,
                    my: 2,
                    letterSpacing: 0.5,
                    //color: "#222",
                  }}
                >
                  {AboutInfo[0].body.paragraph4}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 20,
                    my: 2,
                    letterSpacing: 0.5,
                    //color: "#222",
                  }}
                >
                  {AboutInfo[0].body.paragraph5}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 20,
                    my: 2,
                    letterSpacing: 0.5,
                    //color: "#222",
                  }}
                >
                  {AboutInfo[0].body.paragraph6}
                </Typography>
              </Box>
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
                  width: "100%",
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
                  <Link href="/works" color="#fff" underline="none">
                    <b>Check them out</b>
                  </Link>
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

export default AboutMUI;
