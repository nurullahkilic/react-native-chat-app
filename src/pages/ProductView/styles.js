import styled from "@emotion/native";
import { colors } from "../../config/colors";

import { LinearGradient } from "expo-linear-gradient";

const BANNER_SIZE = 270;
const POSTER_MARGIN = 62;


export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.primary};
`;

export const TopImage = styled.ImageBackground`
  height: ${BANNER_SIZE + "px"};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BannerGradient = styled(LinearGradient)`
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 88px;
`;

export const ProductInfoContent = styled.View`
  height: 180px;
  width: 100%;
  margin-top: -${POSTER_MARGIN + 'px'};
  background-color: red;
  padding: 0 24px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PosterImage = styled.Image`
  width: 111px;
  height: 164px;
  border-radius: 8px;
  background-color: aqua;
`;

export const RightSideContent = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: pink;
`;

export const HackView = styled.View`
height:${POSTER_MARGIN + 'px'};
width: 100%;
background-color: yellow;

`;

export const TitlesContent = styled.View``;

export const InnerContent = styled.ScrollView`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 0 25px;
`;
