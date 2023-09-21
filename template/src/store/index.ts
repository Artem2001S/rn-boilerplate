import {configureStore} from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';

import {rootReducer} from './reducers';

export const createStore = (initialState: any) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({serializableCheck: false}),
      createDebugger(),
    ],
    preloadedState: initialState,
  });

  return store;
};

export const store = createStore({});

export const dispatch = store.dispatch;

export type AppDispatch = typeof store.dispatch;
