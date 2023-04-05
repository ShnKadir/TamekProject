import React, { useEffect, useState } from 'react'

//Components
import { Text } from 'react-native'

import { VStack, HStack } from 'native-base'
import { Icon } from 'react-native-elements'

//Style
import { styles } from "./PasswordSecurityStyle"


export default function PasswordSecurity({
  newPassword,
  newPasswordAgain,
  currentPassword,
  setIsLoginButtonDisable
}) {

  const [isUpperCase, setIsUpperCase] = useState(false)
  const [isLowerCase, setIsLowerCase] = useState(false)
  const [isNumber, setIsNumber] = useState(false)
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false)
  const [isCharacterLimit, setIsCharacterLimit] = useState(false)
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false)

  const checkUppercase = (str) => {
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)) {
        return true;
      }
    }
    return false;
  };

  const checkLowercase = (str) => {
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == str.charAt(i).toLowerCase() && str.charAt(i).match(/[A-Z]/i)) {
        return true;
      }
    }
    return false;
  };

  const checkNumber = (str) => {
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == str.charAt(i).toLowerCase() && str.charAt(i).match(/[0-9]/i)) {
        return true;
      }
    }
    return false;
  };

  const checkSpecialCharacter = (str) => {
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i).match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
        return true;
      }
    }
    return false;
  };


  useEffect(() => {
    if (newPassword) {

      //Check Upper Case
      if (checkUppercase(newPassword)) {
        setIsUpperCase(true)
      }
      else {
        setIsUpperCase(false)
      }

      //Check Lower Case
      if (checkLowercase(newPassword)) {
        setIsLowerCase(true)
      }
      else {
        setIsLowerCase(false)
      }

      //Check Number
      if (checkNumber(newPassword)) {
        setIsNumber(true)
      }
      else {
        setIsNumber(false)
      }

      //Check Special Character
      if (checkSpecialCharacter(newPassword)) {
        setIsSpecialCharacter(true)
      }
      else {
        setIsSpecialCharacter(false)
      }

      //Check Character Limit
      if (newPassword.length >= 8) {
        setIsCharacterLimit(true)
      }
      else {
        setIsCharacterLimit(false)
      }

      if (newPassword === newPasswordAgain &&
        isLowerCase &&
        isUpperCase &&
        isNumber &&
        isSpecialCharacter &&
        isCharacterLimit
      ) {
        setIsPasswordConfirmed(true)

        if (currentPassword?.length > 0) {
          setIsLoginButtonDisable(false)
        }
        else {
          setIsLoginButtonDisable(true)
        }
      }
      else {
        setIsPasswordConfirmed(false)
        setIsLoginButtonDisable(true)
      }
    }
    else {
      setIsUpperCase(false)
      setIsLowerCase(false)
      setIsNumber(false)
      setIsSpecialCharacter(false)
      setIsCharacterLimit(false)
      setIsPasswordConfirmed(false)
      setIsLoginButtonDisable(true)
    }
  }, [newPassword, newPasswordAgain, currentPassword])

  return (
    <VStack>
      <HStack style={{ alignItems: "center", marginBottom: 4 }}>
        <Icon
          name={"md-checkmark-sharp"}
          type="ionicon"
          size={18}
          color={isUpperCase ? "#32d767" : "#bfbfbf"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.info}>
          En az 1 büyük harf
        </Text>
      </HStack>

      <HStack style={{ alignItems: "center", marginBottom: 4 }}>
        <Icon
          name={"md-checkmark-sharp"}
          type="ionicon"
          size={18}
          color={isLowerCase ? "#32d767" : "#bfbfbf"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.info}>
          En az 1 küçük harf
        </Text>
      </HStack>

      <HStack style={{ alignItems: "center", marginBottom: 4 }}>
        <Icon
          name={"md-checkmark-sharp"}
          type="ionicon"
          size={18}
          color={isNumber ? "#32d767" : "#bfbfbf"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.info}>
          En az 1 sayı
        </Text>
      </HStack>

      <HStack style={{ alignItems: "center", marginBottom: 4 }}>
        <Icon
          name={"md-checkmark-sharp"}
          type="ionicon"
          size={18}
          color={isSpecialCharacter ? "#32d767" : "#bfbfbf"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.info}>
          En az 1 özel karakter
        </Text>
      </HStack>

      <HStack style={{ alignItems: "center", marginBottom: 4 }}>
        <Icon
          name={"md-checkmark-sharp"}
          type="ionicon"
          size={18}
          color={isCharacterLimit ? "#32d767" : "#bfbfbf"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.info}>
          En az 8 karakter
        </Text>
      </HStack>

      <HStack style={{ alignItems: "center", marginBottom: 4 }}>
        <Icon
          name={"md-checkmark-sharp"}
          type="ionicon"
          size={18}
          color={isPasswordConfirmed ? "#32d767" : "#bfbfbf"}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.info}>
          Şifre Onaylandı
        </Text>
      </HStack>

    </VStack>
  )
}