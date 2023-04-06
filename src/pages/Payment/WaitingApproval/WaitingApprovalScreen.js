// React
import React from 'react'
import { useState, useEffect, useLayoutEffect } from 'react'

// React Native
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { VStack, HStack } from 'native-base'
import { Icon } from 'react-native-elements'

// Styles
import { styles } from './WaitingApprovalStyle'

// Navigation
import { MENU_NAV } from './../../../navigations/constants'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RETURN_TEXT } from '../../../common/Enums'

export default function WaitingApprovalScreen() {

  const navigation = useNavigation()

  const expenceData = useSelector(state => state.expence.expenceData)

  const dummyDdata = [
    {
      id: "1",
      number: "1",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş. 222",
      costName: "ABD Masraflar",
      costDetail: "Borusan lojistik Zone 3",
      costTotal: "87,736.00 USD",
      coster: "Onur SALMAN"
    },
    {
      id: "2",
      number: "2",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş. 3344556",
      costName: "ABD Masraflar",
      costDetail: "Borusan lojistik Zone 3",
      costTotal: "87,736.00 USD",
      coster: "Engin DADALI"
    },
    {
      id: "3",
      number: "3",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
      costName: "ABD Masraflar",
      costDetail: "Borusan lojistik Zone 3",
      costTotal: "87,736.00 USD",
      coster: "Onur SALMAN"
    },
    {
      id: "4",
      number: "4",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
      costName: "ABD Masraflar",
      costDetail: "Borusan lojistik Zone 3",
      costTotal: "87,736.00 USD",
      coster: "Onur SALMAN"
    },
    {
      id: "5",
      number: "5",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
      costName: "ABD Masraflar",
      costDetail: "Borusan lojistik Zone 3",
      costTotal: "87,736.00 USD",
      coster: "Onur SALMAN"
    },
    {
      id: "6",
      number: "6",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
      costName: "ABD Masraflar",
      costDetail: "Borusan lojistik Zone 3",
      costTotal: "87,736.00 USD",
      coster: "Onur SALMAN"
    },
    {
      id: "7",
      number: "7",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
      costName: "ABD Masraflar",
      costDetail: "Borusan lojistik Zone 3",
      costTotal: "87,736.00 USD",
      coster: "Onur SALMAN"
    },
    {
      id: "8",
      number: "8",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
      costName: "ABD Masraflar",
      costDetail: "Borusan lojistik Zone 3",
      costTotal: "87,736.00 USD",
      coster: "Onur SALMAN"
    },
    {
      id: "9",
      number: "9",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
      costName: "ABD Masraflar",
      costDetail: "Borusan lojistik Zone 3",
      costTotal: "87,736.00 USD",
      coster: "Onur SALMAN"
    },
  ]

  const goToWaitingApprovalScreen = (title) => {
    navigation.navigate(MENU_NAV.COST_APPROVAL_DETAIL, { title: title })
  }

  const [data, setData] = useState()

  useEffect(() => {
    setData(dummyDdata)
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search",
        onChangeText: (event) => searchFilterFunction(event.nativeEvent.text)
      }
    })
  }, [navigation])

  function searchFilterFunction(searchTerm) {

    const dummyDdata = [
      {
        id: "1",
        number: "1",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş. 222",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Onur SALMAN"
      },
      {
        id: "2",
        number: "2",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş. 3344556",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Engin DADALI"
      },
      {
        id: "3",
        number: "3",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Onur SALMAN"
      },
      {
        id: "4",
        number: "4",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Onur SALMAN"
      },
      {
        id: "5",
        number: "5",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Onur SALMAN"
      },
      {
        id: "6",
        number: "6",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Onur SALMAN"
      },
      {
        id: "7",
        number: "7",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Onur SALMAN"
      },
      {
        id: "8",
        number: "8",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Onur SALMAN"
      },
      {
        id: "9",
        number: "9",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Onur SALMAN"
      },
    ]
    let filteredData = dummyDdata?.filter(item => item.name.toUpperCase().includes(searchTerm.toUpperCase()) || item.coster.toUpperCase().includes(searchTerm.toUpperCase()))
    setData(filteredData)
  }

  return (

    <SafeAreaView style={{ flex: 1 }}>
      {
        expenceData?.returnText === RETURN_TEXT.RECORD_NOT_FOUND ?
          <View style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 14, textAlign: "center" }}>
              Onayınızda bekleyen masraf bulunmamaktadır.
            </Text>
          </View>
          :

          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

              <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }} >
                <View style={{ marginTop: 8 }}>
                  {
                    data?.map((item, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() => goToWaitingApprovalScreen(item.name)}
                          key={index}
                        >

                          <HStack style={styles.list} key={index}>
                            <HStack style={{ alignItems: "center", maxWidth: 324 }}>
                              <View
                                style={{
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: '#CCE2D9',
                                  width: 24,
                                  height: 24,
                                  borderRadius: 12
                                }}
                              >
                                <Text
                                  style={{
                                    textAlign: 'center',
                                    fontSize: 12,
                                    lineHeight: 12,
                                    color: '#007041'
                                  }}
                                >
                                  {item.number}
                                </Text>
                              </View>
                              <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
                                <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                                  {item.name}
                                </Text>

                                <Text style={{ fontSize: 15, color: "#6C6C6C" }}>
                                  {item.costName}
                                </Text>
                                <Text style={{ fontSize: 15, color: "#6C6C6C" }}>
                                  {item.costDetail}
                                </Text>

                                <HStack style={{ width: 260, justifyContent: "space-between", maxWidth: 260 }}>
                                  <HStack style={{ maxWidth: 156, paddingRight: 68 }}>
                                    <Text style={{ flexWrap: "wrap", fontSize: 11, fontWeight: "600" }}>
                                      {item.costTotal}
                                    </Text>
                                  </HStack>
                                  <HStack style={{ maxWidth: 136 }}>
                                    <Text style={{ flexWrap: "wrap", fontSize: 11, fontWeight: "600" }}>
                                      {item.coster}
                                    </Text>
                                  </HStack>
                                </HStack>
                              </VStack>
                            </HStack>
                            <VStack>
                              <TouchableOpacity
                                hitSlop={{
                                  top: 20,
                                  bottom: 20,
                                  left: 20,
                                  right: 20,
                                }}
                                onPress={() => goToWaitingApprovalScreen(item.name)}
                              >
                                <Icon
                                  name="angle-right"
                                  type="font-awesome"
                                  size={20}
                                  color="#A9A9A9"
                                  style={{ marginRight: 16 }}
                                />
                              </TouchableOpacity>
                            </VStack>
                          </HStack>
                        </TouchableOpacity>
                      )

                    })}
                </View>
              </ScrollView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
      }
    </SafeAreaView>
  )
}