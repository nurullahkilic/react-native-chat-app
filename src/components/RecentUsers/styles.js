import styled from "@emotion/native";

const AVATAR_SIZE = 65;
const RECENT_HEIGHT = 160;

export const Container = styled.SafeAreaView`
  width: 100%;
  height: ${RECENT_HEIGHT + "px"};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const HeaderText = styled.Text`
  font-family: "IBMPlexSansRegular";
  padding: 0 25px;
  color: white;
  font-size: 13px;
  letter-spacing: 3px;
  color: white;
  opacity: 0.58;
`;

export const ItemContent = styled.TouchableOpacity`
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.Image`
  width: ${AVATAR_SIZE + "px"};
  height: ${AVATAR_SIZE + "px"};
  border-radius: 50%;
  margin-bottom: 9px;
`;

export const UserText = styled.Text`
  font-family: "IBMPlexSansRegular";
  font-size: 14px;
  color: white;
`;
