import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

import Avatar from './Avatar';

import './Profile.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

const ChangePassword = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        password1: '',
        password2: '',
        showPassword1: false,
        showPassword2: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword1 = () => {
        setValues({
            ...values,
            showPassword1: !values.showPassword1,
        });
    };

    const handleClickShowPassword2 = () => {
        setValues({
            ...values,
            showPassword2: !values.showPassword2,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='wrapper'>
            <div className='profile-card js-profile-card'>
                <Avatar url={'./images/dummyUser.png'} />
                <div className='profile-card__cnt js-profile-cnt'>
                    <div className='profile-card-inf'>
                        <div className='profile-card-inf__item'>
                            <div className='profile-card-inf__title'>
                                <div className={classes.root}>
                                    <FormControl
                                        className={clsx(
                                            classes.margin,
                                            classes.textField
                                        )}
                                    >
                                        <InputLabel htmlFor='standard-adornment-password'>
                                            New Password
                                        </InputLabel>
                                        <Input
                                            id='standard-adornment-password1'
                                            type={
                                                values.showPassword1
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            value={values.password1}
                                            onChange={handleChange('password1')}
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        aria-label='toggle password visibility'
                                                        onClick={
                                                            handleClickShowPassword1
                                                        }
                                                        onMouseDown={
                                                            handleMouseDownPassword
                                                        }
                                                    >
                                                        {values.showPassword1 ? (
                                                            <Visibility />
                                                        ) : (
                                                            <VisibilityOff />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-card-inf'>
                        <div className='profile-card-inf__item'>
                            <div className='profile-card-inf__title'>
                                <FormControl
                                    className={clsx(
                                        classes.margin,
                                        classes.textField
                                    )}
                                >
                                    <InputLabel htmlFor='standard-adornment-password2'>
                                        Confirm Password
                                    </InputLabel>
                                    <Input
                                        id='standard-adornment-password'
                                        type={
                                            values.showPassword2
                                                ? 'text'
                                                : 'password'
                                        }
                                        value={values.password2}
                                        onChange={handleChange('password2')}
                                        endAdornment={
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={
                                                        handleClickShowPassword2
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                >
                                                    {values.showPassword2 ? (
                                                        <Visibility />
                                                    ) : (
                                                        <VisibilityOff />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
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
                                <Button variant='contained' color='secondary'>
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
