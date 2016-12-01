import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import uiState from 'reducers/uiState';
import reps from 'reducers/reps';

export default combineReducers({
	//routing
	routing: routerReducer,
  reps,
  uiState
});
