import {RootState} from '@/store/reducers';
import {createSelector} from '@reduxjs/toolkit';
import {sliceName} from './constants';

const rootSelector = createSelector(
  (state: RootState) => state,
  state => state[sliceName],
);
