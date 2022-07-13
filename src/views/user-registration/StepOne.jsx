import React, { useEffect, useState } from "react";
import validator from "validator";


import { makeStyles } from "@material-ui/core/styles";
import {
  FormLabel,
  MenuItem,
  Select,
  Grid,
  Button,
  Container,
  TextField,
  CssBaseline,
  Box,
  Typography,
  Avatar,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from "@material-ui/core";
import {green, red} from '@material-ui/core/colors';
import CircularProgress from "@material-ui/core/CircularProgress";

import { LockOutlined, Done, Clear } from "@material-ui/icons";

import { checkUserNameAvailability, registerUser } from "../../apis/login";



const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
      width: "25ch",
    },
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(0, 0, 0),
    height: "50px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));
const StepOne = (props) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState();
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState();
  const [otp, setOtp] = useState("");
  const [actualOtp, setActualOtp] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [nextClick, setNextClick] = useState(false);
  
  // useEffect(() => {
  //     onAnswerInput(email);
  // }, [email]);
  console.log("props",props)
  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const onEmailChange = (event) => {
    console.log(validator.isEmail(event.target.value));
    setEmail(event.target.value);
  };
  const onChangeNumber = (event) => {
    setNumber(event.target.value);
  };
  const onChangeOtp = (event) => {
    setOtp(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const onDOBChange = (event) => {
    setDob(event.target.value);
  };
  const onGenderChange = (event) => {
    setGender(event.target.value)
  };

  const handleNext = (event) => {
    setNextClick(true);
    console.log("handle submit");
    console.log(props);
    const data = {
      emailId: email,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      dateOfBirth: dob,
      password: password,
      confirmPassword: confirmPassword,
      userName: email,
      mobileNumber: number,
      profilePicUrl: "",
    };
    registerUser(data)
      .then((response) => {
        console.log(response);
        props.handleNext(1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkAvailability = (event) => {
    if  (event.target.value !== "") {
      checkUserNameAvailability(event.target.value)
        .then((response) => {
              console.log(response);
              if(response.data.isUserAvailable ===false){
                setEmailError(true)
                setEmailErrorMsg(response.data.message)
              } else {
                setEmailError(false)
                setEmailErrorMsg("")
              }
              
            })
        .catch((error) => {
              console.log(error);
        });
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: "10px" }}
        >
          Sign in
        </Typography>
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <TextField
              value={firstName}
              id="input-firstName"
              label="First Name"
              variant="outlined"
              onChange={(e) => onFirstNameChange(e)}
              fullWidth
            />
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <TextField
              value={lastName}
              id="input-lastName"
              label="Last Name"
              variant="outlined"
              onChange={(e) => onLastNameChange(e)}
              fullWidth
            />
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            style={{ alignItems: "flex-start" }}
          >
            <FormControl component="fieldset">
              <FormLabel component="legend" style={{ textAlign: "left" }}>
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel
                  value="MALE"
                  control={<Radio color="primary" />}
                  label="Male"
                  labelPlacement="end"
                  onChange={(e) => onGenderChange(e)}
                />
                <FormControlLabel
                  value="FEMALE"
                  control={<Radio color="primary" />}
                  label="Female"
                  labelPlacement="end"
                  onChange={(e) => onGenderChange(e)}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <Typography style={{ textAlign: "left" }}>
              Date of Birth:
            </Typography>
            <TextField
              type="date"
              value={dob}
              id="input-dateOfBirth"
              //label="Email ID"
              variant="outlined"
              onChange={(e) => onDOBChange(e)}
              fullWidth
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              type="email"
              value={email}
              id="input-email"
              label="Email ID"
              variant="outlined"
              onChange={(e) => onEmailChange(e)}
              fullWidth
              error={emailError}
              helperText={emailErrorMsg}
              onBlur={(e) => checkAvailability(e)}
            />
          </Grid>
          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
            <TextField
              className={classes.formControl}
              id="input-mobileNumber"
              label="Mobile Number"
              variant="outlined"
              value={number}
              onChange={(e) => onChangeNumber(e)}
              fullWidth
            />
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send OTP
            </Button>
          </Grid>
          <Grid item xl={8} lg={8} md={10} sm={10} xs={10}>
            <TextField
              value={otp}
              fullWidth
              className={classes.formControl}
              id="input-otp"
              label="Enter OTP"
              variant="outlined"
              onChange={(e) => onChangeOtp(e)}
            />
          </Grid>
          <Grid item xl={4} lg={4} md={2} sm={2} xs={2}>
            <Done style={{ color: green[500] }} fontSize="large" />
            <Clear style={{ color: red[500] }} fontSize="large" />
          </Grid>
          <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
            {/* <TextField
              value={otp}
              fullWidth
              className={classes.formControl}
              id="input-otp"
              label="Enter OTP"
              variant="outlined"
              onChange={(e) => onChangeOtp(e)}
            /> */}
          </Grid>
          <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
            <TextField
              type="password"
              value={password}
              fullWidth
              className={classes.formControl}
              id="input-password"
              label="Password"
              variant="outlined"
              onChange={(e) => onChangePassword(e)}
            />
          </Grid>
          <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
            <TextField
              type="password"
              value={confirmPassword}
              fullWidth
              className={classes.formControl}
              id="input-confirmPassword"
              label="Confirm Password"
              variant="outlined"
              onChange={(e) => onChangeConfirmPassword(e)}
            />
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            {confirmPassword !== "" && confirmPassword === password ? (
              <Done style={{ color: green[500] }} fontSize="large" />
            ) : null}
            {confirmPassword !== password && confirmPassword !== "" ? (
              <Clear style={{ color: red[500] }} fontSize="large" />
            ) : null}
          </Grid>
        </Grid>
      </Paper>
      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Button
          disabled={props.activeStep === 0}
          onClick={props.handleBack}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
          disabled={nextClick}
        >
          Next
          {nextClick === true ? <CircularProgress size={20}/> : null}
        </Button>
        
        
      </div>
    </Container>
  );
};

export default StepOne;
