import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers/root.js'
import logMiddleware from 'middleware/log'
import apiMiddleware from 'middleware/api'

// console.log(rootReducer)
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


const store = createStore(rootReducer,
   initialState,
   applyMiddleware(logMiddleware, apiMiddleware)
)

store.subscribe(() => console.log('store state changed'))

export default store
