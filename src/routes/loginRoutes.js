// Navigations
import { LOGIN_NAV } from "../navigations/constants"

// Components
import LoginScreen from "../login/LoginScreen/LoginScreen"
import Menu from "../pages/Menu/Menu"
import { MENU_NAV } from './../navigations/constants';

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
    // {
    //     name: LOGIN_NAV.MENU,
    //     component: Menu,
    //     options: {
    //         headerShown: true,
    //         headerLargeTitle: true,
    //         title:'Main'
    //     }
    // },
]
