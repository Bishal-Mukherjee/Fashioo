import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import SaveIcon from '@material-ui/icons/Save';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(0),
        textTransform: 'none',
    },
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}));

const Referral = ({ code }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const copyCode = (code) => {
        navigator.clipboard.writeText(code);
        setOpen(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success'>
                    Referral code copied successfuly!
                </Alert>
            </Snackbar>
            <Tooltip title={'Copy Referral Code'}>
                <Button
                    id='referral-btn'
                    variant={'contained'}
                    color={'secondary'}
                    className={classes.button}
                    endIcon={<SaveIcon />}
                    onClick={(e) => copyCode(code)}
                >
                    {code}
                </Button>
            </Tooltip>
        </div>
    );
};

export default Referral;
