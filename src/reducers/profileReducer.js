import userService from '../services/users'

const profileReducer = (store = null, action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.data
    default:
      return store
  }
}

export const getUser = (id) => {
  return async (dispatch) => {
    const user = await userService.getUser(id)
    dispatch({
      type: 'GET_USER',
      data: user
    })
  }
}

export default profileReducer
