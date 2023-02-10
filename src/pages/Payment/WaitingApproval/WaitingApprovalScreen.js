// React
import React from 'react'

// React Native
import { View, Text,ScrollView ,TouchableOpacity} from 'react-native'
import { VStack, HStack } from 'native-base'
import { Icon } from 'react-native-elements'

// Styles
import { styles } from './WaitingApprovalStyle'

// Navigation
import { MENU_NAV } from './../../../navigations/constants'
import { useNavigation } from '@react-navigation/native'

export default function WaitingApprovalScreen() {

  const navigation = useNavigation()

  const goToWaitingApprovalScreen = () => {
    navigation.navigate(MENU_NAV.PAYMENT_REQUEST_DETAIL)
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff", flexGrow: 1 ,marginBottom:80}}>
      <VStack style={styles.container}>

        <Text>ÖDEME TALEP</Text>

        <HStack style={styles.list}>
          <HStack style={{ alignItems: "center", paddingTop: 16 }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
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
                  color: '#000000'
                }}
              >
                {1}
              </Text>
            </View>
            <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
              <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                BORUSAN LOJISTIK DAGITIM A.Ş.
              </Text>

              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                ABD Masraflar    Borusan Lojistikten Zone 3
              </Text>
              <Text style={{ color: "#6C6C6C", fontSize: 12 }}>
                87,736.00 USD            Onur SALMAN
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
          </VStack>
        </HStack>

        <HStack style={styles.list}>
          <HStack style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
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
                  color: '#000000'
                }}
              >
                {2}
              </Text>
            </View>
            <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
              <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                BORUSAN LOJISTIK DAGITIM A.Ş.
              </Text>

              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                ABD Masraflar    Borusan Lojistikten Zone 3
              </Text>
              <Text style={{ color: "#6C6C6C", fontSize: 12 }}>
                87,736.00 USD            Onur SALMAN
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
          </VStack>
        </HStack>

        <HStack style={styles.list}>
          <HStack style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
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
                  color: '#000000'
                }}
              >
                {3}
              </Text>
            </View>
            <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
              <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                BORUSAN LOJISTIK DAGITIM A.Ş.
              </Text>

              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                ABD Masraflar    Borusan Lojistikten Zone 3
              </Text>
              <Text style={{ color: "#6C6C6C", fontSize: 12 }}>
                87,736.00 USD            Onur SALMAN
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
          </VStack>
        </HStack>

        <HStack style={styles.list}>
          <HStack style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
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
                  color: '#000000'
                }}
              >
                {4}
              </Text>
            </View>
            <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
              <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                BORUSAN LOJISTIK DAGITIM A.Ş.
              </Text>

              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                ABD Masraflar    Borusan Lojistikten Zone 3
              </Text>
              <Text style={{ color: "#6C6C6C", fontSize: 12 }}>
                87,736.00 USD            Onur SALMAN
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
            >
              <Icon
                name="angle-right"
                type="font-awesome"
                size={28}
                color="#A9A9A9"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          </VStack>
        </HStack>

        <HStack style={styles.list}>
          <HStack style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
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
                  color: '#000000'
                }}
              >
                {5}
              </Text>
            </View>
            <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
              <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                BORUSAN LOJISTIK DAGITIM A.Ş.
              </Text>

              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                ABD Masraflar    Borusan Lojistikten Zone 3
              </Text>
              <Text style={{ color: "#6C6C6C", fontSize: 12 }}>
                87,736.00 USD            Onur SALMAN
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
            >
              <Icon
                name="angle-right"
                type="font-awesome"
                size={28}
                color="#A9A9A9"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          </VStack>
        </HStack>

        <HStack style={styles.list}>
          <HStack style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
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
                  color: '#000000'
                }}
              >
                {6}
              </Text>
            </View>
            <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
              <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                BORUSAN LOJISTIK DAGITIM A.Ş.
              </Text>

              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                ABD Masraflar    Borusan Lojistikten Zone 3
              </Text>
              <Text style={{ color: "#6C6C6C", fontSize: 12 }}>
                87,736.00 USD            Onur SALMAN
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
            >
              <Icon
                name="angle-right"
                type="font-awesome"
                size={28}
                color="#A9A9A9"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          </VStack>
        </HStack>

        <HStack style={styles.list}>
          <HStack style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
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
                  color: '#000000'
                }}
              >
                {7}
              </Text>
            </View>
            <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
              <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                BORUSAN LOJISTIK DAGITIM A.Ş.
              </Text>

              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                ABD Masraflar    Borusan Lojistikten Zone 3
              </Text>
              <Text style={{ color: "#6C6C6C", fontSize: 12 }}>
                87,736.00 USD            Onur SALMAN
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
            >
              <Icon
                name="angle-right"
                type="font-awesome"
                size={28}
                color="#A9A9A9"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          </VStack>
        </HStack>

        <HStack style={styles.list}>
          <HStack style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
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
                  color: '#000000'
                }}
              >
                {8}
              </Text>
            </View>
            <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
              <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                BORUSAN LOJISTIK DAGITIM A.Ş.
              </Text>

              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                ABD Masraflar    Borusan Lojistikten Zone 3
              </Text>
              <Text style={{ color: "#6C6C6C", fontSize: 12 }}>
                87,736.00 USD            Onur SALMAN
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
            >
              <Icon
                name="angle-right"
                type="font-awesome"
                size={28}
                color="#A9A9A9"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          </VStack>
        </HStack>

        <HStack style={styles.list}>
          <HStack style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F2F2F2',
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
                  color: '#000000'
                }}
              >
                {9}
              </Text>
            </View>
            <VStack style={{ paddingLeft: 8, maxWidth: 284 }} space={"5px"}>
              <Text style={{ fontWeight: "bold", flexWrap: "wrap" }}>
                BORUSAN LOJISTIK DAGITIM A.Ş.
              </Text>

              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                ABD Masraflar    Borusan Lojistikten Zone 3
              </Text>
              <Text style={{ color: "#6C6C6C", fontSize: 12 }}>
                87,736.00 USD            Onur SALMAN
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
            >
              <Icon
                name="angle-right"
                type="font-awesome"
                size={28}
                color="#A9A9A9"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          </VStack>
        </HStack>
      </VStack>
    </ScrollView>
  )
}