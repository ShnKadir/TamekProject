// React
import React, { useLayoutEffect } from 'react'
import { useEffect, useState } from 'react'

// React Native
import { Text, ScrollView, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { VStack, HStack } from 'native-base'

// Styles
import { styles } from './MenuStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { MENU_NAV } from '../../navigations/constants'

// Api
import getPurchaseRequests from '../../common/api/purchase/purchaseRequest/getPurchaseRequests'
import getExpenceRequests from '../../common/api/expence/getExpenceRequests'
import PaymentRequests from '../../common/api/paymentRequest/PaymentRequests'
import purchaseAggrementRequest from '../../common/api/purchase/purchaseAggrementRequest/purchaseAggrementRequests'
import { useSelector } from 'react-redux'

export default function Menu() {

    const navigation = useNavigation()

    const isLogin = useSelector(state => state.auth?.isLogin)
    const expenceData = useSelector(state => state.expence?.expenceData)
    const paymentRequestData = useSelector(state => state.payment?.paymentRequestData)
    const purchaseRequestData = useSelector(state => state.purchaseRequest?.purchaseRequestData)
    const purchaseAggrementData = useSelector(state => state.purchaseAggrement?.purchaseAggrementData)
    const purchaseInovices = useSelector(state => state.purchase?.purchaseInvoice?.resultObject?.purchaseInvoices)

    const menuData = [
        {
            id: "1",
            name: "Masraf Beyan",
            iconName: "user-check",
            iconType: "font-awesome-5"
        },
        {
            id: "2",
            name: "Ödeme Emri",
            iconName: "money-check-alt",
            iconType: "font-awesome-5"
        },
        {
            id: "3",
            name: "Satın Alma Talep",
            iconName: "file-document-multiple",
            iconType: "material-community"
        },
        {
            id: "4",
            name: "Satın Alma Sipariş",
            iconName: "shopping-basket-add",
            iconType: "fontisto"
        },
        {
            id: "4",
            name: "Satın Alma Sözleşmeleri",
            iconName: "file-signature",
            iconType: "font-awesome-5"
        },
        {
            id: "5",
            name: "Satın Alma Faturaları",
            iconName: "file-invoice-dollar",
            iconType: "font-awesome-5"
        },
    ]

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            title: 'Menü'
        })
    }, [navigation])

    const goToWaitingApprovalScreen = (id) => {
        if (id === "1") {
            navigation.navigate(MENU_NAV.WAITING_APPROVAL)
        }
        else if (id === "2") {
            navigation.navigate(MENU_NAV.PAYMENT_REQUEST)
        }
        else if (id === "3") {
            navigation.navigate(MENU_NAV.PURCHASE_REQUEST)
        }
        else if (id === "4") {
            navigation.navigate(MENU_NAV.PURCHASE_AGGREMENT_REQUEST)
        }
        else if (id === "5") {
            navigation.navigate(MENU_NAV.PURCHASE_INVOICES)
        }
    }

    useEffect(() => {
        getPurchaseRequests()
        getExpenceRequests()
        PaymentRequests()
        purchaseAggrementRequest()
    }, [isLogin])

    const calculateHeader = (id) => {
        if (id === "1") {
            return expenceData?.resultObject?.expenseRequest?.length === 0
                || expenceData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                expenceData?.resultObject?.expenseRequest?.length
        }
        else if (id === "2") {
            return paymentRequestData?.resultObject?.paymentRequest?.length === 0
                || paymentRequestData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                paymentRequestData?.resultObject?.paymentRequest?.length
        }
        else if (id === "3") {
            return purchaseRequestData?.resultObject?.purchReqRequest?.length === 0
                || purchaseRequestData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                purchaseRequestData?.resultObject?.purchReqRequest?.length
        }
        else if (id === "4") {
            return purchaseAggrementData?.length === 0
                || purchaseAggrementData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                purchaseAggrementData?.length
        }
        else if (id === "5") {
            return purchaseInovices?.length === 0
                || purchaseInovices?.returnText === "RECORD_NOT_FOUND" ?
                5
                :
                0
        }
    }

    return (

        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>

            <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
                <View style={{ marginTop: 8 }}>
                    {
                        menuData?.map((item, index) => {
                            return (

                                <TouchableOpacity onPress={() => goToWaitingApprovalScreen(item?.id)} key={index}>
                                    <VStack style={styles.subContainer} >
                                        <HStack style={styles.list}>
                                            <HStack style={{ alignItems: "center", marginLeft: 16 }}>
                                                <Icon
                                                    name={item.iconName}
                                                    type={item.iconType}
                                                    size={18}
                                                    color="#007041"
                                                    style={{ backgroundColor: "#CCE2D9", borderRadius: 50, width: 40, height: 40, justifyContent: "center", padding: 1 }}

                                                />
                                                <Text
                                                    style={styles.labelStyle}>
                                                    {item?.name}
                                                </Text>

                                            </HStack>
                                            <HStack style={{ justifyContent: "space-between", alignItems: "center" }}>
                                                <Text style={{ paddingRight: 16, fontSize: 15, lineHeight: 20, textAlign: "center", color: "#A9A9A9" }}>
                                                    {calculateHeader(item?.id)}
                                                </Text>
                                                <TouchableOpacity
                                                    hitSlop={{
                                                        top: 20,
                                                        bottom: 20,
                                                        left: 20,
                                                        right: 20,
                                                    }}
                                                    onPress={() => goToWaitingApprovalScreen(item?.id)}

                                                >

                                                    <Icon
                                                        name="chevron-right"
                                                        type="font-awesome-5"
                                                        size={13}
                                                        color="#A9A9A9"
                                                        style={{ marginRight: 16 }}
                                                    />
                                                </TouchableOpacity>
                                            </HStack>
                                        </HStack>
                                    </VStack>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}