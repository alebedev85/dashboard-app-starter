import { ADD_CATEGORE } from './categores-actions';
import { DEL_CATEGORE } from './categores-actions';

export const categoresReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CATEGORE: {
            if (!state.includes(action.payload)) {
                return [...state, action.payload]
            }
            return state;
        }
        case DEL_CATEGORE: {
            return state.filter((item) => item !== action.payload);
        }
        default: {
            return state;
        }
    }
};