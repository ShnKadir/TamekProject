import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    companiesListData: null,

    companiesListApiStatus: API_STATUS.NONE,
}

const companiesListSlice = createSlice({
    name: 'companies',
    initialState: initialState,
    reducers: {
        clearCompaniesListSlice: () => initialState,

        getCompaniesListRequest: state => {
            state.companiesListApiStatus = API_STATUS.REQUEST
        },
        getCompaniesLisSuccess: (state, action) => {
            state.companiesListData = action.payload
            state.companiesListApiStatus = API_STATUS.SUCCESS
        },
        getCompaniesLisFailure: (state, action) => {
            state.companiesListApiStatus = API_STATUS.FAILURE
        },
    }
})

// Action creators are generated for each case reducer function
export const {
    clearCompaniesListSlice,
    getCompaniesListRequest,
    getCompaniesLisSuccess,
    getCompaniesLisFailure
} = companiesListSlice.actions

export default companiesListSlice.reducer