import React from 'react';
import BlogCard from './BlogCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    blog: {
        padding: '7vw',
        backgroundColor: '#FFE53B',
        backgroundImage:
            'linear-gradient(180deg, #feffd8, rgb(255, 177, 33) 100%)',
        textAlign: 'center',
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

// *******************************************************************
// We will delete it, it is just for testing purpose.
// The actual data will be fetched from back-end
const rawData = [
    {
        profileImage:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
        imgURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
        date: '19 April 2021',
        title: 'Lorem Ipsum Dolor',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
    {
        profileImage:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
        imgURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
        date: '19 April 2021',
        title: 'Lorem Ipsum Dolor',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
    {
        profileImage:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
        imgURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
        date: '19 April 2021',
        title: 'Lorem Ipsum Dolor',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
    {
        profileImage:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
        imgURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
        date: '19 April 2021',
        title: 'Lorem Ipsum Dolor',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
    {
        profileImage:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
        imgURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
        date: '19 April 2021',
        title: 'Lorem Ipsum Dolor',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
    {
        profileImage:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
        imgURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
        date: '19 April 2021',
        title: 'Lorem Ipsum Dolor',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
    {
        profileImage:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
        imgURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
        date: '19 April 2021',
        title: 'Lorem Ipsum Dolor',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
    {
        profileImage:
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg',
        imgURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
        date: '19 April 2021',
        title: 'Lorem Ipsum Dolor',
        content:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?',
    },
];
// ***********************************************************************

const Blog = () => {
    const classes = useStyles();

    const getCardInfo = rawData.map((data, index) => {
        return (
            <Grid
                className={classes.grid}
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
            >
                <BlogCard
                    image={data.imgURL}
                    profileImg={data.profileImage}
                    name='John Doe'
                    title={data.title}
                    content={data.content}
                />
            </Grid>
        );
    });

    return (
        <div className={classes.blog}>
            <Typography variant='h2' component='h2' gutterBottom>
                Some Title Here
            </Typography>
            <Grid container spacing={3}>
                {getCardInfo}
            </Grid>
        </div>
    );
};

export default Blog;
