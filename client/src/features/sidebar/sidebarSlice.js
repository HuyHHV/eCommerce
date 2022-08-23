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
            state.open = !payload.open? !state.open: payload.open;
            state.form = payload.form
        }
    }
})

export const { toggleSideBar } = sidebarSlice.actions
export default sidebarSlice.reducer; 