// React
import React, { useState,useEffect } from 'react'

// React Native
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView,Alert } from 'react-native'
import { HStack, VStack } from 'native-base'

// Styles
import { styles } from './PurchaseInvoicesDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Moment
import moment from "moment"

// Api
import postRecordApproveRejectControl from '../../../common/api/postRecordApproveRejectControl'

// Redux
import { useSelector } from 'react-redux'

// Enum
import { API_STATUS } from '../../../common/Enums'

export default function PurchaseInvoicesDetail({
    route
}) {

    const navigation = useNavigation()

    const recordApproveRejectControlApiStatus = useSelector(state => state.recordApproveStatusControl?.recordApproveRejectControlApiStatus)

    const [data, setData] = useState(route.params.data)

    useEffect(() => {
        setData(route.params.data)
    }, [route])

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerLargeTitle: false,
    //         title: 'Satın Alma Faturası Kaydı',
    //     })
    // }, [navigation])

    const calculateCost = (data) => {
        let total = 0
        let converterCost = 0
        for (let i = 0; i < data?.lines?.length; i++) {
            total += parseFloat((data?.lines?.[i]?.netAmount).toLocaleString('en-US', { style: 'decimal', currency: data?.currency }).replace(',', ''))
            converterCost = (total)?.toLocaleString('en-US', { style: 'decimal', currency: data?.currency })
        }
        return converterCost
    }

    const fixDateCalc = (date) => {

        let datee = date?.substring(0, 10)

        var longDateStr = moment(datee, 'M/D/Y').format("DD/MM/YYYY")

        return longDateStr
    }

    const handleOnRecordRejected = () => {

        postRecordApproveRejectControl(data?.tableRecId, data?.recId, 9)

        if (recordApproveRejectControlApiStatus === API_STATUS.SUCCESS) {

            Alert.alert(
                '',
                'Reddetme işlemi başarıyla gerçekleştirildi.',
                [
                    {
                        text: 'Tamam',
                        onPress: () => navigation.goBack()
                    },
                ],
                { cancelable: false },
            )
        }
    }

    const handleOnRecordApprove = () => {

        postRecordApproveRejectControl(data?.tableRecId, data?.recId, 4)
        
        if (recordApproveRejectControlApiStatus === API_STATUS.SUCCESS) {
            Alert.alert(
                '',
                'Onaylama işlemi başarıyla gerçekleştirildi.',
                [
                    {
                        text: 'Tamam',
                        onPress: () => navigation.goBack()
                    },
                ],
                { cancelable: false },
            )
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View>
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                    backgroundColor: "#FFFFFF",
                    marginHorizontal: 8,
                    marginVertical: 8,
                    borderWidth: 1,
                    borderRadius: 16,
                    borderColor: "#FFFFFF"
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
                                    width: "100%"
                                }}
                            >
                                <View style={{ width: "50%" }}>

                                    <Text style={{
                                        color: "#000000",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>Fatura No</Text>
                                </View>

                                <View style={{ width: "50%" }}>

                                    <Text style={{
                                        color: "#000000",
                                        textAlign: 'right',
                                        fontSize: 16
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
                                        color: "#000000",
                                        fontWeight: "bold",
                                        fontSize: 14
                                    }}>Tedarikçi</Text>
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
                                        Fatura Tarihi
                                    </Text>
                                </View>

                                <View style={{ width: "50%" }}>

                                    <Text style={{
                                        color: "#000000",
                                        textAlign: 'right',
                                        fontSize: 16
                                    }}>
                                        {fixDateCalc(data?.invoiceDate)}
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
                                        {calculateCost(data)} {data?.currency}
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
                    onPress={handleOnRecordRejected}
                >
                    <Text style={{ color: "#DA291C", fontWeight: "600" }} >
                        Reddet
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.approveButton}
                    onPress={handleOnRecordApprove}
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
                                                Kategori: {item?.category}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                Miktar:{item?.qty}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                Tutar:{(item?.netAmount)} {data?.currency}
                                            </Text>
                                            <Text style={{ fontSize: 11 }}>
                                                Birim Fiyat: {item?.unitPrice} {data?.currency}
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