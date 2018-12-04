import gameService from '../services/games'

const gameReducer = (store = [], action) => {
  switch (action.type) {
    case 'GET_GAMES':
      return action.data
    case 'GET_GAME':
      return action.data
    case 'NEW_GAME':
      return [...store, action.data]
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

export const getGame = (id) => {
  return async (dispatch) => {
    const game = await gameService.getOneGame(id)
    dispatch({
      type: 'GET_GAME',
      data: game
    })
  }
}

export const postGame = (data) => {
  return async (dispatch) => {
    const newGame = await gameService.addNewGame(data)
    dispatch({
      type: 'NEW_GAME',
      data: newGame
    })
  }
}

export default gameReducer
