//Redux
import store from "../../../redux/store"

//Api
import { API } from "../../Config"

import {
    getExpenceFileLineRequest,
    getExpenceFileLineSuccess,
    getExpenceFileLineFailure
} from "@slice/expenceSlice"

// Helper
import apiCall from "../apiCall"

export default async function getExpenceFileLineRequests(expenseRequestFormHeader) {

    store.dispatch(getExpenceFileLineRequest())

    const parameters = `${expenseRequestFormHeader}`

    const response = await apiCall({ config: API.EXPENCE.GET_FILE_LINE, parameters: parameters })

    if (response) {

        store.dispatch(getExpenceFileLineSuccess(response))
    }
    else {
        store.dispatch(getExpenceFileLineFailure(""))
    }
}
