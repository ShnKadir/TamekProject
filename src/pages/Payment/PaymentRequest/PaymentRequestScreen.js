//React
import React from 'react'

// React Native
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { VStack, HStack } from 'native-base'

// Styles
import { styles } from './PaymentRequestScreenStyle'

export default function PaymentRequestScreen() {
    return (
        <ScrollView
            style={{ flex: 1 }}
        >

            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 16,
                paddingVertical: 32,
                backgroundColor: "#F2F2F2",
                maxHeight: 164,
                shadowRadius: 8,
                shadowColor: "#black",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.04,
                elevation: 3,
            }}
            >
                <VStack style={{ flex: 1 }} space={"8px"}>
                    <Text>Harcayan</Text>
                    <Text>Tarih</Text>
                    <Text>Toplam</Text>
                    <Text>Avans</Text>
                </VStack>
                <VStack space={"8px"}>
                    <Text style={{ fontWeight: "bold" }}>Engin DADALI</Text>
                    <Text>19.12.2022</Text>
                    <Text style={{ fontWeight: "bold" }}>921.93 TL</Text>
                    <Text>0.00</Text>
                </VStack>

            </View>

            <View style={{ backgroundColor: "#ffffff" }}>

                <Text style={{ fontWeight: "bold", paddingLeft: 40, paddingTop: 27, marginBottom: 16 }}>Fatura Detayları</Text>
                <HStack style={styles.list}>
                    <HStack style={{ alignItems: "center", paddingBottom: 18 }}>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#F2F2F2',
                                width: 24,
                                height: 24,
                                borderRadius: 12
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    color: '#000000'
                                }}
                            >
                                {1}
                            </Text>
                        </View>
                        <VStack style={{ paddingLeft: 8 }} space={"4px"}>

                            <Text style={{ fontWeight: "bold" }}>
                                PARKER-Otopark
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                                19.12.2022-570 TRY
                            </Text>
                            <Text>
                                Kategori: Araç
                            </Text>
                            <Text>
                                Tip: Otopark/OtoyolKopru
                            </Text>
                            <Text>
                                Kredi Kart: Hayır
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>

                <HStack style={styles.list}>
                    <HStack style={{ alignItems: "center", paddingBottom: 18 }}>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#F2F2F2',
                                width: 24,
                                height: 24,
                                borderRadius: 12
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    color: '#000000'
                                }}
                            >
                                {2}
                            </Text>
                        </View>
                        <VStack style={{ paddingLeft: 8 }} space={"4px"}>

                            <Text style={{ fontWeight: "bold" }}>
                                Starbucks-Pazar günü Gemlik yardim sinaw günd
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                                19.12.2022-570 TRY
                            </Text>
                            <Text>
                                Kategori: Araç
                            </Text>
                            <Text>
                                Tip: Otopark/OtoyolKopru
                            </Text>
                            <Text>
                                Kredi Kart: Hayır
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>

                <HStack style={[styles.list, { paddingBottom: 16 }]}>
                    <HStack style={{ alignItems: "center" }}>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#F2F2F2',
                                width: 24,
                                height: 24,
                                borderRadius: 12
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    color: '#000000'
                                }}
                            >
                                {3}
                            </Text>
                        </View>
                        <VStack style={{ paddingLeft: 8 }} space={"4px"}>

                            <Text style={{ fontWeight: "bold" }}>
                                PARKER-Otopark
                            </Text>
                            <Text style={{ fontWeight: "bold" }}>
                                19.12.2022-570 TRY
                            </Text>
                            <Text>
                                Kategori: Araç
                            </Text>
                            <Text>
                                Tip: Otopark/OtoyolKopru
                            </Text>
                            <Text>
                                Kredi Kart: Hayır
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
            </View>

            <View style={{ height: 100, marginBottom: 80 }}>

                <HStack style={styles.buttonStyle} space={"8px"}>

                    <TouchableOpacity
                        style={styles.denialButton}
                    >
                        <Text style={{ color: "#03B354" }} >
                            Onayla
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.approveButton}
                    >
                        <Text style={{ color: "#000000" }} >
                            Reddet
                        </Text>
                    </TouchableOpacity>
                </HStack>
            </View>
        </ScrollView>
    )
}