import React, { Fragment, useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const ProfilePicture = ({ url }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    // Material UI form handling
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // File Upload Handling
    const onFileChange = async (event) => {
        await setSelectedFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        const formData = new FormData();

        await formData.append('myFile', selectedFile, selectedFile.name);

        console.log(selectedFile);

        // Send request to backend API here async function
    };

    const fileData = () => {
        if (selectedFile) {
            return <div>{selectedFile.name}</div>;
        } else {
            return (
                <div>
                    <p>No File Choosen</p>
                </div>
            );
        }
    };

    return (
        <Fragment>
            <Tooltip title='Upload new picture' onClick={handleClickOpen}>
                <div className='profile-card__img'>
                    <div className='hover'>
                        <AddAPhotoIcon
                            style={{ color: '#00FF00', fontSize: 30 }}
                        />
                    </div>
                    <div className='active'>
                        <img src={url} alt='profile' />
                    </div>
                </div>
            </Tooltip>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby='alert-dialog-slide-title'
                aria-describedby='alert-dialog-slide-description'
            >
                <DialogTitle id='alert-dialog-slide-title'>
                    {'Please upload a new picture'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        style={{ textAlign: 'center' }}
                        id='select-file-btn'
                    >
                        <Button
                            variant='contained'
                            color='primary'
                            component='label'
                        >
                            Choose File
                            <input
                                onChange={(e) => onFileChange(e)}
                                type='file'
                                hidden
                            />
                        </Button>
                    </DialogContentText>

                    <DialogContentText
                        style={{ textAlign: 'center' }}
                        id='file-name'
                    >
                        {fileData()}
                    </DialogContentText>
                    <DialogContentText
                        style={{ textAlign: 'center' }}
                        id='upload-btn'
                    >
                        <Button
                            onClick={(e) => onFileUpload()}
                            variant='contained'
                            color='default'
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
                        </Button>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Exit
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};

export default ProfilePicture;
