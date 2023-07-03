// React
import React, { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

// React Native
import { WebView } from 'react-native-webview'
import { ActivityIndicator } from 'react-native-paper'

//Navigation
import { useNavigation } from '@react-navigation/native'

export default function OpenFile({
    route
}) {

    const navigation = useNavigation()

    const [fileDataUrl, setFileDataUrl] = useState(null)

    useEffect(() => {
        setFileDataUrl(route?.params?.data)
    }, [route])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: 'Ödeme Detay',
        })
    }, [navigation])

    return (

        fileDataUrl === null ?
            <ActivityIndicator size={'small'} color="#CCE2D9" />
            :
            <WebView source={{ uri: fileDataUrl }} />
    )
}