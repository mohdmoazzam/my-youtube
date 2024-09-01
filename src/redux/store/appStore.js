import { configureStore } from "@reduxjs/toolkit";
import miscSlice from "../slices/miscSlice";
import searchSlice from "../slices/searchSlice";

const appStore = configureStore({
  reducer: {
    misc: miscSlice,
    search: searchSlice,
  },
});

export default appStore;
