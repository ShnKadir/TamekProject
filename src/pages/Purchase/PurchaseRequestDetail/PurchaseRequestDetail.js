// React
import React, { useLayoutEffect, useState } from 'react'

// React Native
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView
}
    from 'react-native'
import { HStack, VStack } from 'native-base'
import { Icon, SearchBar } from 'react-native-elements'

// Styles
import { styles } from './PurchaseRequestDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

export default function PurchaseRequestDetail({
    route
}) {

    const navigation = useNavigation()

    const [data, setData] = useState(route.params.data)
    const [search, setSearch] = useState("")
    const [dataLines, setDataLines] = useState(route?.params?.data?.lines)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: route.params.data?.header,
        })
    }, [navigation])

    const calculateCost = (data) => {
        let total = 0
        let converterCost = 0
        for (let i = 0; i < data?.lines?.length; i++) {
            total += parseFloat((data?.lines?.[i]?.lineAmountMst).toLocaleString('en-US', { style: 'decimal', currency: 'TL' }).replace(',', ''))
            converterCost = (total).toLocaleString('en-US', { style: 'decimal', currency: 'USD' })
        }
        return converterCost
    }

    const updateSearch = (search) => {

        if (search?.length > 0) {
            setSearch(search)
            let filteredData = route?.params?.data?.lines?.filter(item => item?.itemName?.toLocaleUpperCase('tr-TR').includes(search.toLocaleUpperCase('tr-TR')))
            setDataLines(filteredData)
        }
        else {
            setDataLines(data?.lines)
            setSearch(null)
        }
    }

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View style={{ backgroundColor: "#FFFFFF" }}>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{
                        paddingVertical: 32,
                        backgroundColor: "#FFFFFF",
                        maxHeight: 300,
                        marginTop: 8,
                        marginBottom: 24,
                        borderWidth: 1,
                        borderRadius: 16,
                        borderColor: "#FFFFFF",
                        shadowRadius: 5,
                        shadowColor: "black",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.2,
                        elevation: 5
                    }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8
                            }}
                        >
                            <Text style={{ color: "#000000", fontSize: 14, lineHeight: 18 }}>Talep No</Text>

                            <Text style={{
                                fontWeight: "bold",
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: 'right'
                            }}>
                                {data?.reqNo}</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8
                            }}
                        >
                            <Text style={{ color: "#000000", fontSize: 14, lineHeight: 18 }}>Talep Sahibi</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: "right"
                            }}>
                                {data?.originator}
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8
                            }}
                        >
                            <Text style={{ color: "#000000", fontSize: 14, lineHeight: 18 }}>Talep Tarihi</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: "right"
                            }}>
                                {new Date(data?.createdDate).toLocaleDateString("tr-TR").replaceAll('.', '/')}
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8
                            }}
                        >
                            <Text style={{ color: "#000000", fontSize: 14, lineHeight: 18 }}>Toplam</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: "right"
                            }}>
                                {calculateCost(data)} {data?.lines?.[0]?.currencyCode}
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                backgroundColor: "#FFFFFF",
                                width: "100%",
                                marginTop: 16
                            }}
                        >
                            <View style={{
                                width: "50%", paddingRight: 10
                            }}>

                                <TouchableOpacity
                                    style={styles.denialButton}
                                >
                                    <Text style={{ color: "#DA291C", fontWeight: "600" }} >
                                        Reddet
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: "50%" }}>

                                <TouchableOpacity
                                    style={styles.approveButton}
                                >
                                    <Text style={{ color: "#007041", fontWeight: "600" }} >
                                        Onayla
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: "#FFFFFF" }}>
                <VStack style={{ borderBottomColor: "#F2F2F2", borderBottomWidth: 1 }}>
                    <SearchBar
                        placeholder="Search"
                        theme="light"
                        platform="ios"
                        inputContainerStyle={{ backgroundColor: "rgba(118, 118, 128, 0.12)", height: 36 }}
                        searchIcon={{ color: "#3C3C43" }}
                        onChangeText={updateSearch}
                        value={search}
                    />
                </VStack>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }} contentContainerStyle={{ paddingBottom: 100 }}>

                {
                    dataLines?.map((item, index) => {

                        return (
                            <VStack style={{ borderTopColor: "#F5F5F5", borderTopWidth: 2, paddingHorizontal: 16 }} key={index}>
                                <HStack style={styles.list}>
                                    <HStack style={{ alignItems: "center" }}>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                backgroundColor: '#CCE2D9',
                                                width: 26,
                                                height: 26,
                                                borderRadius: 13,

                                            }}
                                        >
                                            <Text
                                                style={{

                                                    fontSize: 13,
                                                    lineHeight: 15,
                                                    color: "#007041",
                                                    textAlign: "center",
                                                    alignSelf: "center",
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {index + 1}
                                            </Text>
                                        </View>

                                        <VStack style={{ marginLeft: 16, maxWidth: 280, marginTop: 8 }} space={"4px"}>

                                            <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 12 }}>
                                                {item?.itemName}
                                            </Text>
                                            <Text style={{ fontSize: 12 }}>
                                                Departman: {item?.inventSiteName}
                                            </Text>

                                            <Text style={{ fontSize: 12 }}>
                                                Miktar:{item?.qty} - Tutar: {item?.lineAmountMst} {item?.currencyCode}
                                            </Text>
                                            <Text style={{ fontSize: 12 }}>
                                                Açıklama: {item?.specialityDescription} 
                                            </Text>
                                        </VStack>
                                    </HStack>
                                    <TouchableOpacity>
                                        <Icon
                                            name="ios-attach-sharp"
                                            type="ionicon"
                                            size={24}
                                            color="black"
                                            style={{ marginRight: 12 }}
                                        />
                                    </TouchableOpacity>
                                </HStack>
                              
                            </VStack>

                        )
                    })
                }
            </ScrollView>
        </SafeAreaView >
    )
}