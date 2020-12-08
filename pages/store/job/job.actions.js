export const SET_JOB_DATA = 'SET_JOB_DATA';
export const SET_JOB_DATA_SUCCESSFULL = 'SET_JOB_DATA_SUCCESSFULL';
export const SET_JOB_FILTERED_DATA = 'SET_JOB_FILTERED_DATA';
export const SET_JOB_FILTERED_DATA_SUCCESSFULL = 'SET_JOB_FILTERED_DATA_SUCCESSFULL';
export const SORT_JOB_DATA = 'SORT_JOB_DATA';
export const SORT_JOB_DATA_SUCCESSFULL = 'SORT_JOB_DATA_SUCCESSFULL';


export const setJobData = data => ({
  type: SET_JOB_DATA,
  payload: data,
});

export const setJobDataSuccess = data => ({
  type: SET_JOB_DATA_SUCCESSFULL,
  payload: data,
});

export const setJobFilteredData = selectedValues => ({
  type: SET_JOB_FILTERED_DATA,
  payload: selectedValues,
});

export const setJobFilteredDataSuccess = data => ({
  type: SET_JOB_FILTERED_DATA_SUCCESSFULL,
  payload: data,
});

export const sortJobData = data => ({
  type: SORT_JOB_DATA,
  payload: data,
});

export const sortJobDataSuccess = data => ({
  type: SORT_JOB_DATA_SUCCESSFULL,
  payload: data,
});

