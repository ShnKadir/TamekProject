//Redux
import { clearAuthSlice } from "../../redux/slice/authSlice"
import { clearCompaniesListSlice } from "../../redux/slice/companiesListSlice"
import { clearTestSlice } from "../../redux/slice/testSlice"
import store from "../../redux/store"

export default function clearRedux() {

    store.dispatch(clearTestSlice())
    store.dispatch(clearCompaniesListSlice())
    store.dispatch(clearAuthSlice())


}