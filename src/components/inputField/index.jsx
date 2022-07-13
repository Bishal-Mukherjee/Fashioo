import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(0),
    },
}));

const InputField = ({ label, handleSubmit }) => {
    const classes = useStyles();

    const [input, setInput] = useState('');

    useEffect(() => {
        handleSubmit(input);
    }, [input]);

    const onChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <form className={classes.root} noValidate>
            <br />
            <CssTextField
                value={input}
                className={classes.margin}
                label={label}
                variant='outlined'
                onChange={onChange}
            />
        </form>
    );
};

export default InputField;
