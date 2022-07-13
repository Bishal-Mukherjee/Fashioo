import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WcIcon from '@material-ui/icons/Wc';
import EventIcon from '@material-ui/icons/Event';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Alert from '../../components/alert';
import NameInput from '../../components/nameInput';
import GenderInput from '../../components/genderRadioInput';
import BirthdayInput from '../../components/dateInput';
import InputField from '../../components/inputField';
import PasswordField from '../../components/passwordFields';

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
        height: 7,
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
        2: <WcIcon />,
        3: <EventIcon />,
        4: <PersonIcon />,
        5: <LockIcon />,
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
        marginTop: theme.spacing(6),
    },
    instructions: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
}));

function getSteps() {
    return ['Name', 'Gender', 'Birthday', 'Username', 'Password'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Enter your First name and Last name';
        case 1:
            return 'Select your gender';
        case 2:
            return 'Enter your date of birth';
        case 3:
            return 'Enter a username';
        case 4:
            return 'Create your Password';
        default:
            return 'Unknown step';
    }
}

const CompleteUserProfile = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [alert, setAlert] = useState(false);
    const [answer, setAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [errorMsg, setErrorMsg] = useState('Some Error Occured');

    // For testing purpose
    useEffect(() => {
        console.log(answers);
    }, [answers]);

    const handleNext = () => {
        if (activeStep === 0) {
            if (answer.firstName === '') {
                setAlert(true);
                setErrorMsg('First Name cannot be empty');
            } else if (answer.lastName === '') {
                setAlert(true);
                setErrorMsg('Last Name cannot be empty');
            } else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                let tempAnswers = [...answers];
                tempAnswers[activeStep] = answer;
                setAnswers(tempAnswers);
                setAnswer('');
            }
        } else if (activeStep === 4) {
            if (answer.password1 !== answer.password2) {
                setAlert(true);
                setErrorMsg('Passwords are not matching');
            } else {
                if (answer.password1 === '') {
                    setAlert(true);
                    setErrorMsg("Password Fields can't be empty");
                } else {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                    let tempAnswers = [...answers];
                    tempAnswers[activeStep] = answer.password1;
                    setAnswers(tempAnswers);
                    setAnswer('');
                }
            }
        } else if (activeStep < answers.length) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            if (answer !== '') {
                let tempAnswers = [...answers];
                tempAnswers[activeStep] = answer;
                setAnswers(tempAnswers);
                setAnswer('');
            }
        } else {
            if (answer !== '') {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);

                let tempAnswers = [...answers];
                tempAnswers.push(answer);
                setAnswers(tempAnswers);
                setAnswer('');
            } else {
                // Show Alert if user want to hit NEXT without choosing any option
                setAlert(true);
                if (activeStep === 2) {
                    setErrorMsg('Please Select your date of birth');
                } else if (activeStep === 3) {
                    setErrorMsg('Please Enter a user name');
                }
            }
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    useEffect(() => {
        setAlert(false);
    }, [answer]);

    const handleSubmit = (answer) => {
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
            {alert && <Alert errorMessage={errorMsg} />}
            <div style={{ textAlign: 'center' }}>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed
                        </Typography>
                        <Button
                            onClick={handleReset}
                            className={classes.button}
                        >
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>
                            {getStepContent(activeStep)}
                        </Typography>
                        {/* Various components here */}
                        {activeStep === 0 ? (
                            <NameInput handleSubmit={handleSubmit} />
                        ) : activeStep === 1 ? (
                            <GenderInput handleSubmit={handleSubmit} />
                        ) : activeStep === 2 ? (
                            <BirthdayInput handleSubmit={handleSubmit} />
                        ) : activeStep === 3 ? (
                            <InputField
                                label='username'
                                handleSubmit={handleSubmit}
                            />
                        ) : activeStep === 4 ? (
                            <PasswordField handleSubmit={handleSubmit} />
                        ) : (
                            <div></div>
                        )}
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1
                                    ? 'Finish'
                                    : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompleteUserProfile;
