// React
import React, { useLayoutEffect } from 'react'

// React Native
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements'
import { HStack, VStack } from 'native-base'

// Styles
import { styles } from './PaymentRequestDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

export default function PaymentRequestDetail() {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            title: 'Ödeme Talep Kaydı',
        })
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
                <View style={{ paddingHorizontal: 16 }}>
                    <View style={{
                        paddingVertical: 32,
                        backgroundColor: "#FFFFFF",
                        marginTop: 8,
                        marginBottom: 17,
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
                            <Text style={{ color: "#000000", fontSize: 16, lineHeight: 18 }}>Şirket</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 16,
                                lineHeight: 22,
                                textAlign: 'right'
                            }}>
                                BORUSAN LOJİSTİK DAĞITIM</Text>
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
                            <Text style={{ color: "#000000", fontSize: 16, lineHeight: 22 }}>Kategori</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 16,
                                lineHeight: 22,
                                textAlign: 'right'
                            }}>
                                ABD Masraflar</Text>
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
                            <Text style={{ color: "#000000", fontSize: 16, lineHeight: 22 }}>Tip</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 16,
                                lineHeight: 22,
                                textAlign: 'right'
                            }}>
                                ABD Masrafları</Text>
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
                            <Text style={{ color: "#000000", fontSize: 16, lineHeight: 22 }}>Tutar</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 16,
                                lineHeight: 22,
                                textAlign: 'right'
                            }}>
                                87,736.00 USD</Text>
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
                            <Text style={{ color: "#000000", fontSize: 16, lineHeight: 22 }}>Talep Eden</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 16,
                                lineHeight: 22,
                                textAlign: 'right'
                            }}>
                                Onur SALMAN</Text>
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
                            <Text style={{ color: "#000000", fontSize: 16, lineHeight: 22 }}>Belge Tarihi</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                lineHeight: 22,
                                textAlign: 'right'
                            }}>
                                17.12.2022</Text>
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
                            <Text style={{ color: "#000000", fontSize: 16, lineHeight: 22 }}>Ödeme Tarihi</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                lineHeight: 22,
                                textAlign: 'right'
                            }}>
                                21.12.2022</Text>
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
                            <Text style={{ color: "#000000", fontSize: 16, lineHeight: 22 }}>Açıklama</Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                lineHeight: 22,
                                textAlign: 'right',
                                maxWidth:220
                            }}>
                                Borusan Lojistikten Zone 3 ABDSevkiyati icin alinan Navlun hizmet</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
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
        </SafeAreaView>
    )
}