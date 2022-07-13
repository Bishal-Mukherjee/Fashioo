import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CustomButton from './CustomButton';
import Review from './Review';
import WriteReview from './WriteReview';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '5vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        position: 'relative',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(8),
        },
    },
    large: {
        margin: 'auto',
        width: theme.spacing(20),
        height: theme.spacing(20),
        backgroundColor: deepOrange[500],
        marginBottom: theme.spacing(4),
    },
    nameTag: {
        color: 'rgb(22, 12, 66)',
        fontWeight: '700',
    },
    tagLine: {
        margin: 'auto',
        width: theme.spacing(35),
        color: 'rgb(22, 12, 66)',
        letterSpacing: theme.spacing(0.2),
        lineHeight: theme.spacing(0.16),
        marginBottom: theme.spacing(8),
    },
    aboutMe: {
        textAlign: 'left',
        color: 'rgb(22, 12, 66)',
        fontWeight: '500',
    },
    aboutMeBody: {
        textAlign: 'left',
        letterSpacing: theme.spacing(0.15),
        lineHeight: theme.spacing(0.2),
    },
    writeReview: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textAlign: 'left',
        color: 'rgb(22, 12, 66)',
        fontWeight: '500',
    },
    customBtn: {
        marginBottom: theme.spacing(8),
    },
    description: {
        color: 'rgb(22, 12, 66)',
        marginBottom: theme.spacing(8),
    },
}));

// Raw Data for testing purpose
const reviews = [
    {
        name: 'Lorem Ipsum',
        date: 'Tuesday, April 2, 2020',
        stars: '4.5',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    },
    {
        name: 'Lorem Ipsum',
        date: 'Tuesday, April 27, 2020',
        stars: '4.0',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    },
    {
        name: 'Lorem Ipsum',
        date: 'Tuesday, April 27, 2021',
        stars: '5.0',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    },
];

const PartnerProfile = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper className={classes.paper}>
                        <Avatar
                            alt='User Image'
                            src='https://cdn.pixabay.com/photo/2021/04/20/07/59/woman-6193184_960_720.jpg'
                            className={classes.large}
                        />
                        <Typography
                            className={classes.nameTag}
                            variant='h4'
                            gutterBottom
                        >
                            Lorem Ipsum
                        </Typography>
                        <Typography
                            className={classes.tagLine}
                            variant='subtitle1'
                            gutterBottom
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quos blanditiis tenetur
                        </Typography>
                        <div className={classes.customBtn}>
                            <CustomButton text='Blogs and Media' />
                        </div>

                        <Typography
                            className={classes.description}
                            variant='h6'
                            gutterBottom
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quos blanditiis tenetur
                        </Typography>

                        <div className={classes.customBtn}>
                            <CustomButton text='Lorem Ipsum' />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Paper className={classes.paper}>
                        <Typography
                            className={classes.aboutMe}
                            variant='h4'
                            component='h2'
                            gutterBottom
                        >
                            About Me
                        </Typography>
                        <Typography
                            className={classes.aboutMeBody}
                            variant='body1'
                            gutterBottom
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Typography>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Typography
                            className={classes.aboutMe}
                            variant='h4'
                            component='h2'
                            gutterBottom
                        >
                            Reviews
                        </Typography>
                        <Divider />
                        <Review reviews={reviews} />
                        <Typography
                            className={classes.writeReview}
                            variant='h4'
                            component='h2'
                            gutterBottom
                        >
                            Write your review here
                        </Typography>
                        <WriteReview />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default PartnerProfile;
