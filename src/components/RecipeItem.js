import React from "react";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import PropTypes from "prop-types";
import IngredientList from "./IngredientList";

const useStyles = makeStyles({
    root: {
        width: 345,
        padding: 15,
        margin: 20,
        backgroundColor: '#F9F9F9'
    },

    avatar: {
        height: 80,
        width: 80,
    },
    recipe: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        color: "#fff",
        padding: 5,
        borderRadius: "50%",
    },
});

function RecipeItem({ id, name, image, ingredients }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar
                        className={classes.avatar}
                        aria-label='recipe'
                        style={{ backgroundImage: "url(" + image + ")" }}
                    >
                        <b className={classes.recipe}>R {id +1}</b>
                    </Avatar>
                }
                titleTypographyProps={{variant:'h5' }}
                title={name}
            ></CardHeader>

            <CardContent>
                <IngredientList ingredients={ingredients} />
            </CardContent>
        </Card>
    );
}

RecipeItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
export default RecipeItem;
