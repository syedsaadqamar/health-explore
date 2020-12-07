import { combineEpics, select } from 'redux-most';
import * as most from 'most';
import {
    SET_FILTER_DATA,
    setFilterDataSuccess,
} from './filter.actions';

const setFilterDataEpic = ($actions, store) =>
  $actions.thru(select(SET_FILTER_DATA)).flatMap(action => {
    return most
      .fromPromise(Promise.resolve())
      .flatMap(() => {
        return most.of(setFilterDataSuccess(action.payload));
      })
      .recoverWith(error => {
        return most.of(most.empty());
      });
  });

export default combineEpics([
    setFilterDataEpic,
]);
