import React, { useState, useEffect, Fragment } from 'react';
import clsx from "clsx";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { fade, makeStyles, useTheme } from "@material-ui/core/styles";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import InfoIcon from '@material-ui/icons/Info';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloseIcon from '@material-ui/icons/Close';
import {
    Button,
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
} from '@material-ui/core';

const drawerWidth = 240;
const logoURL = './images/logo.png';

const drawerOptions = [
    {
        value: 'Know Your Body Test',
        icon: <CheckCircleIcon />,
    },
    {
        value: 'Meet our Fashion Stylist (Reviews)',
        icon: <EmojiEmotionsRoundedIcon />,
    },
    {
        value: 'Consultancy',
        icon: <AssignmentIndIcon />,
    },
    {
        value: 'Services',
        icon: <AssignmentIcon />,
    },
    {
        value: 'Blogs and Media',
        icon: <PermMediaIcon />,
    },
    {
        value: 'About Us',
        icon: <InfoIcon />,
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        height: '15vh',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        fontSize: '40px',
    },
    search: {
        color: 'rgb(22, 12, 66)',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('rgb(22, 12, 66)', 0.15),
        '&:hover': {
            backgroundColor: fade('rgb(22, 12, 66)', 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(0),
            width: 'auto',
        },
        left: '-40px',
        [theme.breakpoints.up('md')]: {
            left: '20px',
        },
    },
    search2: {
        display: 'flex',
        color: '#fff',
        position: 'absolute',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('rgb(22, 12, 66)', 0.15),
        '&:hover': {
            backgroundColor: fade('rgb(22, 12, 66)', 0.25),
        },
        width: '90%',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    logoDiv: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '30vw',
        [theme.breakpoints.up('md')]: {
            width: '20vw',
        },
    },
    img: {
        height: '100%',
        width: '100%',
    },
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        background: 'rgb(255, 177, 33)',
    },
    grow: {
        flexGrow: 1,
    },
    headDes: {
        textTransform: 'capitalize',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    cartBtn: {
        fontSize: '1.1em',
        color: 'rgb(22, 12, 66)',
        position: 'absolute',
        right: '10px',
        [theme.breakpoints.up('md')]: {
            right: '20px',
        },
    },
    accountBtn: {
        fontSize: '1.1em',
        color: 'rgb(22, 12, 66)',
        position: 'absolute',
        right: '50px',
        [theme.breakpoints.up('md')]: {
            right: '100px',
        },
    },
    smallSearchBtn: {
        position: 'absolute',
        left: '15%',
        color: '#fff',
    },
}));

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    const [searchOpen, setSearchOpen] = useState(false);
    const [term, setTerm] = useState(''); // Search Term

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSearchClick = () => {
        setSearchOpen(true);
    };

    const handleCloseSearchClick = () => {
        setSearchOpen(false);
    };

    useEffect(() => {
        console.log(term);
    }, [term]);

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div>
            <AppBar className={classes.appBar} position='static'>
                <Toolbar className={classes.toolbar}>
                    {!searchOpen ? (
                        <Fragment>
                            <Button
                                style={{
                                    fontSize: '1.2em',
                                    color: 'rgb(22, 12, 66)',
                                }}
                                aria-label='open drawer'
                                onClick={handleDrawerOpen}
                                edge='start'
                                className={clsx(
                                    classes.menuButton,
                                    open && classes.hide
                                )}
                                startIcon={
                                    <MenuIcon style={{ fontSize: '1.2em' }} />
                                }
                            >
                                <p className={classes.headDes}>Menu</p>
                            </Button>

                            {windowDimensions.width >= 960 ? (
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon
                                            style={{
                                                fontSize: '1.7em',
                                                color: '#fff',
                                            }}
                                        />
                                    </div>
                                    <InputBase
                                        value={term}
                                        onChange={handleTermChange}
                                        disabled={open} // If drawer open, can't search
                                        style={{
                                            fontSize: '1.2em',
                                            color: '#fff',
                                        }}
                                        placeholder='Search…'
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        className={classes.headDes}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            ) : (
                                <Button className={classes.smallSearchBtn}>
                                    <SearchIcon onClick={handleSearchClick} />
                                </Button>
                            )}

                            <div className={classes.logoDiv}>
                                <img
                                    className={classes.img}
                                    src={logoURL}
                                    alt='logo-img'
                                />
                            </div>

                            <div className={classes.grow} />

                            <Button
                                className={classes.accountBtn}
                                color='inherit'
                            >
                                <AccountCircleIcon />
                                <p className={classes.headDes}>Account</p>
                            </Button>
                            <Button className={classes.cartBtn} color='inherit'>
                                <ShoppingCartIcon />
                                <p className={classes.headDes}>Cart</p>
                            </Button>
                        </Fragment>
                    ) : (
                        <div className={classes.search2}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                value={term}
                                onChange={handleTermChange}
                                disabled={open}
                                placeholder='Search…'
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <IconButton
                                onClick={handleCloseSearchClick}
                                aria-label='delete'
                            >
                                <CloseIcon style={{ color: '#fff' }} />
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant='persistent'
                anchor='left'
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {drawerOptions.map((option, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon
                                style={{ color: 'rgb(255, 177, 33)' }}
                            >
                                {option.icon}
                            </ListItemIcon>
                            <ListItemText
                                style={{
                                    color: 'rgb(22, 12, 66)',
                                }}
                                primary={option.value}
                            />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Account'].map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon
                                style={{ color: 'rgb(255, 177, 33)' }}
                            >
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default Header;
