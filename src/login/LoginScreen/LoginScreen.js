
// React
import { useEffect, useState } from "react"

// React Native
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
    ScrollView
} from "react-native"
import { HelperText } from 'react-native-paper'
import { Icon } from "react-native-elements"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { VStack } from "native-base"

// Assets
import loginBackgroundImage from "@assets/image/loginBackgroundImage.png"

// Components
import LoadingIndicator from "../../common/Loading/LoadingIndicator"
import CommonButton from "../../components/CommonButton/CommonButton"
import InputArea from "../../components/InputArea/InputArea"

// Style
import { styles } from "./LoginScreenStyle"

// Redux
import { postLoginSuccess } from "../../redux/slice/authSlice"
import { useDispatch } from "react-redux"

//Api
import postLogin from "../../common/api/auth/postLogin"

// Navigation
import { useNavigation } from "@react-navigation/native"
import { LOGIN_NAV } from "../../navigations/constants"

// Helper
import { default as isEmail } from 'validator/lib/isEmail'

export default function LoginScreen(
) {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [emailIsFocused, setEmailIsFocused] = useState(false)
    const [passwordIsFocused, setPasswordIsFocused] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [ready, setReady] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const emailHandleFocus = () => {
        setEmailIsFocused(true)
    }

    const emailHandleBlur = () => {
        setEmailIsFocused(false)

        if (email?.length > 0) {
            if (email === '' || isEmail(email)) {
                setErrorMessage('')
                setEmailIsFocused(false)

            } else {
                setErrorMessage('Lütfen e-postanızı kontrol edin veya uygulama işlevlerine erişmek için ekip yöneticinizle iletişime geçin.')
                setEmailIsFocused(false)
            }
        }
    }

    const passwordHandleFocus = () => {
        setPasswordIsFocused(true)
    }

    const passwordHandleBlur = () => {
        setPasswordIsFocused(false)
    }

    const changePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const handleOnDeleteEmail = () => {
        setEmail('')
    }

    const handleOnLogin = () => {
        postLogin(email, password, navigation)
    }

    const handleOnResetPassword = () => {
        navigation.navigate(LOGIN_NAV.RESET_PASSWORD)
    }

    useEffect(() => {
        if (!ready) {
            let cancel = false
            AsyncStorage.getItem("userData").then((data) => {
                if (cancel) {
                    return
                }
                if (data) {
                    dispatch(postLoginSuccess(JSON.parse(data)))
                }
                setReady(true)
            })
            return () => {
                cancel = true
            }
        }
    }, [])

    useEffect(() => {
        if (email?.length > 0 && password?.length > 0) {
            setIsButtonDisabled(false)
        } else {
            setIsButtonDisabled(true)
        }
    }, [email, password])

    return (

        !ready ?
            <LoadingIndicator />
            :
            <TouchableWithoutFeedback
                touchSoundDisabled={true}
                onPress={() => Keyboard.dismiss()}
            >

                <ScrollView style={{ flex: 1 }}>
                    <ImageBackground
                        source={loginBackgroundImage}
                        resizeMode={"stretch"}
                        style={styles.container}
                    >

                        <VStack space={"10px"} style={styles.vContainer}>

                            <InputArea
                                keyboardType="email-address"
                                inputStyle={[
                                    emailIsFocused ? { borderColor: "#007041" } :
                                        { borderColor: "#808080" },
                                    errorMessage && { borderColor: "#DA291C" }, { height: 56, borderRadius: 36, borderWiddth: 2 }]}

                                textInputStyle={[emailIsFocused ? { color: "#007041" } : { color: "#000000" }, errorMessage && { color: "#DA291C" }]}
                                value={email}
                                setValue={setEmail}
                                placeholder={"Email"}
                                error={errorMessage !== ''}
                                onFocus={emailHandleFocus}
                                onBlur={emailHandleBlur}

                                inputRightElement={
                                    <TouchableOpacity
                                        style={{
                                            height: "100%",
                                            justifyContent: "center",
                                        }}
                                        hitSlop={{
                                            top: 20,
                                            bottom: 20,
                                            left: 20,
                                            right: 20,
                                        }}
                                        onPress={handleOnDeleteEmail}
                                    >
                                        <Icon
                                            name={
                                                errorMessage == false
                                                    ? "times-circle"
                                                    : "exclamation-circle"
                                            }
                                            type="font-awesome-5"
                                            size={14}

                                            color={
                                                errorMessage ?
                                                    "#DA291C"
                                                    : emailIsFocused ?
                                                        "#007041"
                                                        :
                                                        "#808080"

                                            }
                                            style={{ marginRight: 15 }}
                                        />
                                    </TouchableOpacity>
                                }
                            />

                            {errorMessage && (
                                <HelperText type="error" style={{ fontWeight: "500", marginTop: 0, paddingTop: 0 }}>
                                    {errorMessage}
                                </HelperText>
                            )}

                            <InputArea
                                inputStyle={[passwordIsFocused ? { borderColor: "#007041", borderWiddth: 2 }
                                    :
                                    { borderColor: "#808080", borderWiddth: 2 }, { height: 56, borderRadius: 36 }]}
                                textInputStyle={passwordIsFocused ? { color: "#007041" } : { color: "#000000" }}
                                value={password}
                                setValue={setPassword}
                                placeholder={"Şifre"}
                                secureTextEntry={!isPasswordVisible}
                                onFocus={passwordHandleFocus}
                                onBlur={passwordHandleBlur}

                                inputRightElement={
                                    <TouchableOpacity
                                        style={{
                                            height: "100%",
                                            justifyContent: "center",
                                        }}
                                        hitSlop={{
                                            top: 20,
                                            bottom: 20,
                                            left: 20,
                                            right: 20,
                                        }}
                                        onPress={changePasswordVisibility}
                                    >
                                        <Icon
                                            name={
                                                isPasswordVisible == false
                                                    ? "eye-slash"
                                                    : "eye"
                                            }
                                            type="font-awesome-5"
                                            size={13}
                                            color={
                                                passwordIsFocused ?
                                                    "#007041"
                                                    : "#535353"
                                            }
                                            style={{ marginRight: 15 }}
                                        />
                                    </TouchableOpacity>
                                }
                            />

                            <View style={{ marginTop: 10, width: "100%" }}>

                                <CommonButton
                                    content={"Giriş Yap"}
                                    color={"#6996ff"}
                                    buttonStyle={styles.loginButton}
                                    onPress={() => handleOnLogin()}
                                    disabled={isButtonDisabled}
                                />
                            </View>

                            {/* <View style={{ paddingHorizontal: 16, paddingTop: 10, maxWidth: "100%" }}>
                                <TouchableOpacity onPress={handleOnResetPassword}>
                                    <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "600", textAlign: "left" }}>
                                        Şİfrenizi mi unuttunuz?
                                    </Text>
                                </TouchableOpacity>
                            </View> */}
                        </VStack>
                    </ImageBackground >
                </ScrollView>
            </TouchableWithoutFeedback>
    )
}