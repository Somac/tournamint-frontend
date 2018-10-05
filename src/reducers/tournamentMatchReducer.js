import matchService from '../services/matches'

const tournamentMatchReducer = (store = [], action) => {
    switch (action.type) {
    case 'GET_TOURNAMENT_MATCHES':
        return action.data
    default:
        return store
    }
}

export const getTournamentMatches = (id) => {
    return async (dispatch) => {
        const matches = await matchService.getTournamentMatches(id)
        dispatch({
            type: 'GET_TOURNAMENT_MATCHES',
            data: matches
        })
    }
}

export default tournamentMatchReducer
