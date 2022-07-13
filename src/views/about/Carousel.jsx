import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import Card from './Card';

const items = [
    {
        url: 'https://fashioo.in/assets/images/1.%20Founder,%20CEO.jpeg',
        name: 'Roniit Nandeshwar',
        position: 'Founder, CEO',
    },
    {
        url:
            'https://fashioo.in/assets/images/3.%20App%20development%20head.jpeg',
        name: 'Harshad Wazarkar',
        position: 'Product Development',
    },
    {
        url: 'https://fashioo.in/assets/images/5.%20%20Neha.jpeg',
        name: 'Neha Mulchandani',
        position: 'Fashion Advisor',
    },
    {
        url: 'https://fashioo.in/assets/images/9.%20riya.jpeg',
        name: 'Riya Singh',
        position: 'Fashion Researcher',
    },
];

const Item = (props) => {
    return (
        <Card
            url={props.item.url}
            name={props.item.name}
            position={props.item.position}
        />
    );
};

const Example = (props) => {
    return (
        <Carousel animation='slide'>
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
};

export default Example;
