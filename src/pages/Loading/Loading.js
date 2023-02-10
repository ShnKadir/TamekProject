// React Native
import { View } from "native-base"
import { ActivityIndicator } from "react-native"

// Style
import { styles } from "./LoadingStyle"

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={55} color="#4173ff" />
        </View>
    )
}
