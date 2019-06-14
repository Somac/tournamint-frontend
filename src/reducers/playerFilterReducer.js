const playerFilterReducer = (store = { filter: 'ALL', sort: 'DEFAULT' }, action) => {
  switch (action.type) {
    case 'PLAYER_SORT':
      return { ...store, sort: action.sort }
    case 'PLAYER_FILTER':
      return { ...store, filter: action.filter }
    default:
        return store
  }
}

export const playerFilter = (filter) => {
  return {
    type: 'PLAYER_FILTER',
    filter
  }
}

export const playerSort = (sort) => {
  return {
    type: 'PLAYER_SORT',
    sort
  }
}

export default playerFilterReducer
