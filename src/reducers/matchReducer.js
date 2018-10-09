import matchService from '../services/matches'

const matchReducer = (store = [], action) => {
    switch (action.type) {
        case 'GET_MATCH':
            return action.data
        case 'NEW_GOAL':
            const goals = [...store.goals, action.data]
            return { ...store, goals }
        case 'COMPLETE_MATCH':
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

export const completeMatch = (id, data) => {
    return async (dispatch) => {
        const match = await matchService.completeMatch(id, data)
        dispatch({
            type: 'COMPLETE_MATCH',
            data: match
        })
    }
}

export default matchReducer
