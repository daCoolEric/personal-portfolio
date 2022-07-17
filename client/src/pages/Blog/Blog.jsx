import { Divider, Box, Container } from "@mui/material";
import React from "react";
import BlogCard from "../../features/Blog/BlogCard";
import BlogCardMobile from "../../features/Blog/BlogCardMobile";

function Blog() {
  const sx = { margin: "20px 0" };
  return (
    <>
      <Box sx={{ marginTop: "100px" }}>
        <Box sx={{ width: "100%", textAlign: "center", marginBottom: "30px" }}>
          Blogs
        </Box>
        <Box id="mobile" sx={{ display: { xs: "flex", md: "none" } }}>
          <Container
            maxWidth="xs"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BlogCardMobile />
            <Divider sx={sx} />
            <BlogCardMobile />
            <Divider sx={sx} />
            <BlogCardMobile />
            <Divider sx={sx} />
            <BlogCardMobile />
            <Divider sx={sx} />
            <BlogCardMobile />
          </Container>
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
            <BlogCard style={{ width: "100%" }} />
            <Divider sx={sx} />
            <BlogCard />
            <Divider sx={sx} />
            <BlogCard />
            <Divider sx={sx} />
            <BlogCard />
            <Divider sx={sx} />
            <BlogCard />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Blog;
