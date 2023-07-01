import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    patient: null,
    sessions: [],
}

export const patientSessions = createAsyncThunk('patientSessions', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/allSessions/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('this patient has no sessions')
    }
})

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        //get all sessions
        builder.addCase(patientSessions.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(patientSessions.fulfilled, (state, action) => {
            state.loading = false;
            state.sessions = action.payload;
        })

        builder.addCase(patientSessions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

    }
})

export default sessionSlice.reducer