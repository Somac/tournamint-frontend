import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tournamentReducer from './reducers/tournamentReducer'
import leagueReducer from './reducers/leagueReducer'
import gameReducer from './reducers/gameReducer'
import { reducer as formReducer } from 'redux-form'
import teamReducer from './reducers/teamReducer';

const reducer = combineReducers({
    tournaments: tournamentReducer,
    leagues: leagueReducer,
    games: gameReducer,
    form: formReducer,
    teams: teamReducer
})

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
