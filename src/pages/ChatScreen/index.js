import * as React from "react";
import { View, Text } from "react-native";
import { colors } from "../../config/colors";
import { chatPageStyles as styles } from "./styles";

import ChatList from "../ChatList";

import RecentUsersSection from "./components/RecentUsers";
import MessagesSection from "./components/MessagesSection";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function ChatScreenView({ navigation }) {
  return (
    <View style={styles.container}>
      <RecentUsersSection />
      <MessagesSection navigation={navigation} />
    </View>
  );
}

const ChatStack = createNativeStackNavigator();

export default function ChatScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Home"
        component={ChatScreenView}
        options={{
          title: "Messages",
          headerStyle: {
            backgroundColor: colors.primary,
            height: 100,
            minHeight: 120,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 28,
            alignItems: "start",
            fontWeight: "bold",
          },
        }}
      />
      <ChatStack.Screen name="Details" component={ChatList} />
    </ChatStack.Navigator>
  );
}
