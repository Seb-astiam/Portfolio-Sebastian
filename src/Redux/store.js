import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice"

const store = configureStore({
  reducer: {
    storage: portfolioReducer,
  },
});

export default store;