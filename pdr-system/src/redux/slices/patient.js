import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    patient: null,
    patients:[],
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

export const getAllPatients = createAsyncThunk('getAllPatients', async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/allpatients/`);
        return data
    } catch (error) {
        return rejectWithValue('no patients added yet')
    }
})

export const addPatient = createAsyncThunk('addPatient', async (patObj, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post('http://127.0.0.1:8000/patients/registration/', patObj);
        return data
    } catch (error) {
        return rejectWithValue('There is an ERROR!')
    }
})

export const getOnePatient = createAsyncThunk('getOnePatient', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/get_patient/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('not found')
    }
})

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        //search patient
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

        //add patient
         builder.addCase(addPatient.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(addPatient.fulfilled, (state, action) => {
            state.loading = false;
            state.patients.push(action.payload);
        })

        builder.addCase(addPatient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

        //get one patient
        builder.addCase(getOnePatient.pending, state => {
            state.loading = true;
            state.error = null
        })

        builder.addCase(getOnePatient.fulfilled, (state, action) => {
            state.loading = false;
            state.patient = action.payload;
        })

        builder.addCase(getOnePatient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;  
        })

    }
})

export default patientSlice.reducer