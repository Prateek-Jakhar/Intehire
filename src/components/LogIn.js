import React from "react";
import "../css/LogIn.css";
import Grid from "@mui/material/Grid";
import sideImage from "./../assets/login_image.png";
import LoginForm from "./LoginForm";

const LogIn = () => {
  return (
    <div>
      <div style={{ marginLeft: "70px" }}>
        <Grid container>
          <Grid item xs={4}>
            <LoginForm />
          </Grid>

          <Grid
            item
            xs={8}
            style={{ backgroundColor: "#E5E5E5", height: "100vh" }}
          >
            <div id="imageSide">
              <img src={sideImage} alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LogIn;
