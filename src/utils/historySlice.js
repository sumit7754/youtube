import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'History',
  initialState: {
    List: [],
  },
  reducers: {
    addHistory: (state, action) => {
      console.log(!state.List.includes(action.payload));
      if (state.List.includes(action.payload) === false) {
        state.List.push(action.payload);
        console.log('load');
      }
    },
  },
});

export const { addHistory } = historySlice.actions;

export default historySlice.reducer;
