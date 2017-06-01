import 'normalize.css/normalize.css'
import 'assets/stylesheets/main.css'
import { createStore } from 'redux'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      console.log(action)
      console.log('state ', state.recipes.concat({name: action.name}))
      console.log(action.name)

      return Object.assign({}, state, {
        recipes: state.recipes.concat({name: action.name})
      })

    case 'ADD_INGREDIENT':
      console.log('ADD_INGEDIENT')
      console.log(state)

      const newIngredient = {
        recipe: action.recipe,
        name: action.name,
        quantity: action.quantity
      }

      return Object.assign({}, state, {
        ingriedients: state.ingriedients.concat(newIngredient)
      })
  }

  return state
}

const initialState = {
  recipes: [
    {
      name: 'Omelette'
    }
  ],
  ingriedients: [
    {
      recipe: 'Omlette',
      name: 'Egg',
      quantity: 2
    }
  ]
}

const store = createStore(reducer, initialState)

// store.subscribe(() => document.getElementById('counter').innerText = store.getState());
store.subscribe(() => console.log('store state changed'))
// setInterval(() => store.dispatch({ type: 'INC' }), 500);

const addRecipe = (name) => ({
  type: 'ADD_RECIPE', name
})

const addIngredient = (recipe, name, quantity) => ({
  type: 'ADD_INGREDIENT', recipe, name, quantity
})
// store.dispatch({type: 'ADD_RECIPE', name: 'Pancake' })
// store.dispatch({type: 'ADD_INGREDIENT', recipe: 'Pancake',  name: 'Eggs', quantity: 2})

store.dispatch(addRecipe('Pancake'))
store.dispatch(addIngredient('Pancake', 'Eggs', 3))

window.store = store
console.log('Redux started')
