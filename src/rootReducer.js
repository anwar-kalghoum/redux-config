import { combineReducers } from 'redux';

import message from './reducer';
import messa from './reducer2';

const rootReducer = combineReducers({
  message,
  messa,
});

export default rootReducer;
