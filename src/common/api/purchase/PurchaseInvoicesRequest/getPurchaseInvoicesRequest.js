// Config
import { API } from "../../../Config"

// Redux
import store from "../../../../redux/store"

import {
    getPurchaseInvoiceRequest,
    getPurchaseInvoiceSuccess,
    getPurchaseInvoiceFailure
} from "@slice/purchaseInvoicesRequestSlice"

// Helper
import apiCall from "../../apiCall"

export default async function getPurchaseInvoicesRequest() {

    store.dispatch(getPurchaseInvoiceRequest())

    const response = await apiCall({
        config: API.PURCHASE.PURCHASE_INVOİCE.GET
    })

    if (response) {
        store.dispatch(getPurchaseInvoiceSuccess(response))
    }
    else {
        store.dispatch(getPurchaseInvoiceFailure(""))
    }
}
