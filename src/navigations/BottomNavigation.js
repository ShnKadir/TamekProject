import React from 'react'

// React Native
import { Icon } from 'react-native-elements'

// Components
import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import PaymentNavigation from '../navigations/payment/PaymentNavigation'

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function BottomNavigation() {
    return (
        <Tab.Navigator
            initialRouteName='Menü'
            screenOptions={screenOptions}
        >
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: () =>
                        <Icon
                            name="google-analytics"
                            type="material-community"
                            size={18}
                            color="#ffffff"
                        />
                }}

            />
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: () =>
                        <Icon
                            name="home"
                            type="font-awesome"
                            size={18}
                            color="#ffffff"
                        />
                }}
            />
            <Tab.Screen
                name='Menü'
                component={PaymentNavigation}
                options={{
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
    tabBarStyle: {
        backgroundColor: "black",
        position: "absolute",
        height: 80,
        paddinBottom: 1,
    },
    headerStyle: {
        backgroundColor: "#B30312",
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        marginLeft: 28
    },
    tabBarLabelStyle: {
        textAlign: 'center',
        fontSize: 14
    },
    tabBarOptions: {
        activeTintColor: '#B30312',
        inactiveTintColor: '#ffffff',
    }
}
