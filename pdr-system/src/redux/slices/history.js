import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    history: []
}

export const patientHistory = createAsyncThunk('patientHistory', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/GetHistory/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('this patient has no history')
    }
})

export const updateHistory = createAsyncThunk('updateHistory', async (hisObj,id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post(`http://127.0.0.1:8000/patients/UpdateHistory/${id}/`, hisObj);
        return data
    } catch (error) {
        return rejectWithValue('this patient has no history')
    }
})


export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        //get history
        builder.addCase(patientHistory.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(patientHistory.fulfilled, (state, action) => {
            state.loading = false;
            state.history = action.payload;
        })

        builder.addCase(patientHistory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

        //add history
        builder.addCase(updateHistory.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(updateHistory.fulfilled, (state, action) => {
            state.loading = false;
            state.history.push(action.payload);
        })

        builder.addCase(updateHistory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

    }
})

export default historySlice.reducer