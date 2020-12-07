import {
    SET_JOB_DATA
  } from './job.actions';
  
  const INITIAL_STATE = {
    jobsList: [],
  };
  
  const jobReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_JOB_DATA:
        return {
          ...state,
          jobsList: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  