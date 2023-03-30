import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useRoute, useNavigation } from "@react-navigation/native";

import {
  Container,
  BackgroundTheme,
  BackgroundGradient,
  TopImage,
  BannerGradient,
  ProductInfoContent,
  PosterImage,
  RightSideContent,
  TitlesContent,
  TopSide,
  TopText,
  Director,
  Year,
  Title,
  InnerContent,
} from "./styles";
import { Button } from "react-native";

export default function ProductView() {
  const route = useRoute();
  const navigate = useNavigation();

  const id = route?.params?.id;

  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://192.168.1.31:3000/api/movies/${id}`)
      .then((data) => data.json())
      .then((data) => setMovie(data))
      .catch((err) => console.warn(err));
  }, [id]);

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <TopImage source={{ uri: `https://image.tmdb.org/t/p/w780${movie?.backdrop_path}` }} resizeMode="cover" >
          <BannerGradient
            colors={[
              "rgba(18, 18, 18, .2)",
              "rgba(18, 18, 18, 0.7)",
              "rgba(18, 18, 18, 0.9)",
            ]}
          />
        </TopImage>
        <BackgroundTheme
          source={require("../../../assets/cover-photo.png")}
          transition={false}
          resizeMode="fill"
        >
          <BackgroundGradient
            colors={[
              "transparent",
              "rgba(18, 18, 18, 0.7)",
              "rgba(18, 18, 18, 1)",
            ]}
          />
        </BackgroundTheme>
        <ProductInfoContent>
          <PosterImage source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} />
          <RightSideContent>
            <TopSide>
              <TopText>
                <Director>
                  <Year>{new Date(movie?.release_date).getFullYear()}</Year>
                </Director>
              </TopText>
            </TopSide>
            <TitlesContent>
              <Title ellipsizeMode="tail" numberOfLines={2}>
                {movie?.title}
              </Title>
            </TitlesContent>
          </RightSideContent>
        </ProductInfoContent>
        <InnerContent></InnerContent>
        <Button onPress={() => navigate.goBack()} title="Go Back" />
      </Container>
    </>
  );
}
