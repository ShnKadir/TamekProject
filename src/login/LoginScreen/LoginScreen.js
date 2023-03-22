
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
import { Icon } from "react-native-elements"

// Assets
import loginBackgroundImage from "@assets/image/loginBackgroundImage.png"

// Components
import LoadingIndicator from "../../common/Loading/LoadingIndicator"

// Style
import { styles } from "./LoginScreenStyle"

// Redux
import { setIsLogin } from "../../redux/slice/testSlice"
import store from './../../redux/store'
import { default as isEmail } from 'validator/lib/isEmail';
import { HelperText } from 'react-native-paper';

export default function LoginScreen(
) {

    const [email, setEmail] = useState('tamekmobile@outlook.com')
    const [password, setPassword] = useState('Tamek2023++')
    const [emailTest, setEmailTest] = useState('tamekmobile@outlook.com')
    const [passwordTest, setPasswordTest] = useState('Tamek2023++')
    const [emailIsFocused, setEmailIsFocused] = useState(false)
    const [passwordIsFocused, setPasswordIsFocused] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [emailValidate, setEmailValidate] = useState(true)
    const [
        errorMessage,
        setErrorMessage
    ] = useState('');

    const emailHandleFocus = () => {
        setEmailIsFocused(true)
    }

    const emailHandleBlur = () => {
        setEmailIsFocused(false)
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
        let reg = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        if (reg.test(text) === false) {
            setEmailValidate(false)
        }
    }

    const handleOnChangePassword = (pass) => {
        setPassword(pass)
    }

    const handleOnLogin = () => {
        if (passwordTest === password && emailTest === email) {
            store.dispatch(setIsLogin(true))
        }
        else {
            alert('Bilgiler hatalı')
        }
    }

    return (

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
                                        style={[!emailIsFocused && { marginTop: 8 }, { justifyContent: "center"}]}
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