import React, { useEffect } from 'react'

// React Native
import { Icon } from 'react-native-elements'

// Components

import PaymentNavigation from '../navigations/payment/PaymentNavigation'
import Account from '../pages/Account/Account'

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

export default function BottomNavigation() {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.reset({
            index: 0,
            routeNames: ['Menü'],
            routes: [{ name: 'Menü' }],
        })
    }, [navigation])

    return (
        <Tab.Navigator
            initialRouteName='Menü'
            screenOptions={screenOptions}
        >
            <Tab.Screen
                name='Menü'
                component={PaymentNavigation}
                options={{
                    tabBarIcon: () =>
                        <Icon
                            name="home"
                            type="font-awesome"
                            size={22}
                            color="#ffffff"
                        />
                }}
            />
            <Tab.Screen
                name='Profil'
                component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: () =>
                        <Icon
                            name="settings"
                            type="feather"
                            size={18}
                            color="#ffffff"
                        />
                }}

            />
        </Tab.Navigator>
    )
}

const screenOptions = {
    tabBarInactiveTintColor: "#ffffff",
    tabBarActiveTintColor: "#B30312",
    headerShown: false,
    tabBarStyle: {
        backgroundColor: "black",
        position: "absolute",
        height: 80,
        marginBottom: 0,
    },
    headerStyle: {
        backgroundColor: "#FFFFFF",

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        marginLeft: 28,
        color: "#000000"
        // display: "none"
    },
    tabBarLabelStyle: {
        textAlign: 'center',
        fontSize: 14
    },
    tabBarOptions: {
        activeTintColor: '#B30312',
        inactiveTintColor: '#ffffff',
        // showLabel: false
    }
}
