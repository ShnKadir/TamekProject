// React
import React, { useLayoutEffect } from 'react'

// React Native
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { HStack, VStack } from 'native-base'

// Styles
import { styles } from './PurchaseInvoicesDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

export default function PurchaseInvoicesDetail() {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            title: 'Tedarikçi Faturası',
        })
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
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

                    <VStack style={{
                        flex: 1,
                        flexDirection: 'row',
                        flexWrap: "wrap",
                        maxWidth: 350
                    }}>
                        <VStack style={{ margin: 4, width: 100, }} >
                            <Text>Fatura No</Text>
                        </VStack>
                        <VStack style={{ margin: 4, width: 216 }} >
                            <Text >GES2022000000347 - 17.12.2022 GES2022000000347 - 17.12.2022</Text>
                        </VStack>


                        <VStack style={{ margin: 4, width: 100, }} >
                            <Text>Tedarikçi</Text>
                        </VStack>
                        <VStack style={{ margin: 4, width: 216 }} >
                            <Text>MAKİNA ELEKTRONİK LTD.ŞTİ.</Text>
                        </VStack>

                        <VStack style={{ margin: 4, width: 100 }} >
                            <Text>Toplam</Text>
                        </VStack>
                        <VStack style={{ margin: 4, width: 216 }} >
                            <Text >13,222.00 EUR</Text>
                        </VStack>

                        <VStack style={{ margin: 4, width: 100 }} >
                            <Text>Ödeme Tarihi</Text>
                        </VStack>
                        <VStack style={{ margin: 4, width: 216 }} >
                            <Text >16.02.2023</Text>
                        </VStack>
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
                <VStack style={{ borderTopColor: "#F5F5F5", borderTopWidth: 1 }}>
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
                                    {1}
                                </Text>
                            </View>
                            <VStack style={{ marginLeft: 16, maxWidth: 270 }} space={"4px"}>

                                <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 12 }}>
                                    mandrel 5092052
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    Miktar:1- Toplam:2,549.94 USD
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    Talep: 3,840.00 - Fatura:2016.15
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    Departman: YENİ SRM KAYNAK
                                </Text>

                                <Text style={{ fontSize: 11 }}>
                                    Not: Roboset Firmasını'nın yapacağı lazer sensör yazılım entegrasyonu için
                                </Text>
                            </VStack>

                        </HStack>
                    </HStack>
                </VStack>

                <VStack style={{ borderTopColor: "#F5F5F5", borderTopWidth: 1 }}>
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
                                    {2}
                                </Text>
                            </View>
                            <VStack style={{ marginLeft: 16, maxWidth: 270 }} space={"4px"}>

                                <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 12 }}>
                                    upsetting bush 5092052
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    Miktar:1- Toplam:9,549.94 USD
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    Talep: 3,840.00 - Fatura:2016.15
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    Departman: YENİ SRM KAYNAK
                                </Text>

                                <Text style={{ fontSize: 11 }}>
                                    Not: Roboset Firmasını'nın yapacağı lazer sensör yazılım entegrasyonu için
                                </Text>
                            </VStack>

                        </HStack>
                    </HStack>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}