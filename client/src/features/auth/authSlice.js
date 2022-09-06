import { createSlice } from "@reduxjs/toolkit";
import {signin, signup} from './authAction'
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        userInfo: null, // for user object
        userToken: null, // for storing the JWT
        error: null,
        success: false, // for monitoring the registration process.
    },
    reducers:{},
    extraReducers: {
        [signup.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [signup.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error = null
            state.userToken = payload.token
            state.userInfo = payload.userInfo
            state.success = true // registration successful
        },
        [signup.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [signin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [signin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error = null
            state.userToken = payload.token
            state.userInfo = payload.userInfo
            state.success = true // registration successful
        },
        [signin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
},
})

export default authSlice.reducer