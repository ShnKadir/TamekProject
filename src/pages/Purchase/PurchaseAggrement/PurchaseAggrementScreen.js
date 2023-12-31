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
import { styles } from './PurchaseAggrementScreenStyle'

// Redux
import { useSelector } from 'react-redux'
import { RETURN_TEXT } from '../../../common/Enums'

// Moment
import moment from "moment"

export default function PurchaseAggrementScreen() {

    const navigation = useNavigation()

    const purchaseAggrementData = useSelector(state => state.purchaseAggrement?.purchaseAggrementData?.resultObject?.purchAgreementRequest)
    const returnText = useSelector(state => state.purchaseAggrement?.purchaseAggrementData?.returnText)

    const goToDetailScreen = (item) => {
        navigation.navigate(MENU_NAV.PURCHASE_AGGREMENT_REQUEST_DETAIL, { data: item })
    }

    const [data, setData] = useState()

    useEffect(() => {
        setData(purchaseAggrementData)
    }, [purchaseAggrementData])

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

        let filteredData = purchaseAggrementData?.filter(item => item.vendor?.toLocaleUpperCase('tr-TR').includes(searchTerm?.toLocaleUpperCase('tr-TR')))
        setData(filteredData)
    }


    const fixDateCalc = (date) => {

        let datee = date?.substring(0, 10)

        var longDateStr = moment(datee, 'M/D/Y').format("DD/MM/YYYY")

        return longDateStr
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            {
                returnText === RETURN_TEXT.RECORD_NOT_FOUND ?

                    <View style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }}>
                        <Text style={{ fontSize: 14, textAlign: "center" }}>
                            Onayınızda bekleyen satın alma sözleşmesi bulunmamaktadır.
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

                                                <HStack style={styles.list} key={index}>
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

                                                        <VStack style={{ paddingLeft: 8, maxWidth: 284, paddingTop: 8 }} space={"5px"}>
                                                            <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 13 }}>
                                                            {item.vendor}
                                                            </Text>

                                                            <Text style={{ flexWrap: "wrap", fontSize: 13, fontWeight: "bold" }}>
                                                                {item.agreementNo}
                                                            </Text>

                                                            <Text style={{ fontSize: 13, color: "#6C6C6C" }}>
                                                                {item.createdBy}
                                                            </Text>

                                                            <HStack style={{ width: 260, justifyContent: "space-between", maxWidth: 260 }}>
                                                                <HStack style={{ maxWidth: 156, paddingRight: 68 }}>
                                                                    <Text style={{ flexWrap: "wrap", fontSize: 13, fontWeight: "500", color: "#6C6C6C" }}>
                                                                    {fixDateCalc(item?.createdDate)}
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