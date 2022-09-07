import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const signup = createAsyncThunk(
    'auth/signup',
    async ({fisrtName,lastName,address,email,password}, {rejectWithValue}) => {
        try{
            const config = {
                header: {
                    'Content-Type': 'application/json',
                }
            };
            // make request to backend
            const {data} = await axios.post(
                    'api/auth/signup',
                    {fisrtName,lastName,address,email,password},
                    config
            );
                      
            return data;
        }
        catch(error) {
            if (error.response && error.response.data.message) {
                console.log()
                return rejectWithValue(error.response.data.message)
                }  
            return rejectWithValue(error.message)
        
    }
    }
);

const signin = createAsyncThunk(
    'auth/signin',
    async ({email,password}, {rejectWithValue}) => {
        try{
            const config = {
                header: {
                    'Content-Type': 'application/json',
                }
            };
            // make request to backend
            const {data} = await axios.post(
                    'api/auth/signin',
                    {email,password},
                    config
            );
                     
            return data;
        }
        catch(error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data)
                }  
            return rejectWithValue(error.message)
        
    }
    }
);

 

export {signup,signin}