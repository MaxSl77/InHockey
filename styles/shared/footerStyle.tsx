import { Dimensions, StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";
import { Colors } from "../const/colors";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const footerStyle = StyleSheet.create({
  container: {
    height: height,
    position: "absolute",
    justifyContent: 'flex-end',
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: scaleSize(40),
    paddingVertical: scaleSize(50),
  },
});
