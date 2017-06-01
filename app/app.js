import 'normalize.css/normalize.css'
import 'assets/stylesheets/main.css'

import store from 'store/stores.js'

import addRecipe from 'actions/recipes.js'
import addIngredient from 'actions/ingriedients.js'
import loadUI from 'ui/index';

import { fetchRecipes } from './actions/recipes';


loadUI()

// store.dispatch(fetchRecipes());

console.log('before actions ', store.getState())

// store.dispatch(addRecipe('Pancake'))

// store.dispatch(addIngredient('Pancake', 'Eggs', 3))

// store.dispatch(addRecipe('Omlette'))

// store.dispatch(addIngredient('Omelette', 'Eggs', 1))

console.log('after actions ', store.getState())



window.store = store
console.log('Redux started')
