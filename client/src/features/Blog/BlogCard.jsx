import React from "react";
import Paper from "@mui/material/Paper";

function BlogCard() {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          width: "80%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "25px 25px",
        }}
      >
        <div>Title</div>
        <div>12 Feb 2020 | Design, Pattern</div>
        <div
          style={{
            // outline: "2px solid red",
            height: "65%",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          aliquid magnam laboriosam vitae ut, rerum expedita suscipit nisi
          reprehenderit eveniet est fuga voluptas repellat assumenda, culpa et
          sequi exercitationem qui.
        </div>
        <div style={{ color: "#00A8CC", cursor: "pointer" }}>Read more...</div>
      </Paper>
    </>
  );
}

export default BlogCard;
