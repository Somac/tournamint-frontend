import tournamentService from '../services/tournaments'

const tournamentPlayerStatsReducer = (store = [], action) => {
    switch (action.type) {
    case 'GET_TOURNAMENT_PLAYER_STATS':
        return action.data
    default:
        return store
    }
}

export const getTournamentPlayerStats = (id) => {
    return async (dispatch) => {
        const stats = await tournamentService.getPlayerStats(id)
        dispatch({
            type: 'GET_TOURNAMENT_PLAYER_STATS',
            data: stats
        })
    }
}

export default tournamentPlayerStatsReducer
