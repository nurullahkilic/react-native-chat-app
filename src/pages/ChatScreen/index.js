import * as React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { colors } from "../../config/colors";
import { chatPageStyles as styles } from "./styles";

import ChatList from "../ChatList";

import RecentUsersSection from "./components/RecentUsers";
import MessagesSection from "./components/MessagesSection";
import MessagesHeader from "./components/MessagesHeader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function ChatScreenView({ navigation }) {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
        <View style={styles.container}>
          <MessagesHeader />
          <RecentUsersSection />
          <MessagesSection navigation={navigation} />
        </View>
      </SafeAreaView>
    </>
  );
}

const ChatStack = createNativeStackNavigator();

export default function ChatScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Home"
        component={ChatScreenView}
        options={{ headerShown: false }}
      />
      <ChatStack.Screen
        name="chatDetails"
        component={ChatList}
        options={{ headerShown: false }}
      />
    </ChatStack.Navigator>
  );
}
