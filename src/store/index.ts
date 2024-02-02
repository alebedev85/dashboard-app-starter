import { createStore } from "redux";
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { rootReducer } from './root-reducer';


export const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;