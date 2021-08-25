import { combineReducers } from 'redux';

import festivals from './festivals';
import festival from './festival';
import artists from './artists';

export default combineReducers({
  festivals,
  festival,
  artists
});