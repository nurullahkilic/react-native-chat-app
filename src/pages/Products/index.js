import * as React from "react";
import {
  SafeAreaView,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { colors } from "../../config/colors";
import { Container } from "./styles";

import ProductView from "../ProductView";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { css } from "@emotion/react";

function ProductScreenView() {
  const navigation = useNavigation();
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch("http://192.168.1.31:3000/api/movies")
      .then((data) => data.json())
      .then((data) => setMovies(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
      <Container>
        <FlatList
          data={movies}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => (
            <TouchableOpacity
              style={css`
                padding: 20px;
              `}
              onPress={() =>
                navigation.navigate("productDetail", {
                  id: item?.item?.id,
                })
              }
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item?.item?.poster_path}`,
                }}
                style={{ width: 100, height: 200 }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item?.id}
        />
        <Button title="Geri Bas" onPress={() => navigation.goBack()} />
      </Container>
    </SafeAreaView>
  );
}

const ProductStack = createNativeStackNavigator();

export default function ProductScreen() {
  return (
    <>
      <ProductStack.Navigator>
        <ProductStack.Screen
          name="productScreen"
          component={ProductScreenView}
          options={{ headerShown: false }}
        />
        <ProductStack.Screen
          name="productDetail"
          component={ProductView}
          options={{ headerShown: false }}
        />
      </ProductStack.Navigator>
    </>
  );
}
