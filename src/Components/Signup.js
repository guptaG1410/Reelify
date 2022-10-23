import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Link } from "@mui/material";
import "./Signup.css";
import word_logo from "./Images/word_logo.png";
import logo from "./Images/logo.jpg";
import signup from "./Images/signup.png";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

// const useStyles = makeStyles((theme) => {
//     text: {
//         color:'grey'
//     }
// })

export default function Signup() {
  //   const classes = useStyles();

  return (
    <div className="body">
      <Card className="signupWrapper">
        <div className="signupCard1">
          <div className="insta-logo">
            <img className="wordLogo" src={word_logo} alt="Reelify" />
            <img className="logo" src={logo} alt="reels-icon" />
          </div>
          <CardContent style={{width: "80%"}}>
            <Typography
              display="block"
              gutterBottom
              variant="h5"
              component="div"
              color="grey"
            >
              Sign Up
            </Typography>
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              textalign="center"
            />
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Button
              size="small"
              color="primary"
              fullWidth={true}
              startIcon={<CloudUploadIcon />}
              component="label"
            >
              Upload Profile Picture
              <input type="file" accept="image/*" hidden></input>
            </Button>
            <CardActions>
              <Button
                size="large"
                color="secondary"
                fullWidth={true}
                variant="contained"
                style={{ borderRadius: "100px" }}
              >
                Sign up
              </Button>
            </CardActions>
          <Typography align="center" gutterBottom>
            <Link to="/login" style={{ textDecoration: "none", color: "grey" }}>
              Already a member? Login
            </Link>
          </Typography>
          </CardContent>
        </div>
        <div className="signupCard2">
          <img className="card2Logo" src={signup} alt="signup-image" />
        </div>
      </Card>
    </div>
  );
}
