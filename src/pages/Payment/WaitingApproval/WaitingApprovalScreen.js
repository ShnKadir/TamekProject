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

// Moment
import moment from "moment"

export default function WaitingApprovalScreen() {

  const navigation = useNavigation()

  const returnText = useSelector(state => state.expence?.expenceData?.returnText)
  const expenseRequest = useSelector(state => state.expence?.expenceData?.resultObject?.expenseRequest)

  const goToWaitingApprovalScreen = (item) => {
    navigation.navigate(MENU_NAV.COST_APPROVAL_DETAIL, { data: item })
  }

  const [data, setData] = useState()

  useEffect(() => {
    setData(expenseRequest)
  }, [expenseRequest])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search",
        onChangeText: (event) => searchFilterFunction(event.nativeEvent.text)
      }
    })
  }, [navigation])

  function searchFilterFunction(searchTerm) {

    let filteredData = expenseRequest?.filter(item => item?.spenderUserIdName?.toLocaleUpperCase('tr-TR').includes(searchTerm?.toLocaleUpperCase('tr-TR')))
    setData(filteredData)
  }


  const calculateCost = (item) => {
    let total = 0
    let converterCost = 0
    let toplamTutar = 0;
    for (let i = 0; i < item?.lines?.length; i++) {
      if (item?.currencyCode) {
        total += parseFloat((item?.lines?.[i]?.amount).toLocaleString('en-US', { style: 'decimal', currency: item?.currencyCode }).replace(',', ''))
        converterCost = (total).toLocaleString('en-US', { style: 'decimal', currency: item?.currencyCode }).replace(",", "")
      }
      else {
        total += parseFloat((item?.lines?.[i]?.amount).toLocaleString('en-US', { style: 'decimal' }).replace(',', ''))
        converterCost = (total).toLocaleString('en-US', { style: 'decimal' }).replace(",", "")
      }
    }
    return converterCost
  }

  const fixDateCalc = (date) => {

    let datee = date?.substring(0, 10)

    var longDateStr = moment(datee, 'M/D/Y').format("DD/MM/YYYY")

    return longDateStr
  }

  return (

    <SafeAreaView style={{ flex: 1 }}>
      {
        returnText === RETURN_TEXT.RECORD_NOT_FOUND ?
          <View style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 14, textAlign: "center" }}>
              Onayınızda bekleyen masraf bulunmamaktadır.
            </Text>
          </View>
          :

          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

              <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }} >
                <View>
                  {
                    data?.map((item, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() => goToWaitingApprovalScreen(item)}
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
                                  {index + 1}
                                </Text>
                              </View>
                              <VStack style={{ paddingLeft: 8, maxWidth: 284, paddingTop: 8 }} space={"5px"}>
                                <Text style={{ fontWeight: "bold", flexWrap: "wrap", fontSize: 14 }}>
                                  {item?.spenderUserIdName}
                                </Text>

                                <Text style={{ fontSize: 13 }}>

                                  {fixDateCalc(item?.dateOfEntry)}

                                </Text>

                                <HStack style={{ width: 260, justifyContent: "space-between", maxWidth: 260 }}>
                                  <HStack style={{ maxWidth: 156, paddingRight: 68 }}>
                                    <Text style={{ flexWrap: "wrap", fontSize: 13, fontWeight: "500", color: "#6C6C6C" }}>
                                      {calculateCost(item)} {item?.currencyCode}
                                    </Text>
                                  </HStack>

                                </HStack>

                                <Text style={{ fontSize: 13 }} numberOfLines={4}>
                                  {item?.aciklama}
                                </Text>
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
                                onPress={() => goToWaitingApprovalScreen(item)}
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