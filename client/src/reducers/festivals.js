import { FETCH_FESTS, ATTEND, FAV_FEST, CREATE } from '../actions/actionTypes';

const reducer = (festivals = [], action) => {
  switch (action.type) {
    case FETCH_FESTS:
      return action.payload;
    case CREATE:
      return [...festivals, action.payload];
    case ATTEND:
    case FAV_FEST:
      return festivals.map((festival) => festival._id === action.payload._id ? action.payload : festival);
    default:
      return festivals;
  }
}

export default reducer;