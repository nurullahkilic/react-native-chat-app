import styled from "@emotion/native";
import { colors } from "../../config/colors";

import { LinearGradient } from "expo-linear-gradient";

const BANNER_SIZE = 270;
const POSTER_MARGIN = 62;
const POSTER_HEIGHT = 155;
const POSTER_WIDTH = 105;

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.secondary};
`;

export const BackgroundTheme = styled.ImageBackground`
  position: absolute;
  top: ${POSTER_HEIGHT + "px"};
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  opacity: 0.7;
`;

export const BackgroundGradient = styled(LinearGradient)`
  width: 100%;
  height: 60%;
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
  height: ${POSTER_HEIGHT - POSTER_MARGIN + "px"};
  width: 100%;
  margin-top: -${POSTER_MARGIN + "px"};
  padding: 0 24px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PosterImage = styled.Image`
  width: ${POSTER_WIDTH + "px"};
  height: ${POSTER_HEIGHT + "px"};
  border-radius: 8px;
  margin-right: 14px;
`;

export const RightSideContent = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TopSide = styled.View`
  height: ${POSTER_MARGIN + "px"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 8px;
`;

export const TopText = styled.TouchableOpacity``;

export const Director = styled.Text`
  font-family: "IBMPlexSansRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #e2e2e2;
`;

export const Year = styled.Text`
  color: #868686;
`;

export const TitlesContent = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 12px;
  margin-right: 130px;
`;

export const Title = styled.Text`
  flex: 1;
  font-family: "IBMPlexSerifBold";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  color: #ffffff;
  word-wrap: normal;
`;

export const InnerContent = styled.ScrollView`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 0 25px;
`;
