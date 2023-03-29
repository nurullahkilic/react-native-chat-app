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

  const BannerUri = route?.params?.banner;
  const PosterUri = route?.params?.poster;

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <TopImage source={{ uri: BannerUri }}>
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
          <PosterImage source={{ uri: PosterUri }} />
          <RightSideContent>
            <TopSide>
              <TopText>
                <Director>
                  Wong Kar-Wai <Year>2000</Year>
                </Director>
              </TopText>
            </TopSide>
            <TitlesContent>
              <Title ellipsizeMode="tail" numberOfLines={2}>
                In The Mood For Love
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
