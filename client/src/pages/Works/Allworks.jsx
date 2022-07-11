import * as React from "react";

import Divider from "@mui/material/Divider";

import { Container } from "@mui/system";
import WorkComp from "./WorkComp";

export default function MiddleDividers() {
  const sx = { marginTop: "15px", marginBottom: "15px" };
  return (
    <Container
      maxWidth="md"
      sx={{
        // outline: "2px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <WorkComp />
      <Divider variant="middle" sx={sx} />
      <WorkComp />
      <Divider variant="middle" sx={sx} />
      <WorkComp />
      <Divider variant="middle" sx={sx} />
      <WorkComp />
    </Container>
  );
}
