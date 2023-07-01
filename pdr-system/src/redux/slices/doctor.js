import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    doctors:[]
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
        })

        builder.addCase(getAllDoctors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;  
        })

        //add patient
        builder.addCase(addDoctor.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(addDoctor.fulfilled, (state, action) => {
            state.loading = false;
            state.doctors.push(action.payload);
            console.log(state.doctors);
        })

        builder.addCase(addDoctor.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;   
        })
    }

})


export default doctorSlice.reducer