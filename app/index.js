import { createStore } from 'redux'

const initialState = {
   name: "Omelette"
}
const reducer = (state, action) => state

const store = createStore(reducer, initialState)


window.store = store
