import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    patient: null,
    patients:[],
    patientByEmail: null
}

export const patientSearch = createAsyncThunk('patientSearch', async (phone, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/search_patient/${phone}`);
        return data
    } catch (error) {
        return rejectWithValue('not found, please regiser first')
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

export const loginPatient = createAsyncThunk('loginPatient', async (patObj, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post('http://127.0.0.1:8000/patients/login', patObj);
        return data
    } catch (error) {
        return rejectWithValue('NOT EXIST')
    }
})

export const getEmailPatient = createAsyncThunk('getEmailPatient', async (email, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/patients/get_patient_by_email/${email}`);
        return data
    } catch (error) {
        return rejectWithValue('not found')
    }
})

export const deletePatient = createAsyncThunk('deletePatient', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.delete(`http://127.0.0.1:8000/patients/DeletePatient/${id}`);
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
            state.error = null;
            state.patient = null;
        })

        builder.addCase(patientSearch.fulfilled, (state, action) => {
            state.loading = false;
            state.patient = action.payload;
            state.error = null;
        })

        builder.addCase(patientSearch.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload; 
            state.patient = null; 
        })

        //get all patients
        builder.addCase(getAllPatients.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(getAllPatients.fulfilled, (state, action) => {
            state.loading = false;
            state.patients = action.payload;
            state.error = null
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
            state.error = null
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
            state.error = null
        })

        builder.addCase(getOnePatient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;  
        })

        //patient login
        builder.addCase(loginPatient.pending, state => {
            state.loading = true;
            state.error = null
        })

        builder.addCase(loginPatient.fulfilled, (state, action) => {
            state.loading = false;
            state.patient = action.payload;
            state.error = null
        })

        builder.addCase(loginPatient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;  
        })

        //get by email 
        builder.addCase(getEmailPatient.pending, state => {
            state.loading = true;
            state.error = null
        })

        builder.addCase(getEmailPatient.fulfilled, (state, action) => {
            state.loading = false;
            state.patientByEmail = action.payload;
            state.error = null
        })

        builder.addCase(getEmailPatient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;  
        })

        //delete patient 
        builder.addCase(deletePatient.pending, state => {
            state.loading = true;
            state.error = null
        })

        builder.addCase(deletePatient.fulfilled, (state, action) => {
            state.loading = false;
            state.patients = state.patients.filter(doctor => doctor.id !== action.payload);
            state.error = null
        })

        builder.addCase(deletePatient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;  
        })

    }
})

export default patientSlice.reducer