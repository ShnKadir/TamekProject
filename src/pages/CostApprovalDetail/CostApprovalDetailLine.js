//React
import React, { useEffect, useState } from 'react'

// React Native
import { View, Text, TouchableOpacity, Platform } from 'react-native'
import { VStack, HStack } from 'native-base'
import { Icon } from 'react-native-elements'

// Styles
import { styles } from './CostApprovalDetailStyle'
import moment from 'moment'

// Api
import getExpenceFileLineRequests from '../../common/api/expence/getExpenceFileLineRequests'

// File Library
import * as FileSystem from "expo-file-system"
import { shareAsync } from "expo-sharing"

// Redux
import { useSelector } from 'react-redux'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { MENU_NAV } from '../../navigations/constants'

export default function CostApprovalDetailLine({
    index,
    item,
    data
}) {

    const navigation = useNavigation()

    const expenceFileLine = useSelector(state => state.expence?.expenceFileLine?.resultObject)

    const fixDateCalc = (date) => {

        let datee = date?.substring(0, 10)
        var longDateStr = moment(datee, 'M/D/Y').format("DD/MM/YYYY")
        return longDateStr
    }

    useEffect(() => {
        getExpenceFileLineRequests(item?.expenseRequestFormHeader)
    }, [])

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

    const downloadFromUrl = async (file) => {

        let extension = file?.substring(file?.lastIndexOf('.') + 1, file?.length)

        if (extension === "jpg" || extension === "jpeg" || extension === "pdf") {

            navigation.navigate(MENU_NAV.OPEN_FILE, { data: file })
        }
        else {

            let fileType = file?.substring(file?.lastIndexOf('.') + 1, file?.length)
            const filename = "file." + fileType;
            const result = await FileSystem.downloadAsync(
                file,
                FileSystem.documentDirectory + filename
            )
            save(result.uri, filename, result.headers["Content-Type"])
        }
    }

    return (

        <HStack style={styles.list} key={index}>
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
                    <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                        Kategori: {item?.expenseCategory}
                    </Text>
                    <Text style={{ fontSize: 13, lineHeight: 18 }}>
                        Masraf: {item?.expenseName}
                    </Text>
                    <Text style={{ fontSize: 13, lineHeight: 18, paddingLeft: 0, marginLeft: 0, fontWeight: "bold" }}>
                        {fixDateCalc(item?.expenseDate)} - {item?.amount} {data?.currencyCode}
                    </Text>
                    <Text style={{ fontSize: 13, lineHeight: 18 }}>
                        Kredi Kart: {item?.creditCard}
                    </Text>
                    <Text style={{ flexWrap: "wrap", fontSize: 13, lineHeight: 18 }}>
                        Açıklama: {item?.description}
                    </Text>
                </VStack>

            </HStack>

            {
                expenceFileLine?.files?.map((fileLine, index) => {

                    return (

                        fileLine?.satirNo === item?.lineNum &&

                        <TouchableOpacity TouchableOpacity onPress={() => downloadFromUrl(fileLine?.file)} key={index}>
                            <Icon
                                name="ios-attach-sharp"
                                type="ionicon"
                                size={24}
                                color="black"
                                style={{ marginRight: 12 }}
                            />
                        </TouchableOpacity>
                    )
                })
            }

        </HStack>

    )
}