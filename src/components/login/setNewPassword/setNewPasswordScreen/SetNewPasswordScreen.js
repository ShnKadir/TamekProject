// React
import React, { useState } from 'react'

// React Native
import { Text, TouchableOpacity } from 'react-native'
import { ScrollView, VStack } from 'native-base'
import { Icon } from 'react-native-elements'

//Style
import { styles } from "./SetNewPasswordScreenStyle"

//Components
import InputArea from '../../../../components/InputArea/InputArea'
import PasswordSecurity from './../PasswordSecurity/PasswordSecurity'
import CommonButton from '../../../CommonButton/CommonButton'
import postCreatePassword from '../../../../common/api/auth/postCreatePassword'

// Navigations
import { useNavigation } from '@react-navigation/native'

export default function SetNewPasswordScreen({
    route
}) {

    const navigation = useNavigation()

    const [currentPassword, setCurrentPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [newPasswordAgain, setNewPasswordAgain] = useState(null)

    const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false)
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)
    const [isNewPasswordVisibleAgain, setIsNewPasswordVisibleAgain] = useState(false)

    const [isLoginButtonDisable, setIsLoginButtonDisable] = useState(true)

    const changeCurrentPasswordVisibility = () => {
        setCurrentPasswordVisible(!currentPasswordVisible)
    }

    const changeNewPasswordVisibility = () => {
        setIsNewPasswordVisible(!isNewPasswordVisible)
    }

    const changeNewPasswordAgainVisibility = () => {
        setIsNewPasswordVisibleAgain(!isNewPasswordVisibleAgain)
    }

    const handleOnLogin = () => {
        // postChangePassword(route.params.email, currentPassword, newPassword)
        debugger
        postCreatePassword(route.params.userMail, newPassword, navigation)
    }
    return (
        <VStack style={styles.container}>
            <ScrollView>

                <Text style={styles.info}>
                    Geçici Şifre
                </Text>

                <InputArea
                    value={currentPassword}
                    setValue={setCurrentPassword}
                    inputStyle={{ marginTop: 4, marginBottom: 16 }}
                    placeholder={"Yeni şifre"}
                    secureTextEntry={!currentPasswordVisible}
                    inputLeftElement={
                        <Icon
                            name="lock"
                            type="font-awesome"
                            size={16}
                            color="#bfbfbf"
                        />
                    }
                    inputRightElement={
                        <TouchableOpacity
                            testID={"eyeIcon"}
                            style={{ height: "100%", justifyContent: "center" }}
                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                            onPress={changeCurrentPasswordVisibility}>
                            <Icon

                                name={currentPasswordVisible == false ? "eye-slash" : "eye"}
                                type="font-awesome-5"
                                size={13}
                                color="#bfbfbf"
                                style={{ marginRight: 12 }}
                            />
                        </TouchableOpacity>
                    }
                />

                <Text style={styles.info}>
                    Yeni Şifre
                </Text>

                <InputArea
                    testId={"passwordInput"}
                    value={newPassword}
                    setValue={setNewPassword}
                    inputStyle={{ marginTop: 4, marginBottom: 16 }}
                    placeholder={"Yeni Şifre"}
                    secureTextEntry={!isNewPasswordVisible}
                    inputLeftElement={
                        <Icon
                            name="lock"
                            type="font-awesome"
                            size={16}
                            color="#bfbfbf"
                        />
                    }
                    inputRightElement={
                        <TouchableOpacity
                            style={{ height: "100%", justifyContent: "center" }}
                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                            onPress={changeNewPasswordVisibility}>
                            <Icon

                                name={isNewPasswordVisible == false ? "eye-slash" : "eye"}
                                type="font-awesome-5"
                                size={13}
                                color="#bfbfbf"
                                style={{ marginRight: 12 }}
                            />
                        </TouchableOpacity>
                    }
                />

                <Text style={styles.info}>
                    {"Yeni Şifre Tekrar"}
                </Text>

                <InputArea
                    testId={"passwordInput"}
                    value={newPasswordAgain}
                    setValue={setNewPasswordAgain}
                    inputStyle={{ marginTop: 4, marginBottom: 16 }}
                    placeholder={"Yeni Şifre Tekrar"}
                    secureTextEntry={!isNewPasswordVisibleAgain}
                    inputLeftElement={
                        <Icon
                            name="lock"
                            type="font-awesome"
                            size={16}
                            color="#bfbfbf"
                        />
                    }
                    inputRightElement={
                        <TouchableOpacity
                            style={{ height: "100%", justifyContent: "center" }}
                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                            onPress={changeNewPasswordAgainVisibility}>
                            <Icon

                                name={isNewPasswordVisibleAgain == false ? "eye-slash" : "eye"}
                                type="font-awesome-5"
                                size={13}
                                color="#bfbfbf"
                                style={{ marginRight: 12 }}
                            />
                        </TouchableOpacity>
                    }
                />

                <Text style={[styles.info, { marginBottom: 8 }]}>
                    Şifre Güvenliği:
                </Text>

                <PasswordSecurity
                    newPassword={newPassword}
                    newPasswordAgain={newPasswordAgain}
                    currentPassword={currentPassword}
                    setIsLoginButtonDisable={setIsLoginButtonDisable}
                />

                <CommonButton
                    content="Login"
                    color={'#6996ff'}
                    //isDisabled={isLoginButtonDisable}
                    buttonStyle={{
                        marginTop: 24,
                        backgroundColor: "#007041",
                        color: "#FFFFFF"
                    }}
                    onPress={handleOnLogin}
                />

            </ScrollView>
        </VStack>
    )
}