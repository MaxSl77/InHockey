import { StyleSheet } from "react-native";
import { scaleSize } from "../../utilities";
import { Colors } from "../const/colors";

export const headerLoginInSignInStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    backgroundColor: Colors.PRIMARY,
    borderBottomRightRadius: scaleSize(30),
    borderBottomLeftRadius: scaleSize(30),
    height: scaleSize(200),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerTextStyle: {
    fontFamily: "SchibstedGrotesk-Bold",
    fontSize: scaleSize(70),
    color: "white",
  },
});
