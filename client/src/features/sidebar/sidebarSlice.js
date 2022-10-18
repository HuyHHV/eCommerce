import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        open: false,
        form: null
    },
    reducers: {
        toggleSideBar : (state,{payload}) => {
            // if payload.open is null => useopposite state
            if(payload.form) {state.form = payload.form};
            let prev = state.open;
            state.open = !prev;
        }
    }
})

export const { toggleSideBar } = sidebarSlice.actions
export default sidebarSlice.reducer; 