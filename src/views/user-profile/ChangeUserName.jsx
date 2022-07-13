import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Avatar from './Avatar';

import './Profile.css';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const ChangeUserName = () => {
    const classes = useStyles();

    const [name, setName] = useState('');

    const changeUserName = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = () => {
        // Save the user name to database async call after that success
        // After a success redirect to /user-profile
    };

    return (
        <div className='wrapper'>
            <div className='profile-card js-profile-card'>
                <Avatar url={'./images/dummyUser.png'} />
                <div className='profile-card__cnt js-profile-cnt'>
                    <div className='profile-card-inf'>
                        <div className='profile-card-inf__item'>
                            <div className='profile-card-inf__title'>
                                <TextField
                                    value={name}
                                    id='standard-basic'
                                    label='User Name'
                                    onChange={(e) => changeUserName(e)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='profile-card-inf'>
                    <div className='profile-card-inf__item'>
                        <div className='profile-card-inf__title'>
                            <div
                                style={{ marginTop: '30px' }}
                                className={classes.root}
                            >
                                <Button
                                    onClick={(e) => handleSubmit}
                                    variant='contained'
                                    color='primary'
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangeUserName;
