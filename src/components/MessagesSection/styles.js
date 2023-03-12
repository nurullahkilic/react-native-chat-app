import styled from "@emotion/native";

import { colors } from "../../config/colors";

export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: ${colors.secondary};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
