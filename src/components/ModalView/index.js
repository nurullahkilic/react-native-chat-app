import Modal from "react-native-modal";
import { css } from "@emotion/react";
import { Image } from "react-native";
import { colors } from "../../config/colors";


function ModalView({ children, isOpen, setIsOpen }) {
  return (
    <Modal
      isVisible={isOpen}
      backdropColor={colors.primary}
      backdropOpacity={0.93}
      animationIn={"zoomInDown"}
      animationOut={"zoomOutUp"}
      animationInTiming={700}
      animationOutTiming={700}
      backdropTransitionInTiming={700}
      backdropTransitionOutTiming={700}
      onBackdropPress={() => setIsOpen(false)}
      onSwipeComplete={() => setIsOpen(false)}
      useNativeDriverForBackdrop
      swipeDirection={["down", "left", "right", "up"]}
      style={css`
      align-items: center;
      justify-content: center;
      `}
    >
      {children}
    </Modal>
  );
}

function ProfileModal({ source, ...props }) {
  return (
    <ModalView {...props}>
      <Image
        source={{ uri: source }}
        style={{
          width: 350,
          height: 350,
          borderRadius: 9999,
        }}
      />
    </ModalView>
  );
}


export default ModalView;
export { ProfileModal };
