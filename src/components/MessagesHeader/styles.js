import styled from "@emotion/native";

const HEADER_SIZE = 80;

export const Container = styled.View`
  height: ${HEADER_SIZE + "px"};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-family: "IBMPlexSansBold";
  flex: 1;
  color: white;
  font-size: 30px;
  font-weight: 800;
`;

export const SearchButton = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50px;
`;
