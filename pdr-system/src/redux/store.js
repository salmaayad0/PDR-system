import { configureStore } from '@reduxjs/toolkit'
import adminLoginSlice  from './slices/admin'
import patientSlice from './slices/patient'
import doctorSlice  from './slices/doctor'

export const store = configureStore({
  reducer: {
    adminLoginSlice,
    patientSlice,
    doctorSlice,
  },
})

