import React from "react";
import { useParams } from "react-router-dom";
import WorkSingle from "./WorkDetail/WorkSingle";

function WorkDetail() {
  const { name } = useParams();
  const checkList = [
    { id: "0", name: "todo-app" },
    { id: "1", name: "product-page" },
    { id: "2", name: "weather-app" },
    { id: "3", name: "movie-app" },
    { id: "4", name: "calculator" },
    { id: "5", name: "graphic-design" },
  ];
  return (
    <>
      {name === "todo-app" ? (
        <WorkSingle
          specificWorkId={checkList[0].id}
          specificWorkName={checkList[0].name}
        />
      ) : name === "product-page" ? (
        <WorkSingle
          specificWorkId={checkList[1].id}
          specificWorkName={checkList[1].name}
        />
      ) : name === "weather-app" ? (
        <WorkSingle
          specificWorkId={checkList[2].id}
          specificWorkName={checkList[2].name}
        />
      ) : name === "movie-app" ? (
        <WorkSingle
          specificWorkId={checkList[3].id}
          specificWorkName={checkList[3].name}
        />
      ) : name === "calculator" ? (
        <WorkSingle
          specificWorkId={checkList[4].id}
          specificWorkName={checkList[4].name}
        />
      ) : name === "graphic-design" ? (
        <WorkSingle
          specificWorkId={checkList[5].id}
          specificWorkName={checkList[5].name}
        />
      ) : null}
    </>
  );
}

export default WorkDetail;
