import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './Player'

export default configureStore({
    reducer: {
        player: playerReducer
    },
})