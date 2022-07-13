import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import OptionList from './OptionList';
import Alert from '../../components/alert';
import InputHeight from './InputHeight';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        'Age Group & Filter',
        'Height & Size Group',
        'Body Shape',
        'Face Shape & Hair Length',
        'Neck Type & Collar Bone',
    ];
}

function getOptionsList() {
    return [
        ['H1', 'H2', 'H3', 'H4', 'H5'],
        ['I1', 'I2', 'I3'],
        ['A1', 'A2', 'A3', 'A4', 'A5'],
        ['B1', 'B2', 'B3', 'B4', 'B5'],
        [], // Conditional Rendering --> BODY SHAPE
        ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'],
        ['E1', 'E2', 'E3'],
        [], // Conditional Rendering --> NECK TYPE
        ['G1', 'G2'],
    ];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Select your age group';
        case 1:
            return 'Select Filter';
        case 2:
            return 'Your height in Cm ____';
        case 3:
            return 'Select your size group';
        case 4:
            return 'Select your body shape';
        case 5:
            return 'Select Face Shape';
        case 6:
            return 'Select Hair Length';
        case 7:
            return 'Select Neck Type';
        case 8:
            return 'Select Collar Bone';
        default:
            return 'Unknown stepIndex';
    }
}

const StepperAndQuestion = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [answer, setAnswer] = useState('');
    const [questionsStep, setQuestionsStep] = useState(0);
    const [alert, setAlert] = useState(false);
    const steps = getSteps();
    const [optionsList, setoptionsList] = useState(getOptionsList);

    useEffect(() => {
        setActiveStep(() => {
            if (questionsStep >= 4) {
                return Math.floor((questionsStep + 1) / 2);
            } else {
                return Math.floor(questionsStep / 2);
            }
        });
    }, [questionsStep]);

    // For testing Purpose only
    useEffect(() => {
        console.log(answers);
    }, [answers]);

    const handleNext = () => {
        if (questionsStep < answers.length) {
            setQuestionsStep((prevQuestionStep) => prevQuestionStep + 1);
            if (answer !== '') {
                let tempAnswers = [...answers];
                tempAnswers[questionsStep] = answer;
                setAnswers(tempAnswers);
                setAnswer('');
            }
        } else {
            if (answer !== '') {
                setQuestionsStep((prevQuestionStep) => prevQuestionStep + 1);

                let tempAnswers = [...answers];
                tempAnswers.push(answer);
                setAnswers(tempAnswers);
                setAnswer('');
            } else {
                // Show Alert if user want hits NEXT without choosing any option
                setAlert(true);
            }
        }
    };

    const handleBack = () => {
        setQuestionsStep((prevQuestionStep) => prevQuestionStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setQuestionsStep(0);
        setAnswers([]);
    };

    useEffect(() => {
        setAlert(false);
    }, [answer]);

    const onOptionSelect = async (answer) => {
        if (questionsStep === 2) {
            if (answer < 145) {
                answer = '';
            } else if (answer >= 145 && answer <= 152) {
                answer = 'A1';
            } else if (answer >= 153 && answer <= 158) {
                answer = 'A2';
            } else if (answer >= 159 && answer <= 165) {
                answer = 'A3';
            } else if (answer >= 166 && answer <= 172) {
                answer = 'A4';
            } else if (answer >= 173 && answer < 250) {
                answer = 'A5';
            } else {
                answer = '';
            }
        }

        setAnswer(answer);

        //console.log(answer);

        // setting custom options based on previous input
        // Conditional Rendering
        if (questionsStep === 3) {
            let tempList = [...optionsList];
            if (answer === 'B1') {
                tempList[4] = ['C9'];
                tempList[7] = ['F3'];
            } else if (answer === 'B2') {
                tempList[4] = ['C1', 'C6', 'C9'];
                tempList[7] = ['F2', 'F3'];
            } else if (answer === 'B3') {
                tempList[4] = ['C1', 'C3', 'C6', 'C9'];
                tempList[7] = ['F1', 'F2', 'F3'];
            } else if (answer === 'B4') {
                tempList[4] = ['C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'];
                tempList[7] = ['F1', 'F2'];
            } else if (answer === 'B5') {
                tempList[4] = ['C2', 'C3', 'C4', 'C5', 'C7', 'C8'];
                tempList[7] = ['F1', 'F2'];
            }
            setoptionsList(tempList);
            //console.log(optionsList);
        }
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {alert && (
                <Alert
                    errorMessage={
                        questionsStep === 2
                            ? 'Please Enter a valid height in centimetres'
                            : 'Please choose an option before moving further.'
                    }
                />
            )}
            <div style={{ textAlign: 'center' }}>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed
                        </Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>
                            {getStepContent(questionsStep)}
                        </Typography>
                        {questionsStep >= optionsList.length ? (
                            ''
                        ) : questionsStep === 2 ? (
                            <InputHeight onOptionSelect={onOptionSelect} />
                        ) : (
                            <OptionList
                                questionsStep={questionsStep}
                                answers={answers}
                                onOptionSelect={onOptionSelect}
                                options={optionsList[questionsStep]}
                            />
                        )}
                        <div>
                            <Button
                                disabled={questionsStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={handleNext}
                            >
                                {questionsStep === optionsList.length - 1
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

export default StepperAndQuestion;
