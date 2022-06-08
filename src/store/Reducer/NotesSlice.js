// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const NotesSlice = createSlice({
//   name: "notes",
//   initialState: {
//     notes: [],
//   },
//   reducers: {},
//   extraReducers: {
//     [fetchData.fulfilled]: (state, action) => {
//       return (state.notes = action.payload);
//     },
//     [fetchData.rejected]: (state, action) => {
//       return (state.notes = action.payload);
//     },
//   },
// });

// // Reducer
// const notesReducer = NotesSlice.reducer;

// //Selector
// export const notesSelector = (state) => state.notesReducer.notes;

// // Action export
// export const { addNote, notesFetch } = NotesSlice.actions;

// export default notesReducer;
