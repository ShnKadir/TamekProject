import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    alertDialogContent: {
        borderRadius: 20,
    },
    headerContainer: {
        justifyContent: "space-between",
        paddingLeft: 24,
        paddingRight: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#d9d9d9",
    },
    headerText: {
        alignSelf: "center"
    },
    contentContainer: {
        paddingHorizontal: 24,
        paddingVertical: 24

    },
    content: {
        alignItems: "center"
    },
    contentText: {
        flex: 1,
        paddingLeft: 16
    }
})