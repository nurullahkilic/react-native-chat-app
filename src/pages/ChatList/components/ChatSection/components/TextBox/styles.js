import { StyleSheet } from "react-native";
import { colors } from "../../../../../../config/colors";

export const textBoxStyles = StyleSheet.create({
  textBox: {
      minHeight:49,
      maxWidth:"75%",
      borderRadius:20,
      backgroundColor:colors.textBoxDark,
      paddingHorizontal:17,
      paddingVertical:10,
      alignSelf:"flex-start",
      justifyContent:"center",
      marginTop:12,
    },
    me: {
      backgroundColor:colors.textBoxLight,
      alignSelf:"flex-end"
    },
    content: {
      fontSize:14,
      lineHeight:21,
      color:"white",
      
    },
    timeDivider: {
      fontSize:12,
      lineHeight:18,
      color:colors.softText,
      alignSelf:"center",
      marginTop:18,
    }
  });