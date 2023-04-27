//Redux
import store from "../../../redux/store"

//Api
import { API } from "../../Config"

import {
    getPaymentFileRequest,
    getPaymentFileSuccess,
    getPaymentFileFailure
} from "@slice/paymentRequestSlice"

// Helper
import apiCall from "../apiCall"

export default async function getPaymentFilesRequest(fileName) {

    store.dispatch(getPaymentFileRequest())

    const parameters = `${fileName}`

    const response = await apiCall({ config: API.PAYMENT_REQUEST.GET_FILE, parameters: parameters })

    if (response) {
        
        if (response.resultStatus) {

            store.dispatch(getPaymentFileSuccess(response))
        }
    }
    else {
        store.dispatch(getPaymentFileFailure(""))
    }
}
