// React
import React from 'react'
import { useState,useEffect ,useLayoutEffect} from 'react'

// React Native
import { View, Text, TouchableOpacity, SafeAreaView,Keyboard,TouchableWithoutFeedback } from 'react-native'
import { VStack, HStack } from 'native-base'
import { Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Styles
import { styles } from './WaitingApprovalStyle'

// Navigation
import { MENU_NAV } from './../../../navigations/constants'
import { useNavigation } from '@react-navigation/native'


export default function WaitingApprovalScreen() {

  const navigation = useNavigation()

  const dummyDdata = [
    {
      id: "1",
      number: "1",
      name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
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
      coster: "Onur SALMAN"
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
  ]

  const goToWaitingApprovalScreen = (title) => {
    navigation.navigate(MENU_NAV.PAYMENT_REQUEST, { title: title })
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
        name: "LOJISTIK DAGITIM A.Ş.",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Filiz"
      },
      {
        id: "2",
        number: "2",
        name: "BORUSAN LOJISTIK DAGITIM A.Ş.",
        costName: "ABD Masraflar",
        costDetail: "Borusan lojistik Zone 3",
        costTotal: "87,736.00 USD",
        coster: "Onur SALMAN"
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
    ]

    let filteredData = dummyDdata?.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setData(filteredData)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAwareScrollView
          extraHeight={0}
          style={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            flex: 1
          }}
          contentContainerStyle={{ flex: 1 }}
        >
          <VStack style={styles.container}>

            {
              data?.map((item, index) => {
                return (
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

                        <HStack style={{ justifyContent: "space-between" }}>
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
                )

              })}
          </VStack>
        </KeyboardAwareScrollView>
        {/* <ScrollView
          style={{ backgroundColor: "#ffffff" }}
          contentContainerStyle={{ paddingBottom: 60, flex: 1 }}
        >
         
        </ScrollView> */}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}