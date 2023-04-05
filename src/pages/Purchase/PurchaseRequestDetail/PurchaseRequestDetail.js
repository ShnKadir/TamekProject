// React
import React, { useLayoutEffect,useState } from 'react'

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
import { styles } from './PurchaseRequestDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

export default function PurchaseRequestDetail({
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

    console.log(data)
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }} contentContainerStyle={{ paddingBottom: 100 }}>
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
                        <Text>Açan</Text>
                        <Text>Talep Tarihi</Text>
                        <Text>Toplam</Text>

                    </VStack>
                    <VStack style={{ flex: 1, backgroundColor: "#FFFFFF" }} space={"8px"} >
                        <Text>{data?.reqNo}</Text>
                        <Text>{data?.originator}</Text>
                        <Text>{data?.createdDate}</Text>
                        <Text>2,549.94 USD</Text>
                    </VStack>
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
                                                Departman: {item?.inventSiteName}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                TEDARİKÇİ:ROBOSET OTOMAS MAK. MÜH. LTD. ŞTİ.
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                Miktar:{item?.qty}- Tutar: {item?.lineAmountMst} {item?.currencyCode}
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
        </SafeAreaView>
    )
}