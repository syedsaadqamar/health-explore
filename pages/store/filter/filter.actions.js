export const SET_FILTER_DATA = 'SET_FILTER_DATA';
export const SET_FILTER_DATA_SUCCESSFULLY = 'SET_FILTER_DATA_SUCCESSFULLY';

export const setFilterData = data => ({
  type: SET_FILTER_DATA,
  payload: data,
});

export const setFilterDataSuccess = data => ({
  type: SET_FILTER_DATA_SUCCESSFULLY,
  payload: data,
});
