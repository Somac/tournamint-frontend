import tournamentService from '../services/tournaments'

const tournamentStandingsReducer = (store = [], action) => {
  switch (action.type) {
    case 'GET_TOURNAMENT_STANDINGS':
      return action.data
    default:
      return store
  }
}

export const getTournamentStandings = (id) => {
  return async (dispatch) => {
    const standings = await tournamentService.getTournamentStandings(id)
    dispatch({
      type: 'GET_TOURNAMENT_STANDINGS',
      data: standings
    })
  }
}

export default tournamentStandingsReducer
