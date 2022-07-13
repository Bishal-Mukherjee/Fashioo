import React, { useState, useEffect } from 'react';
import validator from 'validator';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//material ui core library
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Typography, Button, StepConnector, Stepper, Step, StepLabel } from '@material-ui/core'

//material ui icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Check from '@material-ui/icons/Check';

//component import
import Alert from '../../components/alert';
import StepOne from './StepOne'
import Steptwo from './StepTwo';



const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? (
                <Check className={classes.completed} />
            ) : (
                <div className={classes.circle} />
            )}
        </div>
    );
}

QontoStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 10,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <AccountCircleIcon />,
        2: <BorderColorIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Account Details', 'Personal Details'];
}


const UserRegistration = ({ isUser }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [answer, setAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [alert, setAlert] = useState(false);

    // isUser is a boolean which will tell either the registration will be or
    // a user or a partner ?

    // We will hit api after each answer we get ans OTP will be verified after
    // that this will redirect to the home page
    // We will verify OTP in handleNext function()

    const handleNext = (nextStep) => {
        console.log(nextStep);
        setActiveStep(nextStep);
        // if (activeStep === 0 && !validator.isEmail(answer)) {
        //     // Email Validation
        //     setAlert(true);
        // } else if (
        //     activeStep === 1 &&
        //     !validator.isMobilePhone(answer.code + answer.number)
        // ) {
        //     // Phone Number Validation
        //     setAlert(true);
        // } else if (activeStep < answers.length) {
        //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
        //     if (answer !== '') {
        //         let tempAnswers = [...answers];
        //         tempAnswers[activeStep] = answer;
        //         setAnswers(tempAnswers);
        //         setAnswer('');
        //     }
        // } else {
        //     if (answer !== '') {
        //         setActiveStep((prevActiveStep) => prevActiveStep + 1);

        //         let tempAnswers = [...answers];
        //         tempAnswers.push(answer);
        //         setAnswers(tempAnswers);
        //         setAnswer('');
        //     } else {
        //         // Show Alert if user want to hit NEXT without choosing any option
        //         setAlert(true);
        //     }
        // }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setAnswers([]);
    };

    // For testing purpose
    useEffect(() => {
        console.log(answers);
    }, [answers]);

    useEffect(() => {
        setAlert(false);
    }, [answer]);

    const onAnswerInput = async (answer) => {
        setAnswer(answer);
        //console.log(answer);
    };

    return (
      <div className={classes.root}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {alert && (
          <Alert
            errorMessage={
              activeStep === 0
                ? "Please Enter a valid email"
                : activeStep === 1
                ? "Please Enter a valid Mobile Number"
                : "You have entered a wrong OTP"
            }
          />
        )}
        <div style={{ textAlign: "center" }}>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              {activeStep === 0 ? (
                <StepOne activeStep={activeStep} handleNext={handleNext} handleBack={handleBack}/>
              ) : activeStep === 1 ? (
                <Steptwo activeStep={activeStep} handleNext={handleNext} handleBack={handleBack}/>
              ) : null}
            </div>
          )}
        </div>
      </div>
    );
};

export default UserRegistration;
