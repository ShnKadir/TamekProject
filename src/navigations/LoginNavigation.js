import React from 'react'

// Navigation
import { LOGIN_NAV } from './constants'

// Stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import loginRoutes from '../routes/loginRoutes'
import LoginScreen from '../login/LoginScreen/LoginScreen'
const Stack = createNativeStackNavigator()

export default function LoginNavigation() {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                loginRoutes.map((item, index) => {
                    return (
                        <Stack.Screen
                            key={index}
                            name={item?.name}
                            component={item?.component}
                            options={item?.options}
                        />
                    )
                })
            }
        </Stack.Navigator>
    )
}