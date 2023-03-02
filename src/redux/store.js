import { configureStore } from "@reduxjs/toolkit"
import testSlice from "./slice/testSlice"

const store = configureStore({
	reducer: {
		test:testSlice
	},
})

export default store
