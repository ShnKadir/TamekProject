// Style
import { styles } from "./LoadingStyle"

// Components
import { View } from "native-base"
import { ActivityIndicator } from "react-native"

export default function LoadingIndicator() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={55} color="#4173ff" />
        </View>
    )
}
