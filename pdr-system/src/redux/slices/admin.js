import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    adminState: null,
}

export const adminLoginCheck = createAsyncThunk('adminLoginCheck', async (obj, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post('http://127.0.0.1:8000/api/token/', obj);
        return data
    } catch (error) {
        return rejectWithValue('You are not allowed to login')
    }
})


export const adminLoginSlice = createSlice({
    name: 'adminLogin',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        //admin login check
        builder.addCase(adminLoginCheck.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(adminLoginCheck.fulfilled, (state, action) => {
            state.loading = false;
            state.adminState = action.payload;
            console.log(action.payload);
        })

        builder.addCase(adminLoginCheck.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.adminState = null;     
        })

    }
})

export default adminLoginSlice.reducer