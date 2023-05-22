import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import purchaseRequestSlice from "./slice/purchaseRequestSlice"
import expenceSlice from "./slice/expenceSlice"
import paymentRequestSlice from "./slice/paymentRequestSlice"
import purchaseAggrementRequestSlice from "./slice/purchaseAggrementRequestSlice"
import infoModalSlice from "./slice/infoModalSlice"
import purchaseOrderRequestSlice from "./slice/purchaseOrderRequestSlice"
import purchaseInvoicesRequestSlice from "./slice/purchaseInvoicesRequestSlice"
import recordApproveRejectControlSlice from "./slice/recordApproveRejectControlSlice"

const store = configureStore({
	reducer: {
		auth: authSlice,
		purchaseRequest: purchaseRequestSlice,
		expence: expenceSlice,
		payment: paymentRequestSlice,
		purchaseAggrement: purchaseAggrementRequestSlice,
		purchaseOrder:purchaseOrderRequestSlice,
		purchaseInvoice:purchaseInvoicesRequestSlice,
		recordApproveStatusControl:recordApproveRejectControlSlice,
		infoModal: infoModalSlice

	},
})

export default store
