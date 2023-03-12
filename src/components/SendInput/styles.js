import styled from "@emotion/native";
import { colors } from "../../config/colors";

import TouchableIcon from "../TouchableIcon";

const HEIGHT = 46;

export const Container = styled.View`
  height: ${HEIGHT + "px"};
  background-color: ${colors.textBoxDark};
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding-left: 8px;
  position: absolute;
  bottom: 0;
`;

export const Input = styled.TextInput`
  font-family: "IBMPlexSansRegular";
  flex: 1;
  padding: 0 10px;
  color: white;
`;

export const CameraWrapper = styled(TouchableIcon)`
  width: 33px;
  height: 33px;
  border-radius: 9999px;
  background-color: ${colors.softText};
  align-items: center;
  justify-content: center;
`;

export const SendWrapper = styled(TouchableIcon)`
  height: 100%;
  width: 50px;
  align-items: center;
  justify-content: center;
`;
