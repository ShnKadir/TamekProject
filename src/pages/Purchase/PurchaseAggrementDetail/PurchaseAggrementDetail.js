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
import { styles } from './PurchaseAggrementDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

export default function PurchaseAggrementDetail({
    route
}) {

    const navigation = useNavigation()

    const [data, setData] = useState(route.params.data)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            title: 'Satın Alma Talebi',
        })
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{  height: 160, maxHeight: 170 }}>

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
                    <VStack style={{ flex: 1, backgroundColor: "#FFFFFF" }} space={"8px"}>
                        <Text>Talep No</Text>
                        <Text>Talep Sahibi</Text>
                        <Text>Talep Tarihi</Text>
                        <Text>Toplam</Text>

                    </VStack>
                    <VStack style={{ flex: 1, backgroundColor: "#FFFFFF" }} space={"8px"} >
                        <Text>{data?.reqNo}</Text>
                        <Text>{data?.originator}</Text>
                        <Text> {new Date(data?.createdDate).toLocaleDateString("tr-TR")}</Text>
                        <Text>2,549.94 USD</Text>
                    </VStack>
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

                                        <VStack style={{ marginLeft: 16, maxWidth: 270 }} space={"4px"}>

                                            <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 12 }}>
                                                {item?.itemName}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                Departman: {item?.inventSiteName}
                                            </Text>
                                            {/* <Text style={{ fontSize: 11 }}>
                                                Tedarikçi: ROBOSET OTOMAS MAK. MÜH. LTD. ŞTİ.
                                            </Text> */}
                                            <Text style={{ fontSize: 11 }}>
                                                Miktar:{item?.qty} - Tutar: {item?.lineAmountMst} {item?.currencyCode}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                Açıklama: {item?.specialityDescription}
                                            </Text>
                                        </VStack>

                                    </HStack>
                                </HStack>
                            </VStack>


                        )
                    })
                }
            </ScrollView>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}