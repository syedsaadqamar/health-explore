import {
  SET_JOB_DATA_SUCCESSFULL,
  SET_JOB_FILTERED_DATA_SUCCESSFULL,
  SORT_JOB_DATA_SUCCESSFULL
} from './job.actions';

const INITIAL_STATE = {
  jobsList: [],
  jobsFilteredData: [],
};

const jobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_JOB_DATA_SUCCESSFULL:
      return {
        ...state,
        jobsList: action.payload,
        jobsFilteredData: action.payload,
      };
    case SET_JOB_FILTERED_DATA_SUCCESSFULL:
      return {
        ...state,
        jobsFilteredData: action.payload,
      };
    case SORT_JOB_DATA_SUCCESSFULL:
      return {
        ...state,
        jobsFilteredData: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
