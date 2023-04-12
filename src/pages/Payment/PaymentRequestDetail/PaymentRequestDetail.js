// React
import React, { useLayoutEffect } from 'react'

// React Native
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements'
import { HStack, ScrollView } from 'native-base'

// Styles
import { styles } from './PaymentRequestDetailStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useEffect } from 'react'

export default function PaymentRequestDetail({
    route
}) {

    const navigation = useNavigation()

    const [data, setData] = useState(route.params.data)

    useEffect(() => {
        setData(route.params.data)
    }, [route])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerLargeTitle: false,
            title: 'Ödeme Talep Kaydı',
        })
    }, [navigation])

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }} contentContainerStyle={{ flexGrow: 1 }} >
                <View style={{ paddingHorizontal: 16, paddingBottom: 200 }}>

                    <View style={{
                        paddingVertical: 32,
                        backgroundColor: "#FFFFFF",
                        marginTop: 8,
                        marginBottom: 17,
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
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"

                                }}>Şirket</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    flex: 1,
                                    textAlign: 'right',
                                }}>
                                    {data?.paymentCompany}

                                </Text>

                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Kategori</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {data?.paymentCategory}
                                </Text>
                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>
                                    Tip
                                </Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>

                                    {data?.paymentType}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >

                            <View style={{ width: "30%" }}>
                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Tutar</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {data?.amount} {data?.currencyCode}
                                </Text>
                            </View>


                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Talep Eden</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 16,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {data?.formOwner}
                                </Text>
                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Belge Tarihi</Text>
                            </View>

                            <View style={{ width: "60%" }}>

                                <Text style={{
                                    color: "#000000",
                                    fontSize: 17,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {new Date(data?.documentDate).toLocaleDateString("tr-TR").replaceAll('.', '/')}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginBottom: 8,
                                width: "100%"
                            }}
                        >
                            <View style={{ width: "30%" }}>
                                <Text style={{
                                    color: "#000000",
                                    fontSize: 15,
                                    lineHeight: 22,
                                    fontWeight: "bold"
                                }}>Ödeme Tarihi</Text>
                            </View>

                            <View style={{ width: "60%" }}>
                                <Text style={{
                                    color: "#000000",
                                    fontSize: 17,
                                    lineHeight: 22,
                                    textAlign: 'right'
                                }}>
                                    {new Date(data?.paymentDate).toLocaleDateString("tr-TR").replaceAll('.', '/')}
                                </Text>
                            </View>

                        </View>

                        <View
                            style={{
                                paddingHorizontal: 16,
                                marginBottom: 8
                            }}
                        >
                            <Text style={{
                                color: "#000000",
                                fontSize: 15,
                                lineHeight: 22,
                                fontWeight: "bold"
                            }}>
                                Açıklama
                            </Text>

                            <Text style={{
                                color: "#000000",
                                fontSize: 17,
                                lineHeight: 22,
                                paddingTop:5
                            }}>
                                {data?.description}
                            </Text>

                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 16,
                                marginTop: 10,
                                fontWeight: "bold"
                            }}
                        >

                            <Text style={{
                                color: "#000000",
                                fontSize: 15,
                                lineHeight: 22,
                                fontWeight: 'bold'
                            }}>

                            </Text>

                            <TouchableOpacity>
                                <Icon
                                    name="ios-attach-sharp"
                                    type="ionicon"
                                    size={26}
                                    color="black"
                                    style={{ marginRight: 8 }}
                                />
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>

            </ScrollView>
            <HStack style={styles.buttonStyle} space={"8px"}>
                <TouchableOpacity
                    style={styles.denialButton}
                >
                    <Text style={{ color: "#DA291C", fontWeight: "600" }} >
                        Reddet
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.approveButton}
                >
                    <Text style={{ color: "#007041", fontWeight: "600" }} >
                        Onayla
                    </Text>
                </TouchableOpacity>

            </HStack>
        </SafeAreaView>
    )
}