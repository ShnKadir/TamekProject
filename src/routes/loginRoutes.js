// Navigations
import { LOGIN_NAV } from "../navigations/constants"
import { MENU_NAV } from './../navigations/constants'

// Components
import LoginScreen from "../login/LoginScreen/LoginScreen"
import Menu from "../pages/Menu/Menu"
import SetNewPasswordScreen from "../components/login/setNewPassword/setNewPasswordScreen/SetNewPasswordScreen"
import ResetPasswordScreen from "../pages/ResetPassword/ResetPasswordScreen"

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
        name: LOGIN_NAV.RESET_PASSWORD,
        component: ResetPasswordScreen,
        options: {
            headerTitleAlign: "center",
            title: "Şifremi Unuttum",
            headerTitleStyle: {
                fontSize: 18,
                color: "#1f1f1f"
            }
        }
    },
    {
        name: LOGIN_NAV.SET_NEW_PASSWORD,
        component: SetNewPasswordScreen,
        options: {
            headerTitleAlign: "center",
            title: "Yeni Şifre Belirle",
            headerTitleStyle: {
                fontSize: 18,
                color: "#1f1f1f"
            }
        }
    },
]
