import { configureStore } from "@reduxjs/toolkit";
import miscSlice from "../slices/miscSlice";

const appStore = configureStore({
  reducer: {
    misc: miscSlice,
  },
});

export default appStore;
