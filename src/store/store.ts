import {combineReducers, configureStore} from '@reduxjs/toolkit';
import spreadListSlice from './spreadListSlice';

const rootReducer = combineReducers({
  spreadList: spreadListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
