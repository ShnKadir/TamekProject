//Redux
import store from "../../../redux/store"

//Api
import { API } from "../../Config"

import {
    getExpenceFileRequest,
    getExpenceFileSuccess,
    getExpenceFileFailure
} from "@slice/expenceSlice"

// Helper
import apiCall from "../apiCall"

export default async function getExpenceFileRequests(fileName) {

    store.dispatch(getExpenceFileRequest())

    const parameters = `${fileName}`

    const response = await apiCall({ config: API.EXPENCE.GET_FILE, parameters: parameters })

    if (response) {

        store.dispatch(getExpenceFileSuccess(response))
    }
    else {
        store.dispatch(getExpenceFileFailure(""))
    }
}
