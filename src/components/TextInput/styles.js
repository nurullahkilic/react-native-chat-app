import styled from "@emotion/native";

const HEIGHT = 45;

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.TextInput`
  height: ${HEIGHT + "px"};
  width: 100%;
  border: 0.5px solid #bfbfbf;
  border-radius: 8px;
  background-color: transparent;
  font-family: "IBMPlexSansRegular";
  font-size: 16px;
  color: black;
  padding: 0 16px;
  margin-bottom: ${({marginBottom})=>marginBottom ? marginBottom + "px" : 0};
`;

export const Label = styled.Text`
  font-family: "IBMPlexSansMedium";
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #939393;
  margin-bottom: 6px;
`;
