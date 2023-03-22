// React
import React, { useLayoutEffect } from 'react'
import { useEffect, useState } from 'react'

// React Native
import { Text, ScrollView, View, SafeAreaView,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { VStack, HStack } from 'native-base'

// Styles
import { styles } from './MenuStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { MENU_NAV } from '../../navigations/constants'

// Redux
import { setIsTest } from '../../redux/slice/testSlice'

export default function Menu() {

    const navigation = useNavigation()

    useEffect(() => {
        setIsTest(true)
    }, [])

    const dummyDdata = [
        {
            id: "1",
            name: "Masraf Beyan",
            iconName: "coins",
            iconType: "font-awesome-5"
        },
        {
            id: "2",
            name: "Ödeme Emri",
            iconName: "credit-card",
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
            iconName: "document-text",
            iconType: "ionicon"
        },
        {
            id: "4",
            name: "Satın Alma Sözleşmeleri",
            iconName: "text-document",
            iconType: "entypo"
        },
        {
            id: "5",
            name: "Satın Alma Faturaları",
            iconName: "file-invoice-dollar",
            iconType: "font-awesome-5"
        },
    ]

    const [data, setData] = useState()

    useEffect(() => {
        setData(dummyDdata)
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            title: 'Menü'

        })
    }, [navigation])


    function searchFilterFunction(searchTerm) {

        const dummyDdata = [
            {
                id: "1",
                name: "Cost Approval"
            },
            {
                id: "2",
                name: "Payment Order"
            },
            {
                id: "3",
                name: "Purchase Request"
            },
            {
                id: "4",
                name: "Purchase Order"
            },
            {
                id: "4",
                name: "Purchase Contract"
            },
            {
                id: "5",
                name: "Purchase Invoices"
            },
        ]
        let filteredData = dummyDdata?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setData(filteredData)
    }

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
        else if (id === "5") {
            navigation.navigate(MENU_NAV.PURCHASE_INVOICES)
        }
    }

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
                                                    size={20}
                                                    color="#007041"
                                                    style={{ backgroundColor: "#CCE2D9", borderRadius: 50, padding: 8 }}

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