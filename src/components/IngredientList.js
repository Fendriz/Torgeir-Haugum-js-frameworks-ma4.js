import React from "react";
import PropTypes from "prop-types";
import List from '@material-ui/core/List';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';


const useStyles = makeStyles({
    list: {
        maxHeight: 250,
        overflow: 'auto'
    }
});

function IngredientList({ ingredients }) {
    const classes = useStyles();
    const iArray = ingredients.split(",");
    let key=0;
    return (
        <List className={classes.list}>
            {iArray.map((ingred) => (
                <ListItem key={key++}>
                    <ListItemIcon >
                        <CheckIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        {ingred}
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
}

IngredientList.propTypes = {
    ingredients: PropTypes.string.isRequired,
   
};

export default IngredientList;
