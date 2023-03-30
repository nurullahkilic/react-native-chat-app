import * as React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../config/colors";
import { Container } from "./styles";

import ChatList from "../ChatList";

import RecentUsersSection from "../../components/RecentUsers";
import MessagesSection from "../../components/MessagesSection";
import MessagesHeader from "../../components/MessagesHeader";
import UserDetailModal from "../../components/UserDetailModal";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

function ChatScreenView() {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
        <Container>
          <MessagesHeader/>
          <RecentUsersSection />
          <MessagesSection />
        </Container>
      </SafeAreaView>
    </>
  );
}

const ChatStack = createNativeStackNavigator();

export default function ChatScreen() {
  return (
    <>
      <StatusBar style="light" />
      <ChatStack.Navigator>
        <ChatStack.Screen
          name="chatScreen"
          component={ChatScreenView}
          options={{ headerShown: false }}
        />
        <ChatStack.Screen
          name="chatDetails"
          component={ChatList}
          options={{ headerShown: false }}
        />
        <ChatStack.Screen
          name="UserInfoModal"
          component={UserDetailModal}
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </ChatStack.Navigator>
    </>
  );
}
