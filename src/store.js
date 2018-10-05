import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tournamentReducer from './reducers/tournamentReducer'
import leagueReducer from './reducers/leagueReducer'
import gameReducer from './reducers/gameReducer'
import { reducer as formReducer } from 'redux-form'
import teamReducer from './reducers/teamReducer'
import logger from 'redux-logger'
import userReducer from './reducers/userReducer'
import playerReducer from './reducers/playerReducer'
import tournamentMatchReducer from './reducers/tournamentMatchReducer'
import matchReducer from './reducers/matchReducer'

const reducer = combineReducers({
    tournaments: tournamentReducer,
    leagues: leagueReducer,
    games: gameReducer,
    form: formReducer,
    teams: teamReducer,
    user: userReducer,
    players: playerReducer,
    tournamentMatches: tournamentMatchReducer,
    match: matchReducer
})

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
