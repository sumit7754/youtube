import { createSlice } from '@reduxjs/toolkit';

const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState: {
    map: {},
    list: [],
  },
  reducers: {
    addWatchLater: (state, action) => {
      const newItem = action.payload;
      state.list.push(newItem);
      state.map = Object.assign({}, state.map, { [newItem]: true });
    },
    deleteWatchLater: (state, action) => {
      const deletedItem = action.payload;
      state.list = state.list.filter((item) => item !== deletedItem);
      delete state.map[deletedItem];
    },
  },
});

export const { addWatchLater, deleteWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;
