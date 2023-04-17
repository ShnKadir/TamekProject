// Config
import { API } from "../../Config"

// Redux
import store from "../../../redux/store"
import {
    postChangePasswordRequest,
    postChangePasswordSuccess,
    postChangePasswordFailure,
} from "@slice/authSlice"

// Helper
import apiCall from "../apiCall"

export default async function postChangePassword(email, oldPassword, newPassword, navigation) {

    store.dispatch(postChangePasswordRequest())

    const requestBody = {
        userMail: email,
        oldPassword: oldPassword,
        newPassword: newPassword
    }

    const response = await apiCall({ config: API.LOGIN.CHANGE_PASSWORD, requestBody: requestBody })

    if (response) {

        store.dispatch(postChangePasswordSuccess(response))

        if (response?.resultStatus === true && response?.returnText === "PASSWORD_CHANGED") {
            navigation.goBack()
        }
    }
    else {
        store.dispatch(postChangePasswordFailure(""))
    }
}
