import React, { Fragment, useEffect, useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ChatBox.css';

const ChatBox = () => {
    const [open, setOpen] = useState(true);
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    useEffect(() => {
        const chatContent = document.querySelector('.chat-content');

        if (chatContent.style.maxHeight) {
            chatContent.style.maxHeight = null;
            chatContent.classList.remove('active');
        } else {
            chatContent.style.maxHeight = chatContent.scrollHeight + 30 + 'px';
            chatContent.classList.add('active');
        }
    }, [open]);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        console.log(inputs);
    }, [inputs]);

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Fragment>
            <div className='chat-box fixed-positioning'>
                <div className='chat-header'>
                    <Badge>
                        <FiberManualRecordIcon style={{ color: '#39FF14' }} />{' '}
                        <Typography>Get in touch</Typography>
                    </Badge>
                    <IconButton onClick={(e) => handleClick()}>
                        {open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                    </IconButton>
                </div>
                <div className='chat-content'>
                    <p className='chat-title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit...
                    </p>
                    <div className='chat-form'>
                        <div>
                            <label>
                                Your Name <span>*</span>
                            </label>
                            <input
                                name='name'
                                value={inputs.name}
                                onChange={handleChange}
                                type='text'
                                id='name'
                                required
                            />
                        </div>
                        <div>
                            <label>
                                E-mail <span>*</span>
                            </label>
                            <input
                                name='email'
                                value={inputs.email}
                                onChange={handleChange}
                                type='email'
                                id='email'
                                required
                            />
                        </div>
                        <div>
                            <label>
                                Contact Number <span>*</span>
                            </label>
                            <input
                                name='number'
                                value={inputs.number}
                                onChange={handleChange}
                                type='text'
                                id='subject'
                                required
                            />
                        </div>
                        <div>
                            <label>
                                Message <span>*</span>
                            </label>
                            <textarea
                                name='message'
                                value={inputs.message}
                                onChange={handleChange}
                                id='message'
                                required
                            ></textarea>
                        </div>
                        <button type='submit'>Send</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ChatBox;
