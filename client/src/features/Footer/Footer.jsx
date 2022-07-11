import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FooterStyle from "./Footer.module.css";

function Footer() {
  return (
    <div className={FooterStyle.wrapper}>
      <div className={FooterStyle.container}>
        <div
          style={{
            // outline: "2px solid red",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <FacebookIcon sx={{ cursor: "pointer" }} />
          <InstagramIcon sx={{ cursor: "pointer" }} />
          <TwitterIcon sx={{ cursor: "pointer" }} />
          <LinkedInIcon sx={{ cursor: "pointer" }} />
        </div>
        <div>Copyright ©2022 All rights reserved </div>
      </div>
    </div>
  );
}

export default Footer;
