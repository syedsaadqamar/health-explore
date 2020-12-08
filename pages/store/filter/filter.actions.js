export const SET_FILTER_DATA = 'SET_FILTER_DATA';
export const SET_FILTER_DATA_SUCCESSFULL = 'SET_FILTER_DATA_SUCCESSFULL';

export const setFilterData = data => ({
  type: SET_FILTER_DATA,
  payload: data,
});

export const setFilterDataSuccess = data => ({
  type: SET_FILTER_DATA_SUCCESSFULL,
  payload: data,
});
