import { ItemsActions } from '../Actions/items'

// shape is an empty array
const INITIAL_STATE = {
  myItems: ['nacho', 'burrito', 'hotdog']
}

export function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ItemsActions.ADD_ITEM:
      let newState = { ...state }
      newState.myItems.concat(action.payload)
      return newState
    case ItemsActions.CLEAR:
      return {
        ...INITIAL_STATE
      }
    // TODO
    case ItemsActions.TOGGLE_ITEM:
      return {
        ...state
      }
    default:
      return state
  }
}

export default { items: reducer }
