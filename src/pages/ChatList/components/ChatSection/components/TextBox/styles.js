import { StyleSheet } from "react-native";
import { colors } from "../../../../../../config/colors";

export const textBoxStyles = StyleSheet.create({
    container: {
      minHeight:49,
      maxWidth:341,
      borderRadius:20,
      backgroundColor:colors.textBoxDark,
      paddingHorizontal:17,
      paddingVertical:10,
      alignItems:"center",
      justifyContent:"center",
      marginTop:12
    },
    content: {
      fontSize:14,
      lineHeight:21,
      color:"white"
    }
  });