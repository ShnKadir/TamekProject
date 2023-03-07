// React
import React from 'react'
import { useEffect } from 'react'

// React Native
import { Text, SafeAreaView, View } from 'react-native'
import clearRedux from '../../helpers/redux/clearRedux'

export default function Account() {

  useEffect(() => {
    clearRedux()
  }, [])


  return (
    <View>
      <Text>Account</Text>
    </View>
  )
}