import gameService from '../services/games'

const gameReducer = (store = [], action) => {
    switch (action.type) {
    case 'GET_GAMES':
        return action.data
    default:
        return store
    }
}

export const getGames = () => {
    return async (dispatch) => {
        const games = await gameService.getAllGames()
        dispatch({
            type: 'GET_GAMES',
            data: games
        })
    }
}

export default gameReducer
