import userService from '../services/users'
import loginService from '../services/login'
import { saveUserState, loadUserState, removeUserState } from '../localStorage'

const userReducer = (store = null, action) => {
    switch (action.type) {
    case 'LOAD_DATA_FROM_STORAGE':
        return loadUserState()
    case 'REGISTER':
        return action.data
    case 'LOGIN':
        saveUserState(action.data)
        return action.data
    case 'LOGOUT':
        removeUserState()
        return null
    default:
        return store
    }
}

export const addUser = (data) => {
    return async (dispatch) => {
        const user = await userService.addUser(data)
        dispatch({
            type: 'REGISTER',
            data: user
        })
    }
}

export const login = (credentials) => {
    return async (dispatch) => {
        const user = await loginService.login(credentials)
        dispatch({
            type: 'LOGIN',
            data: user
        })
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}

export const loadFromState = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOAD_DATA_FROM_STORAGE'
        })
    }
}

export default userReducer
