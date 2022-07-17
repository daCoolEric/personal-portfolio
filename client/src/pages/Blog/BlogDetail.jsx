import React from "react";
import { Box, Container } from "@mui/material";
import SpecificBlog from "./SpecificBlog";
import SpecificBlogMobile from "./SpecificBlogMobile";

function BlogDetail() {
  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        <Box id="mobile" sx={{ display: { xs: "flex", md: "none" } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <SpecificBlogMobile />
          </Box>
        </Box>
        <Box id="desktop" sx={{ display: { xs: "none", md: "flex" } }}>
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SpecificBlog />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default BlogDetail;
