import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: '',
    patient: null,
    sessions: null
}

export const patientSearch = createAsyncThunk('patientSearch', async (phone, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/search_patient/${phone}`);
        return data
    } catch (error) {
        return rejectWithValue('not found')
    }
})

export const patientSessions = createAsyncThunk('patientSessions', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/allSessions/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('this patient has no sessions')
    }
})

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        //search
        builder.addCase(patientSearch.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(patientSearch.fulfilled, (state, action) => {
            state.loading = false;
            state.patient = action.payload;
        })

        builder.addCase(patientSearch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

        //get all sessions
        builder.addCase(patientSessions.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(patientSessions.fulfilled, (state, action) => {
            state.loading = false;
            state.sessions = action.payload;
            console.log(state.sessions);
        })

        builder.addCase(patientSessions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

    }
})

export default patientSlice.reducer