//React Native
import { HStack, View } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

// Styles
import { styles } from './HeaderStyle'

// Navigation
import { useNavigation } from '@react-navigation/native'

export default function Header({
    centerComponent,
    navBackTo,
    isTitleCenter,
    isGoBack = false,
    hasMenuIcon = true,
    hasAlert = false
}) {

    const navigation = useNavigation()

    const goBack = () => {
        if (isGoBack) {
            navigation.goBack()
        }
        else {
            navigation.navigate(navBackTo)
        }
    }

    return (

        <HStack style={styles.container} space={"16px"}>
            <HStack space={"4px"} style={styles.side}>
                {
                    (navBackTo || isGoBack) &&
                    <TouchableOpacity
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 7 }}
                        style={{ width: 24, height: 24, alignItems: "center" }}
                        onPress={goBack}>
                        <Icon
                            name="arrow-left"
                            type="font-awesome-5"
                            size={24}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                }

                {
                    hasMenuIcon &&
                    <TouchableOpacity
                        testID="menuIcon"
                        hitSlop={{ top: 25, bottom: 25, left: 7, right: 25 }}
                        style={{ width: 24, height: 24, alignItems: "center" }}
                        onPress={handleOnDrawerPress}>
                        <Icon
                            name='three-bars'
                            type='octicon'
                            size={24}
                            color="#4173ff"
                        />
                    </TouchableOpacity>
                }

            </HStack>

            <View style={[styles.center, isTitleCenter && { alignItems: "center" }]}>
                {centerComponent}
            </View>

            {
                hasAlert &&
                <HStack>
                    <Icon
                        name='bell-badge-outline'
                        type='material-community'
                        size={24}
                        color="#4173ff"
                    />
                </HStack>
            }
        </HStack>
    )
}