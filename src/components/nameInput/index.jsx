import React, { Fragment, useEffect, useState } from 'react';

import InputField from '../../components/inputField';

const NameInput = ({ handleSubmit }) => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');

    useEffect(() => {
        handleSubmit({ firstName: fName, lastName: lName });
    }, [fName, lName]);

    const handleSubmitfName = async (fName) => {
        setfName(fName);
    };

    const handleSubmitlName = async (lName) => {
        setlName(lName);
    };

    return (
        <Fragment>
            <InputField label='First Name' handleSubmit={handleSubmitfName} />
            <InputField label='Last Name' handleSubmit={handleSubmitlName} />
        </Fragment>
    );
};

export default NameInput;
