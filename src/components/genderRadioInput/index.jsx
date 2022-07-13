import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const GenderInput = ({ handleSubmit }) => {
    const [value, setValue] = React.useState('female');

    useEffect(() => {
        handleSubmit(value);
    }, [value]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component='fieldset'>
            <RadioGroup
                aria-label='gender'
                name='gender1'
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel
                    value='female'
                    control={<Radio />}
                    label='Female'
                />
                <FormControlLabel
                    value='male'
                    control={<Radio />}
                    label='Male'
                />
                <FormControlLabel
                    value='other'
                    control={<Radio />}
                    label='Other'
                />
            </RadioGroup>
        </FormControl>
    );
};

export default GenderInput;
