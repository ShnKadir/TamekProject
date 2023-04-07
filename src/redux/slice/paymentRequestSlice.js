import { createSlice } from '@reduxjs/toolkit'

// Enums
import { API_STATUS } from "../../common/Enums"

const initialState = {
    
    paymentRequestData: null,    
    paymentRequestApiStatus: API_STATUS.NONE,
}

const paymentRequestSlice = createSlice({
    name: 'payment',
    initialState: initialState,
    reducers: {
        clearPaymentRequestSlice: () => initialState,

        getPaymentRequest: state => {
            state.paymentRequestApiStatus = API_STATUS.REQUEST
        },
        getPaymentSuccess: (state, action) => {
            state.paymentRequestData = action.payload
            state.paymentRequestApiStatus = API_STATUS.SUCCESS
        },
        getPaymentFailure: (state, action) => {
            state.paymentRequestApiStatus = API_STATUS.FAILURE
        },
    }
})

// Action creators are generated for each case reducer function
export const {

    clearPaymentRequestSlice,
    getPaymentRequest,
    getPaymentSuccess,
    getPaymentFailure

} = paymentRequestSlice.actions

export default paymentRequestSlice.reducer