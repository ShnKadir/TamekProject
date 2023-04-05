// React
import { Text } from "react-native"

// Navigations
import { LOGIN_NAV } from "../navigations/constants"
import { MENU_NAV } from './../navigations/constants'

// Components
import LoginScreen from "../login/LoginScreen/LoginScreen"
import Menu from "../pages/Menu/Menu"
import SetNewPasswordScreen from "../components/login/setNewPassword/setNewPasswordScreen/SetNewPasswordScreen";

export default loginRoutes = [
    {
        name: LOGIN_NAV.LOGIN,
        component: LoginScreen
    },
    {
        name: MENU_NAV.MENU,
        component: Menu,
        screenOption: {
            headerShown: true,
        }
    },
    {
        name: LOGIN_NAV.SET_NEW_PASSWORD,
        component: SetNewPasswordScreen,
        options: {
            headerTitleAlign: "center",
            headerTitle: () =>
                <Text style={{ fontSize: 18, color: "#1f1f1f" }}>
                    Yeni Şifre Belirle
                </Text>

        }
    },
]
