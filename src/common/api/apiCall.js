// Helpers
import fetchOptions from "@helpers/fetch/fetchOptions"
import getBaseUrl from "@helpers/vanillaJs/getBaseUrl"

export default async function apiCall({
	config,
	requestBody,
	parameters,
	contentType,
}) {
	const baseUrl = getBaseUrl()

	const fetchOpt = fetchOptions(config.method, requestBody, contentType)

	let url = baseUrl + config.path
	if (parameters || parameters === 0) {
		url = `${url}${parameters}`
	}
	const response = await fetch(url, fetchOpt)

	let responseJson = {}
	if (response?.ok) {
		if (response?.status === 204) {
			return response?.status
		} else {
			responseJson = response?.json()
			return responseJson
		}
	} else {
		return null
	}
}
