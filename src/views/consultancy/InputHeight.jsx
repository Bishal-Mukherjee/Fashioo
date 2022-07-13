import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(5),
            width: '25ch',
        },
    },
}));

const InputHeight = ({ onOptionSelect }) => {
    const classes = useStyles();
    const [height, setHeight] = useState('');

    useEffect(() => {
        onOptionSelect(height);
        //console.log(height);
    });

    const changeHeight = (event) => {
        let input = event.target.value;
        if (input.indexOf('.') !== -1) {
            input = input.substring(0, input.indexOf('.'));
        }
        setHeight(input);
    };

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <TextField
                value={height}
                onChange={(event) => changeHeight(event)}
                id='outlined-basic'
                label='Height in cms'
                variant='outlined'
            />
        </form>
    );
};

export default InputHeight;
