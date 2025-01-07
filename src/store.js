import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : 'park' 
})
let user = createSlice({
    name : 'user',
    initialState : 'park' 
})
let user = createSlice({
    name : 'user',
    initialState : 'park' 
})
export default configureStore({
    reducer : {
        user : user.reducer
     }
})