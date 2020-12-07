export const SET_FILTER_DATA = 'SET_JOB_DATA';
export const SET_FILTER_DATA_SUCCESSFULLY = 'SET_JOB_DATA_SUCCESSFULLY';

export const setFilterData = data => ({
  type: SET_FILTER_DATA,
  payload: data,
});

export const setFilterDataSuccess = data => ({
  type: SET_FILTER_DATA_SUCCESSFULLY,
  payload: data,
});
