import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'  // localStorage

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, counterReducer)

export const store = configureStore({
  reducer: {
    counter: persistedReducer
  },
})

export const persistor = persistStore(store)
