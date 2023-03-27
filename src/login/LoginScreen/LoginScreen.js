
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

// Assets
import loginBackgroundImage from "@assets/image/loginBackgroundImage.png"

// Components
import LoadingIndicator from "../../common/Loading/LoadingIndicator"

// Style
import { styles } from "./LoginScreenStyle"

// Redux
import { postLoginSuccess } from "../../redux/slice/authSlice"
import { useDispatch } from "react-redux"

//Api
import postLogin from "../../common/api/auth/postLogin"

// Helper
import { default as isEmail } from 'validator/lib/isEmail'
import { useSelector } from 'react-redux';
import { API_STATUS } from "../../common/Enums"
import store from './../../redux/store';
import { setIsLogin } from "../../redux/slice/testSlice"

export default function LoginScreen(
) {

    // const dispatch = useDispatch()
    // const loginApiStatus = useSelector(state => state.auth.loginApiStatus)

    const [email, setEmail] = useState('tamekmobile@outlook.com')
    const [password, setPassword] = useState('Tamek2023++')
    const [emailTest, setEmailTest] = useState('tamekmobile@outlook.com')
    const [passwordTest, setPasswordTest] = useState('Tamek2023++')

    const [emailIsFocused, setEmailIsFocused] = useState(false)
    const [passwordIsFocused, setPasswordIsFocused] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [emailValidate, setEmailValidate] = useState(true)
    const [ready, setReady] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const emailHandleFocus = () => {
        setEmailIsFocused(true)
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

    const validateText = (text) => {
        setEmail(text)
        setErrorMessage('')
        let reg = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        if (reg.test(text) === false) {
            setEmailValidate(false)
        }
    }

    const handleOnChangePassword = (pass) => {
        setPassword(pass)
    }

    const handleOnLogin = () => {
        // postLogin(email, password)

        if (passwordTest === password && emailTest === email) {
            store.dispatch(setIsLogin(true))
        }
        else {
            alert('Bilgiler hatalı')
        }
    }

    // useEffect(() => {
    //     if (!ready) {
    //         let cancel = false
    //         AsyncStorage.getItem("email").then((AsyncEmail) => {
    //             if (cancel) {
    //                 return
    //             }
    //         })
    //         AsyncStorage.getItem("userData").then((data) => {
    //             if (cancel) {
    //                 return
    //             }
    //             if (data) {
    //                 dispatch(postLoginSuccess(JSON.parse(data)))
    //             }
    //             setReady(true)
    //         })
    //         return () => {
    //             cancel = true
    //         }
    //     }
    // }, [])

    // useEffect(() => {
    //     if (loginApiStatus === API_STATUS.FAILURE) {
    //         setErrorMessage('The email address or password is incorrect.')
    //     }
    // }, [loginApiStatus])

    return (

        // !ready ?
        //     <LoadingIndicator />
        //     :
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

                    <View style={{ paddingHorizontal: 16, marginTop: 36 }}>

                        <View style={{ marginBottom: 24 }}>
                            <View style={[emailIsFocused ?
                                styles.emailFocusStyle
                                :
                                styles.emailStyle
                            ]}>
                                <Text style={[
                                    emailIsFocused ?
                                        styles.emailFocusTextStyle
                                        : styles.emailTextStyle
                                ]}>
                                    Email address
                                </Text>

                                <View style={{
                                    flexDirection: 'row',
                                }}>

                                    <TextInput
                                        style={[emailIsFocused ?
                                            styles.emailFocusTextInputStyle :
                                            styles.emailTextInputStyle]}
                                        value={email}
                                        onChangeText={(text) => validateText(text)}
                                        onFocus={emailHandleFocus}
                                        onBlur={() => {
                                            if (email === '' || isEmail(email)) {
                                                setErrorMessage('')
                                                setEmailIsFocused(false)
                                            } else {
                                                setErrorMessage('Please enter correct email or contact your team administrator to access app functionality')
                                                setEmailIsFocused(false)
                                            }
                                        }}
                                    />

                                    <TouchableOpacity
                                        style={[!emailIsFocused && { marginTop: 8 }, { justifyContent: "center" }]}
                                        hitSlop={{
                                            top: 30,
                                            bottom: 30,
                                            left: 30,
                                            right: 30,
                                        }}
                                        onPress={handleOnDeleteEmail}
                                    >
                                        <Icon
                                            name={
                                                errorMessage ?
                                                    "exclamationcircle"
                                                    : email?.length > 0 &&
                                                    "closecircleo"
                                            }
                                            type="antdesign"
                                            size={18}
                                            color={errorMessage ? "red" : "#535353"}
                                            style={{ marginLeft: 12, marginRight: 12 }}

                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            {errorMessage && (
                                <HelperText type="error">
                                    {errorMessage}
                                </HelperText>
                            )}
                        </View>

                        <View style={[passwordIsFocused ?
                            styles.passwordFocusStyle
                            :
                            styles.passwordStyle
                        ]}>

                            <Text style={[passwordIsFocused ?
                                styles.passwordFocusTextStyle :
                                styles.passwordTextStyle
                            ]}>
                                Password
                            </Text>

                            <View style={{
                                flexDirection: 'row',
                            }}>

                                <TextInput
                                    style={[passwordIsFocused ?
                                        styles.passwordFocusTextInptStyle
                                        :
                                        styles.passwordTextInptStyle
                                    ]}
                                    secureTextEntry={!isPasswordVisible}
                                    onFocus={passwordHandleFocus}
                                    onBlur={passwordHandleBlur}
                                    onChangeText={(pass) => handleOnChangePassword(pass)}
                                    value={password}

                                />

                                <TouchableOpacity
                                    style={[!passwordIsFocused && { marginTop: 8 }, { justifyContent: "center" }]}
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
                                            isPasswordVisible == true
                                                ?
                                                "ios-eye"
                                                : "ios-eye-off"
                                        }
                                        type="ionicon"
                                        size={20}
                                        color="#535353"
                                        style={{ marginLeft: 12, marginRight: 12 }}

                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    <View style={{ paddingHorizontal: 16 }}>
                        <TouchableOpacity
                            style={styles.btnContainerStyle}
                            onPress={handleOnLogin}
                        >
                            <Text style={styles.buttonTextStyle}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground >
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}