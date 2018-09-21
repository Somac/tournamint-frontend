import tournamentService from '../services/tournaments'

const tournamentReducer = (store = [], action) => {
    switch (action.type) {
    case 'INIT_TOURNAMENTS':
        return action.data
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

export default tournamentReducer
