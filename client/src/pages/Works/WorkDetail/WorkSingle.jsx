import { Container, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Todo from "../../../images/todoApp.png";
import MovieApp from "../../../images/movieApp.png";
import ProductPage from "../../../images/productPage.png";
import WeatherApp from "../../../images/weatherApp.png";
import Calc from "../../../images/calc.png";
import Graphic from "../../../images/graphic.png";
import WorkDetailData from "./WorkDetail.json";

function WorkSingle(props) {
  const color = props.specificWorkColor;
  // const { name } = useParams();
  return (
    <>
      <Box sx={{ paddingTop: "80px" }}>
        <Box id="mobile" sx={{ display: { xs: "flex", md: "none" } }}>
          <Container maxWidth="md">
            <Box
              sx={{
                marginBottom: "25px",
                width: "100%",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "25px",
                color: { color },
              }}
            >
              {WorkDetailData[props.specificWorkId].title}
            </Box>
            <Box
              sx={{
                //outline: "2px solid red",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "326.2px",
                }}
              >
                <img
                  src={
                    props.specificWorkName === "todo-app"
                      ? Todo
                      : props.specificWorkName === "product-page"
                      ? ProductPage
                      : props.specificWorkName === "weather-app"
                      ? WeatherApp
                      : props.specificWorkName === "movie-app"
                      ? MovieApp
                      : props.specificWorkName === "calculator"
                      ? Calc
                      : props.specificWorkName === "graphic-design"
                      ? Graphic
                      : null
                  }
                  alt="images"
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  //outline: "2px solid red",
                  width: "95%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    //outline: "2px solid red",
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  {props.specificWorkId === "0" ? (
                    <Box
                      sx={{
                        // outline: "2px solid red",
                        backgroundColor: "primary.todo",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "1" ? (
                    <Box
                      sx={{
                        // outline: "2px solid red",
                        backgroundColor: "primary.product",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "2" ? (
                    <Box
                      sx={{
                        // outline: "2px solid red",
                        backgroundColor: "primary.weather",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "3" ? (
                    <Box
                      sx={{
                        // outline: "2px solid red",
                        backgroundColor: "primary.movie",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "4" ? (
                    <Box
                      sx={{
                        // outline: "2px solid red",
                        backgroundColor: "primary.calc",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "5" ? (
                    <Box
                      sx={{
                        // outline: "2px solid red",
                        backgroundColor: "primary.graphic",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : null}

                  <Box
                    sx={{
                      //outline: "2px solid red",
                      display: "flex",
                      justifyContent: "flex-start",
                      width: "95%",
                      paddingLeft: "10px",
                    }}
                  >
                    <i>{WorkDetailData[props.specificWorkId].keyword}</i>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // outline: "2px solid red",
                    height: "90%",
                  }}
                >
                  {WorkDetailData[props.specificWorkId].desc}
                </Box>
                <Box
                // style={{
                //   outline: "2px solid red",
                // }}
                >
                  <Link to="/works" underline="none">
                    <Box
                      sx={{
                        //outline: "2px solid red",
                        color: "#00A8CC",
                        width: "100px",
                        float: "right",
                        cursor: "pointer",
                      }}
                    >
                      See more
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        {/* Desktop */}
        <Box id="desktop" sx={{ display: { xs: "none", md: "flex" } }}>
          <Container maxWidth="md">
            <Box
              sx={{
                marginBottom: "25px",
                fontWeight: "600",
                fontSize: "25px",
                color: { color },
              }}
            >
              {WorkDetailData[props.specificWorkId].title}
            </Box>
            <Box
              sx={{
                //outline: "2px solid red",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "40%",
                }}
              >
                <img
                  src={
                    props.specificWorkName === "todo-app"
                      ? Todo
                      : props.specificWorkName === "product-page"
                      ? ProductPage
                      : props.specificWorkName === "weather-app"
                      ? WeatherApp
                      : props.specificWorkName === "movie-app"
                      ? MovieApp
                      : props.specificWorkName === "calculator"
                      ? Calc
                      : props.specificWorkName === "graphic-design"
                      ? Graphic
                      : null
                  }
                  alt=""
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  //outline: "2px solid red",
                  width: "58%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    //outline: "2px solid red",
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {props.specificWorkId === "0" ? (
                    <Box
                      sx={{
                        //outline: "2px solid red",
                        backgroundColor: "primary.todo",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "1" ? (
                    <Box
                      sx={{
                        //outline: "2px solid red",
                        backgroundColor: "primary.product",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "2" ? (
                    <Box
                      sx={{
                        //outline: "2px solid red",
                        backgroundColor: "primary.weather",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "3" ? (
                    <Box
                      sx={{
                        //outline: "2px solid red",
                        backgroundColor: "primary.movie",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "4" ? (
                    <Box
                      sx={{
                        //outline: "2px solid red",
                        backgroundColor: "primary.calc",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : props.specificWorkId === "5" ? (
                    <Box
                      sx={{
                        //outline: "2px solid red",
                        backgroundColor: "primary.graphic",
                        color: "#fff",
                        width: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      {WorkDetailData[props.specificWorkId].date}
                    </Box>
                  ) : null}

                  <Box
                    sx={{
                      // outline: "2px solid red",
                      display: "flex",
                      justifyContent: "flex-start",
                      width: "88%",
                      marginBottom: "10px",
                    }}
                  >
                    <i>{WorkDetailData[props.specificWorkId].keyword}</i>
                  </Box>
                </Box>
                <Box
                  sx={{
                    // outline: "2px solid red",
                    height: "90%",
                  }}
                >
                  {WorkDetailData[props.specificWorkId].desc}
                </Box>
                <Box
                // style={{
                //   outline: "2px solid red",
                // }}
                >
                  <Link to="/works" underline="none">
                    <Box
                      sx={{
                        // outline: "2px solid red",
                        color: "#00A8CC",
                        width: "20%",
                        float: "right",
                        cursor: "pointer",
                      }}
                    >
                      See more...
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default WorkSingle;
