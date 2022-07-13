import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import ReportIcon from '@material-ui/icons/Report';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: 'rgb(22, 12, 66)',
        textAlign: 'center',
    },
    margin: {
        margin: theme.spacing(1),
        height: '3.5rem',
        width: '100%',
        borderRadius: '40px',
        fontSize: '1rem',
    },
}));

const AccountSetting = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h3' component='h2' gutterBottom>
                Account Settings
            </Typography>
            <Button
                startIcon={<LockIcon />}
                variant='contained'
                size='large'
                color='secondary'
                className={classes.margin}
            >
                Change Password
            </Button>
            <br />
            <Button
                startIcon={<ReportIcon />}
                variant='contained'
                size='large'
                color='primary'
                className={classes.margin}
            >
                Complaints
            </Button>
            <br />
            <Button
                startIcon={<HeadsetMicIcon />}
                style={{ background: '#008000', color: '#fff' }}
                variant='contained'
                size='large'
                className={classes.margin}
            >
                Support
            </Button>
        </div>
    );
};

export default AccountSetting;
