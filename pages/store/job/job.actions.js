export const SET_JOB_DATA = 'SET_JOB_DATA';
export const SET_JOB_DATA_SUCCESSFULLY = 'SET_JOB_DATA_SUCCESSFULLY';

export const setJobData = data => ({
  type: SET_JOB_DATA,
  payload: data,
});

export const setJobDataSuccess = data => ({
  type: SET_JOB_DATA_SUCCESSFULLY,
  payload: data,
});

