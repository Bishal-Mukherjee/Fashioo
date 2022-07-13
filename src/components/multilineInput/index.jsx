import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function MultilineTextFields({
    label,
    placeholder,
    handleSubmit,
}) {
    const classes = useStyles();
    const [text, setText] = useState('');

    useEffect(() => {
        handleSubmit(text);
    }, [text]);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <TextField
                value={text}
                label={label}
                placeholder={placeholder}
                multiline
                rows={6}
                variant='outlined'
                onChange={onChange}
            />
        </form>
    );
}
