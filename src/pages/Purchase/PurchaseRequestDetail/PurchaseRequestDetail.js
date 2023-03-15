// React
import React, { useLayoutEffect } from 'react'

// React Native
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements'
import { HStack, VStack } from 'native-base'

// Styles
import { styles } from './PurchaseRequestDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

export default function PurchaseRequestDetail() {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            title: 'Satın Alma Talebi',
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
                    <VStack style={{ flex: 1, backgroundColor: "#FFFFFF" }} space={"8px"}>
                        <Text>Talep No</Text>
                        <Text>Açan</Text>
                        <Text>Talep Tarihi</Text>
                        <Text>Toplam</Text>

                    </VStack>
                    <VStack style={{ flex: 1, backgroundColor: "#FFFFFF" }} space={"8px"} >
                        <Text>TLP000544023</Text>
                        <Text>Hasan ÇELENK</Text>
                        <Text>16.12.2022</Text>
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
                                    SRM ENCODER LAZER HIZ ÖLÇÜM REVİZYONU
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    Departman: YENİ SRM KAYNAK
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    TEDARİKÇİ:ROBOSET OTOMAS MAK. MÜH. LTD. ŞTİ.
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    Miktar:1- Tutar:2,549.94 USD
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    Açıklama: Roboset Firmasını'nın yapacağı lazer sensör yazılım entegrasyonu için
                                </Text>
                            </VStack>

                        </HStack>
                    </HStack>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    )
}