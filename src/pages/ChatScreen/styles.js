import styled from "@emotion/native";
import { colors } from "../../config/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: flex-start;
`;