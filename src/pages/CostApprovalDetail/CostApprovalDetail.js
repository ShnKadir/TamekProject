//React
import React, { useLayoutEffect, useEffect, useState } from 'react'

// React Native
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { VStack, HStack } from 'native-base'
import { Icon, SearchBar } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Styles
import { styles } from './CostApprovalDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Moment
import moment from "moment"

export default function CostApprovalDetail({
    route
}) {

    const navigation = useNavigation()

    const [data, setData] = useState(route?.params?.data)
    const [dataLines, setDataLines] = useState(route?.params?.data?.lines)
    const [search, setSearch] = useState("")
    const [totalAmount, setTotalAmount] = useState("")

    useEffect(() => {
        setData(route?.params?.data)
        setDataLines(route?.params?.data?.lines)

    }, [route])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: "Onay Bekleyenler"
        })
    }, [navigation])

    useEffect(() => {
        let total = 0
        for (let i = 0; i < data?.lines?.length; i++) {
            total += parseFloat((data?.lines?.[i]?.amount).toLocaleString('en-US', { style: 'decimal', currency: 'TL' }).replace(',', ''))
            let converterCost = (total).toLocaleString('en-US', { style: 'decimal', currency: 'USD' })
            setTotalAmount(converterCost)
        }

    }, [data])

    const updateSearch = (search) => {

        if (search?.length > 0) {
            setSearch(search)
            let filteredData = route?.params?.data?.lines?.filter(item => item?.expenseName?.toLocaleUpperCase('tr-TR').includes(search.toLocaleUpperCase('tr-TR'))
                || item?.expenseCategory?.toLocaleUpperCase('tr-TR').includes(search.toLocaleUpperCase('tr-TR')))
            setDataLines(filteredData)
        }
        else {
            setDataLines(data?.lines)
            setSearch(null)
        }
    }

    const fixDateCalc = (date) => {

        let datee = date?.substring(0, 10)

        var longDateStr = moment(datee, 'M/D/Y').format("DD/MM/YYYY")

        return longDateStr
    }


    return (

        <SafeAreaView>

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
                        shadowRadius: 20,
                        shadowColor: "black",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        elevation: 10,
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
                            <Text style={{ color: "#000000", fontSize: 13, fontWeight: "bold" }}>Harcayan</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: 'right',
                            }}>
                                {data?.spenderUserIdName}
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
                            <Text style={{ color: "#000000", fontSize: 13, fontWeight: "bold" }}>Tarih</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: "right"
                            }}>
                                {fixDateCalc(data?.dateOfEntry)}
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
                            <Text style={{ color: "#000000", fontSize: 13, fontWeight: "bold" }}>Toplam</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: "right"
                            }}>
                                {totalAmount.toString()} {data?.currencyCode}
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginTop: 16
                            }}
                        >
                            <View style={{ paddingRight: 5 }}>

                                <TouchableOpacity
                                    style={styles.denialButton}
                                >
                                    <Text style={{ color: "#DA291C", fontWeight: "600" }} >
                                        Reddet
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View>

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

                <KeyboardAwareScrollView
                    extraHeight={0}
                    style={{
                        width: "100%",
                        backgroundColor: "#FFFFFF",
                    }}
                    contentContainerStyle={{ paddingBottom: 700 }}

                >
                    <ScrollView contentContainerStyle={{ flex: 1 }} style={{ backgroundColor: "#F5F5F5" }}>

                        {
                            dataLines?.map((item, index) => {
                                return (
                                    <HStack style={styles.list} key={index}>
                                        <HStack style={{ alignItems: "center" }}>
                                            <View
                                                style={{
                                                    justifyContent: 'center',
                                                    backgroundColor: "#CCE2D9",
                                                    width: 24,
                                                    height: 24,
                                                    borderRadius: 12
                                                }}
                                            >
                                                <Text
                                                    style={{

                                                        fontSize: 14,
                                                        lineHeight: 16,
                                                        color: "#007041",
                                                        textAlign: "center",
                                                        alignSelf: "center"

                                                    }}
                                                >
                                                    {item?.lineNum}
                                                </Text>
                                            </View>
                                            <VStack style={{ marginLeft: 16, maxWidth: 270 }} space={"4px"}>
                                                <Text style={{ fontWeight: "bold" }}>
                                                    Kategori: {item?.expenseCategory}
                                                </Text>
                                                <Text style={{ fontSize: 13, lineHeight: 18 }}>
                                                    Masraf: {item?.expenseName}
                                                </Text>
                                                <Text style={{ fontSize: 13, lineHeight: 18, paddingLeft: 0, marginLeft: 0, fontWeight: "bold" }}>
                                                    {/* {new Date(item?.expenseDate).toLocaleDateString("tr-TR").replaceAll('.', '/')} - {item?.amount} {data?.currencyCode} */}
                                                    {fixDateCalc(item?.expenseDate)} - {item?.amount} {data?.currencyCode}
                                                </Text>
                                                <Text style={{ fontSize: 13, lineHeight: 18 }}>
                                                    Kredi Kart: {item?.creditCard}
                                                </Text>
                                                <Text style={{ flexWrap: "wrap" }}>
                                                    Açıklama: {item?.description}
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

                                )
                            })
                        }



                        <VStack style={{ backgroundColor: "#FFFFFF", paddingBottom: 80 }} />
                    </ScrollView>
                </KeyboardAwareScrollView>

            </View >

        </SafeAreaView>
    )
}