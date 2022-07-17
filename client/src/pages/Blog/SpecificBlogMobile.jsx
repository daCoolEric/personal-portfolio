import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function SpecificBlogMobile() {
  return (
    <>
      <Box
        sx={{
          // outline: "2px solid blue",
          width: "100%",
          height: "370px",
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
      </Box>
    </>
  );
}

export default SpecificBlogMobile;
