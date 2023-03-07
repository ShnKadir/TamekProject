// Redux
import store from '@redux/store'
import { NativeModules } from 'react-native'

export default function fetchOptions(method, requestBody, contentType = "application/json") {

    const state = store.getState()
    const token = state?.auth?.loginData?.AccessToken

    let lang = "en"

    let fetchOpt = {
        method: method,
        headers: {
            "Content-Type": contentType,
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Accept-Language": lang + "-" + lang.toUpperCase()
        },
        mode: "cors",
    }
    if (!!token) {
        fetchOpt["headers"]["Authorization"] = `Bearer ${token}`
    }
    if (!!requestBody) {
        fetchOpt["body"] = JSON.stringify(requestBody)
    }

    return fetchOpt
}