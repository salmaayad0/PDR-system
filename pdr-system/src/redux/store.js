import { configureStore } from '@reduxjs/toolkit'
import adminLoginSlice  from './slices/admin'

export const store = configureStore({
  reducer: {
    adminLoginSlice,
  },
})

