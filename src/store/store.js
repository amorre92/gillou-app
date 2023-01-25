import { configureStore } from '@reduxjs/toolkit'
import historyReducer from './history'

export const store = configureStore({
    reducer: {
        history: historyReducer
    }
})

