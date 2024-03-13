import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import postFormReducer from './postForm/postFormSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    postForm: postFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
