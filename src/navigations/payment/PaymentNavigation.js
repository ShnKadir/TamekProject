
import { View, Text } from 'react-native'
import React from 'react'
import { MENU_NAV } from './../constants';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import paymentRequestRoutes from '../../routes/payment/paymentRequestRoutes';

const Stack = createNativeStackNavigator()

export default function PaymentNavigation() {
    return (
        <Stack.Navigator>
            {
                paymentRequestRoutes.map((item, index) => {
                    return (
                        <Stack.Screen
                            key={index}
                            name={item?.name}
                            component={item?.component}
                            options={item?.screenOption}
                        />
                    )
                })
            }
        </Stack.Navigator>
    )
}
