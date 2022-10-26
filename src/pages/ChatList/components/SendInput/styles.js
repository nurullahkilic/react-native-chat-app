
import { StyleSheet } from "react-native";
import { colors } from "../../../../config/colors";

const HEIGHT = 46;

export const sendInputStyles = StyleSheet.create({
    container: {
      height : HEIGHT,
      backgroundColor:colors.light,
      width: "90%",
      flexDirection:"row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius:9999,
      paddingStart:8,
      position:"absolute",
      bottom:0,
    }, 
    input : {
      flex:1,
      paddingStart: 10,
      color:"white"
    },
    cameraIcon : {
      width:33,
      height:33,
      borderRadius:99999,
      backgroundColor:colors.softText,
      alignItems:"center",
      justifyContent:"center"
    },
    sendIcon: {
      height:"100%",
      width:50,
      alignItems:"center",
      justifyContent:"center"
    }
  });
  