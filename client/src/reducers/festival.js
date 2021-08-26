import { CURRENT_FEST } from '../actions/actionTypes';

const reducer = (festival = {}, action) => {
  switch (action.type) {
    case CURRENT_FEST:
      return action.payload;
    default:
      return festival;
  }
}

export default reducer;