import { combineReducers } from 'redux';
import jobReducer from './job/job.reducer';

export default combineReducers({
  job: jobReducer,
});
