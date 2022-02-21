import Actions from "./../ActionTypes";

function authReducer(state = null, action) {
  switch (action.type) {
    case Actions.AUTH.LOGIN:
      return action.payload;
    case Actions.AUTH.CHANGE_PASSWORD:
      return { ...state, data: { ...state.data, forcePasswordChange: false } };
    case Actions.AUTH.LOGOUT:
      return null;
    default:
      return state;
  }
}

export default authReducer;
