import { StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";
import { Colors } from "../const/colors";

export const loginScreenStyle = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    justifyContent: "center",
    alignI: "center",
  },
  loginContainer: {
    borderColor: Colors.BLUE,
    borderWidth: 3,
    borderRadius: scaleSize(50),
    paddingBottom: scaleSize(20),
    margin: scaleSize(20),
  },
  nameOfScreen: {
    fontFamily: "SchibstedGrotesk-Bold",
    textAlign: "center",
    color: Colors.BLUE,
    fontSize: scaleSize(60),
    paddingTop: scaleSize(30),
  },
  inputName: {
    borderColor: Colors.GRAY,
    borderWidth: 2,
    height: scaleSize(90),
    borderRadius: scaleSize(50),
    alignItems: "center",
    justifyContent: "center",
    margin: scaleSize(30),
    paddingLeft: scaleSize(30),
  },
  inputPassword: {
    borderColor: Colors.GRAY,
    borderWidth: 2,
    height: scaleSize(90),
    borderRadius: scaleSize(50),
    alignItems: "center",
    justifyContent: "center",
    margin: scaleSize(30),
    paddingLeft: scaleSize(30),
  },
  or: {
    color: Colors.GRAY,
    fontSize: 24,
    textAlign: "center",
    marginTop: scaleSize(10),
    marginBottom: scaleSize(10),
  },
});
