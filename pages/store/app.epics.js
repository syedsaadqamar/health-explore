import { combineEpics } from 'redux-most';
import jobEpics from './job/job.epics';

const rootEpic = combineEpics([
  jobEpics,
]);

export default rootEpic;
