import React, { Fragment } from 'react';
import './BlogCard.css';

const BlogCard = ({ image, profileImg, name, title, content }) => {
    return (
        <Fragment>
            <figure className='card'>
                <img src={image} alt='sample87' />
                <figcaption>
                    <img
                        src={profileImg}
                        alt='profile-sample4'
                        className='profile'
                    />
                    <h2>
                        {title}
                        <span>{name}</span>
                    </h2>
                    <p>
                        {content} <a>Read More...</a>{' '}
                    </p>
                </figcaption>
            </figure>
        </Fragment>
    );
};

export default BlogCard;
