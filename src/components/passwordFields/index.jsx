import React, { Fragment, useEffect, useState } from 'react';

import PasswordInput from '../../components/passwordInput';

const PasswordField = ({ handleSubmit }) => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    useEffect(() => {
        handleSubmit({ password1: password1, password2: password2 });
    }, [password1, password2]);

    const handleSubmitPassword1 = (password) => {
        setPassword1(password);
    };

    const handleSubmitPassword2 = (password) => {
        setPassword2(password);
    };

    return (
        <Fragment>
            <PasswordInput
                label='Password'
                handleSubmit={handleSubmitPassword1}
            />
            <PasswordInput
                label='Confirm Password'
                handleSubmit={handleSubmitPassword2}
            />
        </Fragment>
    );
};

export default PasswordField;
