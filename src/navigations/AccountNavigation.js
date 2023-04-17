// Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ACCOUNT_NAV } from './constants'
import accountRoutes from "../routes/accountRoutes"

const Stack = createNativeStackNavigator()

export default function AccountNavigation() {

    return (
        <Stack.Navigator
            initialRouteName={ACCOUNT_NAV.ACCOUNT}
        >
            {
                accountRoutes.map((item, index) => {
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
