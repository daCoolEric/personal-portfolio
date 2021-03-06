import React from "react";
import WorkCard from "./WorkCard";
import WorksStyles from "./Works.module.css";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";

function Works() {
  return (
    <div>
      {/* Mobile View */}
      <Container
        maxWidth="md"
        sx={{
          //outline: "2px solid blue",
          height: "1970px",
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            // outline: "2px solid red",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <Box style={{ color: "#21243D" }}>Featured Works</Box>
          <Box style={{ color: "#00A8CC", cursor: "pointer" }}>View all</Box>
        </Box>
        <Box
          sx={{
            // outline: "2px solid green",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "1855px",
          }}
        >
          <WorkCard />
          <Divider variant="fullwidth" />
          <WorkCard />
          <Divider variant="fullwidth" />
          <WorkCard />
          <Divider variant="fullwidth" />
        </Box>
      </Container>

      {/* Desktop View */}
      <Container
        maxWidth="md"
        sx={{
          //outline: "2px solid blue",
          height: "850px",
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
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box style={{ color: "#21243D" }}>Featured Works</Box>
          <Box style={{ color: "#00A8CC", cursor: "pointer" }}>View all</Box>
        </Box>
        <Box
          sx={{
            //outline: "2px solid green",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            width: "100%",
            height: "800px",
          }}
        >
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </Box>
      </Container>
    </div>
  );
}

export default Works;
