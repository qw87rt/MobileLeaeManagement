   // HomeScreenStyle.js

   import { StyleSheet } from "react-native";

   export default StyleSheet.create({
     container: {
       flex: 1,
       alignItems: "center",
       padding: 24,
     },
     main: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
     },
     title: {
       fontSize: 32,
       fontWeight: "bold",
       marginBottom: 16,
     },
     balance: {
       fontSize: 24,
       marginBottom: 8,
     },
     buttonsContainer: {
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       marginTop: 1,
     },
     button: {
       backgroundColor: "#007AFF",
       paddingVertical: 12,
       paddingHorizontal: 30,
       borderRadius: 8,
       marginRight: 10,
     },
     buttonText: {
       color: "white",
       fontSize: 16,
       fontWeight: "bold",
     },
     profileIcon: {
       position: "absolute",
       top: 0,
       right: 0,
       padding: 16,
     },
   });
