import goalService from '../services/goals'

const goalReducer = (store = [], action) => {
  switch (action.type) {
    case 'GET_GOALS':
      return action.data
    case 'GET_GOAL':
      return action.data
    case 'NEW_GOAL':
      return [...store, action.data]
    case 'DELETE_GOAL':
      return store.filter(goal => goal._id !== action.data)
    default:
      return store
  }
}

export const getGoals = () => {
  return async (dispatch) => {
    const goals = await goalService.getAllGoals()
    dispatch({
      type: 'GET_GOALS',
      data: goals
    })
  }
}

export const getGoal = (id) => {
  return async (dispatch) => {
    const goal = await goalService.getOneGoal(id)
    dispatch({
      type: 'GET_GOAL',
      data: goal
    })
  }
}

export const postGoal = (data) => {
  return async (dispatch) => {
    const newgoal = await goalService.addNewGoal(data)
    dispatch({
      type: 'NEW_GOAL',
      data: newgoal
    })
  }
}

export const deleteGoal = (id) => {
  return async (dispatch) => {
    await goalService.deleteGoal(id)
    dispatch({
      type: 'DELETE_GOAL',
      data: id
    })
  }
}

export default goalReducer
