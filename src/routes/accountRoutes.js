// Components
import Account from '../pages/Account/Account'

// Navigations
import { ACCOUNT_NAV } from '../navigations/constants'
import ChangePasswordScreen from '../pages/ChangePassword/ChangePasswordScreen'
import LoginScreen from '../login/LoginScreen/LoginScreen'

export default accountRoutes = [
    {
        name: ACCOUNT_NAV.ACCOUNT,
        component: Account,
        screenOption: {
            headerShown: true,
        }
    },
    {
        name: ACCOUNT_NAV.CHANGE_PASSWORD,
        component: ChangePasswordScreen,
        screenOption: {
            headerShown: true,
            title: "Şifre Değiştir",
            headerBackTitle: "Back"
        }
    },
    {
        name: ACCOUNT_NAV.LOGIN,
        component: LoginScreen,
        screenOption: {
            headerShown: false,
        }
    }
]