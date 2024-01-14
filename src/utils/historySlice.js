import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'History',
  initialState: {
    List: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (!state.List.includes(action.payload)) {
        state.List.push(action.payload);
      }
    },
  },
});

export const { addItem } = historySlice.actions;

export default historySlice.reducer;
