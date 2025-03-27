import { configureStore } from "@reduxjs/toolkit";
import wizardReducer from "../store/wizardSlice";

const store = configureStore({
  reducer: {
    wizard: wizardReducer,
  },
});

export default store;
