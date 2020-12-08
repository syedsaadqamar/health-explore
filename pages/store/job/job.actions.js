export const SET_JOB_DATA = 'SET_JOB_DATA';
export const SET_JOB_DATA_SUCCESSFULL = 'SET_JOB_DATA_SUCCESSFULL';
export const SET_JOB_FILTERED_DATA = 'SET_JOB_FILTERED_DATA';
export const SET_JOB_FILTERED_DATA_SUCCESSFULL = 'SET_JOB_FILTERED_DATA_SUCCESSFULL';

export const setJobData = data => ({
  type: SET_JOB_DATA,
  payload: data,
});

export const setJobDataSuccess = data => ({
  type: SET_JOB_DATA_SUCCESSFULL,
  payload: data,
});

export const setJobFilteredData = searchText => ({
  type: SET_JOB_FILTERED_DATA,
  payload: searchText,
});

export const setJobFilteredDataSuccess = data => ({
  type: SET_JOB_FILTERED_DATA_SUCCESSFULL,
  payload: data,
});

