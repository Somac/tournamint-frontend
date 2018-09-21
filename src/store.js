import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tournamentReducer from './reducers/tournamentReducer'

const reducer = combineReducers({
    tournaments: tournamentReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store