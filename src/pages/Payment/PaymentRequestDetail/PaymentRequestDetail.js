// React
import React from 'react'

// React Native
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { HStack, VStack } from 'native-base'

// Styles
import { styles } from './PaymentRequestDetailStyle'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

export default function PaymentRequestDetail({
    route
}) {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: route?.params?.title,
        })
    }, [navigation])

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                paddingHorizontal: 16,
                paddingVertical: 32,
                backgroundColor: "#FFFFFF",

            }}
            >
                <VStack style={{ flex: 1, backgroundColor: "#FFFFFF" }} space={"8px"}>
                    <Text>Şirket</Text>
                    <Text>Kategori</Text>
                    <Text>Tip</Text>
                    <Text>Tutar</Text>
                    <Text>Açıklama</Text>
                    <Text>Talep Eden</Text>
                    <Text>Belge Tarihi</Text>
                    <Text>Ödeme Tarihi</Text>
                    <Text style={{marginTop:32,fontWeight:"bold"}}>Dosya</Text>
                </VStack>
                <VStack style={{ flex: 1, backgroundColor: "#FFFFFF" }} space={"8px"} >
                    <Text>BORUSAN LOJİSTİK DAĞITIM</Text>
                    <Text>ABD Masraflar</Text>
                    <Text>ABD Masrafları</Text>
                    <Text style={{ maxWidth: 218, flexWrap: "wrap" }}>Borusan Lojistikten Zone 3 ABDSevkiyati icin alinan Navlun hizmet </Text>
                    <Text>Onur SALMAN</Text>
                    <Text>17.12.2022</Text>
                    <Text>21.12.2022</Text>
                    <TouchableOpacity style={{marginTop:16,maxWidth:26}}>
                        <Icon
                            name="ios-attach-sharp"
                            type="ionicon"
                            size={22}
                            color="black"
                           
                        />
                    </TouchableOpacity>
                </VStack>
            </View>
          
            <HStack style={styles.buttonStyle} space={"8px"}>
                <TouchableOpacity
                    style={styles.denialButton}
                >
                    <Text style={{ color: "#03B354" }} >
                        Onayla
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.approveButton}
                >
                    <Text style={{ color: "#000000" }} >
                        Reddet
                    </Text>
                </TouchableOpacity>
            </HStack>
        </ScrollView>
    )
}