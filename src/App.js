import { View, Text, Button } from "react-native";

//React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Zustand
import { useSession } from "./context/SessionContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ChatScreen from "./pages/ChatScreen";
import ProductScreen from "./pages/Products";

function HomeScreen({ navigation }) {
  const setIsLoggedIn = useSession((state) => state.setIsLoggedIn);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Button"
        onPress={() => navigation.navigate("ChatPage", { screen: "Home" })}
      />
      <Button
        title="ProductView"
        onPress={() => navigation.navigate("ProductView", { screen: "productScreen" })}
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
  const isLoggedIn = useSession((state) => state.isLoggedIn);

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
            component={ProductScreen}
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
