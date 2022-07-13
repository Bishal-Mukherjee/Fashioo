import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FileUpload from '../../components/uploadFile';
import SendIcon from '@material-ui/icons/Send';

import lensImage from '../../assets/images/lens.jpg';
import penImage from '../../assets/images/pen.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '20px 20px',
        background: 'linear-gradient(180deg, #feffd8, rgb(255, 177, 33) 100%)',
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '20px',
        boxShadow: '5px 10px #888888',
    },
    heading: {
        margin: '30px 0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    headText: {
        border: '7px dashed rgb(22, 12, 66)',
        padding: '10px',
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
    penDiv: {
        margin: 'auto',
        width: '10vh',
    },
    upload: {
        margin: '50px 0',
    },
    title: {
        width: '40%',
    },
    button: {
        marginLeft: '60%',
        margin: theme.spacing(6),
    },
}));

const CreateBlogPost = () => {
    const classes = useStyles();
    const [file, setFile] = useState(null);
    const [post, setPost] = useState({
        title: '',
        image: null,
        content: '',
    });

    useEffect(() => {
        console.log(post);
    }, [post]);

    const handleChange = (event) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        setPost({
            ...post,
            image: file,
        });
    }, [file]);

    const handleSubmit = (file) => {
        setFile(file);
    };

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                <Typography
                    className={classes.headText}
                    variant='h3'
                    gutterBottom
                >
                    Create a New Post
                </Typography>
            </div>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <div className={classes.lensDiv}>
                            <img
                                className={classes.image}
                                alt='lens-img'
                                src={lensImage}
                            />
                        </div>
                        <img
                            className={classes.image}
                            alt='some-img'
                            src='https://images.unsplash.com/photo-1519160558534-579f5106e43f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper}>
                        <div className={classes.penDiv}>
                            <img
                                src={penImage}
                                alt='pen-image'
                                className={classes.image}
                            />
                        </div>
                        <TextField
                            value={post.title}
                            name='title'
                            onChange={(e) => handleChange(e)}
                            className={classes.title}
                            id='standard-basic'
                            label='Title of Post'
                        />

                        <div className={classes.upload}>
                            <Typography variant='h5' gutterBottom>
                                Upload Image
                            </Typography>
                            <FileUpload handleSubmit={handleSubmit} />
                        </div>

                        <Typography variant='h5' gutterBottom>
                            Write your content here
                        </Typography>
                        <TextField
                            value={post.content}
                            name='content'
                            onChange={(e) => handleChange(e)}
                            label='Content'
                            placeholder='Write Here'
                            multiline
                            fullWidth
                            rows={6}
                            variant='outlined'
                        />
                        <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default CreateBlogPost;
