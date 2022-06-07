import { createSlice } from "@reduxjs/toolkit";




const TestSlice=createSlice({
    name:'test',
    initialState:{},
    reducers:{},
    extraReducers:{}
})
const TestReducer=TestSlice.reducer
export default TestReducer