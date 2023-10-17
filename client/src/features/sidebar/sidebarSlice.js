import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    open: false,
    form: null,
  },
  reducers: {
    toggleSideBar: (state, { payload }) => {
      if (payload.form) {
        state.form = payload.form
      }
      state.open = payload.open
    },
  },
})

export const { toggleSideBar } = sidebarSlice.actions
export default sidebarSlice.reducer
