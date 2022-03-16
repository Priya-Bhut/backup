import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

const reducer = combineReducers({
  session: sessionReducer,
});

export default reducer;
