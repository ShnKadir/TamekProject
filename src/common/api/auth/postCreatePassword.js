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
        debugger
        store.dispatch(postCreatePasswordSuccess(response))
        if (response.resultStatus) {
            postLogin(userMail, newPassword)
        }
    }
    else {
        store.dispatch(postCreatePasswordFailure(""))
    }
}
