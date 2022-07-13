import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '3vh',
        textAlign: 'left',
    },
    name: {
        color: 'rgb(22, 12, 66)',
    },
}));

const Review = ({ reviews }) => {
    const classes = useStyles();

    const getReviews = reviews.map((review, index) => {
        return (
            <div key={index} className={classes.root}>
                <Typography className={classes.name} variant='h6' gutterBottom>
                    {review.name}
                </Typography>
                <Typography variant='caption' display='block' gutterBottom>
                    {review.date}
                </Typography>
                <Rating
                    name='half-rating-read'
                    defaultValue={parseFloat(review.stars)}
                    precision={0.5}
                    readOnly
                />
                <Typography variant='body1' gutterBottom>
                    {review.comment}
                </Typography>
                <Divider />
            </div>
        );
    });

    return <Fragment>{getReviews}</Fragment>;
};

export default Review;
