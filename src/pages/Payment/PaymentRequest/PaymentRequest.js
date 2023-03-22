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

export default function PaymentRequest() {

    const navigation = useNavigation()

    const [data, setData] = useState()

    const dummyDdata = [
        {
            id: "1",
            number: "1",
            name: "BORUSAN LOJISTIK DAGITIM A.Ş. 222",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "2",
            number: "2",
            name: "BORUSAN LOJISTIK DAGITIM A.Ş. 3344556",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "3",
            number: "3",
            name: " 44 BORUSAN LOJISTIK DAGITIM A.Ş.",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "4",
            number: "4",
            name: "asd BORUSAN LOJISTIK DAGITIM A.Ş.",
            date: "16/12/2023",
            costTotal: "87,736.00 USD",
        },
        {
            id: "5",
            number: "5",
            name: "555 BORUSAN LOJISTIK DAGITIM A.Ş.",
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
            name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
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

    const goToDetailScreen = (title) => {
        navigation.navigate(MENU_NAV.PAYMENT_REQUEST_DETAIL, { title: title })
    }



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
                name: "BORUSAN LOJISTIK DAGITIM A.Ş. 222",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "2",
                number: "2",
                name: "BORUSAN LOJISTIK DAGITIM A.Ş. 3344556",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "3",
                number: "3",
                name: " 44 BORUSAN LOJISTIK DAGITIM A.Ş.",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "4",
                number: "4",
                name: "asd BORUSAN LOJISTIK DAGITIM A.Ş.",
                date: "16/12/2023",
                costTotal: "87,736.00 USD",
            },
            {
                id: "5",
                number: "5",
                name: "555 BORUSAN LOJISTIK DAGITIM A.Ş.",
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
                name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
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
                            data?.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => goToDetailScreen(item.name)}
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
                                                        {item.number}
                                                    </Text>
                                                </View>
                                                <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
                                                    <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                                                        {item.name}
                                                    </Text>

                                                    <Text style={{ fontSize: 15, color: "#6C6C6C" }}>
                                                        {item.date}
                                                    </Text>


                                                    <HStack style={{ justifyContent: "space-between" }}>
                                                        <HStack style={{ maxWidth: 156, paddingRight: 68 }}>
                                                            <Text style={{ flexWrap: "wrap", fontSize: 16, fontWeight: "bold" }}>
                                                                Count
                                                            </Text>
                                                        </HStack>
                                                        <HStack style={{ maxWidth: 136 }}>
                                                            <Text style={{ flexWrap: "wrap", fontSize: 16, fontWeight: "bold" }}>
                                                                {item.costTotal}
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
                                                    onPress={() => goToDetailScreen(item.name)}
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