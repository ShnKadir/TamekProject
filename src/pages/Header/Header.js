//React Native
import { HStack, View } from 'native-base'
import { TouchableOpacity, Text } from 'react-native'
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

        <HStack style={styles.container}>
            <Text>asadasdassa</Text>
            {/* <HStack style={styles.side}>
                {
                    (navBackTo || isGoBack) &&
                    <TouchableOpacity
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 7 }}
                        style={{ width: 24, height: 24, alignItems: "center" }}
                        onPress={goBack}>
                        <Icon
                            name="ios-chevron-back-outline"
                            type="ionicon"
                            size={24}
                            color="#007AFF"
                        />
                    </TouchableOpacity>

                }
                
            <Text style={{ color: "#007AFF", fontSize: 16, textAlign: "center", alignSelf: "center" }}>Back</Text>
            </HStack>
            <View style={[styles.center, isTitleCenter && { alignItems: "center" }]}>
                
                {centerComponent}
            </View> */}
           
        </HStack>
    )
}