import React from 'react'

// Stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import loginRoutes from '../routes/loginRoutes'
const Stack = createNativeStackNavigator()

export default function LoginNavigation() {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerBackVisible: true
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