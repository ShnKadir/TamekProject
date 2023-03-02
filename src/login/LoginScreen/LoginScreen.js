
// React
import { useEffect, useState } from "react"

// React Native
import { Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback, ImageBackground, ScrollView } from "react-native"
import { Icon } from "react-native-elements"

// Assets
import loginBackgroundImage from "@assets/image/loginBackgroundImage.png"

// Style
import { styles } from "./LoginScreenStyle"

export default function LoginScreen() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailIsFocused, setEmailIsFocused] = useState(false)
    const [passwordIsFocused, setPasswordIsFocused] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)


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

    useEffect(() => {
        setEmail(email)
    }, [email])

    useEffect(() => {
        setPassword(password)
    }, [password])

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

                    <View style={{ paddingHorizontal: 16 }}>

                        <View style={{ marginBottom: 24 }}>
                            <View style={[emailIsFocused ?
                                styles.emailFocusStyle
                                :
                                styles.emailStyle
                            ]}>
                                <Text style={[emailIsFocused ?
                                    styles.emailFocusTextStyle :
                                    styles.emailTextStyle
                                ]}>
                                    Email address
                                </Text>

                                <TextInput
                                    style={[emailIsFocused ?
                                        styles.emailFocusTextInputStyle :
                                        styles.emailTextInputStyle]}
                                    onFocus={emailHandleFocus}
                                    onBlur={emailHandleBlur}
                                />
                            </View>
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
                        <TouchableOpacity style={styles.btnContainerStyle}>
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