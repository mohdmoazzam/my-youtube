import { configureStore } from "@reduxjs/toolkit";
import miscSlice from "../slices/miscSlice";
import searchSlice from "../slices/searchSlice";
import chatSlice from "../slices/chatSlice";

const appStore = configureStore({
  reducer: {
    misc: miscSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default appStore;
