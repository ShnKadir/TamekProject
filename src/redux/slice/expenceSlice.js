import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    expenceData: null,
    expenceFile: null,
    expenceFileLine: null,

    expenceDataApiStatus: API_STATUS.NONE,
    expenceFileApistatus: API_STATUS.NONE,
    expenceFileLineApiStatus: API_STATUS.NONE
}

const expenceSlice = createSlice({
    name: 'expence',
    initialState: initialState,
    reducers: {
        clearExpenceSlice: () => initialState,

        getExpenceRequest: state => {
            state.expenceDataApiStatus = API_STATUS.REQUEST
        },
        getExpenceSuccess: (state, action) => {
            state.expenceData = action.payload
            state.expenceDataApiStatus = API_STATUS.SUCCESS
        },
        getExpenceFailure: (state, action) => {
            state.expenceDataApiStatus = API_STATUS.FAILURE
        },

        getExpenceFileRequest: state => {
            state.expenceFileApistatus = API_STATUS.REQUEST
        },
        getExpenceFileSuccess: (state, action) => {
            state.expenceFile = action.payload
            state.expenceFileApistatus = API_STATUS.SUCCESS
        },
        getExpenceFileFailure: (state, action) => {
            state.expenceFileApistatus = API_STATUS.FAILURE
        },

        getExpenceFileLineRequest: state => {
            state.expenceFileLineApiStatus = API_STATUS.REQUEST
        },
        getExpenceFileLineSuccess: (state, action) => {
            state.expenceFileLine = action.payload
            state.expenceFileLineApiStatus = API_STATUS.SUCCESS
        },
        getExpenceFileLineFailure: (state, action) => {
            state.expenceFileLineApiStatus = API_STATUS.FAILURE
        },
    }
})

// Action creators are generated for each case reducer function
export const {

    clearExpenceSlice,
    getExpenceRequest,
    getExpenceSuccess,
    getExpenceFailure,

    getExpenceFileRequest,
    getExpenceFileSuccess,
    getExpenceFileFailure,

    getExpenceFileLineRequest,
    getExpenceFileLineSuccess,
    getExpenceFileLineFailure

} = expenceSlice.actions

export default expenceSlice.reducer