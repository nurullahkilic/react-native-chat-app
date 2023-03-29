import { View, Text, Button } from "react-native";

//React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Zustand
import { useSession } from "./context/SessionContext";


import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatScreen from "./pages/ChatScreen";
import ProductView from "./pages/ProductView";
import { useState } from "react";

function HomeScreen({ navigation }) {
  const setIsLoggedIn = useSession(state => state.setIsLoggedIn);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Button"
        onPress={() => navigation.navigate("ChatPage", { screen: "Home" })}
      />
      <Button
        title="Aşk Zamanı"
        onPress={() => navigation.navigate("ProductView", {
          banner:"https://image.tmdb.org/t/p/w1280/n4GJFGzsc7NinI1VeGDXIcQjtU2.jpg",
          poster:"https://image.tmdb.org/t/p/w780//iYypPT4bhqXfq1b6EnmxvRt6b2Y.jpg",
        })}
      />
      <Button
        title="House M.D."
        onPress={() => navigation.navigate("ProductView", {
          banner:"https://www.themoviedb.org/t/p/w1280/h3vViR087OJlk4PedNt5JLIKOOi.jpg",
          poster:"https://image.tmdb.org/t/p/w780//lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg",
        })}
      />
      <Button title="Çıkış Yap!" onPress={() => setIsLoggedIn(false)} />
    </View>
  );
}

function HomeStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home4" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App2() {
  const isLoggedIn = useSession(state => state.isLoggedIn);

  
  return (
    <>
      {!isLoggedIn ? (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ProductView"
            component={ProductView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ChatPage"
            component={ChatScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </>
  );
}
