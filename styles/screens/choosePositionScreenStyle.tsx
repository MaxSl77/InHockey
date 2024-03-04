import { Dimensions, StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";
import { Colors } from "../const/colors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const choosePositionScreenStyle = StyleSheet.create({
  safeArea: {
    // flex: 1,
    // backgroundColor: Colors.PRIMARY, // Set background color of SafeAreaView
  },
  wrapper: {
    // flex: 1,
    // justifyContent: "center", // Center vertically
    // alignItems: "center", // Center horizontally
  },
  container: {
    height: windowHeight,
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    paddingRight: scaleSize(20),
    paddingLeft: scaleSize(20),
  },
  buttonContainer: {
    width: windowWidth,
  },
});
