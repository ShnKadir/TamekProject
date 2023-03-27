import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slice/authSlice"
import companiesListSlice from "./slice/companiesListSlice"
import testSlice from "./slice/testSlice"

const store = configureStore({
	reducer: {
		test:testSlice,
		auth:authSlice,
		companies:companiesListSlice
	},
})

export default store
