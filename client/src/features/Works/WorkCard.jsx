import React from "react";
import { Box, Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Todo from "../../images/todoApp.png";

function WorkCard() {
  return (
    <>
      {/* Mobile View */}
      <Container
        maxWidth="md"
        sx={{
          //outline: "2px solid blue",
          height: "600px",
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            //outline: "2px solid red",
            width: "360px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
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
              //outline: "2px solid blue",
              width: "100%",
              display: "flex",
              height: "300px",
              flexDirection: "column",
              justifyContent: "space-evenly",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            <Box>Title</Box>
            <Box
              sx={{
                // outline: "2px solid red",
                display: "flex",
                flexDirection: "row",
                width: "45%",
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
                //outline: "2px solid red",
                height: "65%",
                width: "90%",
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
                  width: "35%",
                  float: "right",
                  cursor: "pointer",
                  paddingBottom: "10px",
                }}
              >
                Read more
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Desktop View */}
      <Paper
        elevation={5}
        sx={{
          width: "100%",
          height: "246px",
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img
            src={Todo}
            alt=""
            style={{
              width: "246px",
            }}
          />
        </Box>

        <Box
          sx={{
            // outline: "2px solid red",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Box>Title</Box>
          <Box
            sx={{
              // outline: "2px solid red",
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
              height: "55%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            mollitia nesciunt magni culpa quidem libero corrupti eius quod
            maxime porro, aliquam rerum voluptatem molestiae delectus corporis,
            repellat quaerat excepturi nam.
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
              Read more
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default WorkCard;
