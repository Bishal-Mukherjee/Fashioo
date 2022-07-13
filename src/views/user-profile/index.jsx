import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),
        paddingLeft: '5vw',
        paddingRight: '5vw',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '15vw',
            paddingRight: '15vw',
        },
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(8),
    },
    large: {
        margin: 'auto',
        width: theme.spacing(20),
        height: theme.spacing(20),
        backgroundColor: deepOrange[500],
        marginBottom: theme.spacing(4),
    },
    userName: {
        color: 'rgb(22, 12, 66)',
        fontWeight: '700',
    },
    leftGrid: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            paddingRight: '4em',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
        },
    },
    rightGrid: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            paddingLeft: '4em',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
        },
    },
    centerGrid: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        border: '1px solid #000',
        textAlign: 'center',
        width: '22em',
        height: '12em',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
        },
    },
    content: {
        display: 'block',
    },
    cardTitle: {
        fontWeight: '700',
        letterSpacing: '0.08em',
    },
}));

// Raw Data for testing purpose
const user = {
    profileImg:
        'https://cdn.pixabay.com/photo/2021/04/20/07/59/woman-6193184_960_720.jpg',
    name: 'Lorem Ipsum',
    mail: 'lorem_ipsum@gmail.com',
    number: '+91 XXXXXXXXXX',
};
// ************************

const UserProfile = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Avatar
                            alt='Remy Sharp'
                            src={user.profileImg}
                            className={classes.large}
                        />
                        <Typography
                            className={classes.userName}
                            variant='h4'
                            gutterBottom
                        >
                            {user.name}
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom>
                            {user.mail}
                        </Typography>
                        <Typography variant='subtitle1' gutterBottom>
                            {user.number}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={classes.leftGrid}>
                        <Card className={classes.card}>
                            <CardContent className={classes.content}>
                                <Typography
                                    className={classes.cardTitle}
                                    variant='h6'
                                    gutterBottom
                                >
                                    Fash Points
                                </Typography>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Earn Fash Points
                                    </Typography>
                                </Link>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Your Fash Points
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.rightGrid}>
                        <Card className={classes.card}>
                            <CardContent className={classes.content}>
                                <Typography
                                    className={classes.cardTitle}
                                    variant='h6'
                                    gutterBottom
                                >
                                    Order History
                                </Typography>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Check your orders
                                    </Typography>
                                </Link>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Payment issues
                                    </Typography>
                                </Link>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Constultancy for you
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={classes.leftGrid}>
                        <Card className={classes.card}>
                            <CardContent className={classes.content}>
                                <Typography
                                    className={classes.cardTitle}
                                    variant='h6'
                                    gutterBottom
                                >
                                    Consultancy
                                </Typography>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        One Time
                                    </Typography>
                                </Link>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Bridal
                                    </Typography>
                                </Link>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Student Package
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.rightGrid}>
                        <Card className={classes.card}>
                            <CardContent className={classes.content}>
                                <Typography
                                    className={classes.cardTitle}
                                    variant='h6'
                                    gutterBottom
                                >
                                    Settings
                                </Typography>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Your Mail
                                    </Typography>
                                </Link>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Your Phone Number
                                    </Typography>
                                </Link>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Password Setting
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className={classes.centerGrid}>
                        <Card className={classes.card}>
                            <CardContent className={classes.content}>
                                <Typography
                                    className={classes.cardTitle}
                                    variant='h6'
                                    gutterBottom
                                >
                                    Help
                                </Typography>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Get Help
                                    </Typography>
                                </Link>
                                <Link href='#' onClick={preventDefault}>
                                    <Typography
                                        variant='subtitle1'
                                        gutterBottom
                                    >
                                        Privacy Policy
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserProfile;
