//React
import React, { useEffect, useState } from 'react'

// React Native
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Platform
}
    from 'react-native'
import { VStack } from 'native-base'
import { Icon, SearchBar } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActivityIndicator } from 'react-native-paper'

// Styles
import { styles } from './CostApprovalDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

// Moment
import moment from "moment"

// Api
import getExpenceFileRequests from '../../common/api/expence/getExpenceFileRequests'
import postRecordApproveRejectControl from '../../common/api/postRecordApproveRejectControl'

// Redux
import { useSelector } from 'react-redux'
import { MENU_NAV } from '../../navigations/constants'

// File Library
import * as FileSystem from "expo-file-system"
import { shareAsync } from "expo-sharing"

// Components
import CostApprovalDetailLine from './CostApprovalDetailLine'
import { API_STATUS } from '../../common/Enums'

export default function CostApprovalDetail({
    route
}) {

    const navigation = useNavigation()

    let isRejected = false

    const [data, setData] = useState(route?.params?.data)
    const [dataLines, setDataLines] = useState(route?.params?.data?.lines)
    const [search, setSearch] = useState("")
    const [totalAmount, setTotalAmount] = useState("")

    const expenceFileHeader = useSelector(state => state.expence?.expenceFile?.resultObject)
    const expenceFileApistatus = useSelector(state => state.expence?.expenceFileApistatus)

    useEffect(() => {
        setData(route?.params?.data)
        setDataLines(route?.params?.data?.lines)

    }, [route])

    useEffect(() => {
        let total = 0
        for (let i = 0; i < data?.lines?.length; i++) {
            total += parseFloat((data?.lines?.[i]?.amount).toLocaleString('en-US', { style: 'decimal', currency: 'TL' }).replace(',', ''))
            let converterCost = (total).toLocaleString('en-US', { style: 'decimal', currency: 'USD' })
            setTotalAmount(converterCost)
        }

    }, [data])

    const updateSearch = (search) => {

        if (search?.length > 0) {
            setSearch(search)
            let filteredData = route?.params?.data?.lines?.filter(item => item?.expenseName?.toLocaleUpperCase('tr-TR').includes(search.toLocaleUpperCase('tr-TR'))
                || item?.expenseCategory?.toLocaleUpperCase('tr-TR').includes(search.toLocaleUpperCase('tr-TR')))
            setDataLines(filteredData)
        }
        else {
            setDataLines(data?.lines)
            setSearch(null)
        }
    }

    const fixDateCalc = (date) => {

        let datee = date?.substring(0, 10)
        var longDateStr = moment(datee, 'M/D/Y').format("DD/MM/YYYY")
        return longDateStr
    }

    useEffect(() => {
        getExpenceFileRequests(data?.expenseRequestFormHeader)
    }, [data])


    const handleOnRecordRejected = () => {
        isRejected = true
        postRecordApproveRejectControl(data?.tableRecId, data?.recId, 9, navigation, isRejected)
    }

    const handleOnRecordApprove = () => {
        isRejected = false
        postRecordApproveRejectControl(data?.tableRecId, data?.recId, 4, navigation, isRejected)
    }

    const save = async (uri, filename, mimetype) => {
        if (Platform.OS === "android") {
            const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync()
            if (permissions.granted) {
                const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 })
                await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
                    .then(async (uri) => {
                        await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 })
                    })
                    .catch(e => console.log(e))
            } else {
                shareAsync(uri)
            }
        } else {
            shareAsync(uri)
        }
    };

    const downloadFromUrl = async (fileData) => {

        let extension = fileData?.substring(fileData?.lastIndexOf('.') + 1, fileData?.length)

        if (extension === "jpg" || extension === "jpeg" || extension === "pdf") {

            navigation.navigate(MENU_NAV.OPEN_FILE, { data: fileData })
        }
        else {

            let fileType = fileData?.substring(fileData?.lastIndexOf('.') + 1, fileData?.length)
            const filename = "file." + fileType;
            const result = await FileSystem.downloadAsync(
                fileData,
                FileSystem.documentDirectory + filename
            )
            save(result.uri, filename, result.headers["Content-Type"])
        }
    }

    return (

        <SafeAreaView>

            {
                expenceFileApistatus === API_STATUS.SUCCESS ?
                    <View style={{ backgroundColor: "#FFFFFF" }}>

                        <View style={{ paddingHorizontal: 16 }}>
                            <View style={{
                                paddingVertical: 32,
                                backgroundColor: "#FFFFFF",
                                marginTop: 8,
                                marginBottom: 24,
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
                                        marginBottom: 8
                                    }}
                                >
                                    <Text style={{ color: "#000000", fontSize: 13, fontWeight: "bold" }}>Harcayan</Text>

                                    <Text style={{
                                        color: "#000000",
                                        fontSize: 17,
                                        flex: 1,
                                        lineHeight: 22,
                                        textAlign: 'right',
                                        marginLeft: 16
                                    }}>
                                        {data?.spenderUserIdName}
                                    </Text>
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
                                    <Text style={{ color: "#000000", fontSize: 13, fontWeight: "bold" }}>Tarih</Text>

                                    <Text style={{
                                        color: "#000000",
                                        fontSize: 17,
                                        flex: 1,
                                        lineHeight: 22,
                                        textAlign: "right"
                                    }}>
                                        {fixDateCalc(data?.dateOfEntry)}
                                    </Text>
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
                                    <Text style={{ color: "#000000", fontSize: 13, fontWeight: "bold" }}>Toplam</Text>

                                    <Text style={{
                                        color: "#000000",
                                        fontSize: 17,
                                        flex: 1,
                                        lineHeight: 22,
                                        textAlign: "right"
                                    }}>
                                        {totalAmount.toString()} {data?.currencyCode}
                                    </Text>
                                </View>

                                {
                                    expenceFileHeader?.length > 0 &&

                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            paddingHorizontal: 16,
                                            marginTop: 10,
                                            fontWeight: "bold"
                                        }}
                                    >

                                        <Text style={{
                                            color: "#000000",
                                            fontSize: 13,
                                            lineHeight: 22,
                                            fontWeight: 'bold'
                                        }}>
                                            Dosya
                                        </Text>

                                        <View style={{ justifyContent: "flex-end", flexDirection: "row", flex: 1 }}>
                                            {
                                                expenceFileHeader?.map((item, index) => {
                                                    return (
                                                        <View key={index}>
                                                            <TouchableOpacity onPress={() => downloadFromUrl(item)}>
                                                                <Icon
                                                                    name="ios-attach-sharp"
                                                                    type="ionicon"
                                                                    size={26}
                                                                    color="black"
                                                                />
                                                            </TouchableOpacity>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>

                                    </View>

                                }


                                <View style={{
                                    paddingHorizontal: 16,
                                    marginTop: 16
                                }}>
                                    <Text style={{
                                        color: "#000000",
                                        fontSize: 13,
                                        lineHeight: 22,
                                        fontWeight: 'bold'
                                    }}>
                                        Açıklama
                                    </Text>

                                    <Text style={{
                                        marginTop: 8,
                                        color: "#000000",
                                        fontSize: 14,
                                        lineHeight: 22,
                                    }}
                                        numberOfLines={4}
                                    >
                                        {data?.aciklama}
                                    </Text>
                                </View>


                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        paddingHorizontal: 16,
                                        marginTop: 16
                                    }}
                                >
                                    <View style={{ paddingRight: 5 }}>

                                        <TouchableOpacity
                                            style={styles.denialButton}
                                            onPress={handleOnRecordRejected}
                                        >
                                            <Text style={{ color: "#DA291C", fontWeight: "600" }} >
                                                Reddet
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View>

                                        <TouchableOpacity
                                            style={styles.approveButton}
                                            onPress={handleOnRecordApprove}
                                        >
                                            <Text style={{ color: "#007041", fontWeight: "600" }} >
                                                Onayla
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>
                        </View>

                        <View style={{ backgroundColor: "#FFFFFF" }}>
                            <VStack style={{ borderBottomColor: "#F2F2F2", borderBottomWidth: 1 }}>
                                <SearchBar
                                    placeholder="Search"
                                    theme="light"
                                    platform="ios"
                                    inputContainerStyle={{ backgroundColor: "rgba(118, 118, 128, 0.12)", height: 36 }}
                                    searchIcon={{ color: "#3C3C43" }}
                                    onChangeText={updateSearch}
                                    value={search}
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
                            <ScrollView contentContainerStyle={{ flex: 1 }} style={{ backgroundColor: "#F5F5F5" }}>

                                {
                                    dataLines?.map((item, index) => {

                                        return (
                                            <CostApprovalDetailLine
                                                key={index}
                                                index={index}
                                                item={item}
                                                data={data}
                                            />

                                        )
                                    })
                                }

                                <VStack style={{ backgroundColor: "#FFFFFF", paddingBottom: 80 }} />
                            </ScrollView>
                        </KeyboardAwareScrollView>

                    </View >
                    :
                    <ActivityIndicator size={'small'} color="#CCE2D9" />
            }

        </SafeAreaView >
    )
}