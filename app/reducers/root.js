import { combineReducers } from 'redux'

// export const ADD_RECIPE = 'ADD_RECIPE';
// export const ADD_INGREDIENT = 'ADD_INGREDIENT';
import { ADD_RECIPE, SET_RECIPES, ADD_INGREDIENT } from 'constants/action-type'


const recipesReducer = (recipes = [], action) => {
  
  switch (action.type) {
    
    case ADD_RECIPE:
    console.log('ADD_RECIPE')
      // console.log(action)
      // console.log('state ', recipes.concat({name: action.name}))
      // console.log(action.name)

      return recipes.concat({name: action.name})

    case SET_RECIPES:
    console.log(action)
      return action
  }

  return recipes
}

const ingriedientsReducer = (ingriedients = [], action) => {
  
  switch (action.type) {
    
    case ADD_INGREDIENT:
      console.log('ADD_INGEDIENT')
      // console.log(state)

      const newIngredient = {
        recipe: action.recipe,
        name: action.name,
        quantity: action.quantity
      }

      return ingriedients.concat(newIngredient)

  }

  return ingriedients
}



export default combineReducers({
  recipes: recipesReducer,
  ingriedients: ingriedientsReducer
})
// const rootReducer = (state = initialState, action) => {
//   return Object.assign({}, state, {
//      recipes: recipesReducer(state.recipes, action),
//      ingriedients: ingriedientsReducer(state.ingriedients, action)
//    })
// }

// const store = createStore(reducer, initialState)

// store.subscribe(() => document.getElementById('counter').innerText = store.getState());

// setInterval(() => store.dispatch({ type: 'INC' }), 500);

// export default rootReducer

