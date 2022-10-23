import { StyleSheet } from "react-native";
import { colors } from "../../../../../../config/colors";

const AVATAR_SIZE = 60;

export const chatListItemStyles = StyleSheet.create({
    container: {
      marginTop:22,
      height: 60,
      width:"100%",
      flexDirection:"row",
      paddingHorizontal:20,
      alignItems: "center",
      justifyContent:"flex-start"
    },
    image : {
      width:AVATAR_SIZE,
      height:AVATAR_SIZE,
      borderRadius:"50%",
      marginRight:10
    },
    shadowProp : {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 5
    },
    textContent : {
      flex:1,
      height:AVATAR_SIZE,
      flexDirection:"row",
      alignItems:"flex-start",
      justifyContent:"space-between",
    },
    messageInfos : { 
      flex:1,
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start"
    },
    senderName : { 
      fontSize: 16,
      lineHeight: 22,
      color: "white",
      fontWeight:"700",
      marginBottom:3
    },
    lastMessage : {
      fontSize:14,
      lineHeight:21,
      color:colors.softText
    },
    rightSide:{
      flexDirection:"column",
      alignItems:"flex-end",
      justifyContent:"flex-start"
    },
    date : {
      fontSize:14,
      color : colors.softText,
      marginBottom: 6
    },
    newNoti : {
      width:20,
      height:20,
      borderRadius:"50%",
      backgroundColor:colors.safe,
      alignItems:"center",
      justifyContent:"center"
    },
    notiCount :{
      fontWeight:"600",
      fontSize:13
    },
    unreadedColor : { 
      color : colors.safe
    }
  });