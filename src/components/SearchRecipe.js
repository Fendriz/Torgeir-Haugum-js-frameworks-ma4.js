import React from 'react'
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textfields: {
    
      displa: 'block',
      width: '100%'
    
  },
});


function SerchRecipe({handleCharacterSearchTerm}){
    const classes = useStyles();

    return(
        <TextField className={classes.textfields}
        id="standard-search"
        type="search"
        onChange={(e) =>
            handleCharacterSearchTerm(e.target.value)
        }
       
        label="Search Recipes"
    />
    );

}
SerchRecipe.propTypes = {
	handleCharacterSearchTerm: PropTypes.func.isRequired
};
export default SerchRecipe;