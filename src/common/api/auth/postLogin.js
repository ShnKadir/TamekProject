// Config
import { API } from "../../Config"

// Storage
import AsyncStorage from "@react-native-async-storage/async-storage"

// Redux
import store from "../../../redux/store"
import {
	postLoginRequest,
	postLoginSuccess,
	postLoginFailure,
} from "@slice/authSlice"

// Helper
import apiCall from "../apiCall"
import { setIsLogin } from "../../../redux/slice/testSlice"

export default async function postLogin(userMail, password) {

	store.dispatch(postLoginRequest())

	const requestBody = {
		userMail: userMail,
		password: password,
	}

	const response = await apiCall({
		config: API.LOGIN.POST,
		requestBody: requestBody,
	})

	if (response) {
		store.dispatch(postLoginSuccess(response))

		AsyncStorage.setItem("userData", JSON.stringify(response))

		store.dispatch(setIsLogin(true))
	} else {
		store.dispatch(postLoginFailure(""))
	}
}
