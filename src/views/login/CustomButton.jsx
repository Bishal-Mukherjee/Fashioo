import React, { Fragment } from 'react';
import './animatedBtn.css';

const CustomButton = () => {
    return (
        <Fragment>
            <a className='animatedBtn' href='#'>
                <span>Register</span>
                <span>Register Now</span>
            </a>
        </Fragment>
    );
};

export default CustomButton;
