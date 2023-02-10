import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get("window").width
export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: screenWidth,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.8,
        backgroundColor: "#DADADA",
        zIndex: 20
    }
})