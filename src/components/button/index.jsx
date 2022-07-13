import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(0),
    },
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}));

const ButtonComponent = ({ text, icon, tip, color, variant }) => {
    const classes = useStyles();

    return (
        <div>
            <Tooltip title={tip}>
                <Button
                    variant={variant}
                    color={color}
                    className={classes.button}
                    endIcon={icon}
                >
                    {text}
                </Button>
            </Tooltip>
        </div>
    );
};

export default ButtonComponent;
