export const loadUserState = () => {
    try {
        const serializedState = localStorage.getItem('loggedUser')
        return JSON.parse(serializedState)
    } catch(e) {
        return null
    }
}

export const saveUserState = (user) => {
    try {
        const serializedState = JSON.stringify(user)
        localStorage.setItem('loggedUser', serializedState)
    } catch(e) {
        //
    }
}

export const removeUserState = () => {
    try {
        localStorage.removeItem('loggedUser')
    } catch(e) {
        //
    }
}
