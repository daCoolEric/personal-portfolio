import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div
      style={
        {
          //outline: "2px solid red",
        }
      }
    >
      {/* Mobile View */}
      <Box
        sx={{
          //outline: "2px solid green",
          height: "90%",
          width: "100%",
          backgroundColor: "#EDF7FA",
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
          paddingBottom: "20px",
        }}
      >
        <Box
          sx={{
            //outline: "2px solid brown",
            display: "flex",
            flexDirection: "row",
            justifyContent: " space-between",
            width: "80%",
            paddingBottom: "20px",
            paddingTop: "20px",
          }}
        >
          <Box sx={{ color: "#21243D" }}>Recent posts</Box>
          <Box sx={{ color: "#00A8CC", cursor: "pointer" }}>View all</Box>
        </Box>

        <Box
          sx={{
            //outline: "2px solid red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              //outline: "2px solid blue",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              height: "600px",
            }}
          >
            <Box
              sx={{
                //outline: "2px solid red",
                display: "flex",
                justifyContent: "center",
                width: "400px",
                height: "300px",
              }}
            >
              <BlogCard />
            </Box>
            <Box
              sx={{
                //outline: "2px solid blue",
                display: "flex",
                justifyContent: "center",
                width: "400px",
              }}
            >
              <BlogCard />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        id="blogContainer"
        sx={{
          //outline: "2px solid pink",
          backgroundColor: "#EDF7FA",
          display: { xs: "none", md: "flex" },
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "15px",
          paddingBottom: "25px",
        }}
      >
        {/* <Box
          id="innerContainer"
          sx={{
            outline: "2px solid yellow",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}

        {/* Desktop View */}

        <Container
          maxWidth="md"
          sx={{
            //outline: "2px solid red",
            width: "100vw",
            height: "100%",
            backgroundColor: "#EDF7FA",

            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              //outline: "2px solid red",
              display: "flex",
              flexDirection: "row",
              justifyContent: " space-between",
              width: "100%",
              paddingBottom: "20px",
            }}
          >
            <Box sx={{ color: "#21243D" }}>Recent posts</Box>
            <Box sx={{ color: "#00A8CC", cursor: "pointer" }}>View all</Box>
          </Box>

          <Box
            sx={{
              //outline: "2px solid red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                //outline: "2px solid blue",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                // maxHeight: "550px",
              }}
            >
              <Box
                sx={{
                  //outline: "2px solid blue",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <BlogCard />
              </Box>
              <Box
                sx={{
                  //outline: "2px solid blue",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <BlogCard />
              </Box>
            </Box>
          </Box>
        </Container>
        {/* </Box> */}
      </Box>
    </div>
  );
}

export default Blog;
