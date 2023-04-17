// React
import React, { useState, useEffect } from 'react'

// React Native
import {
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native'
import { ScrollView, VStack } from 'native-base'
import { Icon } from 'react-native-elements'
import { HelperText } from 'react-native-paper'

//Style
import { styles } from './ChangePasswordScreenStyle'

//Components
import InputArea from '../../components/InputArea/InputArea'
import CommonButton from '../../components/CommonButton/CommonButton'
import postChangePassword from '../../common/api/auth/postChangePassword'

// Redux
import { useSelector } from 'react-redux'

//Navigation
import { useNavigation } from '@react-navigation/native'

export default function ChangePasswordScreen() {


    const navigation = useNavigation()

    const changePasssword = useSelector(state => state.auth?.changePassword)

    const email = useSelector(state => state.auth?.email)
    const [oldPassword, setOldPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [newPasswordAgain, setNewPasswordAgain] = useState(null)
    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false)
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false)
    const [isNewPasswordVisibleAgain, setIsNewPasswordVisibleAgain] = useState(false)
    const [oldPassWordIsFocused, setOldPasswordIsFocused] = useState(false)
    const [passWordIsFocused, setPasswordIsFocused] = useState(false)
    const [passWordAgainIsFocused, setPasswordAgainIsFocused] = useState(false)
    const [isLoginButtonDisable, setIsLoginButtonDisable] = useState(true)
    const [passwordSecurityMessage, setPasswordSecurityMessage] = useState()
    const [unMatchMessage, setUnMatchMessage] = useState()
    const [isUnMatchPassword, setIsUnMatchPassword] = useState(false)
    const [oldPasswordCorrectControl, setOldPasswordCorrectControl] = useState(false)
    const [isOldPasswordWrong, setIsOldPasswordWrong] = useState(false)

    const changeOldPasswordAgainVisibility = () => {
        setIsOldPasswordVisible(!isOldPasswordVisible)
    }

    const changeNewPasswordVisibility = () => {
        setIsNewPasswordVisible(!isNewPasswordVisible)
    }

    const changeNewPasswordAgainVisibility = () => {
        setIsNewPasswordVisibleAgain(!isNewPasswordVisibleAgain)
    }

    const oldPasswordFocus = () => {
        setOldPasswordIsFocused(true)
        setIsOldPasswordWrong(false)
    }

    const oldPasswordBlur = () => {

        setOldPasswordIsFocused(false)
        setOldPasswordCorrectControl("Eski şifreniz doğru değil")
        setIsOldPasswordWrong(false)
    }

    const newPasswordFocus = () => {
        setPasswordIsFocused(true)
        setPasswordSecurityMessage("Yeni şifre,büyük veya küçük harfler ve 10 tabanlı basamak (0'dan 9'a kadar) dahil olmak üzere en az 8 karakter içermelidir.")
    }

    const newPasswordBlur = () => {
        setPasswordIsFocused(false)
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

        if (oldPassword.length > 0 && newPassword?.length >= 8 && newPasswordAgain?.length >= 8 && (newPassword === newPasswordAgain)) {

            setIsLoginButtonDisable(true)
            postChangePassword(email, oldPassword, newPassword, navigation)
        }
    }

    useEffect(() => {
        if (newPassword?.length >= 8 && newPasswordAgain?.length >= 8 && (newPassword === newPasswordAgain)) {
            setIsLoginButtonDisable(false)
            setIsUnMatchPassword(false)
        }
        else {
            setIsLoginButtonDisable(true)
        }
    }, [newPassword, newPasswordAgain])

    useEffect(() => {
        if (changePasssword?.returnText === "USER_OR_PASSWORD_WRONG") {
            setIsOldPasswordWrong(true)
        }
        else {
            setIsOldPasswordWrong(false)
        }
    }, [changePasssword])

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
                        color: "#575757",
                        marginBottom: 40
                    }}>

                        Yeni şifreniz daha önce kullandığınız şifreden farklı olmalıdır.
                    </HelperText>

                    <InputArea
                        value={oldPassword}
                        setValue={setOldPassword}
                        placeholderTextColor={"#808080"}
                        inputStyle={[
                            isOldPasswordWrong ?
                                { borderColor: "#DA291C" } :
                                oldPassWordIsFocused ?
                                    { borderColor: "#007041" } :
                                    { borderColor: "#808080" },
                            {
                                height: 56,
                                borderRadius: 36,
                                borderWidth: 1,
                                marginBottom: 16,
                                marginTop: 4
                            }]}
                        placeholder={"Eski Şifre"}
                        secureTextEntry={!isOldPasswordVisible}

                        textInputStyle={[{ textSize: 15, lineHeight: 20 },
                        isOldPasswordWrong ?
                            { color: "#DA291C" } :
                            oldPassWordIsFocused ?
                                { color: "#007041" } :
                                { color: "#000000" }]}
                        inputRightElement={
                            <TouchableOpacity
                                style={{ height: "100%", justifyContent: "center" }}
                                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                                onPress={changeOldPasswordAgainVisibility}>
                                <Icon
                                    name={isOldPasswordVisible == false ?
                                        "ios-eye-off-sharp" :
                                        "ios-eye-sharp"}
                                    type="ionicon"
                                    size={18}
                                    color={
                                        isOldPasswordWrong ?
                                            "#DA291C" :
                                            oldPassWordIsFocused ?
                                                "#007041"
                                                :
                                                "#808080"
                                    }
                                    style={{ marginRight: 12 }}
                                />
                            </TouchableOpacity>
                        }
                        onFocus={oldPasswordFocus}
                        onBlur={oldPasswordBlur}
                    />

                    {
                        isOldPasswordWrong &&
                        <HelperText
                            style={{
                                fontWeight: "500",
                                marginTop: 0,
                                paddingTop: 0,
                                color: "#DA291C",
                                marginBottom: 12,
                                fontSize: 12
                            }}>
                            Eski şifreniz yalnış
                        </HelperText>
                    }

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
                        textInputStyle={[{ textSize: 15, lineHeight: 20 },
                        passWordIsFocused ?
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
                                    size={18}
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
                        passWordIsFocused &&
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
                        textInputStyle={[{ textSize: 15, lineHeight: 20 },
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
                                        "ios-eye-off-sharp" :
                                        "ios-eye-sharp"}
                                    type="ionicon"
                                    size={18}
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

                    <CommonButton
                        content="Şifre Değiştir"
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