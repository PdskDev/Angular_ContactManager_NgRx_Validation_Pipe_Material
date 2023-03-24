const TOGGLE_MENU = 'TOGGLE_MENU';

function menuReducer(state: any, action: { type: any; payload: any }) {
  switch (action.type) {
    case TOGGLE_MENU:
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export { menuReducer, TOGGLE_MENU };
