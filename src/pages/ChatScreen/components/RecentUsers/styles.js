
import { StyleSheet } from "react-native";

const AVATAR_SIZE = 65;
const RECENT_HEIGHT = 160;

export const recentUserStyles = StyleSheet.create({
    container: {
      width: "100%",
      height: RECENT_HEIGHT,
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    headerText: {
      paddingHorizontal: 25,
      paddingVertical: 0,
      fontSize: 13,
      letterSpacing: 3,
      color: "white",
      opacity: 0.58,
    },
    itemContent: {
      paddingHorizontal: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    userImage: {
      width: AVATAR_SIZE,
      height: AVATAR_SIZE,
      borderRadius: "50%",
      marginBottom: 9,
    },
    userText: {
      fontSize: 14,
      color: "white",
    },
  });
  