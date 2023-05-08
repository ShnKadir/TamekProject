import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    purchaseOrderData: null,
    purchaseOrderRequestApiStatus: API_STATUS.NONE,
}

const purchaseOrderRequestSlice = createSlice({
    name: 'purchaseOrder',
    initialState: initialState,
    reducers: {
        clearPurchaseOrderRequestSlice: () => initialState,

        getPurchaseOderRequest: state => {
            state.purchaseOrderRequestApiStatus = API_STATUS.REQUEST
        },
        getPurchaseOrderSuccess: (state, action) => {
            state.purchaseOrderData = action.payload
            state.purchaseOrderRequestApiStatus = API_STATUS.SUCCESS
        },
        getPurchaseOrderFailure: (state, action) => {
            state.purchaseOrderRequestApiStatus = API_STATUS.FAILURE
        },
    }
})

// Action creators are generated for each case reducer function
export const {

    clearPurchaseRequestSlice,
    getPurchaseOderRequest,
    getPurchaseOrderSuccess,
    getPurchaseOrderFailure

} = purchaseOrderRequestSlice.actions

export default purchaseOrderRequestSlice.reducer