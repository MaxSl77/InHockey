import { Dimensions, StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";
import { Colors } from "../const/colors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const signInPlayerSecondAddScreenStyle = StyleSheet.create({
    signInWrapper: {
    width: windowWidth,
    justifyContent: "center",
    padding: scaleSize(20),
    height: windowHeight,
  },
  signInContainer: {
    borderColor: Colors.BLUE,
    borderWidth: 3,
    borderRadius: scaleSize(50),
    paddingBottom: scaleSize(20),
  },
  nameOfScreen: {
    fontFamily: "SchibstedGrotesk-Bold",
    textAlign: "center",
    color: Colors.BLUE,
    fontSize: scaleSize(60),
    paddingTop: scaleSize(30),
  },
  inputName: {
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 2,
    height: scaleSize(90),
    borderRadius: scaleSize(50),
    alignItems: "center",
    justifyContent: "center",
    margin: scaleSize(30),
    paddingLeft: scaleSize(30),
  },
  inputPassword: {
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 2,
    height: scaleSize(90),
    borderRadius: scaleSize(50),
    alignItems: "center",
    justifyContent: "center",
    margin: scaleSize(30),
    paddingLeft: scaleSize(30),
  },
  or: {
    color: Colors.LIGHT_GRAY,
    fontSize: 24,
    textAlign: "center",
    marginTop: scaleSize(10),
    marginBottom: scaleSize(10),
  },
});
