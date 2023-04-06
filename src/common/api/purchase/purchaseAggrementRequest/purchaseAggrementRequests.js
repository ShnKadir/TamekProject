// Config
import { API } from "../../../Config"

// Redux
import store from "../../../../redux/store"

import {
    getPurchaseAggrementRequest,
    getPurchaseAggrementSuccess,
    getPurchaseAggrementFailure
} from "@slice/purchaseAggrementRequestSlice"

// Helper
import apiCall from "../../apiCall"

export default async function purchaseAggrementRequest() {

    store.dispatch(getPurchaseAggrementRequest())

    const response = await apiCall({
        config: API.PURCHASE.PURCHASE_AGGREMENT_REQUEST.GET
    })

    if (response) {
        store.dispatch(getPurchaseAggrementSuccess(response))
    }
    else {
        store.dispatch(getPurchaseAggrementFailure(""))
    }
}
