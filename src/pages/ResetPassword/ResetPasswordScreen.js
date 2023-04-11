import { View, Text } from 'react-native'
import React from 'react'
import { Image, VStack } from 'native-base'

//Assets
import resetPassword from '../../../assets/image/resetPassword.png'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ResetPasswordScreen() {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerLargeTitle: false,
            title: "Şifremi Unuttum"
        })
    }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>

            <View style={{ backgroundColor: "#FFFFFF", flex: 1, alignItems: "center" }} >

                <Image
                    style={{
                        resizeMode: "contain",
                        height: 230,
                        marginBottom: 30
                    }}
                    source={resetPassword}
                    alt={" "}
                />

                <Text>Şifrenizi sıfırlamanız için tek kullanımlık şifreyi butona basarak öğrenebilirsiniz.</Text>

            </View>

        </SafeAreaView>
    )
}