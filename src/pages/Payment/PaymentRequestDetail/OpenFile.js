// React
import React, { useLayoutEffect } from 'react'

//React Native
import { WebView } from 'react-native-webview'

// Redux
import { useSelector } from 'react-redux'

//Navigation
import { useNavigation } from '@react-navigation/native'

export default function OpenFile() {


    const navigation = useNavigation()

    const paymentFile = useSelector(state => state.payment?.getPaymentFile?.resultObject)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: 'Ödeme Detay',
        })
    }, [navigation])

    return (
        <WebView source={{ uri: paymentFile }} />
    )
}