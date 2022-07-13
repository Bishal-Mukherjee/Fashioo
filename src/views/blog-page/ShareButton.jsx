import React, { useEffect, useState } from 'react';
import './ShareButton.css';

const ShareButton = () => {
    const [out, setOut] = useState(false);

    useEffect(() => {
        const fb = document.querySelector('#fb');
        const twit = document.querySelector('#twit');
        const pin = document.querySelector('#pin');

        console.log(out);

        if (out === true) {
            fb.style.right = '85px';
            fb.style.bottom = '15px';
            twit.style.right = '105px';
            twit.style.bottom = '55px';
            pin.style.right = '85px';
            pin.style.bottom = '95px';
        } else {
            fb.style.right = '55px';
            fb.style.bottom = '50px';
            twit.style.right = '55px';
            twit.style.bottom = '50px';
            pin.style.right = '55px';
            pin.style.bottom = '50px';
        }
    }, [out]);

    const handleMouseClick = () => {
        setOut(!out);
    };

    return (
        <div>
            <div onClick={(e) => handleMouseClick()} id='share'>
                <div
                    className={`fa ${
                        out ? `fa-close` : `fa-share-alt`
                    } fa-stack-1x`}
                ></div>
            </div>
            <div id='fb' className='sm-social'>
                <div className='fa fa-facebook fa-stack-1x sm-icon'></div>
            </div>
            <div id='twit' className='sm-social'>
                <div className='fa fa-whatsapp fa-stack-1x sm-icon'></div>
            </div>
            <div id='pin' className='sm-social'>
                <div className='fa fa-instagram fa-stack-1x sm-icon'></div>
            </div>
        </div>
    );
};

export default ShareButton;
