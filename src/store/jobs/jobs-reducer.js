import { ADD_POSITIONS } from './jobs-actions'

export const jobsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS: {
            return action.jobs;
        }
        default: {
            return state;
        }
    }
};