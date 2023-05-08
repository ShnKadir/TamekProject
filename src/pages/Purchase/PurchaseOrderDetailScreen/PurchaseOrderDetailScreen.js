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

// Styles
import { styles } from './PurchaseOrderDetailScreenStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

export default function PurchaseOrderDetailScreen({
    route
}) {

    const navigation = useNavigation()

    const [data, setData] = useState(route.params.data)

    useEffect(() => {
        setData(route.params.data)
    }, [route])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: 'Satın Alma Sipariş Kaydı',
        })
    }, [navigation])

    const calculateCost = (data) => {
        let total = 0
        let converterCost = 0
        for (let i = 0; i < data?.lines?.length; i++) {
            total += parseFloat((data?.lines?.[i]?.netAmount).toLocaleString('en-US', { style: 'decimal', currency: data?.currencyCode }).replace(',', ''))
            converterCost = (total)?.toLocaleString('en-US', { style: 'decimal', currency: data?.currencyCode })
        }
        return converterCost
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ height: 180, maxHeight: 220 }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingHorizontal: 16,
                    paddingVertical:8,
                    backgroundColor: "#FFFFFF",
                    marginHorizontal: 8,
                    marginVertical: 8,
                    borderRadius: 16
                }}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
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
                                    width: "100%",
                                    marginTop: 16
                                }}
                            >
                                <View style={{ width: "50%" }}>

                                    <Text style={{
                                        color: "#000000",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>Satın Alma Sipariş No</Text>
                                </View>

                                <View style={{ width: "50%" }}>

                                    <Text style={{
                                        color: "#000000",
                                        textAlign: 'right',
                                        fontSize: 16
                                    }}>
                                        {data?.purchId}
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
                                        color: "#000000",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>Firma</Text>
                                </View>

                                <View style={{ width: "50%" }}>

                                    <Text style={{
                                        color: "#000000",
                                        textAlign: 'right',
                                        fontSize: 16
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
                                        color: "#000000",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>
                                        Vade Tarihi
                                    </Text>
                                </View>

                                <View style={{ width: "50%" }}>

                                    <Text style={{
                                        color: "#000000",
                                        textAlign: 'right',
                                        fontSize: 16
                                    }}>

                                        {data?.paymTerm}
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
                                        color: "#000000",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>Toplam</Text>
                                </View>

                                <View style={{ width: "50%" }}>

                                    <Text style={{
                                        color: "#000000",
                                        textAlign: 'right',
                                        fontSize: 16
                                    }}>
                                        {calculateCost(data)} {data?.currencyCode}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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
                            <VStack style={{ borderTopColor: "#F5F5F5", borderTopWidth: 1, paddingHorizontal: 16 }} key={index}>
                                <HStack style={styles.list}>
                                    <HStack style={{ alignItems: "center" }}>
                                        <View
                                            style={{
                                                justifyContent: 'center',
                                                backgroundColor: "#CCE2D9",
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

                                        <VStack style={{ marginLeft: 16, maxWidth: 270, marginTop: 8 }} space={"4px"}>

                                            <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 12 }}>
                                                {item?.itemId}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                {item?.inventTechProperty}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                Miktar:{item?.qty} {item?.unit}
                                            </Text>

                                            <Text style={{ fontSize: 11 }}>
                                                Tutar: {item?.netAmount} {data?.currencyCode}
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