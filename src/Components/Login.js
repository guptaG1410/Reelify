import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions} from "@mui/material";
import "./Login.css";
import word_logo from "./Images/word_logo.png";
import logo from "./Images/logo.jpg";
import login from "./Images/login.png";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => {
//     text: {
//         color:'grey'
//     }
// })

export default function Login() {
  //   const classes = useStyles();
  const store = useContext(AuthContext);
  console.log(store);

  return (
    <div className="body">
      <Card className="loginWrapper">
        <div className="loginCard2">
          <img className="card2Logo" src={login} alt="login-image" />
        </div>
        <div className="loginCard1">
          <div className="insta-logo">
            <img className="wordLogo" src={word_logo} alt="Reelify" />
            <img className="logo" src={logo} alt="reels-icon" />
          </div>
          <CardContent style={{ width: "80%" }}>
            <Typography
              display="block"
              gutterBottom
              variant="h5"
              component="div"
              color="grey"
            >
              Login
            </Typography>
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{paddingBottom: "2rem"}}
            />
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              style={{paddingBottom: "2rem"}}

            />
            <CardActions>
              <Button
                size="large"
                color="secondary"
                fullWidth={true}
                variant="contained"
                style={{ borderRadius: "100px" }}
              >
                Login
              </Button>
            </CardActions>
          <Typography align="center" gutterBottom>
            <Link to="/signup" style={{ textDecoration: "none", color: "grey" }}>
              New member? Sign Up
            </Link>
          </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
