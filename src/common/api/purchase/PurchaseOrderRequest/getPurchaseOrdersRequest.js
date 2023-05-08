// Config
import { API } from "../../../Config"

// Redux
import store from "../../../../redux/store"

import {
    getPurchaseOderRequest,
    getPurchaseOrderSuccess,
    getPurchaseOrderFailure
} from "@slice/purchaseOrderRequestSlice"

// Helper
import apiCall from "../../apiCall"

export default async function getPurchaseOrdersRequest() {

    store.dispatch(getPurchaseOderRequest())

    const response = await apiCall({
        config: API.PURCHASE.PURCHASE_ORDER.GET
    })

    if (response) {
        store.dispatch(getPurchaseOrderSuccess(response))
    }
    else {
        store.dispatch(getPurchaseOrderFailure(""))
    }
}
