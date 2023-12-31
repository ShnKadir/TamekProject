// React
import React from 'react'
import { useState, useEffect, useLayoutEffect } from 'react'

// React Native
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import { VStack, HStack, ScrollView } from 'native-base'
import { Icon } from 'react-native-elements'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { MENU_NAV } from '../../../navigations/constants'

// Styles
import { styles } from './PurchaseOrderStyle'

// Redux
import { useSelector } from 'react-redux'
import { RETURN_TEXT } from '../../../common/Enums'

export default function PurchaseOrder() {

    const navigation = useNavigation()

    const purchaseOrderRequest = useSelector(state => state.purchaseOrder?.purchaseOrderData?.resultObject?.purchaseOrderRequest)
    const returnText = useSelector(state => state.purchaseOrder?.purchaseOrderData?.returnText)

    const goToDetailScreen = (item) => {
        navigation.navigate(MENU_NAV.PURCHASE_ORDER_DETAIL, { data: item })
    }

    const [data, setData] = useState()

    useEffect(() => {
        setData(purchaseOrderRequest)
    }, [purchaseOrderRequest])

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

        let filteredData = purchaseOrderRequest?.filter(item => item.purchId?.toLocaleUpperCase('tr-TR').includes(searchTerm?.toLocaleUpperCase('tr-TR')))
        setData(filteredData)
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            {
                returnText === RETURN_TEXT.RECORD_NOT_FOUND ?

                    <View style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }}>
                        <Text style={{ fontSize: 14, textAlign: "center" }}>
                            Onayınızda bekleyen satın siparişi bulunmamaktadır.
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
                                                        <VStack style={{ paddingLeft: 16, maxWidth: 284,paddingTop:8 }} space={"5px"}>
                                                            <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                                                                {item.purchId}
                                                            </Text>

                                                            <Text style={{ fontSize: 13, color: "#6C6C6C" }}>
                                                                {item?.createdBy}
                                                            </Text>
                                                            <Text style={{ flexWrap: "wrap", fontSize: 13 }}>
                                                                {item.amount}  {item.currencyCode}
                                                            </Text>

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