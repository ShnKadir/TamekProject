import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isTest: false,
    isLogin:false,
    loginData: null
}

const testSlice = createSlice({
    name: 'test',
    initialState: initialState,
    reducers: {
        clearTestSlice: () => initialState,

        setIsTest: (state, action) => {
            state.isTest = action.payload
        },
        setIsLogin:(state, action) => {
            state.isLogin = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const {
    clearTestSlice,
    setIsTest,
    setIsLogin
} = testSlice.actions

export default testSlice.reducer
