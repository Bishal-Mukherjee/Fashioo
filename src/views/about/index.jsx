import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel';
import ChatBox from './ChatBox';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '3em',
        flexGrow: 1,
        background: 'linear-gradient(180deg, #feffd8, rgb(255, 177, 33) 100%)',
    },
    mainHeading: {
        letterSpacing: '0.08em',
        textAlign: 'center',
        color: 'rgb(22, 12, 66)',
    },
    paper: {
        background: 'transparent',
        boxShadow: 'none',
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    logoDiv: {
        width: '40vh',
    },
    firstDiv: {
        marginTop: '1.1em',
    },
    img: {
        height: '100%',
        width: '100%',
    },
    subHeading: {
        letterSpacing: '0.08em',
        textAlign: 'left',
        paddingTop: '6vh',
        paddingLeft: '4vw',
        color: 'rgb(22, 12, 66)',
    },
    bodyText: {
        textAlign: 'left',
        padding: '0 4vw 6vh',
        color: 'rgb(22, 12, 66)',
        fontSize: '1.15em',
        letterSpacing: '0.07em',
    },
    ImgGrid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dataImg: {
        margin: 'auto',
        height: '40vh',
        width: '40vh',
        [theme.breakpoints.up('md')]: {
            height: 'auto',
            width: '20vw',
        },
    },
    secondDiv: {
        marginTop: '10em',
    },
    thirdDiv: {
        marginTop: '10em',
    },
    carousel: {
        width: '100%',
    },
    teamHeading: {
        letterSpacing: '0.08em',
        textAlign: 'center',
        paddingTop: '6vh',
        paddingBottom: '4vh',
        color: 'rgb(22, 12, 66)',
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography
                className={classes.mainHeading}
                variant='h1'
                gutterBottom
            >
                Tag Line - Fashioo's Moto
            </Typography>
            <Container className={classes.logoDiv} maxWidth='sm'>
                <video
                    className={classes.img}
                    autoPlay
                    loop
                    muted
                    playsInline
                    src='./images/dynamicLogo.mp4'
                ></video>
            </Container>

            <Grid className={classes.firstDiv} container spacing={3}>
                <Grid item md={8} xs={12}>
                    <Paper className={classes.paper}>
                        <Typography
                            className={classes.subHeading}
                            variant='h1'
                            gutterBottom
                        >
                            About Fashioo
                        </Typography>
                        <Typography
                            className={classes.bodyText}
                            variant='subtitle1'
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
                            deserunt mollit anim id est laborum.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid className={classes.ImgGrid} item md={4} xs={12}>
                    <Container maxWidth='sm'>
                        <div className={classes.dataImg}>
                            <img
                                className={classes.img}
                                src='./images/face.png'
                            ></img>
                        </div>
                    </Container>
                </Grid>
            </Grid>

            <Grid className={classes.secondDiv} container spacing={3}>
                <Grid className={classes.ImgGrid} item md={4} xs={12}>
                    <Container maxWidth='sm'>
                        <div className={classes.dataImg}>
                            <img
                                className={classes.img}
                                src='./images/girlImage.jpg'
                            ></img>
                        </div>
                    </Container>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Paper className={classes.paper}>
                        <Typography
                            className={classes.subHeading}
                            variant='h1'
                            gutterBottom
                        >
                            Our Mission
                        </Typography>
                        <Typography
                            className={classes.bodyText}
                            variant='subtitle1'
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
                            deserunt mollit anim id est laborum.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Grid className={classes.thirdDiv} container spacing={3}>
                <Grid item md={8} xs={12}>
                    <Paper className={classes.paper}>
                        <Typography
                            className={classes.subHeading}
                            variant='h1'
                            gutterBottom
                        >
                            Our Vision
                        </Typography>
                        <Typography
                            className={classes.bodyText}
                            variant='subtitle1'
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
                            deserunt mollit anim id est laborum.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid className={classes.ImgGrid} item md={4} xs={12}>
                    <Container maxWidth='sm'>
                        <div className={classes.dataImg}>
                            <img
                                className={classes.img}
                                src='./images/vision.png'
                            ></img>
                        </div>
                    </Container>
                </Grid>
            </Grid>

            <Typography
                className={classes.teamHeading}
                variant='h1'
                gutterBottom
            >
                Our Team
            </Typography>
            <div className={classes.carousel}>
                <Carousel />
            </div>
            <ChatBox />
        </div>
    );
};

export default About;
