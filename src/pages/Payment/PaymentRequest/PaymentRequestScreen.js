//React
import React, { useLayoutEffect, useEffect, useState } from 'react'

// React Native
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { VStack, HStack, useDisclose } from 'native-base'
import { Icon, SearchBar } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Styles
import { styles } from './PaymentRequestScreenStyle'

// Common Components
import ApprovalActionSheet from '../../../common/actionSheet/ApprovalActionSheet'

// Navigation
import { useNavigation } from '@react-navigation/native'

export default function PaymentRequestScreen({
    route
}) {

    const navigation = useNavigation()

    const sheetModal = useDisclose()

    const handleOnOpenActionSheeet = () => {
        sheetModal.onOpen()
    }

    const [costTitle, setCostTitle] = useState()

    useEffect(() => {
        setCostTitle(route?.params?.title)
    }, [route])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: route?.params?.title,
        })
    }, [navigation])

    return (

        <SafeAreaView>

            <View style={{ backgroundColor: "#FFFFFF" }}>

                <View style={{ paddingHorizontal: 16 }}>
                    <VStack style={{
                        flexDirection: 'row',
                        paddingHorizontal: 16,
                        paddingVertical: 32,
                        backgroundColor: "#FFFFFF",
                        height: 180,
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
                    }}
                    >

                        <VStack style={{ flex: 1 }} space={"8px"}>
                            <Text style={{ color: "#000000", fontSize: 13 }}>Harcayan</Text>
                            <Text style={{ color: "#000000", fontSize: 13 }}>Tarih</Text>
                            <Text style={{ color: "#000000", fontSize: 13 }}>Toplam</Text>
                            <Text style={{ color: "#000000", fontSize: 13 }}>Avans</Text>
                        </VStack>
                        <VStack space={"8px"}>
                            <Text style={{ fontWeight: "bold", color: "#000000", fontSize: 17 }}>Engin DADALI</Text>
                            <Text style={{ color: "#000000", fontSize: 17 }}>19.12.2022</Text>
                            <Text style={{ color: "#000000", fontSize: 17 }}>921.93 TL</Text>
                            <Text style={{ color: "#000000", fontSize: 17 }}>0.00</Text>
                        </VStack>


                    </VStack>
                </View>

                <HStack style={{ justifyContent: "flex-end", paddingRight: 16 }}>
                    <HStack style={{ alignItems: "center" }} space={"16px"}>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Dosya</Text>
                        <TouchableOpacity>
                            <Icon
                                name="ios-attach-sharp"
                                type="ionicon"
                                size={28}
                                color="black"
                                style={{ marginRight: 12 }}
                            />
                        </TouchableOpacity>
                    </HStack>
                </HStack>

                <View style={{ backgroundColor: "#FFFFFF" }}>

                    <VStack style={{ borderBottomColor: "#F2F2F2", borderBottomWidth: 1 }}>

                        <Text style={{ fontWeight: "bold", fontSize: 17, paddingLeft: 40, paddingTop: 27, marginBottom: 17, textAlign: "center" }}>Fatura Detayları</Text>
                        <SearchBar
                            placeholder="Search"
                            theme="light"
                            platform="ios"
                            inputContainerStyle={{ backgroundColor: "rgba(118, 118, 128, 0.12)", height: 36 }}
                            searchIcon={{ color: "#3C3C43" }}
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
                    <ScrollView contentContainerStyle={{ flex: 1 }} style={{ paddingBottom: 170 }}>

                        <HStack style={[styles.list, { marginTop: 8 }]}>
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

                                    <Text style={{ fontWeight: "bold", marginTop: 8 }}>
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

                        <HStack style={[styles.list]}>
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

                                    <Text style={{ fontWeight: "bold", marginTop: 8 }}>
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
                                    <Text style={{ marginBottom: 0 }}>
                                        Kredi Kart: Hayır
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
                        <HStack style={[styles.list]}>
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

                                    <Text style={{ fontWeight: "bold", marginTop: 8 }}>
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
                                    <Text style={{ marginBottom: 0 }}>
                                        Kredi Kart: Hayır
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

                        <HStack style={[styles.list]}>
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

                                    <Text style={{ fontWeight: "bold", marginTop: 8 }}>
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
                                    <Text style={{ marginBottom: 0 }}>
                                        Kredi Kart: Hayır
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

                        <HStack style={[styles.list]}>
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

                                    <Text style={{ fontWeight: "bold", marginTop: 8 }}>
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
                                    <Text style={{ marginBottom: 0 }}>
                                        Kredi Kart: Hayır
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

                        <HStack style={[styles.list]}>
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

                                    <Text style={{ fontWeight: "bold", marginTop: 8 }}>
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
                                    <Text style={{ marginBottom: 0 }}>
                                        Kredi Kart: Hayır
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

                        <HStack style={[styles.list]}>
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

                                    <Text style={{ fontWeight: "bold", marginTop: 8 }}>
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
                                    <Text style={{ marginBottom: 0 }}>
                                        Kredi Kart: Hayır
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

                        <HStack style={[styles.list]}>
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

                                    <Text style={{ fontWeight: "bold", marginTop: 8 }}>
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
                                    <Text style={{ marginBottom: 0 }}>
                                        Kredi Kart: Hayır
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

                        <HStack style={[styles.list]}>
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

                                    <Text style={{ fontWeight: "bold", marginTop: 8 }}>
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
                                    <Text style={{ marginBottom: 0 }}>
                                        Kredi Kart: Hayır
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

                        <HStack style={styles.buttonStyle} space={"8px"}>
                            <TouchableOpacity
                                style={styles.denialButton}
                                onPress={handleOnOpenActionSheeet}
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
                            <ApprovalActionSheet sheetModal={sheetModal} />
                        </HStack>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </View >

        </SafeAreaView>
    )
}