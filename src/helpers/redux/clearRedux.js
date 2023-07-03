//Redux
import store from "../../redux/store"
import { clearAuthSlice } from "../../redux/slice/authSlice"
import { clearExpenceSlice } from "../../redux/slice/expenceSlice"
import { clearPaymentRequestSlice } from "../../redux/slice/paymentRequestSlice"
import { clearPurchaseAggrementSlice } from "../../redux/slice/purchaseAggrementRequestSlice"
import { clearPurchaseInvoiceRequestSlice } from "../../redux/slice/purchaseInvoicesRequestSlice"
import { clearPurchaseOrderRequestSlice } from "../../redux/slice/purchaseOrderRequestSlice"
import { clearPurchaseRequestSlice } from "../../redux/slice/purchaseRequestSlice"
import { clearRecordApproveStatusControlSlice } from "../../redux/slice/recordApproveRejectControlSlice"

export default function clearRedux() {

    store.dispatch(clearAuthSlice())
    store.dispatch(clearExpenceSlice())
    store.dispatch(clearPaymentRequestSlice())
    store.dispatch(clearPurchaseAggrementSlice())
    store.dispatch(clearPurchaseInvoiceRequestSlice())
    store.dispatch(clearPurchaseOrderRequestSlice())
    store.dispatch(clearPurchaseRequestSlice())
    store.dispatch(clearRecordApproveStatusControlSlice())
}