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

import getInfoModalJson from "../../../helpers/modal/getInfoModalJson"
import { INFO_MODAL_STATUS } from "../../Enums"
import { openInfoModal } from "../../../redux/slice/infoModalSlice"
import { setEmail } from "../../../redux/slice/authSlice"

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

	let infoModal = getInfoModalJson()

	if (response) {

		store.dispatch(postLoginSuccess(response))

		store.dispatch(setEmail(userMail))

		if (response.returnText === "REDIRECT_CREATE_PASSWORD") {
			navigation.navigate(LOGIN_NAV.SET_NEW_PASSWORD, { userMail: userMail })
		}

		else if (response.returnText === "NOT_AUTHORIZED_LOGIN") {
			infoModal.statusType = INFO_MODAL_STATUS.WARNING
			infoModal.title = "Hata"
			infoModal.description = "Girdiğiniz bilgiler hatalıdır. Kontrol edip tekrar deneyiniz."
			store.dispatch(openInfoModal(infoModal))
		}
		else if (response.returnText === "USER_NOT_REGISTER_ON_AXAPTA") {
			infoModal.statusType = INFO_MODAL_STATUS.WARNING
			infoModal.title = "Hata"
			infoModal.description = "Girdiğiniz bilgilere ait Axapta kullanıcısı bulunmamaktadır. Kontrol edip tekrar deneyiniz."
			store.dispatch(openInfoModal(infoModal))
		}

		await AsyncStorage.setItem("userData", JSON.stringify(response))

	} else {
		store.dispatch(postLoginFailure(""))

	}
}
