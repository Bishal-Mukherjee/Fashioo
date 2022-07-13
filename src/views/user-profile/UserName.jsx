import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import ChangeUserName from './ChangeUserName';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const UserName = ({ name }) => {
    return (
        <div className='profile-card__name'>
            {name}
            <Link to='/change-user-name'>
                <Tooltip title='Edit'>
                    <IconButton color='secondary' aria-label='add an alarm'>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
            </Link>
        </div>
    );
};

export default UserName;
