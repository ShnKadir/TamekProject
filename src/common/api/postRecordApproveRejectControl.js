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

//Components
import getPurchaseOrdersRequest from "./purchase/PurchaseOrderRequest/getPurchaseOrdersRequest"
import getPurchaseInvoicesRequest from "./purchase/PurchaseInvoicesRequest/getPurchaseInvoicesRequest"
import purchaseAggrementRequests from "./purchase/purchaseAggrementRequest/purchaseAggrementRequests"


export default async function postRecordApproveRejectControl(tableRecId, recId, enumStatusId) {


    const state = store.getState()

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

        if (response?.resultStatus) {
            
            store.dispatch(postRecordApproveRejectControlSuccess(response))

            if (response.returnText === "OPERATION_SUCCESS") {
                
                getPurchaseOrdersRequest()
                getPurchaseInvoicesRequest()
                purchaseAggrementRequests()
            }
        }
    }

    else {
        store.dispatch(postRecordApproveRejectControlFailure(""))
    }
}
