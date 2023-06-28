import { configureStore } from '@reduxjs/toolkit'
import adminLoginSlice  from './slices/admin'
import patientSlice from './slices/patient'

export const store = configureStore({
  reducer: {
    adminLoginSlice,
    patientSlice,
  },
})

