import { colors } from "../../../../config/colors"
import { StyleSheet } from "react-native";

export const messagesSectionStyles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      width:"100%",
      borderTopEndRadius:50,
      borderTopLeftRadius:50,
      backgroundColor: colors.secondary,
      alignItems: "center",
      justifyContent: "center",
      overflow:"hidden"
    }
  });