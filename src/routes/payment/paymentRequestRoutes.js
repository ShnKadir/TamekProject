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
import PurchaseOrder from '../../pages/Purchase/PurchaseOrder/PurchaseOrder'
import PurchaseOrderDetailScreen from '../../pages/Purchase/PurchaseOrderDetailScreen/PurchaseOrderDetailScreen'
import OpenFile from '../../pages/Payment/PaymentRequestDetail/OpenFile'
import RawMaterialApprove from './../../pages/RawMaterial/RawMaterialApprove/RawMaterialApprove';
import RawMaterialPurchase from './../../pages/RawMaterial/RawMaterialPurchase/RawMaterialPurchase';
import CreateRawMaterial from '../../pages/RawMaterial/RawMaterialPurchase/CreateRawMaterial'

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
            title: "Onay Bekleyenler"
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
        name: MENU_NAV.PAYMENT_REQUEST,
        component: PaymentRequest,

    },
    {
        name: MENU_NAV.PAYMENT_REQUEST_DETAIL,
        component: PaymentRequestDetail,
        screenOption: {
            title: "Ödeme Talep Kaydı"
        }
    },
    {
        name: MENU_NAV.PURCHASE_REQUEST,
        component: PurchaseRequest
    },
    {
        name: MENU_NAV.PURCHASE_REQUEST_DETAIL,
        component: PurchaseRequestDetail,
        screenOption: {
            title: "Satın Alma Talep Kaydı",
        }
    },
    {
        name: MENU_NAV.PURCHASE_INVOICES,
        component: PurchaseInvoices
    },
    {
        name: MENU_NAV.PURCHASE_INVOICES_DETAIL,
        component: PurchaseInvoicesDetail,
        screenOption: {
            title: "Satın Alma Faturası Kaydı"
        }
    },
    {
        name: MENU_NAV.PURCHASE_AGGREMENT_REQUEST,
        component: PurchaseAggrementScreen
    },
    {
        name: MENU_NAV.PURCHASE_AGGREMENT_REQUEST_DETAIL,
        component: PurchaseAggrementDetail,
        screenOption: {
            title: "Satın Alma Sözleşmeleri Talep Kaydı"
        }
    },
    {
        name: MENU_NAV.PURCHASE_ORDER,
        component: PurchaseOrder
    },
    {
        name: MENU_NAV.PURCHASE_ORDER_DETAIL,
        component: PurchaseOrderDetailScreen,
        screenOption: {
            title: "Satın Alma Sipariş Kaydı"
        }
    },
    {
        name: MENU_NAV.OPEN_FILE,
        component: OpenFile,
        screenOption: {
            headerShown: true
        }
    },
    {
        name: MENU_NAV.RAW_MATERIAL_APPROVE,
        component: RawMaterialApprove,
        screenOption: {
            title: "Serbest Hammadde Alım Onayı"
        }
    },
    {
        name: MENU_NAV.RAW_MATERIAL_PURCHASE,
        component: RawMaterialPurchase,
        screenOption: {
            title: "Serbest Hammadde Alımı"
        }
    },
    {
        name: MENU_NAV.RAW_CREATE_MATERIAL,
        component: CreateRawMaterial,
        screenOption: {
            title: "Serbest Hammadde Alımı"
        }
    },
]
