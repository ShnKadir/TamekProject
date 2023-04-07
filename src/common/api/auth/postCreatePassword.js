// Config
import { API } from "../../Config"

// Redux
import store from "../../../redux/store"
import {
    postCreatePasswordRequest,
    postCreatePasswordSuccess,
    postCreatePasswordFailure,
} from "@slice/authSlice"

// Helper
import apiCall from "../apiCall"
import postLogin from "./postLogin"
import { LOGIN_NAV } from "../../../navigations/constants"

export default async function postCreatePassword(userMail, newPassword, navigation) {

    store.dispatch(postCreatePasswordRequest())

    const requestBody = {
        userMail: userMail,
        password: newPassword,
    }

    const response = await apiCall({
        config: API.LOGIN.CREATE_PASSWORD.POST,
        requestBody: requestBody,
    })

    if (response) {
        store.dispatch(postCreatePasswordSuccess(response))

        if (response.returnText === "PASSWORD_CREATED") {
            navigation.navigate(LOGIN_NAV.LOGIN)
        }
    }
    else {
        store.dispatch(postCreatePasswordFailure(""))
    }
}
