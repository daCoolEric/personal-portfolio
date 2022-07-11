import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <>
      <Box
        id="blogContainer"
        sx={{
          //outline: "2px solid blue",
          backgroundColor: "#EDF7FA",
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
          paddingBottom: "80px",
        }}
      >
        <Box
          id="innerContainer"
          sx={{
            // outline: "2px solid yellow",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Mobile View */}
          <Container
            maxWidth="md"
            sx={{
              //outline: "2px solid green",
              height: "100%",
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                //outline: "2px solid brown",
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
                  // outline: "2px solid blue",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "550px",
                }}
              >
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
          </Container>

          {/* Desktop View */}
          <Container
            maxWidth="md"
            sx={{
              //outline: "2px solid red",
              height: "100%",
              display: { xs: "none", md: "flex" },
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
        </Box>
      </Box>
    </>
  );
}

export default Blog;
