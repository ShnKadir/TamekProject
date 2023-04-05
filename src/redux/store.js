import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import companiesListSlice from "./slice/companiesListSlice"
import purchaseRequestSlice from "./slice/purchaseRequestSlice"

const store = configureStore({
	reducer: {
		auth: authSlice,
		companies: companiesListSlice,
		purchaseRequest:purchaseRequestSlice
	},
})

export default store
