// React
import React from 'react'

// React Native
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { VStack, HStack } from 'native-base'

// Styles
import { styles } from './MenuStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { MENU_NAV } from '../../navigations/constants'

export default function Menu() {

    const navigation = useNavigation()

    const goToPaymentRequestScreen = () => {
        navigation.navigate(MENU_NAV.PAYMENT_REQUEST)
    }

    const goToWaitingApprovalScreen = () => {
        navigation.navigate(MENU_NAV.WAITING_APPROVAL)
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
            <Text style={styles.headerStyle}>
                First Group
            </Text>

            <VStack style={styles.subContainer}>
                <HStack style={styles.list}>
                    <TouchableOpacity onPress={() => goToPaymentRequestScreen()}>
                        <HStack style={{ alignItems: "center" }}>
                            <Icon
                                name="ios-document-outline"
                                type="ionicon"
                                size={24}
                                color="#000000"
                                style={{ backgroundColor: "#F2F2F2", borderRadius: 50, padding: 5 }}

                            />
                            <Text
                                style={styles.labelStyle}>
                                Ödeme Talepleri
                            </Text>
                        </HStack>
                    </TouchableOpacity>
                    <TouchableOpacity
                        hitSlop={{
                            top: 20,
                            bottom: 20,
                            left: 20,
                            right: 20,
                        }}
                        onPress={goToPaymentRequestScreen}
                    >
                        <Icon
                            name="angle-right"
                            type="font-awesome"
                            size={28}
                            color="#A9A9A9"
                            style={{ marginRight: 16 }}
                           
                        />
                    </TouchableOpacity>

                </HStack>
            </VStack>

            <VStack style={styles.subContainer}>
                <HStack style={styles.list}>
                    <TouchableOpacity onPress={() => goToWaitingApprovalScreen()}>

                        <HStack style={{ alignItems: "center" }}>
                            <Icon
                                name="credit-card"
                                type="feather"
                                size={22}
                                color="#000000"
                                style={{ backgroundColor: "#F2F2F2", borderRadius: 50, padding: 5 }}

                            />
                            <Text
                                style={styles.labelStyle}>
                                Onay Bekleyenler
                            </Text>
                        </HStack>
                    </TouchableOpacity>

                    <TouchableOpacity
                        hitSlop={{
                            top: 20,
                            bottom: 20,
                            left: 20,
                            right: 20,
                        }}
                        onPress={goToWaitingApprovalScreen}
                    >
                        <Icon
                            name="angle-right"
                            type="font-awesome"
                            size={28}
                            color="#A9A9A9"
                            style={{ marginRight: 16 }}
                        />
                    </TouchableOpacity>

                </HStack>
            </VStack>

            <VStack style={styles.subContainer}>
                <HStack style={styles.list}>
                    <HStack style={{ alignItems: "center" }}>
                        <Icon
                            name="ios-swap-vertical-outline"
                            type="ionicon"
                            size={24}
                            color="#000000"
                            style={{ backgroundColor: "#F2F2F2", borderRadius: 50, padding: 5 }}

                        />
                        <Text
                            style={styles.labelStyle}>
                            No have idea
                        </Text>
                    </HStack>
                    <HStack>
                    </HStack>
                    <TouchableOpacity
                        hitSlop={{
                            top: 20,
                            bottom: 20,
                            left: 20,
                            right: 20,
                        }}
                    >
                        <Icon
                            name="angle-right"
                            type="font-awesome"
                            size={28}
                            color="#A9A9A9"
                            style={{ marginRight: 16 }}
                        />
                    </TouchableOpacity>
                </HStack>
            </VStack>

            <Text style={styles.headerStyle}>
                Second Group
            </Text>

            <VStack style={styles.subContainer}>
                <HStack style={styles.list}>
                    <HStack style={{ alignItems: "center" }}>
                        <Icon
                            name="divide"
                            type="feather"
                            size={22}
                            color="#000000"
                            style={{ backgroundColor: "#F2F2F2", borderRadius: 50, padding: 5 }}

                        />
                        <Text
                            style={styles.labelStyle}>
                            No have idea
                        </Text>
                    </HStack>
                    <HStack>
                    </HStack>
                    <TouchableOpacity
                        hitSlop={{
                            top: 20,
                            bottom: 20,
                            left: 20,
                            right: 20,
                        }}
                    >
                        <Icon
                            name="angle-right"
                            type="font-awesome"
                            size={28}
                            color="#A9A9A9"
                            style={{ marginRight: 16 }}
                        />
                    </TouchableOpacity>
                </HStack>
            </VStack>

            <VStack style={styles.subContainer}>
                <HStack style={styles.list}>
                    <HStack style={{ alignItems: "center" }}>
                        <Icon
                            name="percent"
                            type="feather"
                            size={22}
                            color="#000000"
                            style={{ backgroundColor: "#F2F2F2", borderRadius: 50, padding: 5 }}

                        />
                        <Text
                            style={styles.labelStyle}>
                            No have idea
                        </Text>
                    </HStack>
                    <HStack>
                    </HStack>
                    <TouchableOpacity
                        hitSlop={{
                            top: 20,
                            bottom: 20,
                            left: 20,
                            right: 20,
                        }}
                    >
                        <Icon
                            name="angle-right"
                            type="font-awesome"
                            size={28}
                            color="#A9A9A9"
                            style={{ marginRight: 16 }}
                        />
                    </TouchableOpacity>
                </HStack>
            </VStack>

            <VStack style={styles.subContainer}>
                <HStack style={styles.list}>
                    <HStack style={{ alignItems: "center" }}>
                        <Icon
                            name="percent"
                            type="feather"
                            size={22}
                            color="#000000"
                            style={{ backgroundColor: "#F2F2F2", borderRadius: 50, padding: 5 }}

                        />
                        <Text
                            style={styles.labelStyle}>
                            No have idea
                        </Text>
                    </HStack>
                    <HStack>
                    </HStack>
                    <TouchableOpacity
                        hitSlop={{
                            top: 20,
                            bottom: 20,
                            left: 20,
                            right: 20,
                        }}
                    >
                        <Icon
                            name="angle-right"
                            type="font-awesome"
                            size={28}
                            color="#A9A9A9"
                            style={{ marginRight: 16 }}
                        />
                    </TouchableOpacity>
                </HStack>
            </VStack>

        </SafeAreaView>
    )
}