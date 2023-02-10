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
    },
    labelStyle: {
        marginLeft: 16,
        fontSize: 16,
        flexDirection: "row"
    },
    buttonStyle: {
        paddingHorizontal:15,
        backgroundColor:"#F2F2F2",
       
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