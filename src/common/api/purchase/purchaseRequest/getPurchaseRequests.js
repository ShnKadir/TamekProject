// Config
import { API } from "../../../Config"

// Redux
import store from "../../../../redux/store"

import {
    getPurchaseRequest,
    getPurchaseSuccess,
    getPurchaseFailure
} from "@slice/purchaseRequestSlice"

// Helper
import apiCall from "../../apiCall"

export default async function getPurchaseRequests() {

    store.dispatch(getPurchaseRequest())

    const response = await apiCall({
        config: API.PURCHASE.PURCHASE_REQUEST.GET
    })

    if (response) {
        store.dispatch(getPurchaseSuccess(response))
    }
    else {
        store.dispatch(getPurchaseFailure(""))
    }
}
