import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { resolve } from 'path';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log('incrementAsync.pending');
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { decrement, decrementByAmount, increment, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
