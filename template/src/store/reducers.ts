import {combineReducers} from '@reduxjs/toolkit';

import appReducer from '@/models/app/slice';
import {sliceName as sliceNameApp} from '@/models/app/constants';

export const rootReducer = combineReducers({
  [sliceNameApp]: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
