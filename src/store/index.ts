import { combineReducers, configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export const setupStore = () => configureStore({ reducer: rootReducer });
