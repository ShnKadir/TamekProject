// React
import React from 'react'
import { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'

// React Native
import { Text, SafeAreaView, View } from 'react-native'
import clearRedux from '../../helpers/redux/clearRedux'
import { Icon } from 'react-native-elements';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/authSlice'

export default function Account() {

  useEffect(() => {
    clearRedux()
  }, [])

  // const dispatch = useDispatch()

  // const onLogoutPress = () => {

  //   AsyncStorage.removeItem("userData")
  //   dispatch(logout())
  //   clearRedux()
  // }

  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 24,
        }}
        activeOpacity={0.5}
        onPress={() => onLogoutPress()}
      >
        <Icon
          name="power-sharp"
          type="ionicon"
          size={24}
          style={{
            width: 24,
            marginRight: 16
          }}
        />
        <Text style={{
          fontSize: 16,

        }}>
          Çıkış Yap
        </Text>
      </TouchableOpacity>
    </View>
  )
}