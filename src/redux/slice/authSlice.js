import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    isLogin: false,
    loginData: null,

    loginApiStatus: API_STATUS.NONE,
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
            state.isLogin = !action.payload.IsFirstLogin
            state.loginData = action.payload
            state.loginApiStatus = API_STATUS.SUCCESS
        },
        postLoginFailure: (state, action) => {
            state.loginApiStatus = API_STATUS.FAILURE
            state.loginFailure = action.payload
        },

        logout: () => initialState
    }
})

// Action creators are generated for each case reducer function
export const {
    clearAuthSlice,
    setIsLogin,
    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,
  
    logout
} = authSlice.actions

export default authSlice.reducer