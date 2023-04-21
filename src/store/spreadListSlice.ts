import {createSlice} from '@reduxjs/toolkit';

export type Spread = {
  spread: number;
  volume: number;
  timestamp: Date;
};

export type SpreadListState = {
  spreads: Spread[];
  loading: boolean;
  error: boolean;
};

const initialState: SpreadListState = {
  spreads: [],
  loading: false,
  error: false,
};

const spreadListSlice = createSlice({
  name: 'spreadList',
  initialState: initialState,
  reducers: {},
});

export default spreadListSlice.reducer;
