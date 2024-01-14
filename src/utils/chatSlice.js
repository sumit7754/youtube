import { createSlice } from '@reduxjs/toolkit';
import { OFFSET_LIVE } from './contant';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(OFFSET_LIVE, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
