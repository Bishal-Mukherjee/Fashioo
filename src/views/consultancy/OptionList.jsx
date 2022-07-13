import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const OptionList = ({ options, onOptionSelect, answers, questionsStep }) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    useEffect(() => {
        setSelectedIndex(null);
    }, [answers]);

    const handleListItemClick = (index, option) => {
        //console.log(selectedIndex);
        setSelectedIndex(index);
        onOptionSelect(option);
        answers[questionsStep] = option;
    };

    const listItems = options.map((option, index) => {
        return (
            <List key={index} component='nav'>
                <ListItem
                    button
                    selected={
                        selectedIndex === index ||
                        answers[questionsStep] === option
                    }
                    onClick={(e) => handleListItemClick(index, option)}
                >
                    <ListItemText primary={option} />
                </ListItem>
            </List>
        );
    });

    return (
        <div style={{ margin: 'auto' }} className={classes.root}>
            {listItems}
        </div>
    );
};

export default OptionList;
