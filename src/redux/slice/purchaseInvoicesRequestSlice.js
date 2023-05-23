import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    purchaseInvoiceData: null,
    purchaseInvoiceRequestApiStatus: API_STATUS.NONE,
}

const purchaseInvoicesRequestSlice = createSlice({
    name: 'purchaseInvoice',
    initialState: initialState,
    reducers: {
        clearPurchaseInvoiceRequestSlice: () => initialState,

        getPurchaseInvoiceRequest: state => {
            state.purchaseInvoiceRequestApiStatus = API_STATUS.REQUEST
        },
        getPurchaseInvoiceSuccess: (state, action) => {
            state.purchaseInvoiceData = action.payload
            state.purchaseInvoiceRequestApiStatus = API_STATUS.SUCCESS
        },
        getPurchaseInvoiceFailure: (state, action) => {
            state.purchaseInvoiceRequestApiStatus = API_STATUS.FAILURE
        },
    }
})

// Action creators are generated for each case reducer function
export const {

    clearPurchaseInvoiceRequestSlice,
    getPurchaseInvoiceRequest,
    getPurchaseInvoiceSuccess,
    getPurchaseInvoiceFailure

} = purchaseInvoicesRequestSlice.actions

export default purchaseInvoicesRequestSlice.reducer