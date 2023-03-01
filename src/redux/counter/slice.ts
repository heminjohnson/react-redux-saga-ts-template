import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICounterSlice {
  value: number;
}

const initialState: ICounterSlice = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer } =
  counterSlice;
