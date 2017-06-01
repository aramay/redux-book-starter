import { createStore } from 'redux'
import rootReducer from './reducers/root.js'


// console.log(rootReducer)

const store = createStore(rootReducer)

store.subscribe(() => console.log('store state changed'))

export default store
