import { configureStore } from '@reduxjs/toolkit'
import historyReducer from './history'
import toneReducer from './tone'

export const store = configureStore({
    reducer: {
        history: historyReducer,
        tone: toneReducer
    }
})

