// Config
import { API } from "../../../common/Config"

// Redux
import store from "../../../redux/store"

import {
    getPaymentRequest,
    getPaymentSuccess,
    getPaymentFailure
} from "@slice/paymentRequestSlice"

// Helper
import apiCall from "../apiCall"

export default async function PaymentRequests() {

    store.dispatch(getPaymentRequest())

    const response = await apiCall({
        config: API.PAYMENT_REQUEST.GET
    })

    if (response) {
        store.dispatch(getPaymentSuccess(response))
    }
    else {
        store.dispatch(getPaymentFailure(""))
    }
}
