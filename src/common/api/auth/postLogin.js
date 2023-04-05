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

// Navigations
import { LOGIN_NAV } from "../../../navigations/constants"

export default async function postLogin(userMail, password, navigation) {

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

		if (response.resultStatus === false && response.returnText === "REDIRECT_CREATE_PASSWORD") {
			navigation.navigate(LOGIN_NAV.SET_NEW_PASSWORD, { userMail: userMail })
		}

		AsyncStorage.setItem("userData", JSON.stringify(response))

	} else {
		store.dispatch(postLoginFailure(""))
	}
}
