import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
	headerStyle: {
		color: "#1f1f1f",
		fontSize: 18,
        lineHeight:24,
		marginLeft: 16,
		marginTop: 16,
		marginBottom: 18,
		backgroundColor:"#FFFFFF"
	},
    subContainer: {
		height:70,
		paddingTop: 16,
		paddingBottom: 16,
		backgroundColor:"#FFFFFF",
		borderWidth:0.2,
		borderColor:"#DFDFDF",
		marginBottom:4
	},
    list: {
		paddingHorizontal: 16,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor:"#FFFFFF"
	},
    labelStyle:{
        marginLeft: 16, 
        fontSize: 16,
		backgroundColor:"#FFFFFF"
    }
})