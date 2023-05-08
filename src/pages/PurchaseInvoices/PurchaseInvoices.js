// React
import React from 'react'
import { useState, useEffect, useLayoutEffect } from 'react'

// React Native
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import { VStack, HStack, ScrollView } from 'native-base'
import { Icon } from 'react-native-elements'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { MENU_NAV } from './../../navigations/constants'

// Styles
import { styles } from './PurchaseInvoicesStyle'
import { useSelector } from 'react-redux'
import { RETURN_TEXT } from '../../common/Enums'

export default function PurchaseInvoices() {

    const navigation = useNavigation()

    const invoiceRequest = useSelector(state => state.purchaseInvoice.purchaseInvoiceData?.resultObject?.invoiceRequest)

    const returnText = useSelector(state => state.purchaseInvoice?.purchaseInvoiceData?.returnText)

    const goToDetailScreen = (item) => {
        navigation.navigate(MENU_NAV.PURCHASE_INVOICES_DETAIL, { data: item })
    }

    const [data, setData] = useState()

    useEffect(() => {
        setData(invoiceRequest)
    }, [invoiceRequest])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Onay Bekleyenler",
            headerSearchBarOptions: {
                placeholder: "Search",
                onChangeText: (event) => searchFilterFunction(event.nativeEvent.text)
            }
        })
    }, [navigation])

    function searchFilterFunction(searchTerm) {

        let filteredData = invoiceRequest?.filter(item => item.name?.toLocaleUpperCase('tr-TR').includes(searchTerm.toLocaleUpperCase('tr-TR'))
            || item.invoiceId?.toLocaleUpperCase('tr-TR').includes(searchTerm.toLocaleUpperCase('tr-TR')))
        setData(filteredData)

    }

    const calculateCost = (data) => {
        let total = 0
        let converterCost = 0
        for (let i = 0; i < data?.lines?.length; i++) {
            total += parseFloat((data?.lines?.[i]?.netAmount).toLocaleString('en-US', { style: 'decimal', currency: data?.currency }).replace(',', ''))
            converterCost = (total)?.toLocaleString('en-US', { style: 'decimal', currency: data?.currency })
        }
        return converterCost
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            {
                returnText === RETURN_TEXT.RECORD_NOT_FOUND ?

                    <View style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 14, textAlign: "center" }}>
                            Satın Alma Faturası bulunmamaktadır.
                        </Text>
                    </View>
                    :
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>

                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>

                                {
                                    data?.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => goToDetailScreen(item)}
                                                key={index}
                                            >

                                                <HStack style={styles.list} >
                                                    <HStack style={{ alignItems: "center", maxWidth: 324 }}>
                                                        <View
                                                            style={{
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                backgroundColor: '#CCE2D9',
                                                                width: 24,
                                                                height: 24,
                                                                borderRadius: 12
                                                            }}
                                                        >
                                                            <Text
                                                                style={{
                                                                    textAlign: 'center',
                                                                    fontSize: 12,
                                                                    lineHeight: 12,
                                                                    color: '#007041'
                                                                }}
                                                            >
                                                                {index + 1}
                                                            </Text>
                                                        </View>
                                                        <VStack style={{ paddingLeft: 8, maxWidth: 284,paddingTop:8 }} space={"5px"}>
                                                            <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 13 }}>
                                                                {item.name}
                                                            </Text>

                                                            <Text style={{ flexWrap: "wrap", fontSize: 13, color: "#6C6C6C" }}>
                                                                {item.invoiceId}
                                                            </Text>

                                                            <HStack style={{ maxWidth: 260, width: 270, justifyContent: "space-between" }}>
                                                                <Text style={{ fontSize: 13, color: "#000000", fontWeight: "bold" }}>
                                                                    {item.createdBy}
                                                                </Text>
                                                                <Text style={{ fontSize: 13, color: "#000000", fontWeight: "bold" }}>
                                                                    {calculateCost(item)} {item.currency}
                                                                </Text>
                                                            </HStack>
                                                        </VStack>
                                                    </HStack>
                                                    <VStack>
                                                        <TouchableOpacity
                                                            hitSlop={{
                                                                top: 20,
                                                                bottom: 20,
                                                                left: 20,
                                                                right: 20,
                                                            }}
                                                            onPress={() => goToDetailScreen(item)}
                                                        >
                                                            <Icon
                                                                name="angle-right"
                                                                type="font-awesome"
                                                                size={20}
                                                                color="#A9A9A9"
                                                                style={{ marginRight: 16 }}
                                                            />
                                                        </TouchableOpacity>
                                                    </VStack>
                                                </HStack>
                                            </TouchableOpacity>
                                        )

                                    })
                                }


                            </ScrollView>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
            }
        </SafeAreaView>

    )
}