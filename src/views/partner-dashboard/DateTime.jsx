import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    leftDiv: {
        position: 'absolute',
        minWidth: '50%',
    },
    rightDiv: {
        position: 'absolute',
        right: '30px',
    },
});

const DateTime = () => {
    const classes = useStyles();
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer);
        };
    });

    return (
        <div className={classes.root}>
            <div className={classes.leftDiv}>
                <Typography gutterBottom variant='h5' component='h2'>
                    My Profile
                </Typography>
            </div>
            <div className={classes.rightDiv}>
                <Typography gutterBottom variant='h6' component='h2'>
                    {date.toLocaleTimeString()} IST
                </Typography>
                <Typography gutterBottom variant='h6' component='h2'>
                    {date.toLocaleDateString()}
                </Typography>
            </div>
        </div>
    );
};

export default DateTime;
