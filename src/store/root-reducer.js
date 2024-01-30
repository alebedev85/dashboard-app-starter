import { combineReducers } from 'redux';

import { categores } from './categores/categores-reducer';
import { filters } from './filters/filters-reducer';
import { jobsReducer } from './jobs/jobs-reducer';

export const rootReducer = combineReducers({
    categores,
    filters,
    jobs: jobsReducer
});