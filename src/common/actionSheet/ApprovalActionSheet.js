// React
import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { VStack, HStack, useDisclose, Button, Actionsheet } from 'native-base'

// React Native
import { Text } from 'react-native'

export default function ApprovalActionSheet({
    sheetModal
}) {

    const handleOnCancelPress = () => {
        sheetModal.onClose()
    }


    return (

        <Actionsheet isOpen={sheetModal.isOpen} onClose={sheetModal.onClose} style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <Actionsheet.Content>

                <View style={{ width: "100%" }}>
                    <View style={{ borderBottomWidth: 0.3, borderBottomColor: "#B1B1B1" }}>

                        <Text style={{ fontSize: 14, color: "#1f1f1f", textAlign: "center", fontWeight: "600" }}>
                            Fatura onayı
                        </Text>
                        <Text style={{ fontSize: 14, color: "rgba(0, 0, 0, 0.5)", textAlign: "center", marginTop: 8, marginBottom: 8 }}>
                            Lütfen işleminizi onaylayın.
                        </Text>
                    </View>

                    <View style={{ alignContent: "center", height: 70, justifyContent: "center", borderBottomWidth: 0.3, borderBottomColor: "#B1B1B1" }}>
                        <Text style={{ textAlign: "center", color: "#007AFF", fontSize: 20 }}>
                            Onayla
                        </Text>
                    </View>
                    <View style={{ alignContent: "center", height: 35, justifyContent: "center", marginTop: 8 }}>
                        <Text style={{ textAlign: "center", color: "#007AFF", fontSize: 20, fontWeight: "600" }}>
                            Vazgeç
                        </Text>
                    </View>
                </View>

            </Actionsheet.Content>
        </Actionsheet>
    )
}