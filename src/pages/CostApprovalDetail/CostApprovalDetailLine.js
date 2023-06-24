//React
import React, { useEffect, useState } from 'react'

// React Native
import { View, Text, TouchableOpacity } from 'react-native'
import { VStack, HStack } from 'native-base'
import { Icon } from 'react-native-elements'

// Styles
import { styles } from './CostApprovalDetailStyle'
import moment from 'moment'
import { useSelector } from 'react-redux'
import getExpenceFileLineRequests from '../../common/api/expence/getExpenceFileLineRequests'

// File Library
import * as FileSystem from "expo-file-system"
import { shareAsync } from "expo-sharing"
import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MENU_NAV } from '../../navigations/constants'

export default function CostApprovalDetailLine({
    index,
    item,
    data
}) {

    const navigation = useNavigation()

    const expenceFileLine = useSelector(state => state.expence?.expenceFileLine?.resultObject)

    const [hasFileLine, setHasFileLine] = useState(false)

    const fixDateCalc = (date) => {

        let datee = date?.substring(0, 10)
        var longDateStr = moment(datee, 'M/D/Y').format("DD/MM/YYYY")
        return longDateStr
    }

    useEffect(() => {

        getExpenceFileLineRequests(item?.expenseRequestFormHeader)

    }, [])

    useEffect(() => {
        debugger
        if (expenceFileLine?.length > 0) {
            setHasFileLine(true)
        }
        else {
            setHasFileLine(false)
        }
    }, [expenceFileLine])

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

    const downloadFromUrl = async (expenseRequestFormHeader) => {

        getExpenceFileLineRequests(expenseRequestFormHeader)

        let fileData = expenceFileLine[0]
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

        <HStack style={styles.list} >
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
                    <Text style={{ fontWeight: "bold" }}>
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
                    <Text style={{ flexWrap: "wrap" }}>
                        Açıklama: {item?.description}
                    </Text>
                </VStack>

            </HStack>

            {
                hasFileLine &&
                <TouchableOpacity TouchableOpacity onPress={() => downloadFromUrl(item?.expenseRequestFormHeader)}>
                    <Icon
                        name="ios-attach-sharp"
                        type="ionicon"
                        size={24}
                        color="black"
                        style={{ marginRight: 12 }}
                    />
                </TouchableOpacity>
            }

        </HStack>

    )
}