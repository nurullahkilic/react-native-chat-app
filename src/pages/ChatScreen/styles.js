import { colors } from "../../config/colors"
import { StyleSheet } from "react-native";

export const chatPageStyles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      width:"100%",
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    text: {
        color:"white"
    }
  });