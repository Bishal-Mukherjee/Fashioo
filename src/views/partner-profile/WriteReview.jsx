import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'left',
    },
    rate: {
        display: 'flex',
    },
    btnDiv: {
        minWidth: '100%',
        textAlign: 'right',
    },
    btn: {
        marginTop: theme.spacing(4),
    },
}));

const WriteReview = () => {
    const classes = useStyles();
    const [response, setResponse] = useState({
        stars: 5.0,
        comment: '',
    });

    useEffect(() => {
        // For testing purpose
        // console.log(response);
    }, [response]);

    const handleChange = (event) => {
        setResponse({
            ...response,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = () => {
        // console.log(response);
        // API call for submitting review after validating user
    };

    return (
        <div className={classes.root}>
            <div className={classes.rate}>
                <Typography
                    style={{ marginRight: '1em' }}
                    variant='subtitle1'
                    gutterBottom
                >
                    Rate the expert
                </Typography>
                <Rating
                    name='stars'
                    onChange={(e) => handleChange(e)}
                    value={parseFloat(response.stars)}
                    precision={0.5}
                />
            </div>
            <TextField
                name='comment'
                label='Your Review'
                placeholder='Write Here'
                onChange={(e) => handleChange(e)}
                value={response.comment}
                multiline
                fullWidth
                rows={6}
                variant='outlined'
            />
            <div className={classes.btnDiv}>
                <Button
                    onClick={handleSubmit}
                    className={classes.btn}
                    variant='contained'
                    style={{ background: 'rgb(22, 12, 66)', color: '#fff' }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default WriteReview;
