import React from "react";
import { Box, Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Todo from "../../images/todoApp.png";
import MovieApp from "../../images/movieApp.png";
import ProductPage from "../../images/productPage.png";
import WeatherApp from "../../images/weatherApp.png";
import Link from "@mui/material/Link";

function WorkCard(props) {
  const color = props.workDateColor;

  return (
    <>
      {/* Mobile View */}

      <Container
        maxWidth="sm"
        sx={{
          //outline: "2px solid blue",
          height: "600px",
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            //outline: "2px solid red",
            width: "360px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img
              src={
                props.id === "1"
                  ? Todo
                  : props.id === "2"
                  ? ProductPage
                  : props.id === "3"
                  ? WeatherApp
                  : props.id === "4"
                  ? MovieApp
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
              //outline: "2px solid blue",
              width: "100%",
              display: "flex",
              height: "300px",
              flexDirection: "column",
              justifyContent: "space-evenly",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            <Box
              sx={{
                fontWeight: "600",
                fontSize: "20px",
                color: { color },
              }}
            >
              {props.workTitle}
            </Box>

            <Box
              sx={{
                //outline: "2px solid red",
                display: "flex",
                flexDirection: "row",
                width: "95%",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              {props.id === "1" ? (
                <Box
                  sx={{
                    //outline: "2px solid red",
                    backgroundColor: "primary.todo",
                    color: "#fff",
                    width: "50px",
                    height: "25px",
                    display: "flex",
                    justifyContent: "center",

                    borderRadius: "10px",
                  }}
                >
                  {props.workDate}
                </Box>
              ) : props.id === "2" ? (
                <Box
                  sx={{
                    //outline: "2px solid red",
                    backgroundColor: "primary.product",
                    color: "#fff",
                    width: "50px",
                    height: "25px",
                    display: "flex",
                    justifyContent: "center",

                    borderRadius: "10px",
                  }}
                >
                  {props.workDate}
                </Box>
              ) : props.id === "3" ? (
                <Box
                  sx={{
                    //outline: "2px solid red",
                    backgroundColor: "primary.weather",
                    color: "#fff",
                    width: "50px",
                    height: "25px",
                    display: "flex",
                    justifyContent: "center",

                    borderRadius: "10px",
                  }}
                >
                  {props.workDate}
                </Box>
              ) : null}

              <Box
                sx={{
                  //outline: "2px solid red",
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "80%",
                }}
              >
                <i>{props.workKeywords}</i>
              </Box>
            </Box>
            <Box
              sx={{
                //outline: "2px solid red",
                height: "65%",
                width: "100%",
              }}
            >
              {props.workDesc}
            </Box>
            <Box
            // style={{
            //   outline: "2px solid red",
            // }}
            >
              <Link href={`/works/${props.workName}`} underline="none">
                <Box
                  sx={{
                    // outline: "2px solid red",
                    color: "#00A8CC",
                    width: "35%",
                    float: "right",
                    cursor: "pointer",
                    paddingBottom: "10px",
                  }}
                >
                  Read more
                </Box>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>

      {/* Desktop View */}
      <Container
        maxWidth="md"
        sx={{
          //outline: "2px solid blue",

          display: { xs: "none", md: "flex" },
        }}
      >
        <Paper
          elevation={5}
          sx={{
            width: "100%",
            height: "246px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img
              src={
                props.id === "1"
                  ? Todo
                  : props.id === "2"
                  ? ProductPage
                  : props.id === "3"
                  ? WeatherApp
                  : props.id === "4"
                  ? MovieApp
                  : null
              }
              alt=""
              style={{
                width: "246px",
              }}
            />
          </Box>

          <Box
            sx={{
              //outline: "2px solid red",
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              paddingLeft: "10px",
            }}
          >
            <Box
              sx={{
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              {props.workTitle}
            </Box>
            <Box
              sx={{
                //outline: "2px solid red",
                display: "flex",
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  //outline: "2px solid red",
                  backgroundColor: "#000",
                  color: "#fff",
                  width: "50px",
                  display: "flex",
                  justifyContent: "center",

                  borderRadius: "10px",
                }}
              >
                {props.workDate}
              </Box>
              <Box
                sx={{
                  //outline: "2px solid green",
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingLeft: "10px",
                  width: "95%",
                }}
              >
                <i>{props.workKeywords}</i>
              </Box>
            </Box>
            <Box
              sx={{
                // outline: "2px solid red",
                height: "55%",
                width: "100%",
              }}
            >
              {props.workDesc}
            </Box>
            <Box
            // style={{
            //   outline: "2px solid red",
            // }}
            >
              <Link href={`/works/${props.workName}`} underline="none">
                <Box
                  sx={{
                    // outline: "2px solid red",
                    color: "#00A8CC",
                    width: "20%",
                    float: "right",
                    cursor: "pointer",
                  }}
                >
                  Read more
                </Box>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default WorkCard;
