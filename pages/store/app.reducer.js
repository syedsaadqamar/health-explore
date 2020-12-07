import { combineReducers } from 'redux';
import jobReducer from './job/job.reducer';
import filterReducer from './filter/filter.reducer';

export default combineReducers({
  job: jobReducer,
  filter: filterReducer,
});
