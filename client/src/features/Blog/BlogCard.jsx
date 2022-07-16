import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function BlogCard() {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          // outline: "2px solid blue",
          width: "80%",
          height: "270px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "25px 25px",
        }}
      >
        <Box>Title</Box>
        <Box>12 Feb 2020 | Design, Pattern</Box>
        <Box
          sx={{
            // outline: "2px solid red",
            height: "65%",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          aliquid magnam laboriosam vitae ut, rerum expedita suscipit nisi
          reprehenderit eveniet est fuga voluptas repellat assumenda, culpa et
          sequi exercitationem qui.
        </Box>
        <Box
          sx={{
            color: "#00A8CC",
            cursor: "pointer",
            xs: { marginTop: "10px" },
            md: { marginTop: "0px" },
          }}
        >
          Read more...
        </Box>
      </Paper>
    </>
  );
}

export default BlogCard;
