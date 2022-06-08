import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./Reducer/NotesReducer";

const store = configureStore({
  reducer: {
    NotesReducer,
  },
});
export default store;
