import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 15,
    },
    baseContainer: {
        minHeight: 164,
        flexDirection: 'row',
        marginHorizontal: 16,
        shadowRadius: 20,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.09,
        elevation: 20,
        backgroundColor: "#F2F2F2"

    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
        backgroundColor: "red"
    },
    details: {
        fontSize: 14,
        marginBottom: 8
    },
    headline: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        flex: 1
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
    labelStyle: {
        marginLeft: 16,
        fontSize: 16,
        flexDirection: "row"
    },
    buttonStyle: {
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
    },
    denialButton: {
        height: 42,
        width: 160,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,        
        fontSize: 14,
        backgroundColor: '#F3E1E0'
    },
    approveButton: {
        height: 42,
        width: 160,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        backgroundColor: '#CCE2D9',
        fontSize: 14,
    },
})