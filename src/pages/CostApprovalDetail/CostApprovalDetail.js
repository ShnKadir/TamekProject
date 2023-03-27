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

export default function CostApprovalDetail({
    route
}) {

    const navigation = useNavigation()

    const dummyDdata = [
        {
            id: "1",
            number: "1",
            name: "PARKER-Otopark",
            date: " 19.12.2022",
            cost: "570 TL",
            category: "Araç",
            type: "Otopark/Otoyol/Köprü",
            isCreditCard: "Hayır"
        },
        {
            id: "2",
            number: "2",
            name: "Starbucks-Pazar günü Starbucks-Pazar günü Starbucks-Pazar günü Starbucks-Pazar günü Starbucks-Pazar günü Starbucks-Pazar günü Starbucks-Pazar günü Starbucks-Pazar günü",
            date: " 21.12.2022",
            cost: "200 TL",
            category: "Araç",
            type: "Otopark/Otoyol/Köprü",
            isCreditCard: "Evet"
        },
        {
            id: "3",
            number: "3",
            name: "Otopark masrafı",
            date: " 20.12.2022",
            cost: "570 TL",
            category: "Araç",
            type: "Otopark/Otoyol/Köprü",
            isCreditCard: "Evet"
        },
        {
            id: "4",
            number: "4",
            name: "PARKER-Otopark 222",
            date: " 19.12.2022",
            cost: "400 TL",
            category: "Araç",
            type: "Otopark/Otoyol/Köprü",
            isCreditCard: "Hayır"
        },
        {
            id: "5",
            number: "5",
            name: "PARKER-Otopark",
            date: " 30.12.2022",
            cost: "620 TL",
            category: "Araç",
            type: "Otopark/Otoyol/Köprü",
            isCreditCard: "Evet"
        },
        {
            id: "6",
            number: "6",
            name: "PARKER-Otopark",
            date: " 19.12.2022",
            cost: "570 TL",
            category: "Araç",
            type: "Otopark/Otoyol/Köprü",
            isCreditCard: "Hayır"
        },

    ]

    const [data, setData] = useState(dummyDdata)
    const [search, setSearch] = useState("")

    useEffect(() => {
        setData(dummyDdata)
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: route?.params?.title,
        })
    }, [navigation])


    const updateSearch = (search) => {

        setSearch(search)
        let filteredData = dummyDdata?.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        setData(filteredData)
    }

    return (

        <SafeAreaView>

            <View style={{ backgroundColor: "#FFFFFF" }}>             

                <View style={{ paddingHorizontal: 16 }}>

                    <View style={{
                        paddingVertical: 32,
                        backgroundColor: "#FFFFFF",
                        height: 220,
                        marginTop: 8,
                        marginBottom: 24,
                        borderWidth: 1,
                        borderRadius: 16,
                        borderColor: "#FFFFFF",
                        shadowRadius: 20,
                        shadowColor: "black",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        elevation: 10
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
                            <Text style={{ color: "#000000", fontSize: 13, lineHeight: 18 }}>Harcayan</Text>

                            <Text style={{
                                fontWeight: "bold",
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: 'right'
                            }}>
                                Engin DADALI</Text>
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
                            <Text style={{ color: "#000000", fontSize: 13 }}>Tarih</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: "right"
                            }}>19.12.2022</Text>
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
                            <Text style={{ color: "#000000", fontSize: 13 }}>Toplam</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: "right"
                            }}>921.93 TL</Text>
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
                            <Text style={{ color: "#000000", fontSize: 13 }}>Avans</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                flex: 1,
                                lineHeight: 22,
                                textAlign: "right"
                            }}>0.00</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 10,
                                marginTop:14
                            }}
                        >
                            <TouchableOpacity
                                style={styles.denialButton}
                            >
                                <Text style={{ color: "#DA291C", fontWeight: "600" }} >
                                    Reddet
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.approveButton}
                            >
                                <Text style={{ color: "#03B354", fontWeight: "600" }} >
                                    Onayla
                                </Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "#FFFFFF" }}>

                    <VStack style={{ borderBottomColor: "#F2F2F2", borderBottomWidth: 1 }}>

                        <Text style={{ fontWeight: "bold", fontSize: 17, paddingTop: 17, marginBottom: 10, textAlign: "center" }}>Fatura Detayları</Text>
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
                    contentContainerStyle={{ paddingBottom: 670 }}

                >
                    <ScrollView contentContainerStyle={{ flex: 1 }} style={{ backgroundColor: "#F5F5F5" }}>

                        {
                            data?.map((item, index) => {
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
                                                    {item?.number}
                                                </Text>
                                            </View>
                                            <VStack style={{ marginLeft: 16, maxWidth: 270}} space={"4px"}>
                                                <Text style={{ fontWeight: "bold" }}>
                                                    Kategori: {item?.category}
                                                </Text>
                                                <Text style={{ fontSize:13,lineHeight:18}}>
                                                    Tip: {item?.type}
                                                </Text>
                                                <Text style={{ fontSize:13,lineHeight:18,paddingLeft:0,marginLeft:0}}>
                                                    {item?.date} - {item.cost}
                                                </Text>
                                                <Text style={{ fontSize:13,lineHeight:18}}>
                                                    Kredi Kart: {item.isCreditCard}
                                                </Text>
                                                <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                                                    Açıklama: {item?.name}
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