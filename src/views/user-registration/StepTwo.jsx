import React from "react";

//material ui core imports
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, CssBaseline } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

const StepTwo = (props) => {
  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Button
            //disabled={activeStep === 0}
            //onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            //onClick={handleNext}
            className={classes.button}
          >
            Next
          </Button>
        </div>
      </Container>
    </>
  );
};


export default StepTwo;