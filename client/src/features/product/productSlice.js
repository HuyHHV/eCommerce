import { createSlice } from "@reduxjs/toolkit";
import  {getAllProduct} from './productAction'
const authSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        productData: null, // for data object
        error: null,
        success: false, // for monitoring the registration process.
    },
    reducers:{},
    extraReducers: {
        [getAllProduct.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getAllProduct.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.productData = payload
            state.success = true // registration successful
        },
        [getAllProduct.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
},
})

export default authSlice.reducer