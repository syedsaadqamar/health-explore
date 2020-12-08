import { combineEpics, select } from 'redux-most';
import * as most from 'most';
import {
  setJobDataSuccess,
  SET_JOB_DATA,
  SET_JOB_FILTERED_DATA,
  setJobFilteredDataSuccess,
  SORT_JOB_DATA,
  sortJobDataSuccess,
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

const setJobFilteredDataEpic = ($actions, store) =>
  $actions.thru(select(SET_JOB_FILTERED_DATA)).flatMap(action => {
    const { jobsList } = store.getState().job;
    const filteredData = [];
    for(const job of jobsList) {
      if (job.name.toLowerCase().includes(action.payload) || job.job_title.toLowerCase().includes(action.payload)) {
        filteredData.push(job);
      }
    }
    return most.of(setJobFilteredDataSuccess(filteredData));
  });

const sortJobDataEpic = ($actions, store) =>
  $actions.thru(select(SORT_JOB_DATA)).flatMap(action => {
    console.log(action);
    const { jobsList } = store.getState().job;
    return most.of(sortJobDataSuccess(jobsList));
  });

export default combineEpics([
  setJobDataEpic,
  setJobFilteredDataEpic,
  sortJobDataEpic,
]);
