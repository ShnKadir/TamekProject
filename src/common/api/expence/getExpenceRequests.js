// Config
import { API } from "../../../common/Config"

// Redux
import store from "../../../redux/store"

import {
    getExpenceRequest,
    getExpenceSuccess,
    getExpenceFailure
} from "@slice/expenceSlice"

// Helper
import apiCall from "../apiCall"

export default async function getExpenceRequests() {

    store.dispatch(getExpenceRequest())

    const response = await apiCall({
        config: API.EXPENCE.GET
    })

    if (response) {
        store.dispatch(getExpenceSuccess(response))
    }
    else {
        store.dispatch(getExpenceFailure(""))
    }
}
