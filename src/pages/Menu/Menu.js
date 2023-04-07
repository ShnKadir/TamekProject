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

    const isLogin = useSelector(state => state.auth?.loginData?.resultStatus)

    const dummyDdata = [
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


    return (

        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>

            <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
                <View style={{ marginTop: 8 }}>
                    {
                        dummyDdata?.map((item, index) => {
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
                                                    name="angle-right"
                                                    type="font-awesome"
                                                    size={16}
                                                    color="#A9A9A9"
                                                    style={{ marginRight: 16 }}
                                                />
                                            </TouchableOpacity>
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