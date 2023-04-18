// React
import React from 'react'

// Components
import Menu from '../../pages/Menu/Menu'
import WaitingApprovalScreen from '../../pages/Payment/WaitingApproval/WaitingApprovalScreen'
import PaymentRequestDetail from '../../pages/Payment/PaymentRequestDetail/PaymentRequestDetail'

// Navigations
import { MENU_NAV } from './../../navigations/constants'
import CostApprovalDetail from '../../pages/CostApprovalDetail/CostApprovalDetail'
import PaymentRequest from '../../pages/Payment/PaymentRequest/PaymentRequest'
import PurchaseRequest from '../../pages/Purchase/PurchaseRequest/PurchaseRequest'
import PurchaseRequestDetail from '../../pages/Purchase/PurchaseRequestDetail/PurchaseRequestDetail'
import PurchaseInvoices from '../../pages/PurchaseInvoices/PurchaseInvoices'
import PurchaseInvoicesDetail from '../../pages/PurchaseInvoices/PurchaseInvoicesDetail/PurchaseInvoicesDetail'
import PurchaseAggrementScreen from './../../pages/Purchase/PurchaseAggrement/PurchaseAggrementScreen'
import PurchaseAggrementDetail from '../../pages/Purchase/PurchaseAggrementDetail/PurchaseAggrementDetail'

export default paymentRequestRoutes = [
    {
        name: MENU_NAV.MENU,
        component: Menu,
        screenOption: {
            headerShown: false,
        }
    },
    {
        name: MENU_NAV.COST_APPROVAL_DETAIL,
        component: CostApprovalDetail,
        screenOption: {
            headerShown: true,
        }
    },
    {
        name: MENU_NAV.WAITING_APPROVAL,
        component: WaitingApprovalScreen,
        screenOption: {
            headerShown: true,
            title: "Onay Bekleyenler",
            headerBackTitle: "Back"
        }
    },
    {
        name: MENU_NAV.PAYMENT_REQUEST_DETAIL,
        component: PaymentRequestDetail,
        screenOption: {
            headerShown: true
        }
    },
    {
        name: MENU_NAV.PAYMENT_REQUEST,
        component: PaymentRequest,

    },
    {
        name: MENU_NAV.PURCHASE_REQUEST,
        component: PurchaseRequest
    },
    {
        name: MENU_NAV.PURCHASE_REQUEST_DETAIL,
        component: PurchaseRequestDetail,
        screenOption: {
            headerShown: true,
            title: "Header gelcek",
            headerBackTitle: "Back"
        }
    },
    {
        name: MENU_NAV.PURCHASE_INVOICES,
        component: PurchaseInvoices
    },
    {
        name: MENU_NAV.PURCHASE_INVOICES_DETAIL,
        component: PurchaseInvoicesDetail
    },
    {
        name: MENU_NAV.PURCHASE_AGGREMENT_REQUEST,
        component: PurchaseAggrementScreen
    },
    {
        name: MENU_NAV.PURCHASE_AGGREMENT_REQUEST_DETAIL,
        component: PurchaseAggrementDetail
    }
]
