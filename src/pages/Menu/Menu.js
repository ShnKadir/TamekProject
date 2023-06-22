// React
import React, { useCallback, useState } from 'react'
import { useEffect } from 'react'

// React Native
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, Dimensions, RefreshControl } from 'react-native'
import { Icon } from 'react-native-elements'
import { VStack, HStack, Image } from 'native-base'

// Styles
import { styles } from './MenuStyle'

// Navigation
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { MENU_NAV } from '../../navigations/constants'

// Api
import getPurchaseRequests from '../../common/api/purchase/purchaseRequest/getPurchaseRequests'
import getExpenceRequests from '../../common/api/expence/getExpenceRequests'
import PaymentRequests from '../../common/api/paymentRequest/PaymentRequests'
import getPurchaseOrdersRequest from '../../common/api/purchase/PurchaseOrderRequest/getPurchaseOrdersRequest'
import getPurchaseInvoicesRequest from '../../common/api/purchase/PurchaseInvoicesRequest/getPurchaseInvoicesRequest'
import purchaseAggrementRequests from '../../common/api/purchase/purchaseAggrementRequest/purchaseAggrementRequests'

// Redux
import { useSelector } from 'react-redux'

// Icon
import costApproval from '../../../assets/image/costApproval.png'
import paymentOrder from '../../../assets/image/paymentOrder.png'
import purchaseContract from '../../../assets/image/purchaseContract.png'
import purchaseInvoice from '../../../assets/image/purchaseInvoice.png'
import purchaseOrder from '../../../assets/image/purchaseOrder.png'
import purchaseRequest from '../../../assets/image/purchaseRequest.png'

