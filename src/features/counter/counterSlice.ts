import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface CounterState  {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count = 0
    },
    reset: (state) => {
      state.count = 0
    },
    incrementByMount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    }
  }
})

export const {increment, decrement, reset, incrementByMount} = counterSlice.actions

export default counterSlice