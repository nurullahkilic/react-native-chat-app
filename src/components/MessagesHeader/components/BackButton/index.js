import { TouchableHighlight } from "react-native";
import { GoBackInner } from "./styles";

import { colors } from "../../../../config/colors";
import { ArrowLeft } from "../../../icons";

import { css } from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => navigation.goBack()}
      style={css`
        height: 100%;
      `}
      underlayColor="transparent"
    >
      <GoBackInner>
        <ArrowLeft fill={colors.softText} width={40} height={40} />
      </GoBackInner>
    </TouchableHighlight>
  );
}
