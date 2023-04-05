import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    purchaseRequestData: null,
    purchaseRequestApiStatus: API_STATUS.NONE,
}

const purchaseRequestSlice = createSlice({
    name: 'purchaseRequest',
    initialState: initialState,
    reducers: {
        clearPurchaseRequestSlice: () => initialState,

        getPurchaseRequest: state => {
            state.purchaseRequestApiStatus = API_STATUS.REQUEST
        },
        getPurchaseSuccess: (state, action) => {
            state.purchaseRequestData = action.payload
            state.purchaseRequestApiStatus = API_STATUS.SUCCESS
        },
        getPurchaseFailure: (state, action) => {
            state.purchaseRequestApiStatus = API_STATUS.FAILURE
        },
    }
})

// Action creators are generated for each case reducer function
export const {

    clearPurchaseRequestSlice,
    getPurchaseRequest,
    getPurchaseSuccess,
    getPurchaseFailure

} = purchaseRequestSlice.actions

export default purchaseRequestSlice.reducer