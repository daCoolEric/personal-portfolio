import * as React from "react";

import Divider from "@mui/material/Divider";

import { Container } from "@mui/system";
import WorkComp from "./WorkComp";
import WorkData from "./WorkData.json";

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
      {WorkData.map((work) => {
        return (
          <>
            <WorkComp
              key={work.id}
              id={work.id}
              workName={work.name}
              workTitle={work.title}
              workDesc={work.desc}
              workKeywords={work.keywords}
              workDate={work.date}
              workDateColor={work.color}
            />
            <Divider variant="middle" sx={sx} />
          </>
        );
      })}
    </Container>
  );
}
