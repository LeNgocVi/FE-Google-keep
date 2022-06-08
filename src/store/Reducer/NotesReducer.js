import { createSlice } from "@reduxjs/toolkit";

const NotesSlice = createSlice({
  name: "test",
  initialState: {},
  reducers: {},
  extraReducers: {},
});
const NotesReducer = NotesSlice.reducer;
export default NotesSlice;