export default function Menu() {

    const navigation = useNavigation()

    const windowHeight = Dimensions.get('window').height;

    const isLogin = useSelector(state => state.auth?.isLogin)
    const expenceData = useSelector(state => state.expence?.expenceData)
    const paymentRequestData = useSelector(state => state.payment?.paymentRequestData)
    const purchaseRequestData = useSelector(state => state.purchaseRequest?.purchaseRequestData)
    const purchaseAggrementData = useSelector(state => state.purchaseAggrement?.purchaseAggrementData)
    const purchaseOrderData = useSelector(state => state.purchaseOrder?.purchaseOrderData)
    const purchaseInvoiceData = useSelector(state => state.purchaseInvoice?.purchaseInvoiceData)

    const [refreshing, setRefreshing] = useState(false)

    const menuData = [
        {
            id: "1",
            name: "Masraf Beyan",
            iconName: "user-check",
            iconType: "font-awesome-5",
            icon: <Image
                source={costApproval}
                resizeMode='cover'
                alt=''
                style={{ height: 30, width: 30 }}
            />
        },
        {
            id: "2",
            name: "Ödeme Emri",
            iconName: "money-check-alt",
            iconType: "font-awesome-5",
            icon: <Image
                source={paymentOrder}
                resizeMode='cover'
                alt=''
                style={{ height: 30, width: 30 }}
            />
        },
        {
            id: "3",
            name: "Satın Alma Talep",
            iconName: "file-document-multiple",
            iconType: "material-community",
            icon: <Image
                source={purchaseRequest}
                resizeMode='cover'
                alt=''
                style={{ height: 30, width: 30 }}
            />
        },
        {
            id: "4",
            name: "Satın Alma Sipariş",
            iconName: "shopping-basket-add",
            iconType: "fontisto",
            icon: <Image
                source={purchaseOrder}
                resizeMode='cover'
                alt=''
                style={{ height: 30, width: 30 }}
            />
        },
        {
            id: "5",
            name: "Satın Alma Sözleşmeleri",
            iconName: "file-signature",
            iconType: "font-awesome-5",
            icon: <Image
                source={purchaseContract}
                resizeMode='cover'
                alt=''
                style={{ height: 30, width: 30 }}
            />
        },
        {
            id: "6",
            name: "Satın Alma Faturaları",
            iconName: "file-invoice-dollar",
            iconType: "font-awesome-5",
            icon: <Image
                source={purchaseInvoice}
                resizeMode='cover'
                alt=''
                style={{ height: 30, width: 30 }}
            />
        },
    ]

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
            navigation.navigate(MENU_NAV.PURCHASE_ORDER)
        }
        else if (id === "5") {
            navigation.navigate(MENU_NAV.PURCHASE_AGGREMENT_REQUEST)
        }
        else if (id === "6") {
            navigation.navigate(MENU_NAV.PURCHASE_INVOICES)
        }
    }

    const callApis = () => {
        getPurchaseRequests()
        getExpenceRequests()
        PaymentRequests()
        purchaseAggrementRequests()
        getPurchaseOrdersRequest()
        getPurchaseInvoicesRequest()
    }

    useFocusEffect(
        useCallback(() => {
            setRefreshing(true)
            callApis()
            setTimeout(() => {
                setRefreshing(false)
            }, 1000)
        }, [])
    );

    useEffect(() => {
        callApis()
    }, [isLogin])

    const calculateHeader = (id) => {
        if (id === "1") {
            return expenceData === null
                || expenceData?.resultObject?.expenseRequest?.length === 0
                || expenceData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                expenceData?.resultObject?.expenseRequest?.length
        }
        else if (id === "2") {
            return paymentRequestData === null
                || paymentRequestData?.resultObject?.paymentRequest?.length === 0
                || paymentRequestData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                paymentRequestData?.resultObject?.paymentRequest?.length
        }
        else if (id === "3") {
            return purchaseRequestData === null
                || purchaseRequestData?.resultObject?.purchReqRequest?.length === 0
                || purchaseRequestData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                purchaseRequestData?.resultObject?.purchReqRequest?.length
        }
        else if (id === "4") {
            return purchaseOrderData === null
                || purchaseOrderData?.resultObject?.purchaseOrderRequest?.length === 0
                || purchaseOrderData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                purchaseOrderData?.resultObject?.purchaseOrderRequest?.length
        }
        else if (id === "5") {
            return purchaseAggrementData === null
                || purchaseAggrementData?.resultObject?.purchAgreementRequest?.length === 0
                || purchaseAggrementData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                purchaseAggrementData?.resultObject?.purchAgreementRequest?.length

        }
        else if (id === "6") {
            return purchaseInvoiceData === null
                || purchaseInvoiceData?.resultObject?.invoiceRequest?.length === 0
                || purchaseInvoiceData?.returnText === "RECORD_NOT_FOUND" ?
                0
                :
                purchaseInvoiceData?.resultObject?.invoiceRequest?.length
        }
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true)
        callApis()
        setTimeout(() => {
            setRefreshing(false)
        }, 1000)
    }, []);

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#007041" }}>
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: "center", flex: 1 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />}
                >

                    {
                        menuData?.map((item, index) => {
                            return (

                                <TouchableOpacity onPress={() => goToWaitingApprovalScreen(item?.id)} key={index}>

                                    <VStack style={styles.subContainer} >
                                        <HStack style={styles.list}>
                                            <HStack style={{ alignItems: "center", marginLeft: 16 }}>
                                                {item?.icon}
                                                <Text
                                                    style={styles.labelStyle}>
                                                    {item?.name}
                                                </Text>
                                            </HStack>

                                            <HStack style={{ justifyContent: "space-between", alignItems: "center" }}>
                                                {
                                                    calculateHeader(item?.id) !== 0 &&
                                                    <View style={{
                                                        backgroundColor: "#338D67",
                                                        marginRight: 10,
                                                        borderRadius: 50,
                                                        width: 24,
                                                        height: 24,
                                                        justifyContent: "center"
                                                    }}>

                                                        <Text
                                                            style={{
                                                                fontSize: 13,
                                                                lineHeight: 14,
                                                                textAlign: "center",
                                                                color: "#FFFFFF"
                                                            }}>
                                                            {calculateHeader(item?.id)}
                                                        </Text>
                                                    </View>
                                                }

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
                                                        color="#FFFFFF"
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
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}