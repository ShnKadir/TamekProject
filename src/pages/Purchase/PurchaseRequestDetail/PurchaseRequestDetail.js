// React
import React, { useState, useEffect } from 'react'

// React Native
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Alert
}
    from 'react-native'
import { HStack } from 'native-base'

// Styles
import { styles } from './PurchaseRequestDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Moment
import moment from "moment"

// Api
import postRecordApproveRejectControl from '../../../common/api/postRecordApproveRejectControl'

// Redux
import { useSelector } from 'react-redux'

//Enum
import { API_STATUS } from '../../../common/Enums'

export default function PurchaseRequestDetail({
    route
}) {

    const navigation = useNavigation()

    const recordApproveRejectControlApiStatus = useSelector(state => state.recordApproveStatusControl?.recordApproveRejectControlApiStatus)

    const [data, setData] = useState(null)

    useEffect(() => {
        if (route.params.data) {
            setData(route.params.data)
        }
    }, [route])

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerLargeTitle: false,
    //         title: "Satın Alma Talep Kaydı"
    //     })
    // }, [navigation])

    const fixDateCalc = (date) => {

        let datee = date?.substring(0, 10)

        let longDateStr = moment(datee, 'M/D/Y').format("DD/MM/YYYY")

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

            <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }} contentContainerStyle={{ flexGrow: 1 }} >
                <View style={{ paddingHorizontal: 16, paddingBottom: 200 }}>

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
                        elevation: 10,
                    }}>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"

                                }}>Talep No</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    flex: 1,
                                    textAlign: 'right',
                                }}>
                                    {data?.reqNo}

                                </Text>

                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"

                                }}>Talep Başlığı</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    flex: 1,
                                    textAlign: 'right',
                                }}>
                                    {data?.header}

                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Talep Sahibi</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {data?.originator}
                                </Text>
                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>
                                    Talep Tarihi
                                </Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>

                                    {fixDateCalc(data?.createdDate)}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Ürün No</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {data?.itemId}
                                </Text>
                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Ürün</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {data?.itemName}
                                </Text>
                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Miktar</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {data?.qty} {data?.unit}
                                </Text>
                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Tutar</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {data?.lineAmountMst} {data?.currencyCode}
                                </Text>
                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Açıklama</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {data?.specialityDescription}
                                </Text>
                            </View>

                        </View>

                    </View>
                </View>
            </ScrollView>

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
                    <Text style={{ color: "#007041", fontWeight: "600" }} >
                        Onayla
                    </Text>
                </TouchableOpacity>

            </HStack>
        </SafeAreaView>
    )
}