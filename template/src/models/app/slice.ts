import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {sliceName} from './constants';
import {AppState} from './types';

const initialState: AppState = {};

const appSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export default appSlice.reducer;
