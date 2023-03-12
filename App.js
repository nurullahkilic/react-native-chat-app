import * as React from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";

//Zustand
import { ModalProvider } from "./src/context/ModalContext";

//Expo Font
import * as Font from 'expo-font';

import App from "./src/App";


import { Text } from "react-native";
const Splash = () => {
  return <Text>Yükleniyor</Text>;
};

export default () => {
  const [loading, setLoading] = React.useState(true);


  Font.loadAsync({
    IBMPlexSansLight: require('./assets/fonts/IBMPlexSans-Light.ttf'),
    IBMPlexSansRegular: require('./assets/fonts/IBMPlexSans-Regular.ttf'),
    IBMPlexSansMedium: require('./assets/fonts/IBMPlexSans-Medium.ttf'),
    IBMPlexSansSemiBold: require('./assets/fonts/IBMPlexSans-SemiBold.ttf'),
    IBMPlexSansBold: require('./assets/fonts/IBMPlexSans-Bold.ttf'),
  });

  React.useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <ModalProvider>{loading ? <Splash /> : <App />}</ModalProvider>
    </NavigationContainer>
  );
};
