import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import historySlice from './historySlice';
import darkSlice from './darkSlice';
import wacthLaterSlice from './wacthLaterSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    History: historySlice,
    color: darkSlice,
    watchLater: wacthLaterSlice,
  },
});

export default store;
