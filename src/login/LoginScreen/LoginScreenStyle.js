import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        overflow: "hidden",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },
    emailStyle: {
        height: 56,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        backgroundColor: "#FFFFFF",
        borderRadius:50
    },
    emailFocusStyle: {
        height: 56,
        paddingTop: 8,
        paddingLeft: 16,
        paddingBottom: 8,
        backgroundColor: "#FFFFFF",
        borderRadius:50,
 
    },
    emailTextStyle: {
        left: 0,
        top: 8,
        fontSize: 12,
        paddingLeft: 16,
        color: "#000000"
    },
    emailFocusTextStyle: {
        left: 0,
        top: 0,
        fontSize: 12,
        color: "#007041"
    },
    emailFocusTextInputStyle: {
        height: 26,
        fontSize: 14,
        color: "#000000",
        flex: 1
    },
    emailTextInputStyle:{
        height: 26,
        fontSize: 14,
        color: "#000",
        paddingLeft: 16,
        marginTop: 8,
        flex: 1
    },
    passwordStyle: {
        height: 56,
        backgroundColor: "white",
        borderRadius:50
    },
    passwordFocusStyle: {
        height: 56,
        paddingTop: 8,
        paddingLeft: 16,
        paddingBottom: 8,
        backgroundColor: "white",
        borderRadius:50
    },
    passwordFocusTextStyle: {
        left: 0,
        top: 0,
        fontSize: 12,
        color: "#007041"
    },
    passwordTextStyle: {
        left: 0,
        top: 8,
        fontSize: 12,
        paddingLeft: 16,
        color: "#000000"
    },
    passwordFocusTextInptStyle: {
        height: 26,
        fontSize: 14,
        color: "#000000",
        flex: 1
    },
    passwordTextInptStyle: {
        height: 26,
        fontSize: 14,
        color: "#000",
        paddingLeft: 16,
        marginTop: 8,
        flex: 1
    },
    btnStyle: {
        backgroundColor: "#FFFFFF",
        height: 70,
        width: "100%",
        justifyContent: 'center',
        marginTop: 32,
        border: 1,
        borderRadius: 8
    },
    btnContainerStyle: {
        backgroundColor: "#007041",
        height: 48,
        marginTop: 49,
        borderRadius:50,
        justifyContent: "center"
    },
    buttonTextStyle: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 14
    },

    vContainer: {
		alignItems: "center",
		justifyContent: "center",
        paddingHorizontal:5,
        marginTop:20
	},
	loginButton: {
        backgroundColor: "#007041",
        height: 48,
        borderRadius:36
	},
	forgotPassword: {
		alignSelf: "flex-end",
	},
	forgotPasswordText: {
		color: "#FFFFFF",
	},
	
})