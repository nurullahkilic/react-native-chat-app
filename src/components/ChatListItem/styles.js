import styled from "@emotion/native";
import { colors } from "../../config/colors";

const AVATAR_SIZE = 55;

export const Container = styled.TouchableOpacity`
  padding-top: 18px;
  padding-bottom: 18px;
  height: 75px;
  width: 100%;
  flex-direction: row;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: ${AVATAR_SIZE + "px"};
  height: ${AVATAR_SIZE + "px"};
  border-radius: 50%;
  margin-right: 10px;
`;

export const TextContent = styled.View`
  flex: 1;
  height: ${AVATAR_SIZE + "px"};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const MessageInfos = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SenderName = styled.Text`
  font-family: "IBMPlexSansBold";

  font-size: 16px;
  line-height: 22px;
  color: white;
  margin-bottom: 3px;
`;

export const LastMessage = styled.Text`
  font-family: "IBMPlexSansRegular";
  font-size: 14px;
  line-height: 21px;
  color: ${colors.softText};
`;

export const RightSide = styled.View`
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Date = styled.Text`
  font-family: "IBMPlexSansRegular";
  font-size: 14px;
  color: ${({hasSeen}) => !hasSeen ? colors.figma : colors.softText};
  margin-bottom: 6px;
`;

export const NewNoti = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${colors.figma};
  align-items: center;
  justify-content: center;
`;

export const NotiCount = styled.Text`
  font-family: "IBMPlexSansSemiBold";
font-weight: 600;
font-size: 13px;
`;
