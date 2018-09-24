import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tournamentReducer from './reducers/tournamentReducer'
import leagueReducer from './reducers/leagueReducer'
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
    tournaments: tournamentReducer,
    leagues: leagueReducer,
    form: formReducer
})

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
