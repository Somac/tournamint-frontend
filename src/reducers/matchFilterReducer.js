const matchFilterReducer = (store = { filter: 'ALL', team: 'ALL' }, action) => {
    switch (action.type) {
        case 'FILTER':
            return { ...store, filter: action.filter }
        case 'TEAM_FILTER':
            return { ...store, team: action.filter }
        default:
            return store
    }
}

export const matchFilter = (filter) => {
    return {
        type: 'FILTER',
        filter
    }
}

export const teamFilter = (filter) => {
    return {
        type: 'TEAM_FILTER',
        filter
    }
}

export default matchFilterReducer
