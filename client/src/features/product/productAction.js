import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const getAllProduct = createAsyncThunk(
    'products/getAllProduct',
    async(numberOfProduct,{rejectWithValue}) => {
        try{
            const config = {
                header: {
                    'Content-Type': 'application/json',
                }
            };
            const {data} = await axios.get(`api/product/${numberOfProduct}`,config)
        }catch(error) { 
            if (error.response && error.response.data.message) {
            console.log()
            return rejectWithValue(error.response.data.message)
            }  
        return rejectWithValue(error.message)}
    }
)

export {getAllProduct}