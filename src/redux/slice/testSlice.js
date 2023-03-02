import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isTest: false,
    loginData: null
}

const testSlice = createSlice({
    name: 'test',
    initialState: initialState,
    reducers: {
        setIsTest: (state, action) => {
            state.isTest = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setIsTest
} = testSlice.actions

export default testSlice.reducer
