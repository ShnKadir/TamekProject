// React
import React from 'react'
import { useEffect,useState } from 'react'

// React Native
import { Text, TouchableOpacity, ScrollView,View ,SafeAreaView } from 'react-native'
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
            name: "Cost Approval",
            iconName: "coins",
            iconType: "font-awesome-5"
        },
        {
            id: "2",
            name: "Payment Order",
            iconName: "credit-card",
            iconType: "font-awesome-5"
        },
        {
            id: "3",
            name: "Purchase Request",
            iconName: "file-document-multiple",
            iconType: "material-community"
        },
        {
            id: "4",
            name: "Purchase Order",
            iconName: "document-text",
            iconType: "ionicon"
        },
        {
            id: "4",
            name: "Purchase Contract",
            iconName: "text-document",
            iconType: "entypo"
        },
        {
            id: "5",
            name: "Purchase Invoices",
            iconName: "file-invoice-dollar",
            iconType: "font-awesome-5"
        },
    ]

    const [data, setData] = useState()

    useEffect(() => {
        setData(dummyDdata)
    }, [])

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerLargeTitle: true,
    //         headerSearchBarOptions: {
    //             placeholder: "Search",
    //             onChangeText: (event) => searchFilterFunction(event.nativeEvent.text)
    //         }
    //     })
    // }, [navigation])


    function searchFilterFunction(searchTerm) {

        // if (searchTerm) {

        //     const newData = data?.filter(item => {
        //         const itemData = item?.name.toUpperCase()
        //         const textData = searchTerm.toUpperCase()

        //         return itemData.indexOf(textData) > -1
        //     })

        //     setData(newData)
        // }
        // else {
        //     setData(dummyDdata)
        // }

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

    const goToPaymentRequestScreen = () => {
        navigation.navigate(MENU_NAV.PAYMENT_REQUEST)
    }

    const goToWaitingApprovalScreen = () => {
        navigation.navigate(MENU_NAV.WAITING_APPROVAL)
    }

    return (

        <SafeAreaView style={{ backgroundColor: "#FFFFFF", flex: 1 }}>

            <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
                {
                    dummyDdata?.map((item, index) => {
                        return (
                            <View key={index}>
                                <VStack style={styles.subContainer}>
                                    <HStack style={styles.list}>
                                        <TouchableOpacity onPress={() => goToWaitingApprovalScreen()}>
                                            <HStack style={{ alignItems: "center" }}>
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
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            hitSlop={{
                                                top: 20,
                                                bottom: 20,
                                                left: 20,
                                                right: 20,
                                            }}
                                            onPress={goToWaitingApprovalScreen}
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
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>

    )
}