import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {user:null, token:null},
    reducers: {
        signin: (state,action) => {
            const {user, accesstoken} = action.payload;
            state.user = user;
            state.token=  accesstoken
        },
        signout: (state, action) => {
            state.user = null;
            state.token=  null
        }
    }
})

const {signin,signout} = authSlice.actions;
const selectCurrentUser = (state) => state.auth.user;
const selectCurrentToken = (state) => state.auth.token;

export default authSlice.reducer;
export {signin,signout,selectCurrentToken,selectCurrentUser};