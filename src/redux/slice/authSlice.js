import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    isLogin: false,
    loginData: null,

    loginApiStatus: API_STATUS.NONE,
    createPasswordApiStatus: API_STATUS.NONE

}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

        clearAuthSlice: () => initialState,

        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        },

        postLoginRequest: state => {
            state.loginApiStatus = API_STATUS.REQUEST
        },
        postLoginSuccess: (state, action) => {
            state.isLogin = action.payload.resultStatus
            state.loginData = action.payload
            state.loginApiStatus = API_STATUS.SUCCESS
        },
        postLoginFailure: (state, action) => {
            state.loginApiStatus = API_STATUS.FAILURE
        },

        postCreatePasswordRequest: state => {
            state.createPasswordApiStatus = API_STATUS.REQUEST
        },
        postCreatePasswordSuccess: (state, action) => {
            state.loginData = action.payload
            state.isLogin = action.payload.resultStatus
            state.createPasswordApiStatus = API_STATUS.SUCCESS
        },
        postCreatePasswordFailure: (state, action) => {
            state.createPasswordApiStatus = API_STATUS.FAILURE
        },

        logout: () => initialState
    }
})

// Action creators are generated for each case reducer function
export const {
    clearAuthSlice,

    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,

    postCreatePasswordRequest,
    postCreatePasswordSuccess,
    postCreatePasswordFailure,

    logout
} = authSlice.actions

export default authSlice.reducer