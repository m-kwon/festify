import { FETCH_FEST } from '../actions/actionTypes';

const reducer = (festival = {}, action) => {
  switch (action.type) {
    case FETCH_FEST:
      return action.payload;
    default:
      return festival;
  }
}

export default reducer;