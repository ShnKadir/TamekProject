//Redux
import { clearAuthSlice } from "../../redux/slice/authSlice"
import { clearCompaniesListSlice } from "../../redux/slice/companiesListSlice"
import { clearPurchaseRequestSlice } from "../../redux/slice/purchaseRequestSlice"
import store from "../../redux/store"

export default function clearRedux() {

    store.dispatch(clearCompaniesListSlice())
    store.dispatch(clearAuthSlice())
    store.dispatch(clearPurchaseRequestSlice())

}