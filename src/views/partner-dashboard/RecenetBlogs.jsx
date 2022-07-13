import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color: 'rgb(22, 12, 66)',
        textAlign: 'left',
    },
    content: {
        lineHeight: '1.5rem',
    },
}));

const RecentBlogs = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h3' component='h2' gutterBottom>
                My Recent Blogs
            </Typography>
            <Divider />
            <Typography
                className={classes.content}
                variant='subtitle1'
                gutterBottom
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat...
                <a href='#'>Read More</a>
            </Typography>
            <Divider />
            <br />
            <Typography
                className={classes.content}
                variant='subtitle1'
                gutterBottom
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip... <a href='#'>Read More</a>
            </Typography>
            <Divider />
        </div>
    );
};

export default RecentBlogs;
