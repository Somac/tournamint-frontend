import teamService from '../services/teams'

const teamReducer = (store = [], action) => {
  switch (action.type) {
    case 'GET_TEAMS':
      return action.data
    case 'ADD_TEAM':
      return [...store, action.data]
    case 'GET_ONE_TEAM':
      return action.data
    default:
      return store
  }
}

export const getTeams = () => {
  return async (dispatch) => {
    const teams = await teamService.getAllTeams()
    dispatch({
      type: 'GET_TEAMS',
      data: teams
    })
  }
}

export const addTeam = (data) => {
  return async (dispatch) => {
    const team = await teamService.addTeam(data)
    dispatch({
      type: 'ADD_TEAM',
      data: team
    })
  }
}

export const getOneTeam = (slug) => {
  return async (dispatch) => {
    const team = await teamService.getOneTeam(slug)
    dispatch({
      type: 'GET_ONE_TEAM',
      data: team
    })
  }
}

export default teamReducer
