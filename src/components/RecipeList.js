import React, { useState, useEffect, useRef } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import RecipeItem from "./RecipeItem";
import Search from "./SearchRecipe";
import Box from "@material-ui/core/Box";
import _ from "lodash";

function RecipeList() {
    const [recipeObj, setRecipeObj] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const ref = useRef(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const api = "http://www.recipepuppy.com/api/";
        const result = await fetch(api);
        if (!result.ok) {
            const message = `An error has occured: ${result.status}`;
            throw new Error(message);
        }
        const getResult = await result.json();

        setRecipeObj(getResult.results);
        ref.current = getResult.results;
        setLoading(false);
    }
    function createRecipe() {
        recipeObj.forEach((value, key) => {
            recipe.push(
                <RecipeItem
                    id={key}
                    name={value.title}
                    image={value.thumbnail}
                    key={key}
                    ingredients={value.ingredients}
                ></RecipeItem>
            );
        });
    }
    function filter(searchTerm) {
        let recipes = ref.current.filter((recipe) => {
            return (
                recipe.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
                -1
            );
        });
        setRecipe([]);
        setRecipeObj(recipes);
    }

    if (loading) {
        return <CircularProgress />;
    }
    if (!loading && !_.isEmpty(recipeObj)) {
        createRecipe();
    }
    console.log(recipeObj);
    console.log(recipe);
    return (
        <Box display='flex' flexWrap='wrap' justifyContent='space-around' style={{padding: '20px'}}>
            <Search handleCharacterSearchTerm={filter} />
            {recipe}
        </Box>
    );
}
export default RecipeList;
