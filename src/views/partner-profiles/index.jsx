import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '6vh 0',
        margin: '0 2vh',
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        boxShadow: 'none',
    },
}));

const Profiles = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Card />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Card />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Card />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Card />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Card />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Card />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Card />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <Card />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Profiles;
