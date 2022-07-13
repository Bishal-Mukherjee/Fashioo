import React from 'react';

const Data = ({ data }) => {
    return (
        <div className='profile-card-inf__item'>
            <div className='profile-card-inf__title'>{data}</div>
        </div>
    );
};

export default Data;
