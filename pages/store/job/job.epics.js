import { combineEpics, select } from 'redux-most';
import * as most from 'most';
import {
    setJobDataSuccess,
    SET_JOB_DATA,
} from './job.actions';

const setJobDataEpic = ($actions, store) =>
  $actions.thru(select(SET_JOB_DATA)).flatMap(action => {
    return most
      .fromPromise(Promise.resolve())
      .flatMap(() => {
        return most.of(setJobDataSuccess(action.payload));
      })
      .recoverWith(error => {
        return most.of(most.empty());
      });
  });

export default combineEpics([
    setJobDataEpic,
]);
