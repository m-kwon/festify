import { FETCH_ARTIST } from '../actions/actionTypes';

const reducer = (artist = {}, action) => {
  switch (action.type) {
    case FETCH_ARTIST:
      return action.payload;
    default:
      return artist;
  }
}

export default reducer;