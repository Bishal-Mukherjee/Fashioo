import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './card.css';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Card = () => {
    const classes = useStyles();

    return (
        <div className='profile-card partner-profile-card'>
            <div className='foreground'>
                <div className='upper-div'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnwSs9NhBzWgndQLp8B9X1hfi8-vQV_xrgQy6vyaZf6PgaXH9Y&usqp=CAU' />
                </div>
                <div className='lower-div'>
                    <h3>Lorem Ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                    </p>
                    <Button
                        variant='outlined'
                        style={{ background: '#fff' }}
                        className={classes.button}
                        endIcon={<AddCircleIcon />}
                    >
                        Connect
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Card;
