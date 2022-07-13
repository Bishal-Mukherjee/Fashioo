import React, { Fragment } from 'react';
import './customButton.css';

const CustomButton = ({ text }) => {
    return (
        <Fragment>
            <a className='custom-button'>{text}</a>
        </Fragment>
    );
};

export default CustomButton;
