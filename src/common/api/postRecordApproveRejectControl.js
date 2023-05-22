// Config
import { API } from "../Config"

// Redux
import store from "../../redux/store"
import {
    postRecordApproveRejectControlRequest,
    postRecordApproveRejectControlSuccess,
    postRecordApproveRejectControlFailure
} from "@slice/recordApproveRejectControlSlice"

// Helper
import apiCall from "./apiCall"

import getPurchaseOrdersRequest from "./purchase/PurchaseOrderRequest/getPurchaseOrdersRequest"
import getPurchaseInvoicesRequest from "./purchase/PurchaseInvoicesRequest/getPurchaseInvoicesRequest"
import { useSelector } from "react-redux"
import { API_STATUS } from "../Enums"

export default async function postRecordApproveRejectControl(tableRecId, recId, enumStatusId, navigation) {


    const state = store.getState()
    const purchaseOrderRequestApiStatus = state.purchaseOrder?.purchaseOrderRequestApiStatus
    const purchaseInvoiceRequestApiStatus = state.purchaseInvoice?.purchaseInvoiceRequestApiStatus
    store.dispatch(postRecordApproveRejectControlRequest())

    const requestBody = {
        tableRecId: tableRecId,
        recId: recId,
        enumStatusid: enumStatusId
    }

    const response = await apiCall({
        config: API.RECORD_APPROVE_REJECT_CONTROL.POST,
        requestBody: requestBody,
    })

    if (response) {
        debugger
        if (response?.resultStatus) {
            store.dispatch(postRecordApproveRejectControlSuccess(response))
            getPurchaseOrdersRequest()
            getPurchaseInvoicesRequest()

            if (purchaseOrderRequestApiStatus === API_STATUS.SUCCESS && purchaseInvoiceRequestApiStatus === API_STATUS.SUCCESS) {

                navigation.goBack()
            }
        }
    }
    else {
        store.dispatch(postRecordApproveRejectControlFailure(""))
    }
}
