// Config
import { API } from "../../Config"

// Redux
import store from "../../../redux/store"
import {
    getCompaniesListRequest,
    getCompaniesLisSuccess,
    getCompaniesLisFailure
} from "@slice/companiesListSlice"

// Helper
import apiCall from "../apiCall"

export default async function getCompaniesList() {

    store.dispatch(getCompaniesListRequest())

    const response = await apiCall({
        config: API.GET_COMPANIES_LIST.GET
    })

    if (response) {
        store.dispatch(getCompaniesLisSuccess(response))
    } else {
        store.dispatch(getCompaniesLisFailure(""))
    }
}
