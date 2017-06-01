import { ADD_INGREDIENT } from 'constants/action-type'

const addIngredient = (recipe, name, quantity) => ({
  type: ADD_INGREDIENT, recipe, name, quantity
})

export default addIngredient
