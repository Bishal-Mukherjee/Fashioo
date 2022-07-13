import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import DateTime from './DateTime';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        maxWidth: '100vw',
        boxShadow: 'none',
    },
    CardContent: {
        textAlign: 'left',
    },
    userName: {
        marginTop: '4rem',
        marginBottom: '1rem',
    },
    others: {
        marginBottom: '1rem',
    },
});

const ProfileCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    style={{ borderRadius: '40px' }}
                    component='img'
                    alt='Contemplative Reptile'
                    height='340'
                    image='https://i.pinimg.com/236x/d6/83/b3/d683b3716889bd9dd65dba64c425a253.jpg'
                    title='Contemplative Reptile'
                />
                <CardContent className={classes.CardContent}>
                    <DateTime />
                    <Typography
                        className={classes.userName}
                        gutterBottom
                        variant='h4'
                        component='h2'
                    >
                        John Doe
                    </Typography>
                    <Typography
                        className={classes.others}
                        gutterBottom
                        variant='h5'
                        component='h2'
                    >
                        +91 XXXXXXXXXX
                    </Typography>
                    <Typography
                        className={classes.others}
                        gutterBottom
                        variant='h5'
                        component='h2'
                    >
                        example@abc.com
                    </Typography>
                    <Typography gutterBottom variant='h5' component='h2'>
                        Lorem ipsum dolor sit amet, consectetur
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProfileCard;
