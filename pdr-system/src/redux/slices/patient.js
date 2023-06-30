import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    patient: null,
    patients:[],
    sessions: [],
    history: []
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

export const patientHistory = createAsyncThunk('patientHistory', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/GetHistory/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('this patient has no history')
    }
})

export const getAllPatients = createAsyncThunk('getAllPatients', async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/allpatients/`);
        return data
    } catch (error) {
        return rejectWithValue('no patients added yet')
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
            state.error = null
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
        })

        builder.addCase(patientSessions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

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

        //get all patients
        builder.addCase(getAllPatients.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(getAllPatients.fulfilled, (state, action) => {
            state.loading = false;
            state.patients = action.payload;
        })

        builder.addCase(getAllPatients.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

    }
})

export default patientSlice.reducer