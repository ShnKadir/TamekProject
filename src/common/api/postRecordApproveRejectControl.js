// Config
import { API } from "../Config"

// React Native
import { Alert } from "react-native"

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
import getExpenceRequests from "./expence/getExpenceRequests"
import PaymentRequests from "./paymentRequest/PaymentRequests"
import getPurchaseRequests from "./purchase/purchaseRequest/getPurchaseRequests"

export default async function postRecordApproveRejectControl(tableRecId, recId, enumStatusId, navigation, isRejected) {

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
                getExpenceRequests()
                PaymentRequests()
                getPurchaseRequests()
                purchaseAggrementRequests()

                if (isRejected) {

                    Alert.alert(
                        '',
                        'Reddetme işlemi başarıyla gerçekleştirildi.',
                        [
                            {
                                text: 'Tamam',
                                onPress: () => navigation.goBack()
                            },
                        ],
                        { cancelable: false },
                    )
                }
                else {
                    Alert.alert(
                        '',
                        'Onaylama işlemi başarıyla gerçekleştirildi.',
                        [
                            {
                                text: 'Tamam',
                                onPress: () => navigation.goBack()
                            },
                        ],
                        { cancelable: false },
                    )
                }
            }
        }
        else {
            Alert.alert(
                '',
                'İşlem gerçekleştirilemedi.',
                [
                    {
                        text: 'Tamam'
                    },
                ],
                { cancelable: false },
            )
        }
    }

    else {
        store.dispatch(postRecordApproveRejectControlFailure(""))
    }
}
