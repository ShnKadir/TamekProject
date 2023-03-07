import store from "@redux/store"

export default function getBaseUrl() {

	const url = process?.env?.API_URL ?? "https://api-dev.twiser.com" 

	return url
}
