// Style
import { styles } from "./LoginScreenStyle"

import { Button, VStack } from "native-base"
import InputArea from "../../pages/InputArea/InputArea"
import { Text, TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import { useEffect, useState } from "react"

export default function LoginScreen() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        setEmail(email)
    }, [email])

    useEffect(() => {
        setPassword(password)
    }, [password])

    return (
        <VStack
            space={"24px"}
            style={styles.container}
        >

            <InputArea
                value={email}
                setValue={setEmail}
                placeholder={"Kullanıcı adı veya Mail"}
                inputLeftElement={
                    <Icon
                        name="user"
                        type="font-awesome"
                        size={16}
                        color="#bfbfbf"
                    />
                }
            />

            <InputArea
                value={password}
                setValue={setPassword}
                placeholder={"Şifre"}
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
                    >
                        <Icon

                            name={"eye-slash"}
                            type="font-awesome-5"
                            size={13}
                            color="#bfbfbf"
                            style={{ marginRight: 12 }}
                        />
                    </TouchableOpacity>
                }
            />
            <TouchableOpacity
                style={styles.loginButton}
            >
                <Text style={{color:"#B30312",fontWeight:"bold"}}>
                    Giriş
                </Text>
            </TouchableOpacity>
        </VStack>
    )
}