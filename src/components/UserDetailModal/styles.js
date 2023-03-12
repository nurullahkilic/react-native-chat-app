import styled from "@emotion/native";
import { colors } from "../../config/colors";

const IMAGE_SIZE = 150;

export const Container = styled.View`
  height: 320px;
  padding: 40px 0;
  background-color: ${colors.textBoxDark};
  align-items: center;
  justify-content: flex-start;
`;

export const Image = styled.Image`
  height: ${IMAGE_SIZE + 'px'};
  width: ${IMAGE_SIZE + 'px'};
  border-radius: 99999px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: white;
`;

export const SmText = styled.Text`
  font-size: 18px;
  color: #dedede;
`;
