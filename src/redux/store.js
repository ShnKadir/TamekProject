import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import purchaseRequestSlice from "./slice/purchaseRequestSlice"
import expenceSlice from "./slice/expenceSlice"
import paymentRequestSlice from "./slice/paymentRequestSlice"
import purchaseAggrementRequestSlice from "./slice/purchaseAggrementRequestSlice"

const store = configureStore({
	reducer: {
		auth: authSlice,
		purchaseRequest: purchaseRequestSlice,
		expence: expenceSlice,
		payment: paymentRequestSlice,
		purchaseAggrement: purchaseAggrementRequestSlice
	},
})

export default store
