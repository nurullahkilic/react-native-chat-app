
import { StyleSheet } from "react-native";

const HEADER_SIZE = 80;

export const headerStyle = StyleSheet.create({
    container: {
      height : HEADER_SIZE,
      width: "100%",
      flexDirection:"row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingStart: 25
    },
    headerText: {
      color:"white",
      fontSize:36 ,
      fontWeight:"800"
    },
    searchButton : {
      alignItems:"center",
      justifyContent:"center",
      height:"100%",
      width:50
    }
  });
  