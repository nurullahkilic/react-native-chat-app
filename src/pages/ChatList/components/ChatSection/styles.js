import { colors } from "../../../../config/colors"
import { StyleSheet } from "react-native";

export const messagesSectionStyles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      width:"100%",
      alignItems: "center",
      justifyContent: "center",
    },
    mainContent : {
      flex:1,
      paddingHorizontal:20,
      paddingTop:10,
      width:"100%",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start"
    }
  });