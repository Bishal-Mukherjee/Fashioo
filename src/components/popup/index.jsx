import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const PopUp = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity='success'>
                <AlertTitle>Free Consultancy</AlertTitle>
                Know Your Body Test — <strong>Free</strong>
            </Alert>
        </div>
    );
};

export default PopUp;
