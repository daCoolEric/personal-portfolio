import React from "react";
import Todo from "../../images/todoApp.png";

function workComp() {
  return (
    <div
      style={{
        // outline: "2px solid red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          src={Todo}
          alt=""
          style={{
            width: "246px",
          }}
        />
      </div>
      <div
        style={{
          // outline: "2px solid red",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>Title</div>
        <div
          style={{
            // outline: "2px solid red",
            display: "flex",
            flexDirection: "row",
            width: "30%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              // outline: "2px solid red",
              backgroundColor: "#000",
              color: "#fff",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            2020
          </div>
          <div
            style={{
              // outline: "2px solid red",
              display: "flex",
              justifyContent: "center",
              width: "70%",
            }}
          >
            Dashboard
          </div>
        </div>
        <div
          style={{
            // outline: "2px solid red",
            height: "55%",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          mollitia nesciunt magni culpa quidem libero corrupti eius quod maxime
          porro, aliquam rerum voluptatem molestiae delectus corporis, repellat
          quaerat excepturi nam.
        </div>
        <div
        // style={{
        //   outline: "2px solid red",
        // }}
        >
          <div
            style={{
              // outline: "2px solid red",
              color: "#00A8CC",
              width: "20%",
              float: "right",
              cursor: "pointer",
            }}
          >
            Read more...
          </div>
        </div>
      </div>
    </div>
  );
}

export default workComp;
