import leagueService from '../services/leagues'

const leagueReducer = (store = [], action) => {
    switch (action.type) {
    case 'GET_LEAGUES':
        return action.data
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

export default leagueReducer
