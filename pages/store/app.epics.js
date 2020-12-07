import { combineEpics } from 'redux-most';
import jobEpics from './job/job.epics';
import filterEpics from './filter/filter.epics';

const rootEpic = combineEpics([
  jobEpics,
  filterEpics,
]);

export default rootEpic;
