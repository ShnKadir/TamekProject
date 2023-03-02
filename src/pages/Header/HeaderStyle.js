import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        paddingHorizontal: 8,
        backgroundColor: "#FFFFFF",
        // borderBottomColor:"#B1B1B1",
        // borderBottomWidth:0.3
    },
    center: {
        flex: 1
    },
    avatarBorder: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#32d767",
    },
    avatar: {
        width: 36,
        height: 36,
    },
})