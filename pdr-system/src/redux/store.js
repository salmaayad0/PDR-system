import { configureStore } from '@reduxjs/toolkit'
import adminLoginSlice  from './slices/admin'
import sessionSlice  from './slices/session'
import historySlice  from './slices/history'
import patientSlice from './slices/patient'
import doctorSlice  from './slices/doctor'

export const store = configureStore({
  reducer: {
    adminLoginSlice,
    sessionSlice,
    historySlice,
    patientSlice,
    doctorSlice,
  },
})

