import playerService from '../services/players'

const playerReducer = (store = [], action) => {
  switch (action.type) {
    case 'GET_PLAYERS':
      return action.data
    case 'GET_ONE_PLAYER':
      return action.data
    case 'ADD_PLAYER':
      return action.data
    default:
      return store
  }
}

export const getPlayers = () => {
  return async (dispatch) => {
    const players = await playerService.getPlayers()
    dispatch({
      type: 'GET_PLAYERS',
      data: players
    })
  }
}

export const getOnePlayer = (id) => {
  return async (dispatch) => {
    const player = await playerService.getOnePlayer(id)
    dispatch({
      type: 'GET_ONE_PLAYER',
      data: player
    })
  }
}

export const addPlayer = (data) => {
  return async (dispatch) => {
    const player = await playerService.addPlayer(data)
    dispatch({
      type: 'ADD_PLAYER',
      data: player
    })
  }
}

export default playerReducer
