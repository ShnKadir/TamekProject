// React
import React from 'react'

// React Native
import { TouchableOpacity, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

// Redux
import clearRedux from '../../helpers/redux/clearRedux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slice/authSlice'
import { useNavigation } from '@react-navigation/native'
import { ACCOUNT_NAV, LOGIN_NAV } from '../../navigations/constants'

export default function Account() {

  const dispatch = useDispatch()

  const navigation = useNavigation()

  const onLogoutPress = () => {

    AsyncStorage.removeItem("userData")
    dispatch(logout())
    clearRedux()
  }

  const changePassword = () => {
    navigation.navigate(ACCOUNT_NAV.CHANGE_PASSWORD)
  }

  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      
        <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 24,
        }}
        activeOpacity={0.5}
        onPress={() => changePassword()}
      >
        <Icon
          name="key-outline"
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
          Şifre Değiştir
        </Text>
      </TouchableOpacity>

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