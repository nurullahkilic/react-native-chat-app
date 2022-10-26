import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalProvider } from "./src/context/ModalContext";

import ChatScreen from "./src/pages/ChatScreen";
import { colors } from "./src/config/colors";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <ModalProvider>
        <NavigationContainer style={styles.container}>
          <Stack.Navigator initialRouteName="Chat">
            <Stack.Screen
              name="ChatPage"
              component={ChatScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ModalProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
