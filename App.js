import * as React from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";

//Zustand
import { ModalProvider } from "./src/context/ModalContext";

//Expo Font
import * as Font from "expo-font";
import { Asset } from 'expo-asset';

import App from "./src/App";

import { Text } from "react-native";


const Splash = () => {
  return <Text>Yükleniyor</Text>;
};

export default () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadResourcesAsync() {
      try {
        await Promise.all([
          Asset.loadAsync([require("./assets/cover-photo.png")]),
          Font.loadAsync({
            IBMPlexSansLight: require("./assets/fonts/IBMPlexSans-Light.ttf"),
            IBMPlexSansRegular: require("./assets/fonts/IBMPlexSans-Regular.ttf"),
            IBMPlexSansMedium: require("./assets/fonts/IBMPlexSans-Medium.ttf"),
            IBMPlexSansSemiBold: require("./assets/fonts/IBMPlexSans-SemiBold.ttf"),
            IBMPlexSansBold: require("./assets/fonts/IBMPlexSans-Bold.ttf"),
            IBMPlexSerifBold: require("./assets/fonts/IBMPlexSerif-Bold.ttf"),
          }),
        ]);
      } catch (e){
        console.warn(e);
      } finally {
        setLoading(false);
      }
    }

    loadResourcesAsync();
  }, []);

  return (
    <NavigationContainer>
      <ModalProvider>{loading ? <Splash /> : <App />}</ModalProvider>
    </NavigationContainer>
  );
};
