import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonStyle: {
        paddingHorizontal:16,
        backgroundColor:"#FFFFFF",
       
    },
    denialButton: {
        height: 44,
        width: 180,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        padding: 8,
        marginTop: 24,
        backgroundColor: 'rgba(3, 179, 84, 0.11)',
        fontSize: 14,
    },
    approveButton: {
        height: 44,
        minWidth: 180,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        padding: 8,
        marginTop: 24,
        backgroundColor: 'rgba(152, 146, 146, 0.11)',
        fontSize: 14,
    },
})