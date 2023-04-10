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
import { MENU_NAV } from './../../../navigations/constants'

// Styles
import { styles } from './PaymentRequestStyle'
import { useSelector } from 'react-redux'
import { RETURN_TEXT } from '../../../common/Enums'

export default function PaymentRequest() {

    const navigation = useNavigation()

    const paymentRequestData = useSelector(state => state.payment?.paymentRequestData?.resultObject?.paymentRequest)
    const returnText = useSelector(state => state.payment?.paymentRequestData?.returnText)

    const [data, setData] = useState()

    const goToDetailScreen = (item) => {
        navigation.navigate(MENU_NAV.PAYMENT_REQUEST_DETAIL, { data: item })
    }

    useEffect(() => {
        setData(paymentRequestData)
    }, [paymentRequestData])

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

        let filteredData = paymentRequestData?.filter(item => item.paymentCompany.toLocaleUpperCase('tr-TR').includes(searchTerm.toLocaleUpperCase('tr-TR')))
        setData(filteredData)
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            {
                returnText === RETURN_TEXT.RECORD_NOT_FOUND ?
                    <View style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 14, textAlign: "center" }}>
                            Onayınızda bekleyen ödeme emri bulunmamaktadır.
                        </Text>
                    </View>

                    :
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>

                        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                            <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>

                                {
                                    data?.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => goToDetailScreen(item)}
                                                key={index}
                                            >

                                                <HStack style={styles.list} key={index} >
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
                                                        <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
                                                            <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 14 }}>
                                                                {item?.paymentCompany}
                                                            </Text>

                                                            <Text style={{ fontSize: 13, color: "#6C6C6C" }}>
                                                                {item?.paymentCategory}
                                                            </Text>

                                                            <HStack style={{ width: 260, justifyContent: "space-between", maxWidth: 260, flexWrap: "wrap" }}>
                                                                <HStack>
                                                                    <Text style={{ fontSize: 13, fontWeight: "600" }}>
                                                                        {item?.amount} {item?.currencyCode}
                                                                    </Text>
                                                                </HStack>
                                                                <HStack style={{}}>
                                                                    <Text style={{ flexWrap: "wrap", fontSize: 13, fontWeight: "600" }}>
                                                                        {item?.formOwner}
                                                                    </Text>
                                                                </HStack>
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

                                    })}
                            </ScrollView>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>

            }

        </SafeAreaView>

    )
}