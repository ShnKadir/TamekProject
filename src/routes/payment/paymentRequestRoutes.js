// React
import React from 'react'

// React Native
import { Text } from 'react-native'

// Components
import PaymentRequestScreen from '../../pages/Payment/PaymentRequest/PaymentRequestScreen'
import Header from '../../pages/Header/Header'
import Menu from '../../pages/Menu/Menu'
import WaitingApprovalScreen from '../../pages/Payment/WaitingApproval/WaitingApprovalScreen'
import PaymentRequestDetail from '../../pages/Payment/PaymentRequestDetail/PaymentRequestDetail'

// Navigations
import { MENU_NAV } from './../../navigations/constants'
import SearchBar from '../../common/SearchBar/SearchBar'

export default paymentRequestRoutes = [
    {
        name: MENU_NAV.MENU,
        component: Menu,
        screenOption: {
            headerShown: true,
        }
    },
    {
        name: MENU_NAV.PAYMENT_REQUEST,
        component: PaymentRequestScreen,
        screenOption: {
            headerShown: true,        }
    },
    {
        name: MENU_NAV.WAITING_APPROVAL,
        component: WaitingApprovalScreen,
        screenOption: {
            headerShown: true,
            title: "Cost Approval",
            headerBackTitle: "Back"
        }
    },
    {
        name: MENU_NAV.PAYMENT_REQUEST_DETAIL,
        component: PaymentRequestDetail,
        screenOption: {
            headerShown: true
        }
    }
]
