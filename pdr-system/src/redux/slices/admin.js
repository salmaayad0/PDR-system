import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    admin: null,
    error: '',
}

export const adminLoginCheck = createAsyncThunk('adminLoginCheck', async (obj, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post('http://127.0.0.1:8000/api/token/', obj);
        return data
    } catch (error) {
        return rejectWithValue('There is an ERROR!')
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
            state.admin = action.payload;
        })

        builder.addCase(adminLoginCheck.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
})

export default adminLoginSlice.reducer
