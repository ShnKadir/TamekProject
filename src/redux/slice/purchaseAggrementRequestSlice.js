import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {

    purchaseAggrementData: null,
    purchaseAggrementApiStatus: API_STATUS.NONE,
}

const purchaseAggrementRequestSlice = createSlice({
    name: 'purchaseAggrement',
    initialState: initialState,
    reducers: {

        clearPurchaseAggrementSlice: () => initialState,

        getPurchaseAggrementRequest: state => {
            state.purchaseAggrementApiStatus = API_STATUS.REQUEST
        },
        getPurchaseAggrementSuccess: (state, action) => {
            state.purchaseAggrementData = action.payload
            state.purchaseAggrementApiStatus = API_STATUS.SUCCESS
        },
        getPurchaseAggrementFailure: (state, action) => {
            state.purchaseAggrementApiStatus = API_STATUS.FAILURE
        },
    }
})

// Action creators are generated for each case reducer function
export const {

    clearPurchaseAggrementSlice,
    getPurchaseAggrementRequest,
    getPurchaseAggrementSuccess,
    getPurchaseAggrementFailure

} = purchaseAggrementRequestSlice.actions

export default purchaseAggrementRequestSlice.reducer