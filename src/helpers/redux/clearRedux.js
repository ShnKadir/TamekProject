//Redux
import { clearAuthSlice } from "../../redux/slice/authSlice"
import { clearExpenceSlice } from "../../redux/slice/expenceSlice"
import { clearPaymentRequestSlice } from "../../redux/slice/paymentRequestSlice"
import { clearPurchaseAggrementSlice } from "../../redux/slice/purchaseAggrementRequestSlice"
import { clearPurchaseRequestSlice } from "../../redux/slice/purchaseRequestSlice"
import store from "../../redux/store"

export default function clearRedux() {

    store.dispatch(clearAuthSlice())
    store.dispatch(clearPaymentRequestSlice())
    store.dispatch(clearExpenceSlice())
    store.dispatch(clearPurchaseAggrementSlice())
    store.dispatch(clearPurchaseRequestSlice())
}