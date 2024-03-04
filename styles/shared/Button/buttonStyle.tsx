import { StyleSheet } from "react-native";
import { BUTTON_VARIANT } from "../../../shared/buttons/types";
import { scaleSize } from "../../../utilities";
import { Colors } from "../../const/colors";

export const buttonStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: scaleSize(20),
    borderRadius: scaleSize(40),
  },
  [BUTTON_VARIANT.LIGHT_BLUE]: {
    backgroundColor: Colors.LIGHT_BLUE,
    borderColor: Colors.LIGHT_BLUE,
  },
  [BUTTON_VARIANT.ORANGE]: {
    backgroundColor: Colors.PRIMARY,
    borderColor: Colors.PRIMARY,
  },
  [BUTTON_VARIANT.DARK]: {
    backgroundColor: Colors.BLACK,
    borderColor: Colors.BLACK,
  },
  [BUTTON_VARIANT.BLUE]: {
    backgroundColor: Colors.BLUE,
    borderColor: Colors.BLUE,
  },
});
