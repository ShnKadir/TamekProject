// React
import React, { useLayoutEffect } from 'react'

//React Native
import { WebView } from 'react-native-webview'

// Redux
import { useSelector } from 'react-redux'

//Navigation
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { useState } from 'react'

export default function OpenFile({
    route
}) {

    const navigation = useNavigation()

    const [fileDataUrl, setFileDataUrl] = useState("")
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
        <WebView source={{ uri: fileDataUrl }} />
    )
}