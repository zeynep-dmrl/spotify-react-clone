//for player store

//import the createSlice API from Redux Toolkit.
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: false,   //player object
  controls:false,   //audio controls methods
  playing:false,
  sidebar:false
}

//Creating a slice requires ;
//  - a string name to identify the slice
//  - an initial state value
//  - one or more reducer functions to define how the state can be updated
export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrent: (state,action) => {
        state.current = action.payload
    },
    setControls: (state,action) => {
        state.controls = action.payload
    },
    setPlaying: (state,action) => {
        state.playing = action.payload
    },
    setSidebar: (state,action) => {
        state.sidebar = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrent, setControls, setPlaying, setSidebar } = playerSlice.actions

export default playerSlice.reducer