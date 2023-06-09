// React
import React from 'react'

// React Native
import { TouchableOpacity, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { HStack, Image, VStack } from 'native-base'

// Redux
import clearRedux from '../../helpers/redux/clearRedux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slice/authSlice'

//Navigation
import { useNavigation } from '@react-navigation/native'
import { ACCOUNT_NAV, LOGIN_NAV } from '../../navigations/constants'

//Asset
import userImage from '../../../assets/image/userImage.png'

//Styles
import { styles } from './AccountStyle'

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
    <View style={{ backgroundColor: "#fff", flex: 1 }}>

      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>

        <Image
          style={{
            resizeMode: "contain",
            height: 150,
            position: "absolute",
            top: 30
          }}
          source={userImage}
          alt={" "}
        />
      </View>

      <View style={{ backgroundColor: "#007041", borderRadius: 50, flex: 1 }}>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 24,
            padding: 1
          }}
          activeOpacity={0.5}
          onPress={() => changePassword()}
        >
          <VStack style={styles.subContainer}>

            <HStack style={{ justifyContent: "space-between", alignItems: "center" }}>
              <HStack>
                <Icon
                  name="key-outline"
                  type="ionicon"
                  size={24}
                  color="#007041"
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
              </HStack>
              <HStack style={{ justifyContent: "space-between", alignItems: "center" }}>
                <Icon
                  name="chevron-right"
                  type="font-awesome-5"
                  size={20}
                  color="#007041"
                  style={{ marginRight: 16 }}
                />
              </HStack>
            </HStack>
          </VStack>

        </TouchableOpacity>

        <View style={{ position: "absolute", bottom: 100 }}>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 1,
            }}
            activeOpacity={0.5}
            onPress={() => onLogoutPress()}
          >
            <VStack style={styles.subContainer}>

              <HStack style={{ justifyContent: "space-between", alignItems: "center" }}>
                <HStack>
                  <Icon
                    name="power-sharp"
                    type="ionicon"
                    size={24}
                    color="#007041"
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
                </HStack>

                <HStack style={{ justifyContent: "space-between", alignItems: "center" }}>
                  <Icon
                    name="chevron-right"
                    type="font-awesome-5"
                    size={20}
                    color="#007041"
                    style={{ marginRight: 16 }}
                  />
                </HStack>
              </HStack>
            </VStack>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}