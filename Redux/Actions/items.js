export const ItemsActions = {
  ADD_ITEM: 'ADD_ITEM',
  CLEAR: 'CLEAR',
  TOGGLE_ITEM: 'TOGGLE_ITEM'
}

// Action creators store.dispatch actions
export const ItemActionCreators = {
  addItem: (item) => {
    return {
      type: ItemsActions.ADD_ITEM
    }
  },

  clear: () => {
    return {
      type: ItemsActions.CLEAR
    }
  },

  toggleItem: () => {
    return {
      type: ItemsActions.TOGGLE_ITEM
    }
  }
}
