import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const AlertBar = ({ errorMessage }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert variant='filled' severity='error'>
                {errorMessage}
            </Alert>
        </div>
    );
};

export default AlertBar;
