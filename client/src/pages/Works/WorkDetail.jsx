import React from "react";
import { useParams } from "react-router-dom";
import WorkSingle from "./WorkDetail/WorkSingle";
import WorkDetailData from "./WorkDetail/WorkDetail.json";

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
          specificWorkColor={WorkDetailData[0].color}
        />
      ) : name === "product-page" ? (
        <WorkSingle
          specificWorkId={checkList[1].id}
          specificWorkName={checkList[1].name}
          specificWorkColor={WorkDetailData[1].color}
        />
      ) : name === "weather-app" ? (
        <WorkSingle
          specificWorkId={checkList[2].id}
          specificWorkName={checkList[2].name}
          specificWorkColor={WorkDetailData[2].color}
        />
      ) : name === "movie-app" ? (
        <WorkSingle
          specificWorkId={checkList[3].id}
          specificWorkName={checkList[3].name}
          specificWorkColor={WorkDetailData[3].color}
        />
      ) : name === "calculator" ? (
        <WorkSingle
          specificWorkId={checkList[4].id}
          specificWorkName={checkList[4].name}
          specificWorkColor={WorkDetailData[4].color}
        />
      ) : name === "graphic-design" ? (
        <WorkSingle
          specificWorkId={checkList[5].id}
          specificWorkName={checkList[5].name}
          specificWorkColor={WorkDetailData[5].color}
        />
      ) : null}
    </>
  );
}

export default WorkDetail;
