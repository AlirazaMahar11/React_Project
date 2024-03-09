import { configureStore } from '@reduxjs/toolkit'
import Slices from './CreateSlices/Slices';

const store = configureStore({
  reducer: {
    Slices:Slices
  },
})

export default store;