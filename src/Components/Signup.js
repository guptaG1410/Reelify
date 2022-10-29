import * as React from "react";
import Alert from "@mui/material/Alert";
import { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import "./Signup.css";
import word_logo from "./Images/word_logo.png";
import logo from "./Images/logo.jpg";
import signup from "./Images/signup.png";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { database, storage } from "../firebase";

// const useStyles = makeStyles((theme) => {
//     text: {
//         color:'grey'
//     }
// })

export default function Signup() {
  //   const classes = useStyles();
  const [fName, setFName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);

  let handleClick = async (e) => {
    // e.preventDefault();
    if (file == null) {
      setError("Please fill your credentials carefully!!!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    try {
      setError("");
      setLoading(true);
      let userObj = await signUp(email, password);
      let uid = userObj.user.uid;
      console.log(uid);
      const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file);
      uploadTask.on("state_changed", fn1, fn2, fn3);
      // fn1 - Progress,  fn2 - Error,    fn3 - Success.
      function fn1(snapshot) {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress} done.`);
      }
      function fn2(error) {
        setError(error);
        setTimeout(() => {
          setError("");
        }, 5000);
        setLoading(false);
        return;
      }
      async function fn3() {
        let downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();

        await database.users.doc(uid).set({
            email: email,
            Full_Name: fName,
            userName: userName,
            profileUrl: downloadUrl,
            createdAt: database.getTimeStamp(),
          });
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
      setLoading(false);
    }
  };

  const redirect = () => {
    console.log("redirecting");
    <Link to = '/'></Link>
  }

  return (
    <div className="body">
      <Card className="signupWrapper">
        <div className="signupCard1">
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
              Sign Up
            </Typography>
            {error != "" && (
              <Alert variant="outlined" severity="error">
                {error}
              </Alert>
            )}
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              textalign="center"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              fullWidth={true}
              size="medium"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              size="small"
              color="primary"
              fullWidth={true}
              startIcon={<CloudUploadIcon />}
              component="label"
            >
              Upload Profile Picture
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
              ></input>
            </Button>
            <CardActions>
              <Button
                size="large"
                color="secondary"
                fullWidth={true}
                variant="contained"
                style={{ borderRadius: "100px" }}
                disabled={loading}
                onClick={() => {handleClick(); redirect()}}
              >
                Sign up
              </Button>
            </CardActions>
            <Typography align="center" gutterBottom>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "grey" }}
              >
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
