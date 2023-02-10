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

export default paymentRequestRoutes = [
    {
        name: MENU_NAV.MENU,
        component: Menu,
        screenOption: {
            headerShown: false
        }
    },
    {
        name: MENU_NAV.PAYMENT_REQUEST,
        component: PaymentRequestScreen,
        screenOption: {
            header: () =>
                <Header
                    centerComponent={
                        <Text style={{
                            fontSize: 16,
                            color: "#FFFFFF"

                        }}>
                            Ödeme Talepleri
                        </Text>
                    }
                    navBackTo={MENU_NAV.MENU}
                    hasMenuIcon={false}
                />
        }
    },
    {
        name: MENU_NAV.WAITING_APPROVAL,
        component: WaitingApprovalScreen,
        screenOption: {
            header: () =>
                <Header
                    centerComponent={
                        <Text style={{
                            fontSize: 16,
                            color: "#FFFFFF"

                        }}>
                            Onay Bekleyenler
                        </Text>
                    }
                    navBackTo={MENU_NAV.MENU}
                    hasMenuIcon={false}
                />
        }
    },
    {
        name: MENU_NAV.PAYMENT_REQUEST_DETAIL,
        component: PaymentRequestDetail,
        screenOption: {
            header: () =>
                <Header
                    centerComponent={
                        <Text style={{
                            fontSize: 16,
                            color: "#FFFFFF"

                        }}>
                            Ödeme Talep Kaydı
                        </Text>
                    }
                    navBackTo={MENU_NAV.WAITING_APPROVAL}
                    hasMenuIcon={false}
                />
        }
    }
]
