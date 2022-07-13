import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'block',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const DateInput = ({ handleSubmit }) => {
    const classes = useStyles();

    const [date, setDate] = useState('');

    useEffect(() => {
        handleSubmit(date);
    }, [date]);

    const onChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <form className={classes.container} noValidate>
            <TextField
                value={date}
                id='date'
                label='Enter your Birthday'
                type='date'
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={onChange}
            />
        </form>
    );
};

export default DateInput;
