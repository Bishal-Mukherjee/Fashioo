import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ProfileCard from './ProfileCard';
import RecentBlogs from './RecenetBlogs';
import AccountSettings from './AccountSetting';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            padding: '0 16vw',
        },
        background: 'linear-gradient(#C0C0C0, rgb(255, 177, 33))',
    },
    mainPaper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '100px',
        background: 'none',
        boxShadow: 'none',
    },
    mainHead: {
        color: 'rgb(22, 12, 66)',
        fontSize: '6vw',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3vw',
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    profileCard: {
        borderRadius: '40px',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: '3px 3px 5px 6px #696969;',
    },
    recentBlogs: {
        borderRadius: '40px',
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(4),
        boxShadow: '3px 3px 5px 6px #696969;',
    },
    accountSettings: {
        borderRadius: '40px',
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: '3px 3px 5px 6px #696969;',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(8),
        },
    },
}));

const Dashboard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.leftGrid} container spacing={10}>
                <Grid item xs={12}>
                    <Paper className={classes.mainPaper}>
                        <Typography
                            className={classes.mainHead}
                            variant='h1'
                            component='h2'
                            gutterBottom
                        >
                            My Fashioo Dashboard
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={10}>
                <Grid item xs={12} md={5}>
                    <Paper className={classes.profileCard}>
                        <ProfileCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Paper className={classes.recentBlogs}>
                        <RecentBlogs />
                    </Paper>
                    <Paper className={classes.accountSettings}>
                        <AccountSettings />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
