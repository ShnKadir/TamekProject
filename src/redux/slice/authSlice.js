import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    isLogin: false,
    loginData: null,
    email: null,
    password: null,
    changePassword: null,
    sendMail:null,

    loginApiStatus: API_STATUS.NONE,
    createPasswordApiStatus: API_STATUS.NONE,
    changePasswordApiStatus: API_STATUS.NONE,
    sendMailApiStatus:API_STATUS.NONE
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

        clearAuthSlice: () => initialState,

        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        },

        setEmail: (state, action) => {
            state.email = action.payload
        },

        setPassword: (state, action) => {
            state.password = action.payload
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

        postChangePasswordRequest: state => {
            state.changePasswordApiStatus = API_STATUS.REQUEST
        },
        postChangePasswordSuccess: (state, action) => {
            state.isLogin = true
            state.changePassword = action.payload
            state.changePasswordApiStatus = API_STATUS.SUCCESS
        },
        postChangePasswordFailure: (state, action) => {
            state.changePasswordApiStatus = API_STATUS.FAILURE
            state.loginFailure = action.payload
        },

        postSendMailRequest: state => {
            state.sendMailApiStatus = API_STATUS.REQUEST
        },
        postSendMailSuccess: (state, action) => {            
            state.sendMail = action.payload
            state.sendMailApiStatus = API_STATUS.SUCCESS
        },
        postSendMailFailure: (state, action) => {
            state.sendMailApiStatus = API_STATUS.FAILURE
            state.loginFailure = action.payload
        },


        logout: () => initialState
    }
})

// Action creators are generated for each case reducer function
export const {
    clearAuthSlice,

    setPassword,
    setEmail,

    postLoginRequest,
    postLoginSuccess,
    postLoginFailure,

    postCreatePasswordRequest,
    postCreatePasswordSuccess,
    postCreatePasswordFailure,

    postChangePasswordRequest,
    postChangePasswordSuccess,
    postChangePasswordFailure,

    postSendMailRequest,
    postSendMailSuccess,
    postSendMailFailure,

    logout
} = authSlice.actions

export default authSlice.reducer