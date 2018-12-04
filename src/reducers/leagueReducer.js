import leagueService from '../services/leagues'

const leagueReducer = (store = [], action) => {
  switch (action.type) {
    case 'GET_LEAGUES':
      return action.data
    case 'ADD_LEAGUE':
      return [...store, action.data]
    case 'GET_ONE_LEAGUE':
      return store.map(league =>
        league._id === action.id ?
          action.data : league
      )
    default:
      return store
  }
}

export const getLeagues = () => {
  return async (dispatch) => {
    const leagues = await leagueService.getAllLeagues()
    dispatch({
      type: 'GET_LEAGUES',
      data: leagues
    })
  }
}

export const addLeague = (data) => {
  return async (dispatch) => {
    const league = await leagueService.addLeague(data)
    dispatch({
      type: 'ADD_LEAGUE',
      data: league
    })
  }
}

export const getOneLeague = (id) => {
  return async (dispatch) => {
    const league = await leagueService.getOneLeague(id)
    dispatch({
      type: 'GET_ONE_LEAGUE',
      data: league,
      id
    })
  }
}

export default leagueReducer
