import { ADD_RECIPE, SET_RECIPES } from 'constants/action-type'

export const addRecipe = (name) => ({
  type: ADD_RECIPE, name
})

export const fetchRecipes = () => ({
  type: 'FETCH_RECIPES'
});

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes
});

// export default addRecipe
