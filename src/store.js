import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tournamentReducer from './reducers/tournamentReducer'
import leagueReducer from './reducers/leagueReducer'
import gameReducer from './reducers/gameReducer'
import { reducer as formReducer } from 'redux-form'
import teamReducer from './reducers/teamReducer'
import { createLogger } from 'redux-logger'
import userReducer from './reducers/userReducer'
import playerReducer from './reducers/playerReducer'
import tournamentMatchReducer from './reducers/tournamentMatchReducer'
import matchReducer from './reducers/matchReducer'
import goalReducer from './reducers/goalReducer'
import matchFilterReducer from './reducers/matchFilterReducer'
import tournamentStandingsReducer from './reducers/tournamentStandingsReducer'
import tournamentPlayerStatsReducer from './reducers/tournamentPlayerStatsReducer'
import profileReducer from './reducers/profileReducer';
import playerFilterReducer from './reducers/playerFilterReducer';

const logger = createLogger({
  level: 'debug' 
}) 

const reducer = combineReducers({
  tournaments: tournamentReducer,
  leagues: leagueReducer,
  games: gameReducer,
  form: formReducer,
  teams: teamReducer,
  user: userReducer,
  players: playerReducer,
  tournamentMatches: tournamentMatchReducer,
  match: matchReducer,
  goals: goalReducer,
  matchFilters: matchFilterReducer,
  tournamentStandings: tournamentStandingsReducer,
  tournamentPlayerStats: tournamentPlayerStatsReducer,
  profile: profileReducer,
  playerFilters: playerFilterReducer,
})

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

export const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
)
