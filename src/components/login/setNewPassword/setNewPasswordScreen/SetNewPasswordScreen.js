// React
import React, { useState, useLayoutEffect, useEffect } from 'react'

// React Native
import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView, VStack } from 'native-base'
import { Icon } from 'react-native-elements'
import { HelperText } from 'react-native-paper'

//Style
import { styles } from "./SetNewPasswordScreenStyle"

//Components
import InputArea from '../../../../components/InputArea/InputArea'
import CommonButton from '../../../CommonButton/CommonButton'

// Api
import postCreatePassword from '../../../../common/api/auth/postCreatePassword'
import postSendMail from '../../../../common/api/auth/postSendMail'

// Navigations
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'

export default function SetNewPasswordScreen({
    route
}) {

    const navigation = useNavigation()

    const [newPassword, setNewPassword] = useState(null)
    const [newPasswordAgain, setNewPasswordAgain] = useState(null)
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)
    const [isNewPasswordVisibleAgain, setIsNewPasswordVisibleAgain] = useState(false)
    const [passWordIsFocused, setPasswordIsFocused] = useState(false)
    const [activationCodeIsFocused, setActivationCodeIsFocused] = useState(false)
    const [passWordAgainIsFocused, setPasswordAgainIsFocused] = useState(false)
    const [isLoginButtonDisable, setIsLoginButtonDisable] = useState(true)
    const [passwordSecurityMessage, setPasswordSecurityMessage] = useState()
    const [unMatchMessage, setUnMatchMessage] = useState()
    const [isUnMatchPassword, setIsUnMatchPassword] = useState(false)
    const [activationCode, setActivationCode] = useState(null)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerLargeTitle: false,
            title: "Yeni Şifre Belirle"
        })
    }, [navigation])

    const changeNewPasswordVisibility = () => {
        setIsNewPasswordVisible(!isNewPasswordVisible)
    }

    const changeNewPasswordAgainVisibility = () => {
        setIsNewPasswordVisibleAgain(!isNewPasswordVisibleAgain)
    }

    const newPasswordFocus = () => {
        setPasswordIsFocused(true)
        setPasswordSecurityMessage("Yeni şifre,büyük veya küçük harfler ve 10 tabanlı basamak (0'dan 9'a kadar) dahil olmak üzere en az 8 karakter içermelidir.")
    }

    const activationCodeFocus = () => {
        setActivationCodeIsFocused(true)
    }

    const activationCodeBlur = () => {
        setActivationCodeIsFocused(false)
    }

    const newPasswordBlur = () => {

        setPasswordIsFocused(false)
        setPasswordSecurityMessage("")
    }

    const newPasswordAgainFocus = () => {

        setPasswordAgainIsFocused(true)

        if (newPasswordAgain?.length > 0 && (newPassword !== newPasswordAgain)) {
            setUnMatchMessage("Şifreler eşleşmiyor. Yeni şifrenizi yazarken herhangi bir hata yapmadığınızdan emin olunuz.")
            setIsUnMatchPassword(true)
        }
        else {
            setUnMatchMessage("")
            setIsUnMatchPassword(false)
        }
    }

    const newPasswordAgainBlur = () => {

        setPasswordAgainIsFocused(false)

        if (newPasswordAgain?.length > 0 && (newPassword !== newPasswordAgain)) {
            setUnMatchMessage("Şifreler eşleşmiyor. Yeni şifrenizi yazarken herhangi bir hata yapmadığınızdan emin olunuz.")
            setIsUnMatchPassword(true)
        }
        else {
            setUnMatchMessage("")
            setIsUnMatchPassword(false)
        }
    }

    const handleOnLogin = () => {

        if (newPassword?.length > 0 && newPasswordAgain?.length > 0 && (newPassword === newPasswordAgain)) {

            setIsLoginButtonDisable(true)
            postCreatePassword(route.params.userMail, newPassword, activationCode, navigation)
        }
    }

    useEffect(() => {
        if (newPassword?.length > 0 && newPasswordAgain?.length > 0 && (newPassword === newPasswordAgain)) {
            setIsLoginButtonDisable(false)
            setIsUnMatchPassword(false)
        }
        else {
            setIsLoginButtonDisable(true)
        }
    }, [newPassword, newPasswordAgain])

    const sendActivationCode = () => {
        postSendMail()
    }
    return (
        <TouchableWithoutFeedback
            touchSoundDisabled={true}
            onPress={() => Keyboard.dismiss()}
        >
            <VStack style={styles.container}>
                <ScrollView>
                    < HelperText style={{
                        fontWeight: "500",
                        marginTop: 0,
                        paddingTop: 0,
                        fontSize: 15,
                        color: "#575757"
                    }}>

                        Yeni şifreniz daha önce kullandığınız şifreden farklı olmalıdır.
                    </HelperText>

                    <InputArea
                        value={activationCode}
                        setValue={setActivationCode}
                        inputStyle={[
                            activationCodeIsFocused ?
                                { borderColor: "#007041" } :
                                { borderColor: "#808080" },
                            {
                                height: 56,
                                borderRadius: 36,
                                borderWidth: 1,
                                marginBottom: 8,
                                marginTop: 4
                            }]}
                        placeholder={"Aktivasyon Kodu"}
                        placeholderTextColor='#808080'
                        textInputStyle={[activationCodeIsFocused ?
                            { color: "#007041" } :
                            { color: "#000000" }]}

                        onFocus={activationCodeFocus}
                        onBlur={activationCodeBlur}
                    />
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, marginBottom: 8 }}>
                        <Text style={{ marginRight: 8 }}>Kodu almadınız mı?</Text>
                        <TouchableOpacity onPress={sendActivationCode}>
                            <Text style={{ fontWeight: "bold", color: "#007041" }}>Yeniden Gönder</Text>
                        </TouchableOpacity>
                    </View>
                    <InputArea
                        value={newPassword}
                        setValue={setNewPassword}
                        inputStyle={[
                            passWordIsFocused ?
                                { borderColor: "#007041" } :
                                { borderColor: "#808080" },
                            {
                                height: 56,
                                borderRadius: 36,
                                borderWidth: 1,
                                marginBottom: 16,
                                marginTop: 4
                            }]}
                        placeholder={"Yeni Şifre"}
                        placeholderTextColor='#808080'
                        secureTextEntry={!isNewPasswordVisible}
                        textInputStyle={[passWordIsFocused ?
                            { color: "#007041" } :
                            { color: "#000000" }]}
                        inputRightElement={
                            <TouchableOpacity
                                style={{ height: "100%", justifyContent: "center" }}
                                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                                onPress={changeNewPasswordVisibility}>
                                <Icon
                                    name={isNewPasswordVisible == false ?
                                        "ios-eye-off-sharp" :
                                        "ios-eye-sharp"}
                                    type="ionicon"
                                    size={13}
                                    color={passWordIsFocused ?
                                        "#007041"
                                        :
                                        "#808080"
                                    }
                                    style={{ marginRight: 12 }}
                                />
                            </TouchableOpacity>
                        }
                        onFocus={newPasswordFocus}
                        onBlur={newPasswordBlur}
                    />

                    {
                        passwordSecurityMessage &&
                        <HelperText style={{
                            fontWeight: "500",
                            marginTop: 0,
                            paddingTop: 0,
                            color: "#007041",
                            marginBottom: 24,
                            fontSize: 12
                        }}>
                            {passwordSecurityMessage}
                        </HelperText>

                    }
                    <InputArea
                        value={newPasswordAgain}
                        setValue={setNewPasswordAgain}
                        inputStyle={[
                            isUnMatchPassword ?
                                { borderColor: "#DA291C" }
                                : passWordAgainIsFocused ?
                                    { borderColor: "#007041" } :
                                    { borderColor: "#808080" },
                            {
                                height: 56,
                                borderRadius: 36,
                                borderWidth: 1,
                                marginBottom: 16,
                                marginTop: 4
                            }

                        ]}
                        placeholder={"Yeni Şifre Tekrar"}
                        placeholderTextColor='#808080'
                        secureTextEntry={!isNewPasswordVisibleAgain}
                        textInputStyle={[
                            isUnMatchPassword ?
                                { color: "#DA291C" }
                                : passWordAgainIsFocused ?
                                    { color: "#007041" }
                                    :
                                    { color: "#000000" }
                        ]}

                        inputRightElement={
                            <TouchableOpacity
                                style={{ height: "100%", justifyContent: "center" }}
                                hitSlop={{
                                    top: 20,
                                    bottom: 20,
                                    left: 20,
                                    right: 20
                                }}
                                onPress={changeNewPasswordAgainVisibility}>
                                <Icon
                                    name={isNewPasswordVisibleAgain == false ?
                                        "eye-slash" :
                                        "eye"}
                                    type="font-awesome-5"
                                    size={13}
                                    color={
                                        isUnMatchPassword ?
                                            "#DA291C"
                                            : passWordAgainIsFocused ?
                                                "#007041"
                                                :
                                                "#808080"

                                    }
                                    style={{ marginRight: 12 }}
                                />
                            </TouchableOpacity>
                        }
                        onFocus={newPasswordAgainFocus}
                        onBlur={newPasswordAgainBlur}
                    />

                    {
                        isUnMatchPassword &&
                        <HelperText style={{
                            fontWeight: "500",
                            marginTop: 0,
                            paddingTop: 0,
                            fontSize: 12,
                            color: "#DA291C",
                            marginBottom: 16
                        }}>
                            {unMatchMessage}
                        </HelperText>
                    }

                    <HelperText style={{
                        fontWeight: "500",
                        marginTop: 0,
                        paddingTop: 0,
                        fontSize: 13,
                        color: "#575757"
                    }}>
                        İki şifre de eşleşmelidir.
                    </HelperText>

                    <CommonButton
                        content="Şifre Yenile"
                        color={'#007041'}
                        isDisabled={isLoginButtonDisable}
                        disableColor={"#DADADB"}
                        buttonStyle={{
                            height: 48,
                            borderRadius: 36,
                            marginTop: 20
                        }}
                        onPress={handleOnLogin}
                    />

                </ScrollView>
            </VStack>
        </TouchableWithoutFeedback>
    )
}