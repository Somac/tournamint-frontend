import tournamentService from '../services/tournaments'

const tournamentReducer = (store = [], action) => {
    switch (action.type) {
    case 'INIT_TOURNAMENTS':
        return action.data
    case 'GET_ONE_TOURNAMENT':
        return action.data
    case 'NEW_TOURNAMENT':
        return [...store, action.data]
    default:
        return store
    }
}

export const tournamentInitialization = () => {
    return async (dispatch) => {
        const tournaments = await tournamentService.getAll()
        dispatch({
            type: 'INIT_TOURNAMENTS',
            data: tournaments
        })
    }
}

export const getOneTournament = (id) => {
    return async (dispatch) => {
        const tournament = await tournamentService.getOne(id)
        dispatch({
            type: 'GET_ONE_TOURNAMENT',
            data: tournament
        })
    }
}

export const addNew = (content) => {
    return async (dispatch) => {
        const newTournament = await tournamentService.addNew(content)
        dispatch({
            type: 'NEW_TOURNAMENT',
            data: newTournament
        })
    }
}

export default tournamentReducer
