export const API = {
    LOGIN: {
        POST: {
            path: "/api/Auth/token",
            method: "POST"
        },
        CREATE_PASSWORD: {
            POST: {
                path: "/api/Auth/CreatePassword",
                method: "POST"
            }
        }
    },
    GET_COMPANIES_LIST: {
        GET: {
            path: "/api/Company/GetCompaniesList",
            method: "GET"
        }
    },
    PURCHASE: {
        PURCHASE_REQUEST: {
            GET: {
                path: "/api/Purchase/GetPurshaseRequest",
                method: "GET"
            }
        }
    }

}