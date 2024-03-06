import { Dimensions, StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const choosePositionScreenStyle = StyleSheet.create({
  safeArea: {},
  wrapper: {},
  container: {
    height: windowHeight,
  },
  buttonContainer: {
    flex: 1,
    width: windowWidth,
    justifyContent: "center",
    padding: scaleSize(20),
  },
  button: {
    marginVertical: scaleSize(30),
  },
});
