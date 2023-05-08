// React
import React, { useLayoutEffect } from 'react'

// React Native
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { HStack, VStack } from 'native-base'

// Styles
import { styles } from './PurchaseInvoicesDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useEffect } from 'react'

export default function PurchaseInvoicesDetail({
    route
}) {

    const navigation = useNavigation()

    const [data, setData] = useState(route.params.data)

    useEffect(() => {
        setData(route.params.data)
    }, [route])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            title: 'Tedarikçi Faturası',
        })
    }, [navigation])

    const calculateCost = (data) => {
        let total = 0
        let converterCost = 0
        for (let i = 0; i < data?.lines?.length; i++) {
            total += parseFloat((data?.lines?.[i]?.netAmount).toLocaleString('en-US', { style: 'decimal', currency: data?.currency }).replace(',', ''))
            converterCost = (total)?.toLocaleString('en-US', { style: 'decimal', currency: data?.currency })
        }
        return converterCost
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ height: 160, maxHeight: 170 }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingHorizontal: 16,
                    paddingVertical: 32,
                    backgroundColor: "#FFFFFF",
                    marginHorizontal: 8,
                    marginVertical: 8,
                    borderRadius: 16
                }}
                >
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 8,
                            width: "100%"
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "50%" }}>

                                <Text style={{
                                    color: "#000000",
                                }}>Fatura No</Text>
                            </View>

                            <View style={{ width: "50%", marginLeft: 20 }}>

                                <Text style={{
                                    color: "#000000",
                                    textAlign: 'left',
                                }}>
                                    {data?.invoiceId}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "50%" }}>

                                <Text style={{
                                    color: "#000000"
                                }}>Tedarikçi</Text>
                            </View>

                            <View style={{ width: "50%", marginLeft: 20 }}>

                                <Text style={{
                                    color: "#000000",
                                    textAlign: 'left'
                                }}>
                                    {data?.name}
                                </Text>
                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "50%" }}>

                                <Text style={{
                                    color: "#000000"
                                }}>
                                    Fatura Tarihi
                                </Text>
                            </View>

                            <View style={{ width: "50%", marginLeft: 20 }}>

                                <Text style={{
                                    color: "#000000",
                                    textAlign: 'left'
                                }}>

                                    {new Date(data?.invoiceDate).getDate() + "/" + (new Date(data?.invoiceDate).getUTCMonth() + 1) + "/" + new Date(data?.invoiceDate).getFullYear()}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >

                            <View style={{ width: "50%" }}>
                                <Text style={{
                                    color: "#000000"
                                }}>Toplam</Text>
                            </View>

                            <View style={{ width: "50%", marginLeft: 20 }}>

                                <Text style={{
                                    color: "#000000",
                                    textAlign: 'left'
                                }}>
                                    {calculateCost(data)} {data?.currency}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <HStack style={styles.buttonStyle} space={"8px"}>
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

            </HStack>

            <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }} contentContainerStyle={{ paddingBottom: 100 }}>

                {
                    data?.lines?.map((item, index) => {

                        return (

                            <VStack style={{
                                borderTopColor: "#F5F5F5",
                                borderTopWidth: 1,
                                paddingHorizontal: 16
                            }}
                                key={index}>
                                <HStack style={styles.list}>
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
                                                {index + 1}
                                            </Text>
                                        </View>
                                        <VStack style={{ marginLeft: 16, maxWidth: 270 }} space={"4px"}>

                                            <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 12 }}>
                                                {item?.itemName}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                Miktar:{item?.qty} - Toplam:{item?.netAmount} {data?.currency}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                Kategori: {item?.category}
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </HStack>
                            </VStack>
                        )
                    })
                }

            </ScrollView>
        </SafeAreaView>
    )
}