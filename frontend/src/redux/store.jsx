import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counter/counterSlice.jsx'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})