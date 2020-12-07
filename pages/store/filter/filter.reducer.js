import {
    SET_FILTER_DATA_SUCCESSFULLY
} from './filter.actions';

const INITIAL_STATE = {
    filteredList: [],
};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_FILTER_DATA_SUCCESSFULLY:
            return {
                ...state,
                filteredList: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;
