import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 76,
        alignContent: "center",
        marginTop:16
      
    },
    denialButton: {
        height: 44,
        width: 180,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        padding: 8,

        backgroundColor: '#F3E1E0',
        fontSize: 14,
    },
    approveButton: {
        height: 44,
        minWidth: 180,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#CCE2D9',
        fontSize: 14,
    },
    list: {
        paddingHorizontal: 8,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
        backgroundColor: "#FFFFFF",
        paddingTop: 8,
        paddingBottom: 8

    },
})