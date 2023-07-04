import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    doctors:[],
    doctor: null,
    doctorByEmail: null
}

export const getAllDoctors = createAsyncThunk('getAllDoctors', async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/doctors/alldoctors/`);
        return data
    } catch (error) {
        return rejectWithValue('no doctors added yet')
    }
})

export const addDoctor = createAsyncThunk('addDoctor', async (docObj, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post('http://127.0.0.1:8000/doctors/registration/', docObj);
        return data
    } catch (error) {
        return rejectWithValue('There is an ERROR!')
    }
})

export const getOneDoctor = createAsyncThunk('getOneDoctor', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/doctors/GetDoctor/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('There is no such a doctor')
    }
})

export const loginDoctor = createAsyncThunk('loginDoctor', async (patObj, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.post('http://127.0.0.1:8000/doctors/login', patObj);
        return data
    } catch (error) {
        return rejectWithValue('NOT EXIST')
    }
})

export const getEmailDoc = createAsyncThunk('getEmailDoc', async (email, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://127.0.0.1:8000/doctors/get_doctor_by_email/${email}`);
        return data
    } catch (error) {
        return rejectWithValue('not found')
    }
})

export const deleteDoctor = createAsyncThunk('deleteDoctor', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.delete(`http://127.0.0.1:8000/doctors/DeleteDoctor/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('not found')
    }
})

export const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {
    },
    extraReducers: builder => { 
        //get all doctors
        builder.addCase(getAllDoctors.pending, state => {
            state.loading = true;
            state.error = null
        })

        builder.addCase(getAllDoctors.fulfilled, (state, action) => {
            state.loading = false;
            state.doctors = action.payload;
            state.error = null
        })

        builder.addCase(getAllDoctors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;  
        })

        //add doctor
        builder.addCase(addDoctor.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(addDoctor.fulfilled, (state, action) => {
            state.loading = false;
            state.doctors.push(action.payload);
            state.error = null
        })

        builder.addCase(addDoctor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

        //get doctor
        builder.addCase(getOneDoctor.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(getOneDoctor.fulfilled, (state, action) => {
            state.loading = false;
            state.doctor = action.payload;
            state.error = null
        })

        builder.addCase(getOneDoctor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

        //doctor login
        builder.addCase(loginDoctor.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(loginDoctor.fulfilled, (state, action) => {
            state.loading = false;
            state.doctor = action.payload;
            state.error = null
        })

        builder.addCase(loginDoctor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

        //doctor by email
        builder.addCase(getEmailDoc.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(getEmailDoc.fulfilled, (state, action) => {
            state.loading = false;
            state.doctorByEmail = action.payload;
            state.error = null
        })

        builder.addCase(getEmailDoc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })

        //delete doctor
        builder.addCase(deleteDoctor.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(deleteDoctor.fulfilled, (state, action) => {
            state.loading = false;
            state.doctors = state.doctors.filter(patient => patient.id !== action.payload);
            state.error = null
        })

        builder.addCase(deleteDoctor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })
    }

})


export default doctorSlice.reducer