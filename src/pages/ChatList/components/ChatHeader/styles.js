
import { StyleSheet } from "react-native";
import { colors } from "../../../../config/colors";

const HEADER_SIZE = 70;

export const chatHeaderStyle = StyleSheet.create({
    container: {
      height : HEADER_SIZE,
      backgroundColor:"transparent",
      width: "100%",
      flexDirection:"row",
      alignItems: "center",
      justifyContent: "flex-start",
      borderBottomColor:colors.light,
      borderBottomWidth:0.3,
      paddingEnd:15
    },
    goBack : {
      height:"100%",
    },
    goBackInner : {
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      height:"100%",
      paddingStart:2,
    },
    unreadedMessages: {
      color:colors.safe,
      fontSize:18,
    },
    userInfos : {
      flex:1,
      paddingStart:12,
      flexDirection: "row",
      alignItems:"center",
      justifyContent:"flex-start",
    },
    userText: {
      marginStart:10,
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"center"
    },
    headerText: {
      color:"white",
      fontSize:18,
      fontWeight:"600",
    },
    subText : {
      fontSize:12,
      color:colors.softText
    },
  });
  