// Config
import { API } from "../../Config"

// Redux
import store from "../../../redux/store"
import {
    postSendMailRequest,
    postSendMailSuccess,
    postSendMailFailure,
} from "@slice/authSlice"

// Helper
import apiCall from "../apiCall"

export default async function postSendMail() {

    store.dispatch(postSendMailRequest())

    const response = await apiCall({
        config: API.LOGIN.SEND_MAIL
    })

    if (response) {
        store.dispatch(postSendMailSuccess(response))
    }
    else {
        store.dispatch(postSendMailFailure(""))
    }
}
