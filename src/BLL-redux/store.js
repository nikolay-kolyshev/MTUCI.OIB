import {combineReducers, createStore} from "redux"
import {reducer as formReducer} from "redux-form"

const rootReducer = combineReducers({
    form: formReducer
})

const store = createStore(rootReducer)

export default store

window.store = store
window.state = store.getState()