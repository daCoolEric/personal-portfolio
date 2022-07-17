import { Container, Box } from "@mui/material";
import React from "react";
import Todo from "../../images/todoApp.png";

function WorkDetail() {
  return (
    <>
      <Box sx={{ paddingTop: "80px" }}>
        <Box id="mobile" sx={{ display: { xs: "flex", md: "none" } }}>
          <Container maxWidth="md">
            <Box
              sx={{ marginBottom: "25px", width: "100%", textAlign: "center" }}
            >
              Title
            </Box>
            <Box
              sx={{
                //outline: "2px solid red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "326.2px",
                }}
              >
                <img
                  src={Todo}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  //outline: "2px solid red",
                  width: "95%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    //outline: "2px solid red",
                    display: "flex",
                    flexDirection: "row",
                    width: "147.6px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      // outline: "2px solid red",
                      backgroundColor: "#000",
                      color: "#fff",
                      width: "50px",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "10px",
                    }}
                  >
                    2020
                  </Box>
                  <Box
                    sx={{
                      // outline: "2px solid red",
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    Dashboard
                  </Box>
                </Box>
                <Box
                  sx={{
                    // outline: "2px solid red",
                    height: "90%",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  mollitia nesciunt magni culpa quidem libero corrupti eius quod
                  maxime porro, aliquam rerum voluptatem molestiae delectus
                  corporis, repellat quaerat excepturi nam.
                </Box>
                <Box
                // style={{
                //   outline: "2px solid red",
                // }}
                >
                  <Box
                    sx={{
                      //outline: "2px solid red",
                      color: "#00A8CC",
                      width: "100px",
                      float: "right",
                      cursor: "pointer",
                    }}
                  >
                    See more...
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box id="desktop" sx={{ display: { xs: "none", md: "flex" } }}>
          <Container maxWidth="md">
            <Box sx={{ marginBottom: "25px" }}>Title</Box>
            <Box
              sx={{
                //outline: "2px solid red",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "40%",
                }}
              >
                <img
                  src={Todo}
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  //outline: "2px solid red",
                  width: "58%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    //outline: "2px solid red",
                    display: "flex",
                    flexDirection: "row",
                    width: "30%",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      // outline: "2px solid red",
                      backgroundColor: "#000",
                      color: "#fff",
                      width: "50px",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "10px",
                    }}
                  >
                    2020
                  </Box>
                  <Box
                    sx={{
                      // outline: "2px solid red",
                      display: "flex",
                      justifyContent: "center",
                      width: "70%",
                    }}
                  >
                    Dashboard
                  </Box>
                </Box>
                <Box
                  sx={{
                    // outline: "2px solid red",
                    height: "90%",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  mollitia nesciunt magni culpa quidem libero corrupti eius quod
                  maxime porro, aliquam rerum voluptatem molestiae delectus
                  corporis, repellat quaerat excepturi nam.
                </Box>
                <Box
                // style={{
                //   outline: "2px solid red",
                // }}
                >
                  <Box
                    sx={{
                      // outline: "2px solid red",
                      color: "#00A8CC",
                      width: "20%",
                      float: "right",
                      cursor: "pointer",
                    }}
                  >
                    See more...
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default WorkDetail;
