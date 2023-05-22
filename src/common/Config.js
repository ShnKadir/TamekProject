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
        },
        CHANGE_PASSWORD: {
            path: "/api/Auth/ChangePassword",
            method: "POST"
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
        },
        PURCHASE_AGGREMENT_REQUEST: {
            GET: {
                path: "/api/Purchase/GetPurchAggrementRequest",
                method: "GET"
            }
        },
        PURCHASE_ORDER:{
            GET: {
                path: "/api/Purchase/GetPurchaseOrderRequest",
                method: "GET"
            }
        },
        PURCHASE_INVOİCE:{
            GET: {
                path: "/api/Purchase/GetPurchInvoiceRequest",
                method: "GET"
            }
        }
    },
    EXPENCE: {
        GET: {
            path: "/api/Expence/GetExpenceRequest",
            method: "GET"
        },
        GET_FILE:{
            path: "/api/Expence/GetExpencetFileRequest/",
            method: "GET"
        }
    },
    PAYMENT_REQUEST: {
        GET: {
            path: "/api/Payment/GetPaymentRequest",
            method: "GET"
        },
        GET_FILE:{
            path: "/api/Payment/GetPaymentFileRequest/",
            method: "GET"
        }
    },
    RECORD_APPROVE_REJECT_CONTROL:{
        POST:{
            path: "/api/Process/RecordApproveRejectControl",
            method: "POST"
        }
    }
}