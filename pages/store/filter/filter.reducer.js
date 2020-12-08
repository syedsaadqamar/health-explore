import {
    SET_FILTER_DATA_SUCCESSFULL
} from './filter.actions';

const INITIAL_STATE = {
    filteredList: [],
};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_FILTER_DATA_SUCCESSFULL:
            return {
                ...state,
                filteredList: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;
