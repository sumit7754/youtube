import { createSlice } from '@reduxjs/toolkit';

const darkSlice = createSlice({
  name: 'toggle',
  initialState: {
    toggle: false,
  },
  reducers: {
    change: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { change } = darkSlice.actions;

export default darkSlice.reducer;
