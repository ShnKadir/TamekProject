import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    expenceData: null,
    
    expenceDataApiStatus: API_STATUS.NONE,
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
    }
})

// Action creators are generated for each case reducer function
export const {

    clearExpenceSlice,
    getExpenceRequest,
    getExpenceSuccess,
    getExpenceFailure

} = expenceSlice.actions

export default expenceSlice.reducer