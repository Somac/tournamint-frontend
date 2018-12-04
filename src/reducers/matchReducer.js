import matchService from '../services/matches'

const matchReducer = (store = [], action) => {
  switch (action.type) {
    case 'GET_MATCH':
      return action.data
    case 'NEW_GOAL':
      console.log(action.data)
      const goals = [...store.goals, action.data]
      console.log(goals)
      return { ...store, goals }
    case 'COMPLETE_MATCH':
      return action.data
    case 'OPEN_MATCH':
      return action.data
    case 'DELETE_GOAL':
      const newGoals = store.goals.filter(goal => goal._id !== action.data)
      return { ...store, goals: newGoals }
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

export const openMatch = (id) => {
  return async (dispatch) => {
    const match = await matchService.openMatch(id)
    dispatch({
      type: 'OPEN_MATCH',
      data: match
    })
  }
}

export default matchReducer
