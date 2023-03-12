import { StatusBar } from "expo-status-bar";

import {
  Container,
  TopImage,
  BannerGradient,
  ProductInfoContent,
  PosterImage,
  RightSideContent,
  TitlesContent,
  HackView,
  InnerContent,
} from "./styles";


export default function ProductView() {

  const BannerUri =
    "https://www.themoviedb.org/t/p/w1280/h3vViR087OJlk4PedNt5JLIKOOi.jpg";

  const PosterUri =
    "https://image.tmdb.org/t/p/w780//lkvhReTBZ2Ksl0Dl5Oplsf6UYkF.jpg";

  return (
    <>
      <StatusBar style="light" />
        <Container>
          <TopImage source={{ uri: BannerUri }}>
            <BannerGradient colors={["rgba(18, 18, 18, .2)","rgba(18, 18, 18, 0.7)","rgba(18, 18, 18, 0.9)" ]}/>
          </TopImage>
          <ProductInfoContent>
            <PosterImage source={{uri : PosterUri}}/>
            <RightSideContent>
              <HackView/>
              <TitlesContent>

              </TitlesContent>
            </RightSideContent>

          </ProductInfoContent>
          <InnerContent>
          </InnerContent>
        </Container>
    </>
  );
}
