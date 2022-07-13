import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    paper: {
        padding: '1em',
        background: 'rgb(22, 12, 66)',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    innerPaper: {
        background: 'transparent',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerPaper2: {
        background: 'transparent',
        textAlign: 'center',
        paddingLeft: '0',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '1em',
        },
    },
    large: {
        width: theme.spacing(28),
        height: theme.spacing(28),
    },
    name: {
        color: '#fff',
        paddingBottom: '0.8em',
        fontSize: '1.4em',
    },
    pos: {
        color: '#fff',
        letterSpacing: '0.2em',
    },
    social: {
        color: '#fff',
        fontSize: '1.6em',
        '&:hover': {
            color: 'rgb(255, 177, 33)',
        },
    },
    data: {
        marginTop: 0,
        [theme.breakpoints.up('sm')]: {
            marginTop: '25%',
        },
    },
}));

const Card = ({ url, name, position }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.innerPaper}>
                            <Avatar
                                alt={name}
                                src={url}
                                className={classes.large}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.innerPaper2}>
                            <div className={classes.data}>
                                <h3 className={classes.name}>{name}</h3>
                                <h5 className={classes.pos}>{position}</h5>
                                <Badge>
                                    <IconButton>
                                        <FacebookIcon
                                            className={classes.social}
                                        />
                                    </IconButton>
                                    <IconButton>
                                        <InstagramIcon
                                            className={classes.social}
                                        />
                                    </IconButton>
                                    <IconButton>
                                        <LinkedInIcon
                                            className={classes.social}
                                        />
                                    </IconButton>
                                </Badge>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Card;
