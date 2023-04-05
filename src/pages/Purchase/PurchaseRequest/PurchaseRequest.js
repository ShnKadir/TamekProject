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
import { MENU_NAV } from './../../../navigations/constants'

// Styles
import { styles } from './PurchaseRequestStyle'

// Redux
import { useSelector } from 'react-redux'

export default function PurchaseRequest() {

    const navigation = useNavigation()

    const purchReqRequestData = useSelector(state => state.purchaseRequest.purchaseRequestData.resultObject.purchReqRequest)


    const dummyDdata = [
        {
            id: "1",
            number: "1",
            name: "Umut Baran BOZADA",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "2",
            number: "2",
            name: "Nurak AYLADIN",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "3",
            number: "3",
            name: "Yılmaz COSKAR",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "4",
            number: "4",
            name: "Çağatay KINALI",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "5",
            number: "5",
            name: "Numan TOPRAK",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "6",
            number: "6",
            name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "7",
            number: "7",
            name: "Soner Samet ERADAŞ",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "8",
            number: "8",
            name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "9",
            number: "9",
            name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
    ]

    const goToDetailScreen = (item) => {
        navigation.navigate(MENU_NAV.PURCHASE_REQUEST_DETAIL, { data: item })
    }

    const [data, setData] = useState()

    useEffect(() => {
        setData(dummyDdata)
    }, [])

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

        const dummyDdata = [
            {
                id: "1",
                number: "1",
                name: "Umut Baran BOZADA",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "2",
                number: "2",
                name: "Nurak AYLADIN",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "3",
                number: "3",
                name: "Yılmaz COSKAR",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "4",
                number: "4",
                name: "Çağatay KINALI",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "5",
                number: "5",
                name: "Numan TOPRAK",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "6",
                number: "6",
                name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "7",
                number: "7",
                name: "Soner Samet ERADAŞ",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "8",
                number: "8",
                name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "9",
                number: "9",
                name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
        ]
        let filteredData = dummyDdata?.filter(item => item.name.toUpperCase().includes(searchTerm.toUpperCase()))
        setData(filteredData)
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>

                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>

                        {
                            purchReqRequestData?.map((item, index) => {
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
                                                       1
                                                    </Text>
                                                </View>
                                                <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
                                                    <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                                                        {item.header}
                                                    </Text>

                                                    <Text style={{ fontSize: 15, color: "#6C6C6C" }}>
                                                        {item.originator}
                                                    </Text>

                                                    <HStack style={{ maxWidth: 260, width: 260 }}>
                                                        <Text style={{ flexWrap: "wrap", fontSize: 14, fontWeight: "bold" }}>
                                                            {item.createdDate}
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

                            })}
                    </ScrollView>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}