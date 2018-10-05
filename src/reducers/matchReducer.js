import matchService from '../services/matches'

const matchReducer = (store = [], action) => {
    switch (action.type) {
    case 'GET_MATCH':
        return action.data
    default:
        return store
    }
}

export const getOneMatch = (slug) => {
    return async (dispatch) => {
        const match = await matchService.getOneMatch(slug)
        dispatch({
            type: 'GET_MATCH',
            data: match
        })
    }
}

export default matchReducer
