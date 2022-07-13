import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ShareButton from './ShareButton';
import './blogPage.css';
import lensImage from '../../assets/images/lens.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(180deg, #feffd8, rgb(255, 177, 33) 100%)',
        padding: '0 20px',
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '20px',
        boxShadow: '5px 10px #888888',
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
    },
    header: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundImage: 'url(../../assets/images/bg-pattern-card.svg)',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    lensDiv: {
        margin: 'auto',
        width: '30px',
        height: '30px',
        marginTop: '-20px',
        marginBottom: '10px',
    },
}));

// Raw Data
// *************************************
const rawData = {
    profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnwSs9NhBzWgndQLp8B9X1hfi8-vQV_xrgQy6vyaZf6PgaXH9Y&usqp=CAU',
    name: 'Lorem ipsum',
    imageURL:
        'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
    title: 'Lorem ipsum',
    content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Tempor commodo ullamcorper a lacus vestibulum sed. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Integer quis auctor elit sed vulputate mi sit amet. Eget sit amet tellus cras. Tempor orci dapibus ultrices in iaculis nunc sed augue. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Amet commodo nulla facilisi nullam vehicula. Vitae semper quis lectus nulla. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.Eget nunc lobortis mattis aliquam faucibus purus. Volutpat blandit aliquam etiam erat velit scelerisque. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Non curabitur gravida arcu ac tortor. Mollis nunc sed id semper risus in. Feugiat in fermentum posuere urna nec. Placerat in egestas erat imperdiet. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Risus in hendrerit gravida rutrum quisque. Tellus mauris a diam maecenas sed. Sed vulputate mi sit amet mauris commodo.',
};

const BlogPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <header className='header'>
                        <figure className='img-div'>
                            <div className='image'>
                                <img
                                    width='150px'
                                    src={rawData.profileImg}
                                    alt="Blog's Owner"
                                />
                            </div>
                            <br />
                            <figcaption className='img-caption'>
                                {' '}
                                {rawData.name}{' '}
                            </figcaption>
                        </figure>
                    </header>
                </Grid>
            </Grid>
            <Grid className={classes.grid} container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <div className={classes.lensDiv}>
                            <img
                                className={classes.image}
                                alt='lens-img'
                                src={lensImage}
                            />
                        </div>
                        <img className={classes.image} src={rawData.imageURL} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        <section className='text-body'>
                            <h2>{rawData.title}</h2>
                            <div className='content text-left p-4'>
                                <p></p>
                                <br />
                                <p>{rawData.content}</p>
                            </div>
                            <div className='text-right right'>
                                <p>19 April 2021</p>
                            </div>
                        </section>
                    </Paper>
                </Grid>
            </Grid>
            <ShareButton />
        </div>
    );
};

export default BlogPage;
